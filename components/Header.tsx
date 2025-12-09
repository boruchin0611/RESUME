import React from 'react';

interface HeaderProps {
  title: string;
  current: number;
  total: number;
}

const Header: React.FC<HeaderProps> = ({ title, current, total }) => {
  if (current === 0) return null;

  return (
    <div className="bg-slate-100 px-6 py-4 flex justify-between items-center border-b border-slate-200 flex-shrink-0 animate-fadeIn">
      <h2 className="text-xl font-bold text-slate-700 truncate mr-4">{title}</h2>
      <div className="text-slate-400 text-sm whitespace-nowrap bg-slate-200 px-3 py-1 rounded-full font-mono">
        {current + 1} / {total}
      </div>
    </div>
  );
};

export default Header;