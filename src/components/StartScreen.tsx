import React from 'react';
import { ArrowRight, ShieldCheck, HelpCircle, AlertOctagon } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-3 py-1 sm:py-2">
      {/* Title Header */}
      <div className="text-center w-full">
        <div className="inline-block bg-blue-100 text-blue-950 border-2 border-blue-400 px-4 py-1 rounded-full text-[17px] font-black tracking-widest uppercase mb-1.5">
          OFICINA DE INFORMÁTICA
        </div>
        <h1 className="text-[36px] sm:text-[46px] font-black tracking-tight text-gray-950 uppercase leading-none drop-shadow-xs">
          SEMÁFORO DO GOLPE
        </h1>
        <p className="mt-2 text-[22px] sm:text-[25px] font-black text-gray-900 leading-snug uppercase max-w-2xl mx-auto bg-amber-100/90 border-3 border-amber-400 p-3 rounded-2xl shadow-xs">
          VAMOS LER 8 MENSAGENS. PARA CADA UMA, ESCOLHA UMA COR.
        </p>
      </div>

      {/* Legend of Colors Cards */}
      <div className="w-full flex flex-col gap-2.5">
        <h2 className="text-[22px] font-black text-gray-950 uppercase text-center">
          LEGENDA DAS CORES DO SEMÁFORO:
        </h2>

        {/* VERDE */}
        <div className="bg-white border-4 border-green-800 rounded-2xl p-3 sm:p-3.5 shadow-sm flex items-center gap-4">
          <div className="w-13 h-13 rounded-full bg-green-700 text-white flex items-center justify-center shrink-0 border-3 border-green-950 shadow-xs">
            <ShieldCheck className="w-8 h-8 stroke-[3]" />
          </div>
          <div>
            <div className="text-[26px] font-black text-green-900 leading-tight">
              VERDE = SEGURO
            </div>
            <div className="text-[22px] font-semibold text-gray-800 mt-0.5 leading-snug">
              MENSAGEM CONFIÁVEL. NÃO PEDE DINHEIRO, NEM SENHA, NEM TEM PRESSA.
            </div>
          </div>
        </div>

        {/* AMARELO */}
        <div className="bg-white border-4 border-amber-700 rounded-2xl p-3 sm:p-3.5 shadow-sm flex items-center gap-4">
          <div className="w-13 h-13 rounded-full bg-amber-500 text-amber-950 flex items-center justify-center shrink-0 border-3 border-amber-950 shadow-xs">
            <HelpCircle className="w-8 h-8 stroke-[3]" />
          </div>
          <div>
            <div className="text-[26px] font-black text-amber-950 leading-tight">
              AMARELO = PRECISO CONFIRMAR
            </div>
            <div className="text-[22px] font-semibold text-gray-800 mt-0.5 leading-snug">
              PODE SER UM FAMILIAR, MAS PEDE DINHEIRO OU PARECE ESTRANHO. LIGUE ANTES DE FAZER QUALQUER COISA!
            </div>
          </div>
        </div>

        {/* VERMELHO */}
        <div className="bg-white border-4 border-red-800 rounded-2xl p-3 sm:p-3.5 shadow-sm flex items-center gap-4">
          <div className="w-13 h-13 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 border-3 border-red-950 shadow-xs">
            <AlertOctagon className="w-8 h-8 stroke-[3]" />
          </div>
          <div>
            <div className="text-[26px] font-black text-red-900 leading-tight">
              VERMELHO = GOLPE
            </div>
            <div className="text-[22px] font-semibold text-gray-800 mt-0.5 leading-snug">
              É GOLPE! QUER SEU DINHEIRO, SEU CÓDIGO OU SUA SENHA COM URGÊNCIA OU AMEAÇA.
            </div>
          </div>
        </div>
      </div>

      {/* Big Start Button */}
      <button
        type="button"
        onClick={onStart}
        className="w-full max-w-md min-h-[78px] px-8 py-4 rounded-3xl bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white border-4 border-green-950 shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-4 mt-1 focus:outline-none focus:ring-8 focus:ring-green-400"
        aria-label="COMEÇAR A OFICINA DO SEMÁFORO DO GOLPE"
      >
        <span className="text-[34px] sm:text-[38px] font-black tracking-wider uppercase">
          COMEÇAR
        </span>
        <ArrowRight className="w-10 h-10 stroke-[3.5]" />
      </button>

      {/* Friendly accessibility mouse instruction */}
      <div className="text-[19px] font-bold text-gray-600 uppercase text-center bg-gray-200/90 px-4 py-2 rounded-xl border border-gray-300">
        DICA: CLIQUE NO BOTÃO VERDE "COMEÇAR" COM O BOTÃO ESQUERDO DO MOUSE.
      </div>
    </div>
  );
};
