type PersonPictureProps = {
  image: string;
  name: string;
  alt: string;
  className?: string;
};

const PersonImage = ({ image, name, alt, className }: PersonPictureProps) => {
  return (
    <section className={className}>
      <img
        src={image}
        alt={alt}
        className="rounded-lg shadow-lg w-full lg:rounded-2xl"
      />
      <p className="mt-2 font-semibold">{name}</p>
    </section>
  );
};

export default PersonImage;
