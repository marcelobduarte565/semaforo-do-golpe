import React from 'react';
import { MessageItem } from '../types.ts';
import { ShieldAlert, CheckCircle, User, MessageSquare } from 'lucide-react';

interface PhoneMockupProps {
  message: MessageItem;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ message }) => {
  const isWhatsApp = message.appType === 'WHATSAPP';

  return (
    <div className="w-full max-w-[500px] mx-auto bg-gray-900 p-3 sm:p-4 rounded-[36px] shadow-2xl border-4 border-gray-950">
      {/* Phone speaker notch / camera bar */}
      <div className="flex items-center justify-between px-6 pb-2 pt-0.5 text-gray-400">
        <div className="w-14 h-3 bg-gray-800 rounded-full mx-auto" />
      </div>

      {/* Phone Screen Container */}
      <div className="overflow-hidden rounded-[24px] border-2 border-gray-800 flex flex-col min-h-[460px] bg-white">
        {/* App Header */}
        {isWhatsApp ? (
          <div className="bg-[#075E54] text-white px-4 py-3 border-b-2 border-[#054c44]">
            <div className="flex items-center gap-3">
              {/* Contact Avatar */}
              <div className="w-13 h-13 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center shrink-0">
                <User className="w-8 h-8 text-white" />
              </div>

              {/* Contact Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[23px] font-black tracking-wide truncate">
                    {message.sender}
                  </span>
                </div>
                <div className="text-[18px] font-bold text-emerald-100 flex items-center gap-2 tracking-wide">
                  {message.statusLine === 'NÃO ESTÁ NOS SEUS CONTATOS' && (
                    <span className="inline-block w-3 h-3 rounded-full bg-amber-400 shrink-0" />
                  )}
                  {message.statusLine === 'ONLINE' && (
                    <span className="inline-block w-3 h-3 rounded-full bg-emerald-400 shrink-0" />
                  )}
                  <span>{message.statusLine}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#F2F2F7] text-gray-900 px-4 py-3 border-b-2 border-gray-300">
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-full bg-gray-300 border-2 border-gray-400 flex items-center justify-center shrink-0">
                <MessageSquare className="w-8 h-8 text-gray-700" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[23px] font-black tracking-wide text-gray-950 truncate">
                  {message.sender}
                </div>
                <div className="text-[18px] font-bold text-gray-600 tracking-wide">
                  {message.statusLine}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Message Body Area */}
        <div
          className={`flex-1 p-4 sm:p-5 flex flex-col gap-3.5 justify-start ${
            isWhatsApp ? 'bg-[#EFEAE2]' : 'bg-[#FAFAFC]'
          }`}
        >
          {/* Day marker */}
          <div className="self-center bg-black/10 text-gray-800 text-[18px] font-bold px-4 py-1.5 rounded-full shadow-xs">
            HOJE
          </div>

          {/* Bubbles */}
          {message.bubbles.map((b) => (
            <div
              key={b.id}
              className={`max-w-[94%] rounded-2xl p-5 shadow-md border-2 ${
                isWhatsApp
                  ? 'bg-white text-gray-950 border-gray-200 self-start rounded-tl-xs'
                  : 'bg-[#E9E9EB] text-gray-950 border-gray-300 self-start rounded-tl-xs'
              }`}
            >
              <div className="text-[24px] sm:text-[26px] font-semibold leading-snug tracking-wide select-text">
                {b.fullText && <span>{b.fullText}</span>}

                {b.prefixText && <span>{b.prefixText}</span>}

                {b.linkText && (
                  <span
                    className="text-blue-700 underline font-mono font-bold lowercase tracking-normal cursor-default inline-block px-1 bg-blue-50 rounded"
                    title="ENDEREÇO DE SITE NÃO CLICÁVEL"
                  >
                    {b.linkText}
                  </span>
                )}

                {b.suffixText && <span>{b.suffixText}</span>}
              </div>

              {b.time && (
                <div className="text-right text-[18px] font-bold text-gray-500 mt-2">
                  {b.time}
                </div>
              )}
            </div>
          ))}

          {/* Warning label at bottom of phone simulation */}
          {message.statusLine === 'NÃO ESTÁ NOS SEUS CONTATOS' && (
            <div className="mt-auto bg-amber-100 border-2 border-amber-400 text-amber-950 p-3 rounded-xl flex items-center gap-3">
              <ShieldAlert className="w-8 h-8 text-amber-700 shrink-0" />
              <span className="text-[20px] font-black leading-tight">
                ATENÇÃO: NÚMERO DESCONHECIDO!
              </span>
            </div>
          )}
        </div>

        {/* Phone Bottom Footer Decorator */}
        <div className="bg-gray-100 py-3 px-5 border-t border-gray-300 flex items-center justify-center text-gray-500 text-[18px] font-bold">
          {isWhatsApp ? 'MENSAGEM RECEBIDA VIA WHATSAPP' : 'MENSAGEM RECEBIDA VIA SMS'}
        </div>
      </div>
    </div>
  );
};
