import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "../../../config/features.json";

export const FeatureCards = () => {
  return (
    <div className="flex overflow-x-scroll scrollbar-hide w-full lg:justify-center relative py-6">
      <div className="flex flex-nowrap lg:ml-0 md:ml-20 ml-10 space-x-4 -mx-4 px-4 scrollbar-hide">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-transparent border border-[#2f2e2d] flex justify-center items-start w-[313px] px-6 py-8 lg:pb-[51px] flex-col text-left gap-5"
          >
            <CardHeader className="p-0">
              <CardTitle className="text-[#E52D27] font-ttfir text-2xl font-semibold leading-[31px]">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-lg text-[#BFBFBF] font-medium font-alliance">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
