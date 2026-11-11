import React from 'react';
import { MessageItem, TrafficColor } from '../types.ts';
import { CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface ExplanationCardsProps {
  message: MessageItem;
  chosenColor: TrafficColor;
  onNextMessage: () => void;
  isLastMessage: boolean;
}

export const ExplanationCards: React.FC<ExplanationCardsProps> = ({
  message,
  chosenColor,
  onNextMessage,
  isLastMessage,
}) => {
  const isCorrect = chosenColor === message.correctAnswer;

  const colorBadgeStyle = {
    VERDE: {
      bg: 'bg-green-700',
      border: 'border-green-950',
      text: 'text-white',
      name: 'VERDE = SEGURO',
      dot: 'bg-green-400',
    },
    AMARELO: {
      bg: 'bg-amber-600',
      border: 'border-amber-950',
      text: 'text-white',
      name: 'AMARELO = PRECISO CONFIRMAR',
      dot: 'bg-amber-300',
    },
    VERMELHO: {
      bg: 'bg-red-700',
      border: 'border-red-950',
      text: 'text-white',
      name: 'VERMELHO = GOLPE',
      dot: 'bg-red-400',
    },
  }[message.correctAnswer];

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      {/* Result feedback banner */}
      {isCorrect ? (
        <div className="bg-emerald-100 border-4 border-emerald-700 rounded-3xl p-6 flex items-center gap-5 shadow-lg">
          <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-12 h-12 stroke-[3]" />
          </div>
          <div>
            <div className="text-[32px] sm:text-[36px] font-black text-emerald-950 leading-tight">
              VOCÊ ACERTOU!
            </div>
            <div className="text-[24px] font-bold text-emerald-800">
              PARABÉNS PELA SUA ATENÇÃO!
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-amber-50 border-4 border-amber-600 rounded-3xl p-6 flex items-center gap-5 shadow-lg">
          <div className="w-16 h-16 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0">
            <AlertCircle className="w-12 h-12 stroke-[3]" />
          </div>
          <div>
            <div className="text-[32px] sm:text-[36px] font-black text-amber-950 leading-tight">
              QUASE! A RESPOSTA CERTA É:
            </div>
            <div className="text-[24px] font-bold text-amber-900">
              VEJA A EXPLICAÇÃO ABAIXO COM ATENÇÃO:
            </div>
          </div>
        </div>
      )}

      {/* Answer Callout Badge */}
      <div
        className={`${colorBadgeStyle.bg} ${colorBadgeStyle.text} border-4 ${colorBadgeStyle.border} rounded-3xl p-6 shadow-xl`}
      >
        <div className="text-[22px] font-bold uppercase opacity-90 tracking-wider">
          CORRETISMO E CLASSIFICAÇÃO:
        </div>
        <div className="text-[32px] sm:text-[36px] font-black leading-tight mt-1 flex items-center gap-3 flex-wrap">
          <span className={`inline-block w-6 h-6 rounded-full ${colorBadgeStyle.dot} border-2 border-white`} />
          <span>{colorBadgeStyle.name}</span>
        </div>
        <div className="text-[26px] sm:text-[28px] font-extrabold mt-2 underline decoration-white/50">
          {message.classificationTitle}
        </div>
      </div>

      {/* 3 Explanation Quadros (Cards) */}
      <div className="flex flex-col gap-4">
        {message.cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border-4 border-gray-900 rounded-3xl p-6 shadow-md"
          >
            <div className="flex items-center gap-3 text-gray-950 border-b-2 border-gray-200 pb-2 mb-3">
              <span className="w-9 h-9 rounded-full bg-blue-900 text-white text-[20px] font-black flex items-center justify-center shrink-0">
                {index + 1}
              </span>
              <h3 className="text-[26px] font-black tracking-wide text-gray-950">
                {card.title}
              </h3>
            </div>
            <p className="text-[24px] font-medium text-gray-900 leading-relaxed">
              {/* If text contains gov.br, keep it formatted cleanly */}
              {card.content.includes('gov.br') ? (
                <span>
                  {card.content.split('gov.br')[0]}
                  <span className="font-mono lowercase font-bold text-blue-900 bg-blue-50 px-1 rounded">
                    gov.br
                  </span>
                  {card.content.split('gov.br')[1]}
                </span>
              ) : (
                card.content
              )}
            </p>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={onNextMessage}
        className="w-full min-h-[96px] px-8 py-6 rounded-3xl bg-blue-700 hover:bg-blue-800 active:scale-[0.98] text-white border-4 border-blue-950 shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-4 focus:outline-none focus:ring-8 focus:ring-blue-300"
        aria-label={isLastMessage ? 'VER RESULTADO FINAL' : 'PRÓXIMA MENSAGEM'}
      >
        <span className="text-[32px] sm:text-[36px] font-black tracking-wide">
          {isLastMessage ? 'VER RESULTADO FINAL' : 'PRÓXIMA MENSAGEM'}
        </span>
        <ArrowRight className="w-10 h-10 stroke-[3.5]" />
      </button>
    </div>
  );
};
