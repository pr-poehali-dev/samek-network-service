import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const advantages = [
    {
      icon: "Shield",
      title: "Надёжность",
      description: "Стабильная работа коммунальных систем круглый год",
    },
    {
      icon: "Clock",
      title: "Оперативность",
      description: "Быстрое реагирование на заявки и аварийные ситуации",
    },
    {
      icon: "Settings",
      title: "Профессионализм",
      description: "Квалифицированные специалисты с многолетним опытом",
    },
    {
      icon: "Leaf",
      title: "Экологичность",
      description: "Соблюдение экологических стандартов и норм",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
              О компании САМЭК
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Общество с ограниченной ответственностью «СамЭК» является
              крупнейшей транзитной и сетевой компанией на территории городского
              округа Самара.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Мы обслуживаем свыше 50 тысяч частных потребителей и более 2 тысяч
              предприятий, обеспечивая надёжную работу систем водоснабжения,
              водоотведения и теплоснабжения.
            </p>

            <div className="flex items-center space-x-4 text-blue-600">
              <Icon name="Phone" size={20} />
              <span className="font-semibold">+7 (846) 000-00-00</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-6">
                  <Icon
                    name={advantage.icon as any}
                    size={40}
                    className="mx-auto mb-4 text-blue-600"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
