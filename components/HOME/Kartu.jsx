import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const kartuData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth="{0.8}" />,
    title: "Help Chat",
    description:
      "On this website there is a chat room which gives users the flexibility to listen or tell stories without knowing the user real name",
  },
  {
    icon: <Blocks size={72} strokeWidth="{0.8}" />,
    title: "Profesional psikolog",
    description:
      "If you require professional assistance, our website supports licensed psychologists who are ready to help you navigate lifes challenges with expertise and empathy",
  },
  {
    icon: <Gem size={72} strokeWidth="{0.8}" />,
    title: "Our Blog",
    description:
      "Our blog provides users with new knowledge regarding mental health, real stories and various interesting news. Come see the interesting story told here",
  },
];

const Kartu = () => {
  return (
    <section className="mb-12 xl:mb-36 ">
      <div className="container max-auto ">
        <h2 className="section-title text-2xl h-[20vh] font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          what we can do
        </h2>
        {/* gride item */}
        <div
          className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24
        xl:gap-x-8"
        >
          {kartuData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10
                justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div
                    className="w-[140] h-[80px] bg-white-100 dark:bg-background
                  flex justify-center items-center"
                  >
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Kartu;
