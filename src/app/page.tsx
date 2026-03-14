import Image from "next/image";
import { Instagram, Facebook, Heart } from "lucide-react";

export default function Home() {
    return (
        <main className='min-h-screen flex flex-col items-center justify-center p-6 text-center'>
            <div className='mb-12 animate-float'>
                <div className='relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-white/40 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/60 overflow-hidden'>
                    <Image
                        src='/logo.jpg'
                        alt='Strawberry Design Logo'
                        fill
                        className='object-cover'
                        priority
                    />
                </div>
            </div>

            <h1 className='font-soft text-5xl md:text-7xl font-bold text-strawberry-red mb-6 tracking-tight'>
                Strawberry Design
            </h1>

            <p className='max-w-md text-lg md:text-xl text-bee-brown/90 mb-12 leading-relaxed font-medium'>
                Noe søtt og kreativt er i ferd med å blomstre. Følg oss mens vi
                gjør oss klare! 🐝✨
            </p>

            {/* Knapper med moderne styling */}
            <div className='flex flex-col sm:flex-row gap-6 w-full max-w-sm sm:max-w-none justify-center items-center'>
                <a
                    href='https://www.instagram.com/strawberrydesign.no/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 bg-white hover:bg-strawberry-medium text-strawberry-red px-10 py-5 rounded-super-soft shadow-lg transition-all duration-500 hover:-translate-y-1 font-bold text-lg border border-strawberry-medium/20'
                >
                    <Instagram size={24} strokeWidth={2.5} />
                    Instagram
                </a>

                <a
                    href='https://www.facebook.com/lise.dahle.9'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 bg-strawberry-red hover:bg-strawberry-red/90 text-white px-10 py-5 rounded-super-soft shadow-lg transition-all duration-500 hover:-translate-y-1 font-bold text-lg'
                >
                    <Facebook size={24} fill='currentColor' />
                    Facebook
                </a>
            </div>

            {/* Footer */}
            <footer className='mt-24 text-bee-brown/40 text-sm font-medium tracking-wide flex flex-col items-center gap-4'>
                <div className='flex items-center justify-center gap-2'>
                    <span>Følg med</span>
                    <Heart
                        size={14}
                        className='fill-strawberry-red text-strawberry-red'
                    />
                    <span>STRAWBERRYDESIGN.NO</span>
                </div>

                <p className='text-xs opacity-70'>
                    &copy; {new Date().getFullYear()} Strawberry Design. Alle
                    rettigheter reservert.
                </p>
            </footer>
        </main>
    );
}
