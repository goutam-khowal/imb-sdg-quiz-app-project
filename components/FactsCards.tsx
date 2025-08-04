import { Globe, Heart, TrendingUp, Users } from "lucide-react";
import { FactCard } from "./FactCard";

export const FactsCards = () => {
  const facts = [
    {
      icon: Users,
      title: "People Affected",
      stat: "735M",
      description:
        "people faced hunger in 2023, an increase from previous years",
      color: "border-l-red-500",
    },
    {
      icon: Globe,
      title: "Global Impact",
      stat: "1 in 9",
      description:
        "people worldwide do not have enough food to lead a healthy life",
      color: "border-l-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Food Production",
      stat: "70%",
      description:
        "increase needed in food production by 2050 to feed growing population",
      color: "border-l-green-500",
    },
    {
      icon: Heart,
      title: "Children Affected",
      stat: "149M",
      description: "children under 5 are stunted due to chronic malnutrition",
      color: "border-l-blue-500",
    },
  ];

  return (
    <section id="facts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Reality of Hunger
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the scope and impact of global hunger is the first
            step toward creating meaningful change
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <FactCard key={index} {...fact} />
          ))}
        </div>
      </div>
    </section>
  );
};
