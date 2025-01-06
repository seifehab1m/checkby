import bgimg from "../assets/images/signupbg.png";
import star from "../assets/images/Stars.png";
import vector from "../assets/images/Vector.png";
import msg from "../assets/images/msg.png";
import arrow from "../assets/images/drawnArrow.png";
import { signupData } from "../helpers/helpers";
import { useTranslation } from "react-i18next";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export default function SignupDescribtion({
  currentStep,
}: {
  currentStep: number;
}) {
  const { t } = useTranslation();
  const { lang } = useSelector((state: RootState) => state.language);

  return (
    <div className="relative bg-gradient-to-tr from-[#2F234A] to-[#7F56D9] max-h-fit">
      <img src={bgimg} className="w-full h-fit object-cover" alt="background" />
      <div className="md:max-w-[528px] w-full mx-auto p-4 absolute top-0 left-0 right-0 md:bottom-[30%] bottom-0 text-white flex flex-col justify-center items-center">
        {currentStep === 0 && <img src={star} className="me-auto" />}
        {currentStep === 1 && <img src={vector} className="me-auto" />}
        {currentStep === 2 && <img src={msg} className="me-auto" />}
        <h2 className=" mt-5 text-4xl sm:text-6xl leading-[72px]">
          {t(signupData[currentStep])}
        </h2>
        <p className="pt-6 text-[#EAECF0]">{t("createAccount")}</p>
      </div>
      <div
        className={`absolute  lg:block ${
          lang === "en" ? "left-[-23%]" : "right-[-23%] scale-x-[-1]"
        } xl:bottom-[15%] bottom-0 hidden`}
      >
        <img src={arrow} className="me-auto" />
      </div>
    </div>
  );
}
