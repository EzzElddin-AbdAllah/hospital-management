import { Text } from "@mantine/core";
import MessageSVG from "./MessageSVG";
import ValuesSVG from "./ValuesSVG";
import VisionSVG from "./VisionSVG";

const OurVision = () => {
  return (
    <div className="mb-10 flex flex-col gap-10 lg:flex-row lg:gap-0" dir="rtl">
      <div className="flex flex-[2] flex-col items-center justify-center">
        <div className="lg:h-[160px]">
          <VisionSVG />
        </div>
        <div className="mt-4 h-full w-full bg-[#1A4AA8] p-10">
          <Text className="text-center text-2xl font-bold text-white">
            رؤيتنا
          </Text>
          <Text className="p-4 text-center text-lg text-[#DEDEDE]">
            منظمة الإعتماد الصحي الأولى على مستوى الشرق الأوسط
          </Text>
        </div>
      </div>

      <div
        className="flex flex-[2] flex-col items-center justify-center border-x-[#005BA6]
          lg:border-x-4"
      >
        <div className="lg:h-[160px]">
          <MessageSVG />
        </div>
        <div className="mt-4 h-full w-full bg-[#1A4AA8] p-10">
          <Text className="text-center text-2xl font-bold text-white">
            رسالتنا
          </Text>
          <Text className="p-4 text-center text-lg text-[#DEDEDE]">
            نضع المعايير و نقيم الاداء لرعاية صحية أفضل
          </Text>
        </div>
      </div>

      <div className="flex flex-[3] flex-col items-center justify-center">
        <div className="lg:h-[160px]">
          <ValuesSVG />
        </div>
        <div className="mt-4 h-full w-full bg-[#1A4AA8] p-10">
          <Text className="text-center text-2xl font-bold text-white">
            قيمنا
          </Text>

          <ul className="list-disc p-2 text-justify text-lg text-[#DEDEDE]">
            <li>
              التحسين المستمر: نؤمن بأن المنظمات الناجحة لا تتوقف عن التحسين في
              كل ماتقوم ،به ولذلك يسعى سباهي جاهداً لكي يتحسن باستمرار و يدعو كل
              المنشاتَ الصحية لا تباع نفس النهج.
            </li>
            <li>
              الفريق الواحد: موظفونا يعملون مع بضعهم البعض ومع المنشآت الصحية
              على أساس أننا شركاء في فريق واحد متلاحم له نفس الأهداف
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
