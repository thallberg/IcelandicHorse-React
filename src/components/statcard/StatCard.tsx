import { IconType } from "react-icons";

type StatCardProps = {
  icon: IconType;
  title: string;
  body: string;
};

const StatCard = ({ icon: Icon, title, body }: StatCardProps) => {
  return (
    <div className="flex flex-col items-center max-w-68 text-center">
      <Icon className="text-amber-300 text-6xl mb-2" />
      <h2 className="text-xl font-semibold text-amber-900">{title}</h2>
      <p className="text-lg text-gray-700">{body}</p>
    </div>
  );
};

export default StatCard;
