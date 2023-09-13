import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const EssayWriterHomePage = lazy(() => import("./pages/EssayWriterHomePage"));
const WriterPage = lazy(() => import("./pages/writerPage.js"));

const EssayWriterRoutes = () => {
  return (
    <Suspense fallback={<p>loading</p>}>
      <Routes>
        <Route path="/essaywriter" exact element={<EssayWriterHomePage />} />
        <Route path="/essaywriter/writer" exact element={<WriterPage />} />
      </Routes>
    </Suspense>
  );
};

export default EssayWriterRoutes;
