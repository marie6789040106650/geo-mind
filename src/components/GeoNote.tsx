import React from 'react';

interface GeoNoteProps {
  label: string;
  className?: string;
}

export const GeoNote: React.FC<GeoNoteProps> = ({ label, className = '' }) => {
  return (
    <div className={`font-mono text-[0.7rem] text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-2 py-1 rounded inline-flex items-center tracking-tight ${className}`}>
      <span className="font-bold mr-1.5 select-none text-accent-cyan">&gt;</span>
      {label}
    </div>
  );
};