import Instruction from "../../../../../../components/other/Instruction.js";
import DetailCollectingForm from "./components/DetailCollectingForm.js";

import "./Customizer.css";
import { DetailsContextProvider } from "./CustomizerContext.jsx";

const Customizer = () => {
  return (
    <div className="customizer">
      <Instruction
        heading="Customize your essays according to your preferences"
        explanation="Nothing to bother about editing your essay. You can write a personalized essay straight out."
      />
      <DetailsContextProvider>
        <DetailCollectingForm />
      </DetailsContextProvider>
    </div>
  );
};

export default Customizer;
