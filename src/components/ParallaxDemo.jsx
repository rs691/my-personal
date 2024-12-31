
import { Moon, Stars, Sun, Cloud, Mountain, Trees } from 'lucide-react';

const ParallaxDemo = () => {
  return (
    <div className="relative h-screen overflow-y-auto">
      {/* First page - Night sky */}
      <div className="sticky top-0 h-screen bg-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <Stars className="text-white w-12 h-12 animate-pulse" />
        </div>
        <Moon className="text-gray-200 w-32 h-32" />
      </div>

      {/* Second page - Dawn */}
      <div className="sticky top-0 h-screen bg-purple-900 flex items-center justify-center">
        <div className="absolute top-10 right-10">
          <Cloud className="text-gray-300 w-16 h-16" />
        </div>
        <Sun className="text-yellow-200 w-32 h-32 animate-pulse" />
      </div>

      {/* Third page - Day */}
      <div className="sticky top-0 h-screen bg-sky-400 flex items-center justify-center">
        <div className="absolute inset-0 flex items-end justify-center pb-20">
          <Mountain className="text-gray-700 w-64 h-64" />
        </div>
        <div className="absolute top-20">
          <Sun className="text-yellow-300 w-24 h-24" />
        </div>
        <div className="absolute top-40 left-20">
          <Cloud className="text-white w-20 h-20" />
        </div>
      </div>

      {/* Fourth page - Sunset */}
      <div className="sticky top-0 h-screen bg-gradient-to-b from-orange-400 to-rose-600 flex items-center justify-center">
        <div className="absolute inset-0 flex items-end justify-center">
          <Trees className="text-gray-900 w-96 h-96" />
        </div>
        <div className="absolute bottom-0 w-full h-1/3 bg-gray-900/20" />
      </div>
    </div>
  );
};

export default ParallaxDemo;