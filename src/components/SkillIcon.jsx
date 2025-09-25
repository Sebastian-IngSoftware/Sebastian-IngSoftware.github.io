import React, { useState, useEffect } from "react";

export default function SkillIcon({ skill, icon }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detección más simple y directa
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      setShowTooltip(!showTooltip);
    }
  };

  // Cerrar tooltip si se hace click afuera (solo móvil)
  useEffect(() => {
    if (!isMobile || !showTooltip) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest('[data-skill-tooltip]')) {
        setShowTooltip(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile, showTooltip]);

  return (
    <div
      className={`group relative w-20 h-20 flex items-center justify-center bg-white rounded-xl shadow-lg border border-border transition-all duration-300 hover:scale-105 select-none ${
        isMobile && showTooltip ? 'scale-105' : ''
      }`}
      onClick={handleInteraction}
      data-skill-tooltip
      style={{ 
        cursor: isMobile ? 'pointer' : 'default'
      }}
    >
      <img
        src={`/svgs/${icon}.svg`}
        alt={skill + " icon"}
        className={`w-12 h-12 object-contain transition-all duration-300 group-hover:translate-y-[-10px] z-0 ${
          isMobile && showTooltip ? 'translate-y-[-10px]' : ''
        }`}
        loading="lazy"
      />
      
      <span
        className={`absolute left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-xs transition-all duration-300 whitespace-nowrap bottom-0 translate-y-4 z-10 ${
          isMobile
            ? showTooltip
              ? "opacity-100 bottom-2 translate-y-0"
              : "opacity-0"
            : "group-hover:opacity-100 group-hover:bottom-2 group-hover:translate-y-0 opacity-0"
        }`}
      >
        {skill}
      </span>
    </div>
  );
}