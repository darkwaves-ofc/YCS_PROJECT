import { createContext, useState } from "react";

const DetailsContext = createContext();

const DetailsContextProvider = (props) => {
  const [topic, setTopic] = useState(""); // add a default keyword
  const [wordsCount, setWordsCount] = useState("100");
  const [type, setType] = useState("general");
  const [complexity, setComplexity] = useState("intermediate");

  const contextValue = {
    topic: { get: topic, set: setTopic },
    wordsCount: { get: wordsCount, set: setWordsCount },
    type: { get: type, set: setType },
    complexity: { get: complexity, set: setComplexity },
  };

  return (
    <DetailsContext.Provider value={contextValue}>
      {props.children}
    </DetailsContext.Provider>
  );
};

export { DetailsContext, DetailsContextProvider };
