import { useContext } from "react";
import { WriterContext } from "./WriterContext";


import Customizer from "./features/customizer/Customizer.js";
import Displayer from "./features/displayer/Displayer.js";

const Writer = () => {

  console.log(useContext(WriterContext));


  const pendingResult = useContext(WriterContext).pendingResult.get;
  const result = useContext(WriterContext).result.get;

  if (result || pendingResult) {
    return <Displayer />;
  } else {
    return <Customizer />;
  }
};

export default Writer;
