import React, { useState } from 'react';
import { Users, Briefcase, Sparkles } from 'lucide-react';

const HiringWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showText, setShowText] = useState(false);

    const handleArrowClick = () => {
        setIsOpen(!isOpen);
        setShowText(false);
    };

    const handleNavigate = () => {
        window.location.href = '/careers';
    };

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
            <div className="relative flex flex-col items-end gap-3">
                {/* Arrow Button - Always Visible with modern styling */}
                <button
                    onClick={handleArrowClick}
                    className="group w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 flex items-center justify-center transition-all duration-300 rounded-l-2xl shadow-2xl border-l-4 border-yellow-400"
                    aria-label={isOpen ? 'Close hiring widget' : 'Open hiring widget'}
                >
                    <div className="absolute inset-0 bg-yellow-400/10 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className={`relative text-white text-2xl transition-all duration-300 ${isOpen ? 'rotate-180 scale-110' : ''
                        }`}>
                        {isOpen ? '→' : '←'}
                    </span>
                </button>

                {/* Main Widget - Shows when arrow is clicked */}
                <div
                    className={`relative transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 pointer-events-none'
                        }`}
                >
                    <div className="flex items-center">
                        {/* Expandable Text - appears on icon hover */}
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${showText ? 'w-56 opacity-100' : 'w-0 opacity-0'
                                }`}
                        >
                            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-24 flex items-center justify-center px-8 shadow-2xl relative overflow-hidden">
                                {/* Animated background effect */}
                                <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>

                                <button
                                    onClick={handleNavigate}
                                    className="relative text-white font-bold text-xl whitespace-nowrap transition-transform hover:scale-105 cursor-pointer flex items-center gap-2 z-10"
                                >
                                    <Sparkles size={20} className="animate-pulse" />
                                    We're Hiring!
                                </button>
                            </div>
                        </div>

                        {/* Icon Button - appears when arrow clicked */}
                        <button
                            onClick={handleNavigate}
                            onMouseEnter={() => setShowText(true)}
                            onMouseLeave={() => setShowText(false)}
                            className={`group relative w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 cursor-pointer shadow-2xl overflow-hidden ${showText ? 'rounded-r-3xl' : 'rounded-l-3xl'
                                }`}
                        >
                            {/* Animated background shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                            {/* Pulsing ring effect */}
                            <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>

                            {/* Icon container */}
                            <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-50"></div>
                                <Briefcase className="relative w-7 h-7 text-yellow-500" strokeWidth={2.5} />
                            </div>

                            {/* Decorative dots */}
                            <div className="absolute top-2 right-2 w-2 h-2 bg-white/40 rounded-full"></div>
                            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                        </button>
                    </div>
                </div>

                {/* Pulse indicator when closed */}
                {!isOpen && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg">
                        <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HiringWidget;