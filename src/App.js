import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import NewMain from "./pages/NewMain";
import NewServices from "./pages/NewServices";
import NewInterships from "./pages/NewInterships";
import NewAbout from "./pages/NewAbout";
import Auth from "./pages/Auth";
import ProfilePage from "./pages/ProfilePage";
import Jobs from "./pages/Jobs";
import GosMainPage from "./pages/GosMainPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/new-services":
        title = "";
        metaDescription = "";
        break;
      case "/new-interships":
        title = "";
        metaDescription = "";
        break;
      case "/new-about":
        title = "";
        metaDescription = "";
        break;
      case "/auth":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<NewMain />} />
      <Route path="/new-services" element={<NewServices />} />
      <Route path="/new-interships" element={<NewInterships />} />
      <Route path="/new-about" element={<NewAbout />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/GosMainPage" element={<GosMainPage />} />
    </Routes>
  );
}
export default App;
