import React, { createContext, useContext, useState } from "react";

const BaratasContext = createContext();

// Dados iniciais de exemplo para as 4 baratas
const baratasIniciais = [
  {
    id: 1,
    nome: "Barata Fedida",
    nacionalidade: "Brasil",
    vidaAtual: 5,
    vidaMaxima: 5,
    vitorias: 3,
    cor: "#DC143C",
  },
  {
    id: 2,
    nome: "Barata Nojenta",
    nacionalidade: "Argentina",
    vidaAtual: 8,
    vidaMaxima: 8,
    vitorias: 7,
    cor: "#00D2BE",
  },
  {
    id: 3,
    nome: "Barata Podre",
    nacionalidade: "Chile",
    vidaAtual: 3,
    vidaMaxima: 6,
    vitorias: 2,
    cor: "#1E41FF",
  },
  {
    id: 4,
    nome: "Barata Morta",
    nacionalidade: "Uruguai",
    vidaAtual: 0,
    vidaMaxima: 10,
    vitorias: 0,
    cor: "#FF8700",
  },
];

export function BaratasProvider({ children }) {
  const [baratas, setBaratas] = useState(baratasIniciais);

  const atualizarBarata = (id, dados) => {
    setBaratas((prev) =>
      prev.map((barata) => (barata.id === id ? { ...barata, ...dados } : barata))
    );
  };

  const adicionarVitoria = (id) => {
    setBaratas((prev) =>
      prev.map((barata) =>
        barata.id === id ? { ...barata, vitorias: barata.vitorias + 1 } : barata
      )
    );
  };

  const atualizarVida = (id, novaVida) => {
    setBaratas((prev) =>
      prev.map((barata) =>
        barata.id === id
          ? {
              ...barata,
              vidaAtual: Math.max(0, Math.min(barata.vidaMaxima, novaVida)),
            }
          : barata
      )
    );
  };

  return (
    <BaratasContext.Provider
      value={{
        baratas,
        atualizarBarata,
        adicionarVitoria,
        atualizarVida,
      }}
    >
      {children}
    </BaratasContext.Provider>
  );
}

export function useBaratas() {
  const context = useContext(BaratasContext);
  if (!context) {
    throw new Error("useBaratas deve ser usado dentro de BaratasProvider");
  }
  return context;
}
