import { Heart, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full border-t border-strawberry-medium/10 bg-white/30 py-12 px-6'>
            <div className='max-w-5xl mx-auto flex flex-col items-center gap-8'>
                {/* Sosiale snarveier i footer også */}
                <div className='flex gap-6 text-strawberry-red/60'>
                    <a
                        href='#'
                        className='hover:text-strawberry-red transition-colors'
                    >
                        <Instagram size={24} />
                    </a>
                    <a
                        href='#'
                        className='hover:text-strawberry-red transition-colors'
                    >
                        <Facebook size={24} />
                    </a>
                </div>

                {/* Tekst og branding */}
                <div className='flex flex-col items-center gap-3 text-center'>
                    <div className='flex items-center gap-2 font-soft font-bold text-bee-brown/40 tracking-[0.2em] text-[10px] sm:text-xs uppercase'>
                        <span>Stay Tuned</span>
                        <Heart
                            size={12}
                            className='fill-strawberry-red text-strawberry-red animate-pulse'
                        />
                        <span>Strawberrydesign.no</span>
                    </div>

                    <div className='h-px w-12 bg-strawberry-medium/30' />

                    <p className='text-bee-brown/30 text-[10px] sm:text-xs font-medium'>
                        &copy; {currentYear} STRAWBERRY DESIGN — SKAPT MED
                        KJÆRLIGHET 🐝
                    </p>
                </div>
            </div>
        </footer>
    );
}
