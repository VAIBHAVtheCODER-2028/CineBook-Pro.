import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  deleteDoc, 
  doc,
  serverTimestamp 
} from "firebase/firestore";

// Using Vite's import.meta.env for secure deployment
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Database instances
export const auth = getAuth(app);
export const db = getFirestore(app);

/**
 * CRUD: CREATE
 * Adds a new booking to the "bookings" collection
 */
export const createBooking = async (userId, movieData, seats, total) => {
  try {
    const bookingRef = await addDoc(collection(db, "bookings"), {
      userId,
      movieTitle: movieData.title,
      movieId: movieData.id || "unknown",
      seats, 
      total,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: bookingRef.id };
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

/**
 * CRUD: READ
 * Fetches all bookings for a specific user
 */
export const getUserBookings = async (userId) => {
  try {
    const q = query(collection(db, "bookings"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};

/**
 * CRUD: DELETE
 * Removes a booking document by ID
 */
export const deleteBooking = async (bookingId) => {
  try {
    const bookingRef = doc(db, "bookings", bookingId);
    await deleteDoc(bookingRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting booking:", error);
    throw error;
  }
};