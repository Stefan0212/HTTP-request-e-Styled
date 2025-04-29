import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dezena from '../components/Dezena';

interface MegaSenaData {
  nome: string;
  numero: number;
  dataApuracao: string;
  dezenas: string[];
}

const Container = styled.div`
  padding: 20px;
`;

const Titulo = styled.h2`
  margin-bottom: 16px;
`;

const Resultado = () => {
  const [megaSena, setMegaSena] = useState<MegaSenaData | null>(null);

  useEffect(() => {
    fetch('https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados')
      .then((res) => res.json())
      .then((data) => {
        const resultado = data.loterias[0]; // Mega-Sena é o primeiro
        setMegaSena({
          nome: resultado.nome,
          numero: resultado.numero,
          dataApuracao: resultado.dataApuracao,
          dezenas: resultado.listaDezenas,
        });
      })
      .catch((err) => console.error('Erro ao buscar dados da Mega-Sena', err));
  }, []);

  return (
    <Container>
      <Titulo>Último Resultado da Mega-Sena</Titulo>
      {megaSena ? (
        <>
          <p>
            Concurso {megaSena.numero} - {megaSena.dataApuracao}
          </p>
          <div>
            {megaSena.dezenas.map((dezena, idx) => (
              <Dezena key={idx}>{dezena}</Dezena>
            ))}
          </div>
        </>
      ) : (
        <p>Carregando resultado...</p>
      )}
    </Container>
  );
};

export default Resultado;
