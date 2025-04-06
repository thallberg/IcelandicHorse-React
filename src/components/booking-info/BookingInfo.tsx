import bookingContent from "../../data/BookingInfoContent.json";
import StatCard from "../statcard/StatCard";
import { IconType } from "react-icons";
import { HiCog8Tooth, HiMiniCake, HiPhoto } from "react-icons/hi2";
import { MdFastfood } from "react-icons/md";

const iconMap: Record<string, IconType> = {
  MdFastfood: MdFastfood,
  HiCog8Tooth: HiCog8Tooth,
  HiMiniCake: HiMiniCake,
  HiPhoto: HiPhoto,
};

type BookingItem = {
  title: string;
  body: string;
  icon: keyof typeof iconMap;
};

const data = bookingContent as unknown as BookingItem[];

const BookingInfo = () => {
  return (
    <section className="bg-blue-100 p-8 shadow-md py-12 mb-4">
      <h1 className="flex justify-center p-8 text-4xl text-amber-900">
        Vår Bokningsinformation
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex justify-center">
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

export default BookingInfo;
