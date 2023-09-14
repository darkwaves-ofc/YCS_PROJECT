import Writer from "./components/writer";
import { WriterContextProvider } from "./context/writerContext";

const WriterPage = () => {
  return (
    <WriterContextProvider>
      <Writer />
    </WriterContextProvider>
  );
};

export default WriterPage;
