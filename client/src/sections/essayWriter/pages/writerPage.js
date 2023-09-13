import EssayWriterHeading from "../components/Headers/EssayWriterHeading";
import MiniHeader from "../components/Headers/MiniHeader";
import Writer from "../sections/writer/Writer";
import { WriterContextProvider } from "../sections/writer/WriterContext";

const WriterPage = () => {
  return (
    <WriterContextProvider>
      <MiniHeader />
      <EssayWriterHeading />
      <Writer />
    </WriterContextProvider>
  );
};

export default WriterPage;