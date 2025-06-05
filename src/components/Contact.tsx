import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Обратная связь
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами по любым вопросам коммунального обслуживания
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-montserrat">
                Отправить сообщение
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
              </div>
              <Input placeholder="Email" type="email" />
              <Textarea placeholder="Сообщение" className="min-h-[120px]" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Icon
                    name="MapPin"
                    size={24}
                    className="text-blue-600 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                    <p className="text-gray-600">
                      г. Самара, ул. Промышленности, 278
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" size={24} className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Телефон
                    </h3>
                    <p className="text-gray-600">+7 (846) 270-27-27</p>
                    <p className="text-gray-600 text-sm">
                      Аварийная служба: +7 (846) 270-00-00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" size={24} className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Режим работы
                    </h3>
                    <p className="text-gray-600">Пн-Пт: 8:00 - 17:00</p>
                    <p className="text-gray-600">Аварийная служба: 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
