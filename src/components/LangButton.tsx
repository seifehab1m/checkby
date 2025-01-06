import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { GlobalOutlined } from "@ant-design/icons";
import i18next from "i18next";
import { setLanguage } from "../slices/languageSlice";

export default function LangButton() {
  const { lang } = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch<AppDispatch>();

  // Handle language change
  const changeLanguage = (selectedLang: "en" | "ar") => {
    i18next.changeLanguage(selectedLang);
    document.body.setAttribute("dir", selectedLang === "ar" ? "rtl" : "ltr");
    dispatch(setLanguage(selectedLang));
  };

  // Toggle between languages on click
  const handleClick = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    changeLanguage(newLang);
  };

  return (
    <div
      className="flex items-center gap-1 justify-center cursor-pointer"
      onClick={handleClick}
    >
      <h2 className="text-[#667085] text-base">
        {lang === "ar" ? "english" : "عربي"}
      </h2>
      <GlobalOutlined style={{ color: "#667085", marginTop: "8px" }} />
    </div>
  );
}
