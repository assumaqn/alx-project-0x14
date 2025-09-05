import React from "react";

interface MovieCardProps {
  title: string;
  posterUrl?: string;
  overview?: string;
  releaseDate?: string;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterUrl,
  overview,
  releaseDate,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="border rounded-lg overflow-hidden shadow hover:shadow-md transition cursor-pointer bg-white"
    >
      {posterUrl ? (
        <img src={posterUrl} alt={title} className="w-full h-56 object-cover" />
      ) : (
        <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        {releaseDate && <p className="text-sm text-gray-500">{releaseDate}</p>}
        {overview && (
          <p className="mt-2 text-sm text-gray-700 max-h-16 overflow-hidden">
            {overview}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
