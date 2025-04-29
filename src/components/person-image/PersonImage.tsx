type PersonPictureProps = {
  image: string;
  name: string;
  alt: string;
  className?: string;
  personinfo: string;
  mail: string;
};

const PersonImage = ({ image, name, alt, className, personinfo, mail }: PersonPictureProps) => {
  return (
    <section className={className}>
      <img
        src={image}
        alt={alt}
        className="rounded-lg shadow-lg w-full lg:rounded-2xl"
      />
      <p className="mt-2 text-lg font-semibold ml-2">{name}</p>
      <p className="ml-2 ">{personinfo}</p>
      <p className="ml-2">{mail}</p>
    </section>
  );
};

export default PersonImage;
