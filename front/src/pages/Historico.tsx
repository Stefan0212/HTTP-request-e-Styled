import { useContext } from 'react';
import { PalpiteContext } from '../context/PalpiteContext';

const Historico = () => {
  const context = useContext(PalpiteContext);

  return (
    <div style={{ padding: 20 }}>
      <h2>Histórico de Palpites</h2>
      <ul>
        {context?.historico.map((palpite, index) => (
          <li key={index}>{palpite.join(' - ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default Historico;