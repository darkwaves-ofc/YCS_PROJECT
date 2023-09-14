import Instruction from "./components/Instructuction";
import DetailCollectingForm from "./components/DetailCollectingForm";

import "./Customizer.css";
import { DetailsContextProvider } from "./context/CustomizerContext";

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
