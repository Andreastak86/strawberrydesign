"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, ArrowLeft, Send, Loader2 } from "lucide-react";

export default function KontaktPage() {
    const [status, setStatus] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const key = process.env.NEXT_PUBLIC_FORMSPREE_KEY;

        try {
            const response = await fetch(`https://formspree.io/f/${key}`, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <main className='min-h-svh p-6 md:p-12 flex flex-col items-center'>
            <div className='max-w-4xl w-full'>
                <Link
                    href='/'
                    className='inline-flex items-center gap-2 text-strawberry-red font-semibold hover:opacity-70 transition-all mb-12'
                >
                    <ArrowLeft size={20} />
                    Tilbake til forsiden
                </Link>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <section className='space-y-8'>
                        <div>
                            <h1 className='font-soft text-4xl md:text-5xl font-bold text-strawberry-red mb-4'>
                                Kontakt meg 🍓
                            </h1>
                            <p className='text-bee-brown/80 text-lg'>
                                Har du et prosjekt i tankene, eller vil du bare
                                si hei? Jeg gleder meg til å høre fra deg!
                            </p>
                        </div>

                        <div className='space-y-6'>
                            <a
                                href='mailto:lise.takvam@gmail.com'
                                className='flex items-center gap-4 p-4 bg-white/50 rounded-super-soft border border-strawberry-medium/20 hover:shadow-md transition-all'
                            >
                                <div className='bg-strawberry-red p-3 rounded-full text-white'>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className='text-xs uppercase tracking-widest text-bee-brown/50 font-bold'>
                                        E-post
                                    </p>
                                    <p className='text-lg font-medium text-bee-brown'>
                                        lise.takvam@gmail.com
                                    </p>
                                </div>
                            </a>

                            <a
                                href='tel:+4799223645'
                                className='flex items-center gap-4 p-4 bg-white/50 rounded-super-soft border border-strawberry-medium/20 hover:shadow-md transition-all'
                            >
                                <div className='bg-bee-yellow p-3 rounded-full text-bee-brown'>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className='text-xs uppercase tracking-widest text-bee-brown/50 font-bold'>
                                        Telefon
                                    </p>
                                    <p className='text-lg font-medium text-bee-brown'>
                                        +47 992 23 645
                                    </p>
                                </div>
                            </a>
                        </div>
                    </section>

                    <section className='bg-white/80 backdrop-blur-sm p-8 rounded-super-soft shadow-xl border border-white'>
                        {status !== "success" ? (
                            <form onSubmit={handleSubmit} className='space-y-5'>
                                <div>
                                    <label
                                        htmlFor='name'
                                        className='block text-sm font-bold text-bee-brown/70 mb-2 ml-2'
                                    >
                                        Navn
                                    </label>
                                    <input
                                        name='name'
                                        type='text'
                                        id='name'
                                        required
                                        className='w-full px-5 py-3 rounded-2xl border-2 border-strawberry-light focus:border-strawberry-medium outline-none transition-all'
                                        placeholder='Ditt navn'
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor='email'
                                        className='block text-sm font-bold text-bee-brown/70 mb-2 ml-2'
                                    >
                                        E-post
                                    </label>
                                    <input
                                        name='email'
                                        type='email'
                                        id='email'
                                        required
                                        className='w-full px-5 py-3 rounded-2xl border-2 border-strawberry-light focus:border-strawberry-medium outline-none transition-all'
                                        placeholder='navn@epost.no'
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor='message'
                                        className='block text-sm font-bold text-bee-brown/70 mb-2 ml-2'
                                    >
                                        Melding
                                    </label>
                                    <textarea
                                        name='message'
                                        id='message'
                                        rows={4}
                                        required
                                        className='w-full px-5 py-3 rounded-2xl border-2 border-strawberry-light focus:border-strawberry-medium outline-none transition-all resize-none'
                                        placeholder='Hva kan jeg hjelpe deg med?'
                                    ></textarea>
                                </div>

                                <button
                                    type='submit'
                                    disabled={status === "submitting"}
                                    className='w-full flex items-center justify-center gap-2 bg-strawberry-red hover:bg-strawberry-red/90 text-white font-bold py-4 rounded-super-soft shadow-lg transition-all transform hover:-translate-y-1 disabled:bg-gray-400'
                                >
                                    {status === "submitting" ? (
                                        <Loader2
                                            className='animate-spin'
                                            size={20}
                                        />
                                    ) : (
                                        <Send size={20} />
                                    )}
                                    {status === "submitting"
                                        ? "Sender..."
                                        : "Send melding"}
                                </button>

                                {status === "error" && (
                                    <p className='text-red-500 text-sm text-center font-bold'>
                                        Noe gikk galt. Vennligst prøv igjen
                                        senere.
                                    </p>
                                )}
                            </form>
                        ) : (
                            <div className='h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in'>
                                <div className='text-5xl mb-4'>🍓</div>
                                <h3 className='text-2xl font-bold text-strawberry-red mb-2'>
                                    Takk for meldingen!
                                </h3>
                                <p className='text-bee-brown/70'>
                                    Jeg svarer deg så fort jeg har vasket
                                    bærene.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className='mt-6 text-strawberry-red font-semibold underline'
                                >
                                    Send en ny melding
                                </button>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </main>
    );
}
