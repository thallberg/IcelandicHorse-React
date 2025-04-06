import React from "react";
import HeroImage from "../components/hero-image/HeroImage";
import AboutHeader from "../assets/about/abouthero.webp";
import ImageContent from "../components/Image-section/ImageContent";
import AboutImageContent from "../assets/about/ImageContent.webp";
import PersonImage from "../components/person-image/PersonImage";
import PersonData from "../data/PersonData.json";
import Data from "../data/About.json"
import Person1 from "../assets/about/person1.webp";
import InfoArticle from "../components/info-article/InfoArticle"; // Importera InfoArticle
import { FaRegBuilding, FaInfoCircle } from "react-icons/fa"; // Lägg till passande ikoner

const About = () => {
  return (
    <div className="relative">
      <HeroImage
        title="Om Oss"
        subtitle="Lorem ipsum dolor sit amet lorem ipsum"
        image={AboutHeader}
      />

      <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-4 pb-4">
        {/* AboutCompany med InfoArticle */}
        <div className="w-full lg:w-1/2 flex py-12 p-8 lg:p-0">
          <InfoArticle
             title={Data.InfoTitleCompany} 
            body={Data.InfoCompanyContent}
            icon={FaRegBuilding} // Välj en passande ikon
          />
        </div>

        <div className="w-full lg:w-1/2 flex">
          <ImageContent
            image={AboutImageContent}
            title="Du Förtjänar Det bästa Möjliga"
            className="flex-1"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-4 pb-4">
        {/* AboutInfo med InfoArticle */}
        <div className="w-full lg:w-1/2 flex py-12 p-8 lg:p-0">
          <InfoArticle
            title={Data.InfoTeamTitle}
            body={Data.InfoTeamContent}
            icon={FaInfoCircle} // Välj en passande ikon
          />
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:py-0 lg:order-first">
          {PersonData.map((person, index) => (
            <PersonImage
              key={index}
              image={Person1} // Se till att persondata innehåller bild
              name={person.name}
              alt={person.alt}
              className="flex-1" // Skicka className här
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
