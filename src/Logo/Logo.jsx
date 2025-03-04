import React from 'react';

export default function Logo() {
    return (
        <div className="flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="90 0 200 80" // Adjusted viewBox to center the logo vertically
                className="w-64 h-16" // Adjusted size to match text-3xl
            >
                <defs>
                    <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#34495e', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#2c3e50', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                {/* Web/Network Concept */}
                <path
                    d="M40 40 Q50 20, 60 40 Q70 60, 80 40"
                    stroke="url(#webGradient)"
                    strokeWidth="4"
                    fill="none"
                />
                <path
                    d="M30 40 Q50 10, 70 40 Q90 70, 110 40"
                    stroke="url(#webGradient)"
                    strokeWidth="4"
                    fill="none"
                    opacity="0.7"
                />

                {/* Subtle Connection Nodes */}
                <circle cx="40" cy="40" r="5" fill="url(#webGradient)" />
                <circle cx="80" cy="40" r="5" fill="url(#webGradient)" />
                <circle cx="60" cy="40" r="5" fill="url(#webGradient)" />

                {/* Text */}
                <text
                    x="120"
                    y="50"
                    fontFamily="Arial, sans-serif"
                    fontSize="40"
                    fontWeight="bold"
                    fill="#2c3e50"
                    className="text-gray-80 font-extrabold" // Use Tailwind class for text color
                >
                    BioCraft
                </text>
            </svg>
        </div>
    );
}