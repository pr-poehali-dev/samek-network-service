import Icon from "@/components/ui/icon";

const Stats = () => {
  const stats = [
    {
      icon: "Users",
      number: "50 000+",
      label: "Частных потребителей",
      color: "text-blue-600",
    },
    {
      icon: "Building2",
      number: "2 000+",
      label: "Предприятий",
      color: "text-green-600",
    },
    {
      icon: "MapPin",
      number: "№1",
      label: "В г.о. Самара",
      color: "text-purple-600",
    },
    {
      icon: "Award",
      number: "25+",
      label: "Лет опыта",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            САМЭК в цифрах
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы обслуживаем крупнейшую клиентскую базу и поддерживаем
            инфраструктуру города на высочайшем уровне
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon
                name={stat.icon as any}
                size={48}
                className={`mx-auto mb-4 ${stat.color}`}
              />
              <div className="text-3xl font-bold text-gray-900 mb-2 font-montserrat">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
