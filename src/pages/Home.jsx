import Navbar from "../components/Navbar";
import Header from "../components/Header";
import buzo from '/buzo-entrenamiento.jpg';
import camiseta from '/camiseta-oficial.jpg';
import campera from '/campera-nob.jpg';
import remera from '/remera-entrenamiento.jpg';

function Home() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main style={{textAlign:"center"}}>
        <h1>Productos Destacados</h1>
        <p>
          <img src={buzo} width="200px"/>
          <img src={camiseta} width="200px"/>
          <img src={campera} width="200px"/>
          <img src={remera} width="200px"/>
        </p>
      </main>
    </>
  );
}

export default Home;
