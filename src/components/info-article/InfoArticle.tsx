import React from "react";
import { IconType } from "react-icons";

type InfoArticleProps = {
  title: string;
  body: string;
  bookingNumber?: string;
  icon: IconType;
};

const InfoArticle = ({ title, body, icon: Icon, bookingNumber }: InfoArticleProps) => {
  return (
    <section className="bg-blue-50 p-8 rounded-2xl shadow-md flex flex-col lg:flex-row lg:items-center lg:text-left text-center">
    {/* Ikonen */}
    <div className="text-green-600 mb-4 lg:mb-0 lg:mr-4 flex justify-center lg:justify-start">
      <Icon className="text-6xl" />
    </div>

    {/* Textinnehåll */}
    <div>
      <h2 className="text-2xl text-amber-900 font-semibold mb-2">{title}</h2>
      <p className="text-lg text-amber-900">{body}</p>
      {bookingNumber && (
        <div className="text-sm text-red-700 mt-4">
          <p>{bookingNumber}</p>
        </div>
      )}
    </div>
  </section>
  );
};

export default InfoArticle;