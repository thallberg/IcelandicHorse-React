import React from "react";

type ServiceProps = {
  title: string;
  body: string;
  price: number;
  image: string;
  className?: string;
};

const Services = ({ title, body, price, image, className }: ServiceProps) => {
  return (
    <section className={` ${className}`}>
      <img
        src={image}
        alt={title}
        className="rounded-lg shadow-lg w-full lg:rounded-2xl"
      />
      <h2 className="mt-2 font-semibold text-xl text-amber-900">{title}</h2>
      <p className="text-lg text-gray-700">{body}</p>
      <p className="mt-2 text-lg font-bold text-green-700">Pris: {price} / Person</p>
    </section>
  );
};

export default Services;
