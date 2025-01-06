import { Form, Input, Button, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import "react-phone-number-input/style.css";
import LangButton from "./LangButton";
import { DownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { lazy, Suspense } from "react";
const AntPhoneInput = lazy(() => import("antd-phone-input"));

const Signup = () => {
  const { t } = useTranslation();
  const { lang } = useSelector((state: RootState) => state.language);

  return (
    <>
      <Form.Item
        name="name"
        label={t("name") + "*"}
        required={false}
        rules={[
          {
            required: true,
            message: t("pleaseEnterYourName"),
            min: 4,
          },
        ]}
      >
        <Input placeholder={t("enterYourName")} />
      </Form.Item>
      <Form.Item
        name="email"
        label={t("email") + "*"}
        required={false}
        rules={[
          { required: true, message: t("pleaseEnterYourEmail") },
          { type: "email", message: t("pleaseEnterValidEmail") },
        ]}
      >
        <Input placeholder={t("enterYourEmail")} />
      </Form.Item>
      <Form.Item
        name="phone"
        label={t("phoneNumber") + "*"}
        required={false}
        rules={[
          {
            required: true,
            message: t("pleaseEnterYourPhoneNumber"),
            min: 15,
          },
        ]}
      >
        <div className="phoneNumberWrapper relative">
          <Suspense
            fallback={
              <Skeleton.Input
                style={{ width: "100%", height: 20 }}
                active
                size="default"
              />
            }
          >
            <AntPhoneInput
              value={""}
              placeholder={t("pleaseEnterYourPhoneNumber")}
              required={false}
            />
            <div
              className={`absolute z-20 ${
                lang === "en" ? "left-[30px]" : "right-[30px]"
              } top-[15px]`}
            >
              <DownOutlined style={{ color: "#667085" }} />
            </div>
          </Suspense>
        </div>
      </Form.Item>
      <Form.Item
        name="password"
        label={t("password") + "*"}
        required={false}
        rules={[
          { required: true, message: t("pleaseEnterYourPassword") },
          { min: 8, message: t("passwordMinLength") },
        ]}
      >
        <Input.Password placeholder={t("enterYourPassword")} />
      </Form.Item>
      <Form.Item className="mt-9">
        <Button type="primary" htmlType="submit" block>
          {t("getStarted")}
        </Button>
      </Form.Item>
      <h3 className="text-[#475467] text-sm text-center mt-4">
        {t("alreadyHaveAccount")}{" "}
        <span className="cursor-pointer text-primary font-medium">
          {t("logIn")}
        </span>
      </h3>
      <LangButton />
    </>
  );
};
export default Signup;
