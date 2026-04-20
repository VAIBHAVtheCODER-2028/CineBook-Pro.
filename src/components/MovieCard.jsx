import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <img src={movie.image} className="rounded-xl" />
      <h2 className="font-bold mt-2">{movie.title}</h2>
      <Link
        to={`/booking/${movie.id}`}
        className="block mt-2 bg-red-500 text-white text-center py-2 rounded-lg"
      >
        Book Now
      </Link>
    </div>
  );
}