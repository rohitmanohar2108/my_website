import React from 'react';

function layout() {
  return (
    <div className="min-h-screen bg-gray-900 p-0 m-0">
      <div className="w-full h-52 grid grid-cols-8 gap-px bg-gray-800 relative">
        {/* Box 1 - Diagonal grid pattern */}
        <div className="bg-gray-800 relative overflow-hidden border border-gray-700">
          <div className="absolute inset-0">
            {/* Primary diagonal lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`diag1-${i}`}
                className="absolute w-px h-full bg-gray-600 opacity-40"
                style={{
                  left: `${i * 20 + 10}%`,
                  transform: 'rotate(45deg)',
                  transformOrigin: 'top left',
                }}
              />
            ))}
            {/* Secondary diagonal lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`diag2-${i}`}
                className="absolute w-px h-full bg-gray-500 opacity-25"
                style={{
                  left: `${i * 20 + 20}%`,
                  transform: 'rotate(45deg)',
                  transformOrigin: 'top left',
                }}
              />
            ))}
            {/* Grid dots */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`dot-${i}`}
                className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-30"
                style={{
                  left: `${(i % 3) * 33 + 16}%`,
                  top: `${Math.floor(i / 3) * 33 + 16}%`,
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/60 to-transparent blur-sm"></div>
        </div>

        {/* Box 2 - Reverse diagonal grid pattern */}
        <div className="bg-gray-800 relative overflow-hidden border border-gray-700">
          <div className="absolute inset-0">
            {/* Primary reverse diagonal lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`rev-diag1-${i}`}
                className="absolute w-px h-full bg-gray-600 opacity-40"
                style={{
                  right: `${i * 20 + 10}%`,
                  transform: 'rotate(-45deg)',
                  transformOrigin: 'top right',
                }}
              />
            ))}
            {/* Secondary reverse diagonal lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`rev-diag2-${i}`}
                className="absolute w-px h-full bg-gray-500 opacity-25"
                style={{
                  right: `${i * 20 + 20}%`,
                  transform: 'rotate(-45deg)',
                  transformOrigin: 'top right',
                }}
              />
            ))}
            {/* Grid dots */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`rev-dot-${i}`}
                className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-30"
                style={{
                  left: `${(i % 3) * 33 + 16}%`,
                  top: `${Math.floor(i / 3) * 33 + 16}%`,
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/60 to-transparent blur-sm"></div>
        </div>

        {/* Box 3 - Vertical grid pattern */}
        <div className="bg-gray-800 relative overflow-hidden border border-gray-700">
          <div className="absolute inset-0">
            {/* Primary vertical lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`vert1-${i}`}
                className="absolute w-px h-full bg-gray-600 opacity-40"
                style={{ left: `${i * 20 + 10}%` }}
              />
            ))}
            {/* Secondary vertical lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`vert2-${i}`}
                className="absolute w-px h-full bg-gray-500 opacity-25"
                style={{ left: `${i * 20 + 20}%` }}
              />
            ))}
            {/* Grid dots */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`vert-dot-${i}`}
                className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-30"
                style={{
                  left: `${(i % 3) * 33 + 16}%`,
                  top: `${Math.floor(i / 3) * 33 + 16}%`,
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/60 to-transparent blur-sm"></div>
        </div>

        {/* Box 4 - Horizontal grid pattern */}
        <div className="bg-gray-800 relative overflow-hidden border border-gray-700">
          <div className="absolute inset-0">
            {/* Primary horizontal lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`horiz1-${i}`}
                className="absolute w-full h-px bg-gray-600 opacity-40"
                style={{ top: `${i * 20 + 10}%` }}
              />
            ))}
            {/* Secondary horizontal lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`horiz2-${i}`}
                className="absolute w-full h-px bg-gray-500 opacity-25"
                style={{ top: `${i * 20 + 20}%` }}
              />
            ))}
            {/* Grid dots */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`horiz-dot-${i}`}
                className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-30"
                style={{
                  left: `${(i % 3) * 33 + 16}%`,
                  top: `${Math.floor(i / 3) * 33 + 16}%`,
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/60 to-transparent blur-sm"></div>
        </div>

        {/* Box 5 - Cross diagonal pattern */}
        <div className="bg-gray-800 relative overflow-hidden border border-gray-700">
          <div className="absolute inset-0">
            {/* Diagonal lines (45deg) */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`cross-diag1-${i}`}
                className="absolute w-px h-full bg-gray-600 opacity-40"
                style={{
                  left: `${i * 33 + 16}%`,
                  transform: 'rotate(45deg)',
                  transformOrigin: 'top left',
                }}
              />
            ))}
            {/* Reverse diagonal lines (-45deg) */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`cross-diag2-${i}`}
                className="absolute w-px h-full bg-gray-500 opacity-25"
                style={{
                  right: `${i * 33 + 16}%`,
                  transform: 'rotate(-45deg)',
                  transformOrigin: 'top right',
                }}
              />
            ))}
            {/* Grid dots */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`cross-dot-${i}`}
                className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-30"
                style={{
                  left: `${(i % 3) * 33 + 16}%`,
                  top: `${Math.floor(i / 3) * 33 + 16}%`,
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/60 to-transparent blur-sm"></div>
        </div>

        {/* Box 6 - Diagonal grid pattern (same as Box 1) */}
        <div className="bg-gray-800 relative overflow-hidden border border-gray-700">
          <div className="absolute inset-0">
            {/* Primary diagonal lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`diag1-b6-${i}`}
                className="absolute w-px h-full bg-gray-600 opacity-40"
                style={{
                  left: `${i * 20 + 10}%`,
                  transform: 'rotate(45deg)',
                  transformOrigin: 'top left',
                }}
              />
            ))}
            {/* Secondary diagonal lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`diag2-b6-${i}`}
                className="absolute w-px h-full bg-gray-500 opacity-25"
                style={{
                  left: `${i * 20 + 20}%`,
                  transform: 'rotate(45deg)',
                  transformOrigin: 'top left',
                }}
              />
            ))}
            {/* Grid dots */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`dot-b6-${i}`}
                className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-30"
                style={{
                  left: `${(i % 3) * 33 + 16}%`,
                  top: `${Math.floor(i / 3) * 33 + 16}%`,
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/60 to-transparent blur-sm"></div>
        </div>

        {/* Box 7 - Reverse diagonal grid pattern (same as Box 2) */}
        <div className="bg-gray-800 relative overflow-hidden border border-gray-700">
          <div className="absolute inset-0">
            {/* Primary reverse diagonal lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`rev-diag1-b7-${i}`}
                className="absolute w-px h-full bg-gray-600 opacity-40"
                style={{
                  right: `${i * 20 + 10}%`,
                  transform: 'rotate(-45deg)',
                  transformOrigin: 'top right',
                }}
              />
            ))}
            {/* Secondary reverse diagonal lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`rev-diag2-b7-${i}`}
                className="absolute w-px h-full bg-gray-500 opacity-25"
                style={{
                  right: `${i * 20 + 20}%`,
                  transform: 'rotate(-45deg)',
                  transformOrigin: 'top right',
                }}
              />
            ))}
            {/* Grid dots */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`rev-dot-b7-${i}`}
                className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-30"
                style={{
                  left: `${(i % 3) * 33 + 16}%`,
                  top: `${Math.floor(i / 3) * 33 + 16}%`,
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/60 to-transparent blur-sm"></div>
        </div>

        {/* Box 8 - Grid intersection pattern */}
        <div className="bg-gray-800 relative overflow-hidden border border-gray-700">
          <div className="absolute inset-0">
            {/* Vertical lines */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`grid-vert-${i}`}
                className="absolute w-px h-full bg-gray-600 opacity-40"
                style={{ left: `${(i + 1) * 25}%` }}
              />
            ))}
            {/* Horizontal lines */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`grid-horiz-${i}`}
                className="absolute w-full h-px bg-gray-500 opacity-25"
                style={{ top: `${(i + 1) * 25}%` }}
              />
            ))}
            {/* Grid dots */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`grid-dot-${i}`}
                className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-30"
                style={{
                  left: `${(i % 3) * 33 + 16}%`,
                  top: `${Math.floor(i / 3) * 33 + 16}%`,
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/60 to-transparent blur-sm"></div>
        </div>
        
        {/* Enhanced full-width blur overlay from bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent blur-md pointer-events-none col-span-8"></div>
        
        {/* Additional atmospheric effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-900/20 pointer-events-none col-span-8"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900/10 via-transparent to-gray-900/10 pointer-events-none col-span-8"></div>
      </div>
    </div>
  );
}

export default layout;