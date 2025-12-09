import React from 'react';
import { FileText, ChevronLeft, ChevronRight } from 'lucide-react';

interface ControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  showNotes: boolean;
  onToggleNotes: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  showNotes,
  onToggleNotes,
}) => {
  return (
    <div className="bg-slate-800 p-4 flex flex-col md:flex-row justify-between items-center text-white gap-4 flex-shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-20">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-lg tracking-wide">Chin Huang's Portfolio</span>
      </div>

      <div className="flex items-center space-x-6">
        <button
          onClick={onToggleNotes}
          className={`flex items-center space-x-2 px-4 py-2 rounded transition-all duration-300 ${
            showNotes 
              ? 'bg-yellow-600 text-white shadow-inner' 
              : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span className="text-sm font-medium">{showNotes ? '隱藏筆記' : '顯示筆記'}</span>
        </button>

        <div className="flex space-x-2">
          <button
            onClick={onPrev}
            disabled={currentSlide === 0}
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;