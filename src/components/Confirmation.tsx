import { useState } from "react";
import VerifyEmail from "./VerifyEmail";
import CheckYourEmail from "./CheckYourEmail";

export default function Confirmation() {
  const [toggle, setToggle] = useState(false);
  console.log("toggle:", toggle);

  return (
    <div>
      {toggle ? <CheckYourEmail /> : <VerifyEmail setToggle={setToggle} />}
    </div>
  );
}
