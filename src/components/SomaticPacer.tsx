import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Sparkles, HeartPulse, Activity } from 'lucide-react';

export const SomaticPacer: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [mode, setMode] = useState<'box' | 'calm'>('box');
  const [phaseIndex, setPhaseIndex] = useState<number>(0);
  const [secondsLeft, setSecondsLeft] = useState<number>(4);
  const [completedCycles, setCompletedCycles] = useState<number>(0);

  // Box Breathing: Inhale 4s -> Hold 4s -> Exhale 4s -> Hold 4s
  const boxPhases = [
    { label: 'Inhale Space', instruction: 'Draw breath smoothly down to your diaphragm', duration: 4, scale: 1.35 },
    { label: 'Hold Serenity', instruction: 'Rest in quiet, spacious stillness', duration: 4, scale: 1.35 },
    { label: 'Exhale Fluidity', instruction: 'Release all physical and cognitive tension', duration: 4, scale: 1.0 },
    { label: 'Hold Ground', instruction: 'Feel unshakeable stability in the void', duration: 4, scale: 1.0 },
  ];

  // Calm & Restore (4-7-8): Inhale 4s -> Hold 7s -> Exhale 8s
  const calmPhases = [
    { label: 'Inhale Vitality', instruction: 'Soft, gentle breath through the nose', duration: 4, scale: 1.35 },
    { label: 'Hold Calm', instruction: 'Allow autonomic down-regulation to take hold', duration: 7, scale: 1.35 },
    { label: 'Exhale Surrender', instruction: 'Slow, complete release through soft lips', duration: 8, scale: 1.0 },
  ];

  const currentPhases = mode === 'box' ? boxPhases : calmPhases;
  const currentPhase = currentPhases[phaseIndex] || currentPhases[0];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            // Next phase
            setPhaseIndex((currPhase) => {
              const nextPhase = (currPhase + 1) % currentPhases.length;
              if (nextPhase === 0) {
                setCompletedCycles((c) => c + 1);
              }
              return nextPhase;
            });
            const nextIdx = (phaseIndex + 1) % currentPhases.length;
            return currentPhases[nextIdx].duration;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, phaseIndex, currentPhases]);

  const handleToggle = () => {
    if (!isActive) {
      setIsActive(true);
      setPhaseIndex(0);
      setSecondsLeft(currentPhases[0].duration);
    } else {
      setIsActive(false);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setPhaseIndex(0);
    setSecondsLeft(currentPhases[0].duration);
    setCompletedCycles(0);
  };

  const handleModeChange = (newMode: 'box' | 'calm') => {
    setIsActive(false);
    setMode(newMode);
    setPhaseIndex(0);
    setSecondsLeft(newMode === 'box' ? 4 : 4);
  };

  return (
    <section id="somatic-pacer" className="py-24 sm:py-32 bg-[#F5EFEB] relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181816]/5 border border-[#181816]/10 mb-4">
            <HeartPulse className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#4A4A46] font-medium">
              Experiential Somatics
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#181816] font-normal leading-tight mb-4">
            Tune Into Your Own Rhythm.
          </h2>

          <p className="text-sm sm:text-base text-[#565652] leading-relaxed max-w-2xl mx-auto">
            Experience the immediate calming power of autonomic nervous-system regulation. Take three minutes right now to down-regulate cognitive overload and reconnect with embodied presence.
          </p>

          {/* Mode Selector */}
          <div className="inline-flex p-1.5 rounded-full bg-[#E8E1D7] border border-[#DDD4C7] mt-8 gap-1">
            <button
              onClick={() => handleModeChange('box')}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all cursor-pointer ${
                mode === 'box'
                  ? 'bg-[#181816] text-[#FBF9F5] shadow-sm'
                  : 'text-[#4A4A46] hover:text-[#181816]'
              }`}
            >
              Box Breathing (Resilience)
            </button>
            <button
              onClick={() => handleModeChange('calm')}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all cursor-pointer ${
                mode === 'calm'
                  ? 'bg-[#181816] text-[#FBF9F5] shadow-sm'
                  : 'text-[#4A4A46] hover:text-[#181816]'
              }`}
            >
              Vagal Relaxation (4-7-8)
            </button>
          </div>
        </div>

        {/* The Breathing Orb Sanctuary */}
        <div className="max-w-xl mx-auto bg-[#FBF9F5] rounded-3xl p-8 sm:p-12 border border-[#E2DBD0] shadow-sm text-center relative flex flex-col items-center">
          {/* Subtle Outer Rings */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center my-6">
            {/* Outer ambient wave */}
            <div
              className="absolute inset-0 rounded-full border border-[#C5A059]/25 transition-transform duration-1000 ease-in-out"
              style={{
                transform: isActive
                  ? `scale(${currentPhase.scale * 1.08})`
                  : 'scale(1)',
              }}
            />

            {/* Inner Sacred Breathing Orb */}
            <div
              className="w-44 h-44 sm:w-48 sm:h-48 rounded-full flex flex-col items-center justify-center transition-all duration-1000 ease-in-out relative shadow-[0_10px_35px_rgba(197,160,89,0.15)]"
              style={{
                background:
                  isActive
                    ? 'radial-gradient(circle, #F5EFEB 0%, #E8E0D5 70%, #DACFBF 100%)'
                    : 'radial-gradient(circle, #F5EFEB 0%, #ECE4DB 100%)',
                transform: isActive
                  ? `scale(${currentPhase.scale})`
                  : 'scale(1)',
                border: '1.5px solid rgba(197, 160, 89, 0.4)',
              }}
            >
              <span className="font-serif text-4xl sm:text-5xl text-[#181816] font-light">
                {isActive ? secondsLeft : 'Start'}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#797972] mt-1 font-medium">
                {isActive ? currentPhase.label.split(' ')[0] : 'Touch below'}
              </span>
            </div>
          </div>

          {/* Current Phase Instruction */}
          <div className="h-16 flex flex-col items-center justify-center mt-2">
            <p className="font-serif text-xl sm:text-2xl text-[#181816] transition-opacity duration-300">
              {isActive ? currentPhase.label : 'Prepared to Center Yourself?'}
            </p>
            <p className="text-xs sm:text-sm text-[#797972] mt-1 italic">
              {isActive
                ? currentPhase.instruction
                : 'Click begin to start your guided nervous-system reset.'}
            </p>
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={handleToggle}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#181816] text-[#FBF9F5] hover:bg-[#C5A059] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium shadow-sm cursor-pointer"
            >
              {isActive ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause Practice</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Begin Reset</span>
                </>
              )}
            </button>

            {isActive && (
              <button
                onClick={handleReset}
                className="p-3.5 rounded-full bg-[#EBE3D5] text-[#181816] hover:bg-[#DDD4C5] transition-colors cursor-pointer"
                title="Reset session"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Stats Bar */}
          <div className="mt-8 pt-6 border-t border-[#EBE3D5] w-full flex items-center justify-between text-xs text-[#797972]">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#7B8E78]" />
              Autonomic Down-Regulation
            </span>
            <span className="font-medium text-[#181816]">
              Cycles Completed: {completedCycles}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
