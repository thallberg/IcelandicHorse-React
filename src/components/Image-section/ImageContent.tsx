type ImageSectionProps = {
  image: string;
  title: string;
};

const ImageContent = ({
  image,
  title,
  className,
}: ImageSectionProps & { className?: string }) => {
  return (
    <section
      className={`relative w-full h-full min-h-[500px] overflow-hidden lg:rounded-2xl ${className}`}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      <div className="relative z-10 flex items-center justify-center w-full h-full text-white text-center px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-100">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default ImageContent;
