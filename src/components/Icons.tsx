import { CheckOutlined, MailOutlined } from "@ant-design/icons";
import { iconsData } from "../helpers/helpers.ts";

export default function Icons({ iconName }: { iconName: string }) {
  return (
    <div
      className={`w-14 h-14 ${
        iconName === iconsData.mail ? "bg-[#f9f5ff]" : "bg-[#ecfdf3]"
      } relative flex items-center justify-center rounded-full p-2`}
    >
      <div
        className={`w-full h-full ${
          iconName === iconsData.mail ? "bg-[#F4EBFF]" : "bg-[#d1fadf]"
        } rounded-full flex items-center justify-center`}
      >
        {iconName === iconsData.mail ? (
          <MailOutlined style={{ color: "var(--primary)", fontSize: "20px" }} />
        ) : (
          <div className="flex items-center justify-center border-2 border-[#039855] rounded-full p-1 ">
            <CheckOutlined style={{ color: "#039855", fontSize: "15px" }} />
          </div>
        )}
      </div>
    </div>
  );
}
