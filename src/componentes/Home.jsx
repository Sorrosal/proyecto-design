import { Header } from "./Header";
import { Carrusel } from "./Carrusel";
import { Precios } from "./Precios";
import { Footer } from "./Footer";

export function Home() {
  return (
    <div className="container">
      <div>
        <Header></Header>
      </div>
      <Carrusel></Carrusel>
      <div className="my-5">
        <Precios></Precios>
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
}
