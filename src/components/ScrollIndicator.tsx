/** @format */

'use client';

import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const scrolled = (window.scrollY / windowHeight) * 100;
			setScrollProgress(scrolled);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='fixed bottom-8 right-8 z-40 flex flex-col items-center gap-2'>
			{/* Scroll Progress Circle */}
			<div className='relative w-16 h-16'>
				<svg className='w-full h-full transform -rotate-90' viewBox='0 0 60 60'>
					{/* Background Circle */}
					<circle cx='30' cy='30' r='28' fill='none' stroke='#374151' strokeWidth='2' />
					{/* Progress Circle */}
					<circle cx='30' cy='30' r='28' fill='none' stroke='#FBBF24' strokeWidth='2' strokeDasharray={`${2 * Math.PI * 28}`} strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`} className='transition-all duration-300' />
				</svg>
				{/* Percentage Text */}
				<div className='absolute inset-0 flex items-center justify-center'>
					<span className='text-sm font-bold text-yellow-400'>{Math.round(scrollProgress)}%</span>
				</div>
			</div>

			{/* Scroll Arrow */}
			<div className='text-yellow-400 animate-bounce text-xl'>↓</div>
		</div>
	);
}
