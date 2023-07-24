import "./App.css";

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Página de ejemplo para crear React Router desde cero</p>
      <a href="/about">Ir a Sobre nosotros</a>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
          alt="elon musk"
        />
        <p>!Creando un clon de React Router!</p>
      </div>
      <a href="/home">Ir a la Home</a>
    </>
  );
}

function App() {
  return <h1>Midu Router</h1>;
}

export default App;
