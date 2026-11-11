import React from 'react';
import { TrafficColor } from '../types.ts';
import { Check, HelpCircle, AlertTriangle } from 'lucide-react';

interface TrafficButtonsProps {
  onSelectColor: (color: TrafficColor) => void;
  disabled?: boolean;
}

export const TrafficButtons: React.FC<TrafficButtonsProps> = ({
  onSelectColor,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col gap-3.5 w-full max-w-xl mx-auto">
      {/* VERDE */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => onSelectColor('VERDE')}
        className="group relative flex items-center justify-between w-full min-h-[82px] px-6 py-3 rounded-2xl bg-[#15803D] hover:bg-[#166534] active:scale-[0.98] text-white border-4 border-green-950 shadow-lg transition-all cursor-pointer focus:outline-none focus:ring-8 focus:ring-green-400"
        aria-label="ESCOLHER COR VERDE: SEGURO"
      >
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-green-300 border-3 border-white flex items-center justify-center shrink-0 shadow-md">
            <Check className="w-9 h-9 text-green-950 stroke-[3.5]" />
          </div>
          <div className="text-left">
            <div className="text-[24px] font-black text-green-200 tracking-wider">
              COR VERDE
            </div>
            <div className="text-[32px] sm:text-[34px] font-black tracking-wide leading-none">
              SEGURO
            </div>
          </div>
        </div>
        <span className="hidden sm:inline-block text-[24px] font-bold bg-white/20 px-4 py-2 rounded-xl">
          CLIQUE AQUI
        </span>
      </button>

      {/* AMARELO */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => onSelectColor('AMARELO')}
        className="group relative flex items-center justify-between w-full min-h-[82px] px-6 py-3 rounded-2xl bg-[#D97706] hover:bg-[#B45309] active:scale-[0.98] text-white border-4 border-amber-950 shadow-lg transition-all cursor-pointer focus:outline-none focus:ring-8 focus:ring-amber-300"
        aria-label="ESCOLHER COR AMARELO: PRECISO CONFIRMAR"
      >
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-amber-200 border-3 border-white flex items-center justify-center shrink-0 shadow-md">
            <HelpCircle className="w-9 h-9 text-amber-950 stroke-[3.5]" />
          </div>
          <div className="text-left">
            <div className="text-[24px] font-black text-amber-200 tracking-wider">
              COR AMARELA
            </div>
            <div className="text-[32px] sm:text-[34px] font-black tracking-wide leading-none">
              PRECISO CONFIRMAR
            </div>
          </div>
        </div>
        <span className="hidden sm:inline-block text-[24px] font-bold bg-white/20 px-4 py-2 rounded-xl">
          CLIQUE AQUI
        </span>
      </button>

      {/* VERMELHO */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => onSelectColor('VERMELHO')}
        className="group relative flex items-center justify-between w-full min-h-[82px] px-6 py-3 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] active:scale-[0.98] text-white border-4 border-red-950 shadow-lg transition-all cursor-pointer focus:outline-none focus:ring-8 focus:ring-red-400"
        aria-label="ESCOLHER COR VERMELHO: GOLPE"
      >
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-red-200 border-3 border-white flex items-center justify-center shrink-0 shadow-md">
            <AlertTriangle className="w-9 h-9 text-red-950 stroke-[3.5]" />
          </div>
          <div className="text-left">
            <div className="text-[24px] font-black text-red-200 tracking-wider">
              COR VERMELHA
            </div>
            <div className="text-[32px] sm:text-[34px] font-black tracking-wide leading-none">
              GOLPE
            </div>
          </div>
        </div>
        <span className="hidden sm:inline-block text-[24px] font-bold bg-white/20 px-4 py-2 rounded-xl">
          CLIQUE AQUI
        </span>
      </button>
    </div>
  );
};
