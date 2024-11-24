import { Text } from "@mantine/core";

const Intro = () => {
  return (
    <div dir="rtl" className="mb-10 p-4">
      <Text className="text-3xl font-bold lg:text-4xl">عن المركز</Text>
      <Text className="p-3 text-justify text-lg text-color-accent-medium lg:p-6 lg:text-2xl">
        نمتلك الخبرة لأكثر من 10 سنوات في مجال الرعاية الصحية. فريقنا المكون من
        مقدمي الرعاية مدربون تدريباً عالياً لتوفير أفضل خدمة بأعلى جودة.
        <br />
        أن نكون الرواد في تقديم الرعاية الصحية من خلال السعي لرفع جودة حياة
        المرضى بما يتماشى مع المعايير المحلية والدولية. نحن نسعى جاهدين لتوفير
        رعاية شخصية تتسم بالرحمة والاحترام.
      </Text>
    </div>
  );
};

export default Intro;
