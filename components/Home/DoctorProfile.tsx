import { Text } from "@mantine/core";
import Image from "next/image";

const DoctorProfile = () => {
  return (
    <div className="mx-auto my-10 items-start md:p-14" dir="rtl">
      <Image
        className="float-right ml-10 hidden rounded-full lg:block"
        src="https://res.cloudinary.com/dmkoec84b/image/upload/v1728984838/doctor-soliman-2_lgkmc0.png"
        width={300}
        height={380}
        alt="Doctor Soliman"
      />
      <Image
        className="float-right mx-4 mt-2 rounded-full lg:hidden"
        src="https://res.cloudinary.com/dmkoec84b/image/upload/v1728984838/doctor-soliman-2_lgkmc0.png"
        width={150}
        height={150}
        alt="Doctor Soliman"
      />

      <Text
        dir="rtl"
        className="mb-4 text-2xl font-bold md:text-3xl lg:text-5xl"
      >
        دكتور سليمان الحبيب
      </Text>
      <Text
        dir="rtl"
        className="px-5 text-justify text-xl leading-8 text-black text-opacity-60 lg:px-0
          lg:text-3xl xl:leading-[50px]"
        style={{
          maxWidth: "70ch",
        }}
      >
        درس الدكتور سليمان الحبيب الطب في جامعة الملك سعود وحصل على درجة
        البكالوريوس في الطب. وتخصص في طب الأطفال وحصل على شهادة الزمالة من
        الكلية الملكية البريطانية في طب الأطفال عام 1984م، وعلى الدبلومة
        البريطانية في صحة الأطفال وعضو الكلية الملكية البريطانية للأطباء.
      </Text>
    </div>
  );
};

export default DoctorProfile;
