import { Link } from "../Link";

export default function AboutPage() {
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
      <Link to={'/'}>Ir a la Home</Link>
    </>
  );
}
