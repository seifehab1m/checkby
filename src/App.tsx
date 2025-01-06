import { Form, Steps } from "antd";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SetupAccount from "./components/SetupAccount";
import Confirmation from "./components/Confirmation";
import SignupDescribtion from "./components/SignupDescribtion";
import { StepsItems } from "./helpers/Stepsitems";

function App() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);

  const onFinish = () => {
    setCurrentStep(currentStep + 1);
  };

  if (currentStep > 2) {
    return (
      <div className="text-center pt-20">
        <h2 className="text-4xl font-bold text-primary">
          {t("youHaveSuccessfullySignedUp")}
        </h2>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-9">
      <div className="container">
        <Navbar />
        <Steps
          current={currentStep}
          labelPlacement="vertical"
          items={StepsItems(t)}
          className=" ms-auto"
        />
        <Form
          className="pt-12"
          name="register"
          layout="vertical"
          onFinish={onFinish}
          style={{ maxWidth: 400, margin: "0 auto" }}
        >
          {currentStep === 0 && <Signup />}
          {currentStep === 1 && <Confirmation />}
          {currentStep === 2 && <SetupAccount />}
        </Form>
      </div>
      <SignupDescribtion currentStep={currentStep} />
    </section>
  );
}

export default App;
