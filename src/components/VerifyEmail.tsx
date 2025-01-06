import { Button, Form, Input } from "antd";
import Icons from "./Icons";
import { iconsData } from "../helpers/helpers.ts";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function VerifyEmail({ setToggle }: { setToggle: any }) {
  const { t } = useTranslation();
  const [otp, setotp] = useState("");

  return (
    <div className="otpWrapper text-center">
      <div className="flex justify-center items-center my-3">
        <Icons iconName={iconsData.mail} />
      </div>
      <h2 className="mb-2 text-secondary-black text-3xl font-medium">
        {t("checkYourEmail")}
      </h2>

      <p className="mb-6 text-[#475467] leading-7 ">
        {t("weSentVerificationCode")} <br /> {t("to")} omarmouneer@gmail.com
      </p>
      <Form.Item
        name="otp"
        required={true}
        rules={[{ required: true, message: "Please enter your OtP", min: 4 }]}
      >
        <Input.OTP length={4} onChange={(text) => setotp(text)} />
      </Form.Item>
      <Form.Item className="mt-9">
        <Button
          type="primary"
          htmlType="button"
          block
          disabled={otp.length < 2}
          onClick={() => setToggle(true)}
        >
          {t("verifyEmail")}
        </Button>
      </Form.Item>
    </div>
  );
}
