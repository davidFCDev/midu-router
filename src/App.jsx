import { useEffect, useState } from "react";
import "./App.css";

const NAVIGATION_EVENT = "pushstate";

function navigate(href) {
  window.history.pushState({}, "", href);
  // crear un evento personalizado
  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Página de ejemplo para crear React Router desde cero</p>
      <button onClick={() => navigate("/about")}>Ir a Sobre nosotros</button>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          style={{ width: "150px", borderRadius: "15px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
          alt="elon musk"
        />
        <p>Creando un clon de React Router!</p>
      </div>
      <button onClick={() => navigate("/")}>Ir a la Home</button>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(NAVIGATION_EVENT, onLocationChange);

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
