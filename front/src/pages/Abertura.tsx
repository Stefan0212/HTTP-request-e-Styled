import { useNavigate, Link } from 'react-router-dom';

const Abertura = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h1>Gerador de Apostas</h1>
      <button onClick={() => navigate('/palpite')} style={{ marginRight: 10 }}>
        Clique para começar
      </button>
      <button>
        <Link to="/palpite" style={{ marginRight: 10 }}>Palpite</Link>
      </button>
      <button>
        <Link to="/historico" style={{ marginRight: 10 }}>Histórico</Link>
      </button>
    </div>
  );
};

export default Abertura;