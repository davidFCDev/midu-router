import { useEffect, useState } from "react";
import "./App.css";
import { EVENTS } from "./consts";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

const routes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
];

function Router({ routes = [], DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  const Page = routes.find(({ path }) => path === currentPath)?.Component;
  return Page ? <Page /> : <DefaultComponent />
}

function App() {
  return <main>
    <Router routes={routes}>
      
    </Router>
  </main>;
}

export default App;
