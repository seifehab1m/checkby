import { Button, Form, Input, Select } from "antd";
import { useTranslation } from "react-i18next";

const { Option } = Select;

export default function SetupAccount() {
  const { t } = useTranslation();

  return (
    <>
      <Form.Item name="storeName" label={t("storeName")} required={false}>
        <Input placeholder={t("enterStoreName")} />
      </Form.Item>
      <Form.Item name="storeUrl" label={t("storeUrl")} required={false}>
        <Input
          addonAfter=".markatty.com"
          defaultValue=""
          placeholder={t("storeUrlPlaceholder")}
        />
      </Form.Item>

      <Form.Item name="storeLanguage" label={t("storeLanguage")}>
        <Select
          placeholder={t("selectLanguage")}
          suffixIcon={
            <img
              src="https://icongr.am/feather/chevron-down.svg?size=16&color=000000"
              alt="down arrow"
              className="w-4 h-4"
            />
          }
        >
          <Option value="en">
            <div className="flex items-center gap-2">
              <img
                src="https://flagcdn.com/w320/us.png"
                alt={t("english")}
                className="rounded-full w-5 h-5"
              />
              <span>{t("english")}</span>
            </div>
          </Option>
          <Option value="ar">
            <div className="flex items-center gap-2">
              <img
                src="https://flagcdn.com/w320/eg.png"
                alt={t("arabic")}
                className="rounded-full w-5 h-5"
              />
              {t("arabic")}
            </div>
          </Option>
        </Select>
      </Form.Item>

      <Form.Item name="storeIndustry" label={t("storeIndustry")}>
        <Select
          placeholder={t("selectIndustry")}
          suffixIcon={
            <img
              src="https://icongr.am/feather/chevron-down.svg?size=16&color=000000"
              alt="down arrow"
              className="w-4 h-4"
            />
          }
        >
          <Option value="fashion">{t("fashion")}</Option>
          <Option value="electronics">{t("electronics")}</Option>
          <Option value="food">{t("food")}</Option>
          <Option value="health">{t("health")}</Option>
        </Select>
      </Form.Item>

      <Form.Item className="mt-9">
        <Button type="primary" htmlType="submit" block>
          {t("save")}
        </Button>
      </Form.Item>
    </>
  );
}
