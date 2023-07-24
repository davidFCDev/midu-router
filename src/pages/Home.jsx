import { navigate } from "../App";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Página de ejemplo para crear React Router desde cero</p>
      <button onClick={() => navigate("/about")}>Ir a Sobre nosotros</button>
    </>
  );
}
