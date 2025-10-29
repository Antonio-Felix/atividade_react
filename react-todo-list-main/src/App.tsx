import { useState } from "react";
import { ImageCard } from "./components/ImageCard";

function App() {
  const [imagens, setImagens] = useState<{ src: string; legenda: string }[]>([]);
  const [src, setSrc] = useState("");
  const [legenda, setLegenda] = useState("");

  const adicionarImagem = (e: React.FormEvent) => {
    e.preventDefault();
    setImagens([...imagens, { src, legenda }]);
    setSrc("");
    setLegenda("");
  };

  return (
    <div>
      <h1>Galeria de Imagens</h1>

      <form onSubmit={adicionarImagem}>
        <input
          type="text"
          placeholder="URL da imagem"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
        />
        <input
          type="text"
          placeholder="Legenda"
          value={legenda}
          onChange={(e) => setLegenda(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {imagens.map((img, index) => (
        <ImageCard key={index} src={img.src} legenda={img.legenda} />
      ))}
    </div>
  );
}

export default App;

