import HeroImage from "../components/hero-image/HeroImage";
import Info from "../components/info-article/Info";
import ImageContent from "../components/Image-section/ImageContent";
import heroHeader from "../assets/header/hero.webp";
import homeImageContent from "../assets/image-content/homeImageSection.webp";
import Calendar from "../components/calendar/Calendar";
import CustomerContent from "../components/customer-content/CustomerContent";
import Events from "../components/events/Events";

const Home = () => {
  return (
    <div className="relative">
      <HeroImage
        title="Swings Islandshästar"
        subtitle="Lorem ipsum dolor sit amet lorem ipsum"
        image={heroHeader}
      />

      <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-4 pb-4">
        <div className="w-full lg:w-1/2 flex">
          <Info className="flex-1" />
        </div>

        <div className="w-full lg:w-1/2 flex">
          <ImageContent
            image={homeImageContent}
            title="Du Förtjänar Det bästa Möjliga"
            className="flex-1"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-4 pb-4">
        <div className="w-full lg:w-1/2 flex">
          <Events className="flex-1" />
        </div>

        <div className="w-full lg:w-1/2 flex lg:order-first">
          <Calendar className="flex-1" />
        </div>
      </div>

      <div>
        <CustomerContent />
      </div>
    </div>
  );
};

export default Home;
