import React from 'react';

export function DecorativeBackgroundSVG() {
  return (
    <svg
      className="absolute top-0 right-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
      width={404}
      height={384}
      fill="none"
      viewBox="0 0 404 384"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className="text-warm-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={384}
        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
      />
    </svg>
  );
}
