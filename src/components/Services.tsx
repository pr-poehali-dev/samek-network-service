import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "Droplets",
      title: "Водоснабжение",
      description:
        "Обеспечиваем бесперебойную подачу качественной питьевой воды для жителей и предприятий Самары",
      features: [
        "Круглосуточная подача",
        "Контроль качества",
        "Техническое обслуживание сетей",
      ],
    },
    {
      icon: "Waves",
      title: "Водоотведение",
      description:
        "Современная система водоотведения и очистки сточных вод с использованием передовых технологий",
      features: [
        "Очистка сточных вод",
        "Обслуживание канализации",
        "Экологический контроль",
      ],
    },
    {
      icon: "Thermometer",
      title: "Теплоснабжение",
      description:
        "Надёжное теплоснабжение жилых домов и коммерческих объектов в отопительный период",
      features: [
        "Центральное отопление",
        "Поддержание температуры",
        "Энергоэффективность",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Профессиональное обслуживание коммунальных сетей с гарантией
            качества и надёжности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name={service.icon as any}
                  size={64}
                  className="mx-auto mb-4 text-blue-600"
                />
                <CardTitle className="text-xl font-montserrat">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
