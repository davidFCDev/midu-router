import "./App.css";
import { Suspense, lazy } from "react";
import HomePage from "./pages/Home";
import Page404 from "./pages/404";
import SearchPage from "./pages/Search";
import { Router } from "./Router";
import { Route } from "./Route";

const LazyAboutPage = lazy(() => import("./pages/About"));
const LazyHomePage = lazy(() => import("./pages/Home"));

const appRoutes = [
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<p>Cargando</p>}>
        <Router routes={appRoutes} DefaultComponent={Page404}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
