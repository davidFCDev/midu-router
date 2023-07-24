import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import { Router } from "./Router";
import Page404 from "./pages/404";

const appRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/twitch",
    Component: () => <h1>Nuevo Twitch</h1>,
  },
];

function App() {
  return (
    <main>
      <Router routes={appRoutes} DefaultComponent={Page404}/>
    </main>
  );
}

export default App;
