import { createContext, useState, ReactNode } from 'react';

interface PalpiteContextType {
  historico: number[][];
  novoPalpite: () => number[];
}

export const PalpiteContext = createContext<PalpiteContextType | null>(null);

export const PalpiteProvider = ({ children }: { children: ReactNode }) => {
  const [historico, setHistorico] = useState<number[][]>([]);

  const novoPalpite = (): number[] => {
    const numeros: number[] = [];
    while (numeros.length < 6) {
      const num = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(num)) numeros.push(num);
    }
    const palpite = numeros.sort((a, b) => a - b);
    setHistorico((prev) => [...prev, palpite]);
    return palpite;
  };

  return (
    <PalpiteContext.Provider value={{ historico, novoPalpite }}>
      {children}
    </PalpiteContext.Provider>
  );
};