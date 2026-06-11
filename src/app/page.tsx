/** @format */

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import SplashCursor from '@/components/SplashCursor';

/** @format */

export default function Home() {
	return (
		<div className='image'>
			<SplashCursor />
			<Navbar />
			<Hero />
			<About />
		</div>
	);
}
