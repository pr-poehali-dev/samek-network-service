import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-orange-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 font-montserrat">САМЭК</h1>
          <p className="text-xl text-blue-100 mb-6">
            Крупнейшая транзитная и сетевая организация г.о. Самара
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Droplets"
              size={48}
              className="mx-auto mb-4 text-blue-200"
            />
            <h3 className="text-lg font-semibold mb-2">Водоснабжение</h3>
            <p className="text-blue-100">Надёжное обеспечение водой</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Waves"
              size={48}
              className="mx-auto mb-4 text-blue-200"
            />
            <h3 className="text-lg font-semibold mb-2">Водоотведение</h3>
            <p className="text-blue-100">Современные очистные системы</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Thermometer"
              size={48}
              className="mx-auto mb-4 text-blue-200"
            />
            <h3 className="text-lg font-semibold mb-2">Теплоснабжение</h3>
            <p className="text-blue-100">Качественное отопление</p>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-orange-500 text-white hover:bg-orange-600 font-semibold px-8"
        >
          Узнать больше
        </Button>
      </div>
    </section>
  );
};

export default Hero;
