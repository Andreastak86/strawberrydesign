import Link from "next/link";
import { MessageCircle, Home } from "lucide-react";

export default function Navbar() {
    return (
        <nav className='sticky top-0 z-50 w-full border-b border-strawberry-medium/20 bg-strawberry-light/80 backdrop-blur-md'>
            <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16 md:h-20'>
                    {/* Logo / Navn */}
                    <Link href='/' className='flex items-center gap-2 group'>
                        <span className='text-2xl'>🍓</span>
                        <span className='font-soft font-bold text-xl text-strawberry-red tracking-tight group-hover:opacity-80 transition-opacity'>
                            Strawberry Design
                        </span>
                    </Link>

                    {/* Navigasjonslenker */}
                    <div className='flex items-center gap-4 sm:gap-8'>
                        <Link
                            href='/'
                            className='flex items-center gap-1.5 text-bee-brown/70 hover:text-strawberry-red font-semibold transition-colors text-sm sm:text-base'
                        >
                            <Home size={18} />
                            <span className='hidden sm:inline'>Hjem</span>
                        </Link>

                        <Link
                            href='/kontakt'
                            className='flex items-center gap-1.5 bg-strawberry-red text-white px-4 py-2 rounded-full hover:bg-strawberry-red/90 transition-all shadow-sm hover:shadow-md text-sm sm:text-base font-bold'
                        >
                            <MessageCircle size={18} />
                            <span>Kontakt</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
