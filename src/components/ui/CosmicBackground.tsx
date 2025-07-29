import React from 'react';

interface ParticleProps {
  index: number;
}

const StarburstLine: React.FC<{ index: number; layer: number }> = ({ index, layer }) => {
  const angle = (index * 360) / 64;
  const length = Math.random() * 400 + 250;
  const opacity = Math.random() * 0.8 + 0.3;
  const width = Math.random() * 2 + 0.5;
  
  // Create gradient colors based on layer
  const gradientColors = [
    'from-transparent via-blue-40 to-transparent',
    'from-transparent via-purple-400 to-transparent',
    'from-transparent via-cyan-300 to-transparent',
    'from-transparent via-pink-400 to-transparent'
  ];
  
  const orbColors = [
    'bg-blue-400',
    'bg-purple-400',
    'bg-cyan-300',
    'bg-pink-400'
  ];
  
  const gradientClass = gradientColors[layer % gradientColors.length];
  const orbColor = orbColors[layer % orbColors.length];
  
  // Calculate tip position
  const tipX = Math.sin((angle * Math.PI) / 180) * length;
  const tipY = -Math.cos((angle * Math.PI) / 180) * length;
  
  return (
    <div
      className="absolute origin-bottom"
      style={{
        left: '50%',
        bottom: '50%',
        transformOrigin: 'bottom center',
        transform: `rotate(${angle}deg) rotateX(${layer * 15}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Line */}
      <div
        className={`bg-gradient-to-t ${gradientClass}`}
        style={{
          width: `${width}px`,
          height: `${length}px`,
          opacity,
        }}
      />
      
      {/* Glowing orb at tip */}
      <div
        className={`absolute ${orbColor} rounded-full animate-pulse-orb`}
        style={{
          width: `${Math.random() * 8 + 4}px`,
          height: `${Math.random() * 8 + 4}px`,
          left: '50%',
          top: '0px',
          transform: 'translateX(-50%) translateY(-50%)',
          boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor, 0 0 ${Math.random() * 40 + 20}px currentColor`,
          animation: `pulse-orb ${Math.random() * 3 + 2}s ease-in-out infinite alternate, twinkle-orb ${Math.random() * 4 + 3}s ease-in-out infinite`,
          opacity: Math.random() * 0.6 + 0.4,
        }}
      />
      
      {/* Secondary smaller orb for extra sparkle */}
      <div
        className={`absolute ${orbColor} rounded-full animate-twinkle-fast`}
        style={{
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          left: '50%',
          top: `${Math.random() * 20 + 10}px`,
          transform: 'translateX(-50%)',
          boxShadow: `0 0 ${Math.random() * 15 + 8}px currentColor`,
          animation: `twinkle-fast ${Math.random() * 2 + 1}s ease-in-out infinite alternate`,
          opacity: Math.random() * 0.8 + 0.2,
        }}
      />
    </div>
  );
};

const OrbitingRing: React.FC<{ radius: number; speed: number; reverse?: boolean }> = ({ 
  radius, 
  speed, 
  reverse = false 
}) => {
  const particles = Array.from({ length: 12 }, (_, i) => i);
  
  return (
    <div 
      className={`absolute inset-0 flex items-center justify-center animate-spin-3d`}
      style={{
        animation: `spin3d ${speed}s linear infinite ${reverse ? 'reverse' : ''}`,
        transformStyle: 'preserve-3d',
      }}
    >
      <div 
        className="relative"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          transformStyle: 'preserve-3d',
        }}
      >
        {particles.map((index) => {
          const angle = (index * 360) / particles.length;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <div
              key={index}
              className="absolute w-3 h-3 bg-blue-300 rounded-full opacity-70 animate-pulse-ring"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translateZ(${Math.sin((angle * Math.PI) / 180) * 50}px)`,
                boxShadow: '0 0 15px currentColor, 0 0 30px rgba(59, 130, 246, 0.5)',
                animation: `pulse-ring ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const CosmicBackground: React.FC = () => {
  const starburstLines = Array.from({ length: 64 }, (_, i) => i);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900 overflow-hidden perspective-1000">
      {/* Main 3D Rotating Starburst */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="relative animate-spin-3d-slow"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(15deg)',
          }}
        >
          {starburstLines.map((index) => (
            <StarburstLine key={index} index={index} layer={0} />
          ))}
        </div>
      </div>
      
      {/* Secondary 3D Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="relative animate-spin-3d-reverse"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-10deg) rotateY(20deg)',
          }}
        >
          {starburstLines.slice(0, 32).map((index) => (
            <StarburstLine key={`secondary-${index}`} index={index * 2} layer={1} />
          ))}
        </div>
      </div>
      
      {/* Third 3D Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="relative animate-spin-3d-medium"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(45deg) rotateZ(10deg)',
          }}
        >
          {starburstLines.slice(0, 24).map((index) => (
            <StarburstLine key={`tertiary-${index}`} index={index * 3} layer={2} />
          ))}
        </div>
      </div>
      
      {/* Orbiting Rings */}
      <OrbitingRing radius={150} speed={40} />
      <OrbitingRing radius={250} speed={60} reverse />
      <OrbitingRing radius={350} speed={80} />
      
      {/* Central Pulsing Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-8 h-8 bg-white rounded-full animate-pulse-glow opacity-95" 
               style={{ boxShadow: '0 0 40px #ffffff, 0 0 80px #3b82f6, 0 0 120px #8b5cf6, 0 0 160px #ec4899' }} />
          <div className="absolute inset-0 w-8 h-8 bg-blue-400 rounded-full animate-spin-fast opacity-60" 
               style={{ animation: 'spin 2s linear infinite' }} />
          <div className="absolute inset-0 w-6 h-6 bg-purple-400 rounded-full animate-spin-reverse opacity-40 m-1" 
               style={{ animation: 'spin 3s linear infinite reverse' }} />
        </div>
      </div>
      
      {/* Enhanced Nebula Effect */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-float-slow opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full blur-3xl animate-float-slow-reverse opacity-25" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-float-medium opacity-20" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-500 rounded-full blur-3xl animate-float-slow opacity-15" />
      </div>
      
      {/* Content Overlay with Enhanced Typography */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-16 lg:px-24">
        <div className="text-white cosmic-text">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-thin tracking-[0.2em] opacity-95 animate-text-glow">
            Understand
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-blue-400 to-transparent mt-4 animate-pulse" />
        </div>
        <div className="text-white text-right cosmic-text">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-thin tracking-[0.2em] opacity-95 animate-text-glow">
            The Universe
          </h1>
          <div className="w-32 h-px bg-gradient-to-l from-purple-400 to-transparent mt-4 ml-auto animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default CosmicBackground;