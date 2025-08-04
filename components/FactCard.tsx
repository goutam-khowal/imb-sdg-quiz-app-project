export const FactCard = ({ icon: Icon, title, stat, description, color }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 ${color}`}
    >
      <div
        className={`w-12 h-12 rounded-xl ${color
          .replace("border-l", "bg")
          .replace("-500", "-100")} flex items-center justify-center mb-4`}
      >
        <Icon className={`w-6 h-6 ${color.replace("border-l", "text")}`} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-2">{stat}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
