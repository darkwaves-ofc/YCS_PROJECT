import { useContext } from "react";
import { WriterContext } from "../context/writerContext.jsx";

import Customizer from "./feature/Customizer.jsx";
import Displayer from "./displayer/Displayer.jsx";

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
