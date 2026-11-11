import React, { useState, useEffect } from 'react';
import { MESSAGES, checkAnswer } from './data/messages.ts';
import { TrafficColor } from './types.ts';
import { StartScreen } from './components/StartScreen.tsx';
import { PhoneMockup } from './components/PhoneMockup.tsx';
import { TrafficButtons } from './components/TrafficButtons.tsx';
import { ExplanationCards } from './components/ExplanationCards.tsx';
import { FinalScreen } from './components/FinalScreen.tsx';
import { HelpCircle } from 'lucide-react';

type ScreenState = 'START' | 'QUESTION' | 'ANSWER' | 'FINAL';

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('START');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userChoice, setUserChoice] = useState<TrafficColor | null>(null);
  const [score, setScore] = useState<number>(0);

  // Support ?autostart=1 for instant testability
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') {
      setScreen('QUESTION');
    }
  }, []);

  const currentMessage = MESSAGES[currentIndex];

  const handleStart = () => {
    setCurrentIndex(0);
    setUserChoice(null);
    setScore(0);
    setScreen('QUESTION');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleSelectColor = (color: TrafficColor) => {
    setUserChoice(color);
    if (checkAnswer(color, currentMessage.correctAnswer)) {
      setScore((prev) => prev + 1);
    }
    setScreen('ANSWER');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleNextMessage = () => {
    if (currentIndex + 1 < MESSAGES.length) {
      setCurrentIndex((prev) => prev + 1);
      setUserChoice(null);
      setScreen('QUESTION');
    } else {
      setScreen('FINAL');
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setUserChoice(null);
    setScore(0);
    setScreen('START');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-gray-950 flex flex-col font-sans select-none antialiased">
      {/* Top Header Bar */}
      <header className="bg-gray-900 text-white border-b-4 border-gray-950 py-3.5 px-6 sm:px-10 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Traffic Light Icon Pill */}
            <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-2xl border-2 border-gray-700">
              <span className="w-5 h-5 rounded-full bg-red-500 inline-block shadow-inner" />
              <span className="w-5 h-5 rounded-full bg-amber-400 inline-block shadow-inner" />
              <span className="w-5 h-5 rounded-full bg-green-500 inline-block shadow-inner" />
            </div>
            <span className="text-[28px] sm:text-[34px] font-black tracking-wider uppercase">
              SEMÁFORO DO GOLPE
            </span>
          </div>

          {/* Progress Indicator when inside quiz */}
          {(screen === 'QUESTION' || screen === 'ANSWER') && (
            <div className="flex items-center gap-4 bg-gray-800 px-6 py-2.5 rounded-2xl border-2 border-gray-700">
              <span className="text-[26px] sm:text-[28px] font-black tracking-wide text-amber-300">
                MENSAGEM {currentIndex + 1} DE {MESSAGES.length}
              </span>
              <div className="hidden lg:flex items-center gap-2">
                {MESSAGES.map((_, i) => (
                  <span
                    key={i}
                    className={`w-4 h-4 rounded-full border border-gray-600 ${
                      i === currentIndex
                        ? 'bg-amber-400 ring-2 ring-white scale-125'
                        : i < currentIndex
                        ? 'bg-green-500'
                        : 'bg-gray-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5 flex flex-col justify-center">
        {screen === 'START' && <StartScreen onStart={handleStart} />}

        {(screen === 'QUESTION' || screen === 'ANSWER') && (
          <div className="flex flex-col gap-4">
            {/* Context title / Question header */}
            <div className="bg-white border-4 border-gray-900 rounded-3xl p-4 sm:p-5 shadow-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-[26px] font-black shrink-0">
                  {currentIndex + 1}
                </span>
                <div>
                  <h2 className="text-[26px] sm:text-[28px] font-black uppercase text-gray-950 leading-tight">
                    ANALISE A MENSAGEM NO CELULAR ABAIXO
                  </h2>
                  <p className="text-[24px] font-bold text-gray-700 uppercase">
                    LEIA COM CALMA O TEXTO E QUEM ENVIOU
                  </p>
                </div>
              </div>

              {screen === 'QUESTION' && (
                <div className="hidden xl:flex items-center gap-2 text-blue-900 bg-blue-100 px-4 py-2 rounded-xl border border-blue-300">
                  <HelpCircle className="w-7 h-7" />
                  <span className="text-[24px] font-black uppercase">
                    PASSO 1: LER A MENSAGEM • PASSO 2: ESCOLHER A COR
                  </span>
                </div>
              )}
            </div>

            {/* Two-Column Responsive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Phone mockup showing message */}
              <div className="lg:col-span-6 w-full flex flex-col gap-2">
                <div className="text-[24px] font-black uppercase text-gray-700 px-2 flex items-center gap-2">
                  <span>TELA DO CELULAR:</span>
                </div>
                <PhoneMockup message={currentMessage} />
              </div>

              {/* Right Column: Interaction Area */}
              <div className="lg:col-span-6 w-full flex flex-col gap-4">
                {screen === 'QUESTION' && (
                  <div className="bg-white border-4 border-gray-900 rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col gap-4">
                    {/* Prompt question as requested */}
                    <div className="border-b-3 border-gray-200 pb-3">
                      <div className="text-[24px] font-black text-blue-900 uppercase tracking-wider mb-1">
                        PERGUNTA DO SEMÁFORO:
                      </div>
                      <h3 className="text-[28px] sm:text-[32px] font-black text-gray-950 uppercase leading-snug">
                        O QUE ESSA MENSAGEM QUER QUE EU FAÇA? E COM QUE PRESSA?
                      </h3>
                      <p className="text-[24px] font-bold text-gray-700 uppercase mt-2">
                        CLIQUE NO BOTÃO DA COR QUE VOCÊ ACHA CERTA:
                      </p>
                    </div>

                    {/* 3 Large Buttons */}
                    <TrafficButtons onSelectColor={handleSelectColor} />
                  </div>
                )}

                {screen === 'ANSWER' && userChoice && (
                  <ExplanationCards
                    message={currentMessage}
                    chosenColor={userChoice}
                    onNextMessage={handleNextMessage}
                    isLastMessage={currentIndex === MESSAGES.length - 1}
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {screen === 'FINAL' && (
          <FinalScreen
            score={score}
            total={MESSAGES.length}
            onRestart={handleRestart}
          />
        )}
      </main>
    </div>
  );
}
