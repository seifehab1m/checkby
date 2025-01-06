import { useTranslation } from "react-i18next";
import { iconsData } from "../helpers/helpers";
import Icons from "./Icons";
import { Button, Form } from "antd";

export default function CheckYourEmail() {
  const { t } = useTranslation();

  return (
    <div className="otpWrapper text-center">
      <div className="flex justify-center items-center my-6">
        <Icons iconName={iconsData.checked} />
      </div>
      <h2 className="mb-2 text-secondary-black text-3xl font-medium">
        {t("emailVerified")}
      </h2>
      <p className="mb-6 mx-auto text-[#475467] leading-7 w-full md:max-w-72">
        {t("accountVerified")}
      </p>
      <Form.Item className="mt-9">
        <Button type="primary" htmlType="submit" block>
          {t("continue")}
        </Button>
      </Form.Item>
    </div>
  );
}
