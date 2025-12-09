import React, { useState, useEffect, useCallback } from 'react';
import { slides } from './components/SlideContent';
import Controls from './components/Controls';
import Header from './components/Header';
import NotesOverlay from './components/NotesOverlay';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex];

  const handleNext = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex, totalSlides]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <div className="h-screen flex flex-col bg-slate-900 overflow-hidden font-sans">
      {/* Main Display Area */}
      <div className="flex-grow flex items-center justify-center p-2 md:p-8 overflow-hidden relative">
        <div className="bg-white w-full max-w-6xl aspect-video rounded-xl shadow-2xl overflow-hidden flex flex-col relative ring-1 ring-slate-700">
          
          <Header 
            title={currentSlide.title} 
            current={currentSlideIndex} 
            total={totalSlides} 
          />

          {/* Content Container */}
          <div className="flex-grow p-4 md:p-8 overflow-y-auto relative bg-white">
            <div key={currentSlide.id} className="h-full">
               {currentSlide.component}
            </div>
          </div>

          <NotesOverlay 
            note={currentSlide.note} 
            isVisible={showNotes} 
          />
        </div>
      </div>

      <Controls
        currentSlide={currentSlideIndex}
        totalSlides={totalSlides}
        onNext={handleNext}
        onPrev={handlePrev}
        showNotes={showNotes}
        onToggleNotes={() => setShowNotes(!showNotes)}
      />
    </div>
  );
};

export default App;