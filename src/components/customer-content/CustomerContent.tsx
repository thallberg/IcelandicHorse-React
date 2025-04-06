import { HiFire, HiScale, HiBell } from "react-icons/hi";
import { FaHorse } from "react-icons/fa";
import StatCard from "../statcard/StatCard";
import Data from "../../data/StatsContent.json";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  HiFire: HiFire,
  HiBell: HiBell,
  HiScale: HiScale,
  FaHorse: FaHorse,
};

type StatItem = {
  title: string;
  body: string;
  icon: keyof typeof iconMap;
};

const data = Data as unknown as StatItem[];

const CustomerContent = () => {
  return (
    <section className="bg-blue-100 p-8 shadow-md py-12 mb-4">
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[45%] lg:w-[22%] flex justify-center"
          >
            <StatCard
              icon={iconMap[item.icon]}
              title={item.title}
              body={item.body}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerContent;
