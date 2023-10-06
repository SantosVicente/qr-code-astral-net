import "./App.css";
import QRCODE from "../src/assets/DOCS_AstralNET.png";

function App() {
  return (
    <>
      <h1>Escaneie o QR CODE para acessar as Docs do projeto!</h1>
      <img src={QRCODE} alt="QR CODE" width={400} />
    </>
  );
}

export default App;
