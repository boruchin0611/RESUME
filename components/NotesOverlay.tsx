import React from 'react';
import { Lightbulb } from 'lucide-react';

interface NotesOverlayProps {
  note: string;
  isVisible: boolean;
}

const NotesOverlay: React.FC<NotesOverlayProps> = ({ note, isVisible }) => {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 bg-yellow-50 border-t-2 border-yellow-400 p-6 text-sm text-slate-800 shadow-inner z-10 transition-transform duration-300 ease-in-out transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-start max-w-5xl mx-auto">
        <Lightbulb className="text-yellow-600 mr-3 flex-shrink-0 mt-0.5 w-6 h-6" />
        <div>
          <span className="font-bold text-yellow-800 block mb-1 text-base">💡 面試官視角提示：</span>
          <p className="leading-relaxed text-slate-700">{note}</p>
        </div>
      </div>
    </div>
  );
};

export default NotesOverlay;