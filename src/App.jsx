import { Header } from "./components/header";
import { Main } from "./components/Main";
import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Aside />
        <Main />
      </div>
      <Footer />
    </>
  );
}
