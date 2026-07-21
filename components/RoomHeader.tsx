type RoomHeaderProps = {
  title: string;
  rating: number;
  reviewsCount: number;
  location: string;
};

export const RoomHeader = ({ title, rating, reviewsCount, location }: RoomHeaderProps) => {
  return (
    <section>
      <h1 className="text-2xl font-semibold text-[#222222] md:text-3xl">{title}</h1>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[#6A6A6A]">
        <span className="font-medium text-[#222222]">★</span>
        <span className="text-[#222222]">{rating.toFixed(1)}</span>
        <span>({reviewsCount} reseñas)</span>
        <span>·</span>
        <span>{location}</span>
      </div>
    </section>
  );
};
