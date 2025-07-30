import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full cursor-pointer z-10 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-black/70"
  >
    <ChevronLeft className="w-8 h-8 font-bold" />
  </div>
);

export const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full cursor-pointer z-10 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-black/70"
  >
    <ChevronRight className="w-8 h-8 font-bold" />
  </div>
);
