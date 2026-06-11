/** @format */

'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
	const projects = [
		{
			id: 1,
			title: 'Personal Portfolio',
			category: 'Web Development',
			description: 'Frontend Web Developer | React | Bootstrap | https://nrman.netlify.app',
		},
		{
			id: 2,
			title: 'Wear Fashion',
			category: 'Web Development',
			description: 'Bootstrap | HTML | CSS | JavaScript | https://wear-fashion.netlify.app',
		},
		{
			id: 3,
			title: 'Kenangan Senja',
			category: 'Web Development',
			description: 'Bootstrap | HTML | CSS | JavaScript | https://kenapakopi12.netlify.app',
		},
		{
			id: 4,
			title: 'Augmented Reality Berbasis Android',
			category: 'Mobile App (Augmented Reality)',
			description: 'Unity | C#',
		},
	];

	const recentWorks = [
		{
			id: 1,
			title: 'Personal Portfolio',
			image: '/PP.svg',
			description: 'Personal portfolio website',
		},
		{
			id: 2,
			title: 'UI/UX Design',
			image: '/Phone.svg',
			description: 'Modern UI/UX design project',
		},
	];

	const experiences = [
		{
			id: 1,
			company: 'PT Bank Central Asia Tbk',
			position: 'Staff Administration Operational (Recurring Autopay BCA) - Urusan Settlement Domestik (USD)',
			period: '2023 - Present',
			description: [
				'• Merchant Autopay Recurring Billing Payment System.',
				'• Handling settlement process for domestic and international transactions.',
				'• Collaborating with cross-functional teams to ensure smooth operations.',
				'• Encrypt and Decrypt PGP from Merchant.',
			],
		},
		{
			id: 2,
			company: 'Diskominfo Kabupaten Sleman',
			position: 'Pranata Ahli Komputer Pertama (Internship)',
			period: '2022',
			description:
				'My internship contribution to the Ministry of Communication and Information was assisting the Public Communication Information (IKP) division in documenting events and creating videos after events held by the Sleman Regional Government, as well as contributing to the live streaming of Sleman TV on YouTube during Sleman Regional Government events.',
		},
		{
			id: 3,
			company: 'Codemi',
			position: 'Video Editor (Internship)',
			period: '2022 - 2023',
			description: [
				'• Participate in daily meetings with the team to discuss project progress, timelines, and content strategy.Edit and produce high-quality video content for Codemi social media platforms including but not limited. to Instagram Facebook YouTube and LinkedIn.',
				'• Collaborate with the marketing and creative teams to create engaging videos aligned with the brands voice and messaging.',
				'• Collaborating with cross-functional teams to ensure smooth operations.',
				'• Encrypt and Decrypt PGP from Merchant.',
			],
		},
	];

	return (
		<main className='w-full bg-linear-to-b from-black via-gray-900 to-black text-white'>
			{/* About Me Section */}
			<section id='about' className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20'>
				<div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
					{/* Left Content */}
					<div className='space-y-6'>
						<div>
							<p className='text-yellow-400 text-sm font-semibold mb-2'>About Me</p>
							<h1 className='text-4xl md:text-5xl font-bold mb-4'>Software Engineer</h1>
							<div className='h-1 w-12 bg-yellow-400'></div>
						</div>

						<p className='text-gray-300 text-base md:text-lg leading-relaxed'>
							I&apos;m <b>Nur Rahman</b> - a self-driven creative technologist based in Tangerang City, Indonesia. I hold a <b>Bachelor of Informatics</b> from <b>Amikom University Yogyakarta</b>. <b>Since 2022</b>, I have been actively
							involved in various projects, including personal portfolio development, UI/UX design for travel platforms, and creating an augmented reality project for the Periodic Table of Chemical Elements (Sistem Periodik Unsur Kimia) as
							part of my thesis. I am passionate about leveraging technology to create innovative solutions and continuously expanding my skill set in software engineering and design. <b>Since 2023</b>, I have been working as an{' '}
							<b>Administrative Operation</b> at a Banking company, where I contribute to Autopay BCA, a solution for all your routine bill payments. Paid automatically through the Autodebit system from BCA Credit Card.
						</p>

						<div className='space-y-4'>
							<h3 className='text-xl font-semibold'>Skills</h3>
							<div className='flex flex-wrap gap-2'>
								{['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MySQL', 'RestAPI', 'Power Automate', 'Microsoft Office 365', 'Lavarel', 'Notion'].map((skill) => (
									<span key={skill} className='px-4 py-2 bg-gray-800 rounded-full text-sm border border-gray-700 hover:border-yellow-400 transition'>
										{skill}
									</span>
								))}
							</div>
						</div>

						<Link href='#projects' className='inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition mt-6'>
							Scroll For More
						</Link>
					</div>

					{/* Right Side - Decorative Element */}
					<div className='hidden md:flex items-center justify-center'>
						<div className='relative w-96 h-96'>
							<img src='/CINCIN.svg' alt='circle' className='w-full h-full object-contain opacity-80 animate-spin-slow' />
						</div>
					</div>
				</div>
			</section>

			{/* Projects Experience Section */}
			<section id='portfolio' className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-black to-gray-900'>
				<div className='max-w-6xl mx-auto'>
					<div className='mb-12'>
						<p className='text-yellow-400 text-sm font-semibold mb-2'>Projects Experience</p>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>Projects</h2>
						<div className='h-1 w-12 bg-yellow-400'></div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{projects.map((project) => (
							<div key={project.id} className='group bg-linear-to-br from-gray-800 to-gray-900 rounded-lg p-6 hover:from-gray-700 hover:to-gray-800 transition border border-gray-700 hover:border-yellow-400 cursor-pointer'>
								<div className='h-40 bg-linear-to-br from-gray-700 to-gray-800 rounded-lg mb-4 flex items-center justify-center'>
									<div className='text-center'>
										<div className='text-4xl mb-2'>🎨</div>
										<p className='text-xs text-gray-400'>{project.category}</p>
									</div>
								</div>
								<h3 className='text-lg font-semibold mb-2 group-hover:text-yellow-400 transition'>{project.title}</h3>
								<p className='text-sm text-gray-400'>{project.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Recent Work Section */}
			<section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-300'>
				<div className='max-w-6xl mx-auto'>
					<div className='mb-12'>
						<p className='text-yellow-400 text-sm font-semibold mb-2'>Work</p>
						<h2 className='text-4xl md:text-5xl font-bold mb-4 text-black'>Projects</h2>
						<div className='h-1 w-12 bg-yellow-400'></div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{recentWorks.map((work) => (
							<div key={work.id} className='group bg-black rounded-2xl overflow-hidden hover:shadow-2xl transition border border-gray-700 hover:border-yellow-400'>
								<div className='relative h-80 bg-black overflow-hidden flex items-center justify-center'>
									<img src={work.image} alt={work.title} className='w-full h-full object-contain' />
								</div>
								<div className='p-6'>
									<h3 className='text-2xl font-semibold mb-2 group-hover:text-yellow-400 transition text-white'>{work.title}</h3>
									<p className='text-gray-400'>{work.description}</p>
									<button className='mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition'>View Project</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Work Experience Section */}
			<section id='work-experience' className='py-48 -mt-40 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-black to-gray-900'>
				<div className='max-w-6xl mx-auto'>
					<div className='mb-12'>
						<p className='text-yellow-400 text-sm font-semibold mb-2'>Work Experience</p>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>Work</h2>
						<div className='h-1 w-12 bg-yellow-400'></div>
					</div>

					<div className='space-y-8'>
						{experiences.map((experience) => (
							<div key={experience.id} className='group bg-linear-to-r from-gray-800 to-gray-900 rounded-lg p-8 hover:from-gray-700 hover:to-gray-800 transition border-l-4 border-gray-700 hover:border-yellow-400'>
								<div className='flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4'>
									<div>
										<h3 className='text-2xl font-semibold group-hover:text-yellow-400 transition'>{experience.position}</h3>
										<p className='text-yellow-400 font-semibold mt-1'>{experience.company}</p>
									</div>
									<p className='text-gray-400 text-sm md:text-base whitespace-nowrap'>{experience.period}</p>
								</div>
								<div className='text-gray-300 space-y-1'>{Array.isArray(experience.description) ? experience.description.map((desc, idx) => <p key={idx}>{desc}</p>) : <p>{experience.description}</p>}</div>
								<div className='text-gray-300 space-y-1'>{Array.isArray(experience.description) ? experience.description.map((desc, idx) => <p key={idx}>{desc}</p>) : <p>{experience.description}</p>}</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
