"use client"
import { Typewriter } from 'nextjs-simple-typewriter';
import Link from "next/link";
import { _useAuth } from '@/context/Auth';
import { useRouter } from 'next/navigation';
// import { useSearchParams } from 'next/navigation'
// import { usePathname } from 'next/navigation'
// import { useEffect } from 'react';


export default function Home() {

	const router = useRouter();

	const [auth] = _useAuth();// Can be used later for authorization purposes

	console.log("From Main Page auth = ", auth);
	
	return (auth?.role ? setTimeout(() => {
		router.push(`/${auth.role}`)
	}, 1000) :
		<div className="flex flex-col h-screen items-center justify-center">
			<h1 className="text-4xl font-bold font-mono text-neutral-200">Ticketing Management System</h1>
			<h1 className="text-2xl my-5 font-bold font-mono text-neutral-200">
				<Typewriter
					words={['Manage Tickets Efficiently.', 'Streamline tasks with precision.', 'Empower collaboration.', 'Amplify productivity.']}
					loop={0}
				/>
			</h1>
			
			<div className="flex gap-10 mt-5">
				<Link className="rounded bg-amber-300 px-5 py-2 shadow-lg shadow-slate-900 hover:shadow-none hover:bg-amber-400 font-mono font-semibold" href={'/login'}>Login</Link>
				<Link className="rounded bg-amber-300 px-5 py-2 shadow-lg shadow-slate-900 hover:shadow-none hover:bg-amber-400 font-mono font-semibold" href={'/register'}>Register</Link>
			</div>
			
		</div>
	);
}
