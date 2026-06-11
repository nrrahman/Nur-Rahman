/** @format */

import React from 'react';
import ScrollFloat from './ScrollFloat';
import Link from 'next/link';

function hero() {
	return (
		<section id='home' className='relative min-h-screen overflow-hidden flex items-center justify-center -mt-20'>
			<ScrollFloat animationDuration={1.5} ease='back.inOut(2)' stagger={0.05} useScrollTrigger={false}>
				Nur Rahman
			</ScrollFloat>

			<img src='/CINCIN.svg' alt='circle' className='absolute w-[100px] md:w-[300px] opacity-80 animate-spin-slow' />

			<div className='absolute bottom-20 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5 text-white mt-28'>
				<div className='w-full text-center md:text-left '>
					<h3 className='font-semibold text-lg'>Frontend Web Developer</h3>
					<img src='/line.svg' alt='' />
					<p className='text-sm text-gray-300 mt-2'>
						bertanggung jawab untuk mengembangkan bagian tampilan atau antarmuka pengguna (UI) dari situs web. Mereka bekerja dengan bahasa pemrograman seperti HTML (HyperText Markup Language), CSS (Cascading Style Sheets), dan JavaScript
						untuk membuat halaman web yang interaktif, menarik, dan responsif
					</p>
				</div>

				<div className='w-10/12 gap-10'>
					<h3 className='font-semibold text-2xl text-lg'>UI/UX Designer</h3>
					<img src='/line.svg' alt='' />
					<p className='text-sm text-gray-300 mt-2'>Mendesain pengalaman pengguna yang intuitif dan menarik agar user nyaman saat berinteraksi dengan produk digital.</p>
				</div>

				<div className='flex items-end justify-end'>
					<Link href='#about' className='inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition'>
						Scroll For More
					</Link>
				</div>
			</div>
		</section>
	);
}

export default hero;
