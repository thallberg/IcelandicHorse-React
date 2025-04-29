import InfoArticle from "./InfoArticle";
import { HiCheckCircle, HiLightBulb, HiPuzzle } from "react-icons/hi";
import Data from "../../data/infoAboutHome.json";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  HiCheckCircle: HiCheckCircle,
  HiLightBulb: HiLightBulb,
  HiPuzzle: HiPuzzle,
};

type InfoItem = {
  title: string;
  body: string;
  icon: keyof typeof iconMap;
};

const data = Data as unknown as InfoItem[];

const Info = ({ className }: { className?: string }) => {
  return (
    <section
      className={`p-12 pb-32 pt-18 bg-blue-100 h-full lg:rounded-2xl ${className}`}
    >
      <h1 className="flex justify-center p-8 text-4xl text-amber-900">
        Låt Äventyret Börja
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-2">
        {data.map((item, index) => (
          <InfoArticle
            key={index}
            icon={iconMap[item.icon]}
            title={item.title}
            body={item.body}
          />
        ))}
      </div>
    </section>
  );
};

export default Info;
