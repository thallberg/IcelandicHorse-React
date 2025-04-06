import HeroImage from "../components/hero-image/HeroImage";
import aboutHeader from "../assets/about/abouthero.webp";
import serviceData from "../data/Services.json";
import Services from "../components/services/Services";
import data from "../data/BookingInfo.json";
import { HiEmojiHappy } from "react-icons/hi";
import imageContent from "../assets/booking/imageContent.webp";
import InfoArticle from "../components/info-article/InfoArticle";
import BookingInfo from "../components/booking-info/BookingInfo";
import ImageContent from "../components/Image-section/ImageContent";
import Reviews from "../components/reviews/Reviews";

const Booking = () => {
  return (
    <div className="relative">
      <HeroImage
        title="Boka Din Upplevelse"
        subtitle="Lorem ipsum dolor sit amet lorem ipsum"
        image={aboutHeader}
      />

      <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-4 pb-4">
        <div className="w-full lg:w-1/2 flex">
          <InfoArticle
            title={data.bookingTitle}
            body={data.bookingBody}
            icon={HiEmojiHappy}
            bookingNumber={data.boookingNumber}
          />
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:py-0">
          {serviceData.map((service, index) => (
            <Services
              key={index}
              title={service.title}
              body={service.body}
              price={service.price}
              image={service.image}
              className="flex-1"
            />
          ))}
        </div>
      </div>
      <div>
        <BookingInfo />
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-4 pb-4">
        <div className="w-full lg:w-1/2 flex">
          <ImageContent
            image={imageContent}
            title="Flexibel Bokning"
            className="flex-1"
          />
        </div>

        <div className="w-full lg:w-1/2 flex py-12 p-8 lg:p-0">
          <Reviews />
        </div>
      </div>
    </div>
  );
};
export default Booking;
