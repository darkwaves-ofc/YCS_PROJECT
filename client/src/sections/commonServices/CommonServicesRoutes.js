import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import MiniHeader from "../../components/Headers/MiniHeader.js";
import PageLayout from "../../components/ui/Layout.js";
import DownloadPage from "./downloader/pages/DownloadPage.js";
const EDrivePage = lazy(() => import("./eDrive/pages/eDrivePage"));

const CommonServicesRoutes = () => {
  return (
    <Suspense fallback={<p>loading</p>}>
      <Routes>
        <Route
          path="/e_drive"
          exact
          element={
            <PageLayout header={<MiniHeader />}>
              <EDrivePage />
            </PageLayout>
          }
        />
        <Route
          path="/download"
          exact
          element={
            <PageLayout header={<MiniHeader />}>
              <DownloadPage />
            </PageLayout>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default CommonServicesRoutes;
