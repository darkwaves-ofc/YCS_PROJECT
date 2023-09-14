import Cookies from "js-cookie";
import { createContext, useState } from "react";

const WriterContext = createContext();

const WriterContextProvider = (props) => {
  //testing
  //Cookies.set("result",JSON.stringify({topic: "Uses of water",body:"water is useful\nvery useful\n\nwe can drink water"}))

  const oldResult = Cookies.get("result")
    ? JSON.parse(Cookies.get("result"))
    : false;

  const [pendingResult, setpendingResult] = useState(false); //can't read properties of a undefined by can read properties of a false(return undefined);
  const [result, setResult] = useState(oldResult);

  const contextValue = {
    pendingResult: { get: pendingResult, set: setpendingResult },
    result: { get: result, set: setResult },
  };

  return (
    <WriterContext.Provider value={contextValue}>
      {props.children}
    </WriterContext.Provider>
  );
};

export { WriterContext, WriterContextProvider };
