/** @format */
'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		console.log('[Navbar] Component mounted. Current open state:', open);
	}, [open]);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Show navbar jika scroll up, hide jika scroll down
			if (currentScrollY < lastScrollY) {
				setIsVisible(true);
			} else if (currentScrollY > lastScrollY && currentScrollY > 100) {
				setIsVisible(false);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	const handleToggleClick = () => {
		console.log('[Navbar] Toggle clicked, current open state:', open);
		setOpen((prev) => {
			console.log('[Navbar] State changing from', prev, 'to', !prev);
			return !prev;
		});
	};

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-md border-b border-gray-800 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
			{/* Menu Desktop */}
			<div className='hidden md:flex gap-6 w-10/12 text-sm text-white'>
				<a href='#home' className='cursor-pointer hover:text-yellow-400 transition'>
					Home
				</a>
				<a href='#portfolio' className='cursor-pointer hover:text-yellow-400 transition'>
					Portfolio
				</a>
				<a href='#work-experience' className='cursor-pointer hover:text-yellow-400 transition'>
					Work Experience
				</a>
			</div>

			<img src='/NR.png' alt='logo' className='max-w-1/12 aspect-3/3' />

			{/* Hamburger */}
			<button type='button' className='md:hidden text-2xl p-2 z-50 pointer-events-auto border-2 border-red-500 text-white bg-black/50 rounded' aria-label={open ? 'Tutup menu' : 'Buka menu'} onClick={handleToggleClick}>
				☰
			</button>

			{/* Menu Mobile */}
			{open && (
				<div className='absolute top-14 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden z-40 pointer-events-auto'>
					<a href='#home' onClick={() => setOpen(false)} className='text-black hover:text-yellow-400 transition'>
						Home
					</a>
					<a href='#portfolio' onClick={() => setOpen(false)} className='text-black hover:text-yellow-400 transition'>
						Portfolio
					</a>
					<a href='#work-experience' onClick={() => setOpen(false)} className='text-black hover:text-yellow-400 transition'>
						Work Experience
					</a>
				</div>
			)}
		</nav>
	);
}
