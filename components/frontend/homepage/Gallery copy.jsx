import Image from "next/image";

const Gallery = () => {
  return (
    <section className="max-w-[95vw] mx-auto  py-4 my-10">
      <h2 className="text-left  text-3xl md:text-7xl my-5 pb-10 capitalize font-semibold text-yellow-500">
        Gallery
      </h2>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:">
        {/* Mapping over an array of images to avoid repetition */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            className="relative w-[40vw] sm:w-[200px]  md:w-[190px] lg:w-[300px]  h-36 overflow-hidden group"
            key={index}
          >
            <Image
              src={`https://picsum.photos/800/600?random=${index}`} // Adding a random query to get different images
              alt={`chenanda ${index + 1}`}
              fill
              className="object-cover opacity-50 transition-opacity duration-300 group-hover:opacity-100"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
