import React from 'react';
import { RotateCcw, Award, ShieldAlert, PhoneCall } from 'lucide-react';

interface FinalScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const FinalScreen: React.FC<FinalScreenProps> = ({
  score,
  total,
  onRestart,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 py-4 sm:py-8">
      {/* Score Header Card */}
      <div className="w-full bg-blue-50 border-4 border-blue-900 rounded-3xl p-8 text-center shadow-lg">
        <div className="w-24 h-24 rounded-full bg-blue-700 text-white flex items-center justify-center mx-auto mb-4 border-4 border-blue-950 shadow-md">
          <Award className="w-14 h-14 stroke-[2.5]" />
        </div>
        <h1 className="text-[36px] sm:text-[46px] font-black text-blue-950 uppercase leading-tight">
          PARABÉNS POR COMPLETAR A OFICINA!
        </h1>
        <p className="mt-4 text-[30px] sm:text-[36px] font-black text-gray-950 uppercase bg-white border-3 border-blue-300 py-4 px-6 rounded-2xl inline-block">
          VOCÊ ACERTOU {score} DE {total} MENSAGENS
        </p>
        <p className="mt-4 text-[24px] font-bold text-gray-700 uppercase leading-snug">
          O MAIS IMPORTANTE É PRATICAR A ATENÇÃO E SABER COMO SE PROTEGER NO DIA A DIA!
        </p>
      </div>

      {/* HIGHLIGHT BOX (REGRA DE OURO) */}
      <div className="w-full bg-amber-50 border-6 border-red-700 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col gap-6">
        <div className="flex items-center gap-4 text-red-700 border-b-4 border-red-200 pb-4">
          <ShieldAlert className="w-14 h-14 stroke-[3] shrink-0" />
          <h2 className="text-[32px] sm:text-[38px] font-black uppercase text-red-950 leading-none">
            REGRA DE OURO CONTRA GOLPES:
          </h2>
        </div>

        {/* The required formula */}
        <div className="bg-red-700 text-white p-6 sm:p-8 rounded-2xl border-4 border-red-950 text-center shadow-md">
          <div className="text-[32px] sm:text-[44px] font-black tracking-wide leading-tight uppercase">
            MEDO + PRESSA + PRESSÃO = GOLPE
          </div>
        </div>

        {/* The required rule */}
        <div className="bg-white border-4 border-amber-600 p-6 sm:p-8 rounded-2xl text-center shadow-sm">
          <div className="text-[28px] sm:text-[34px] font-black text-gray-950 leading-snug uppercase">
            QUANDO A MENSAGEM TEM OS TRÊS, EU PARO. DESLIGO E LIGO PARA O NÚMERO QUE EU JÁ TENHO.
          </div>
        </div>

        {/* Friendly visual reminder */}
        <div className="flex items-center gap-4 bg-emerald-100 border-3 border-emerald-600 p-5 rounded-2xl text-emerald-950">
          <PhoneCall className="w-10 h-10 text-emerald-800 shrink-0 stroke-[2.5]" />
          <div className="text-[24px] font-bold uppercase leading-snug">
            NUNCA LIGUE PARA O NÚMERO QUE VEIO NA MENSAGEM. USE SEMPRE A SUA PRÓPRIA AGENDA OU O VERSO DO SEU CARTÃO.
          </div>
        </div>
      </div>

      {/* Play Again Button */}
      <button
        type="button"
        onClick={onRestart}
        className="w-full max-w-xl min-h-[96px] px-10 py-6 rounded-3xl bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white border-4 border-green-950 shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-5 mt-2 focus:outline-none focus:ring-8 focus:ring-green-400"
        aria-label="JOGAR DE NOVO A OFICINA"
      >
        <RotateCcw className="w-10 h-10 stroke-[3.5]" />
        <span className="text-[34px] sm:text-[38px] font-black tracking-wider uppercase">
          JOGAR DE NOVO
        </span>
      </button>

      <div className="text-[22px] font-bold text-gray-600 uppercase text-center">
        CLIQUE ACIMA PARA REPETIR A ATIVIDADE E FIXAR O APRENDIZADO.
      </div>
    </div>
  );
};
