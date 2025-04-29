import { useContext, useEffect, useState } from 'react';
import { PalpiteContext } from '../context/PalpiteContext';
import Dezena from '../components/Dezena';

const Palpite = () => {
  const context = useContext(PalpiteContext);
  const [palpiteAtual, setPalpiteAtual] = useState<number[]>([]);

  useEffect(() => {
    if (context) {
      const novo = context.novoPalpite();
      setPalpiteAtual(novo);
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Sua sugestão de aposta:</h2>
      <div>
        {palpiteAtual.map((n, i) => (
          <Dezena key={i}>{n}</Dezena>
        ))}
      </div>
      <button onClick={() => {
        if (context) setPalpiteAtual(context.novoPalpite());
      }}>
        Nova sugestão
      </button>
    </div>
  );
};

export default Palpite;
