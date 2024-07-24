import PageTitle from "@/components/page-title";
import { TEvent } from "@/lib/types";
import { getEvent } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const event = await getEvent(params.slug)
    return {
        title: event.name
    }
}

export default async function EventPage({ params }: Props) {
    const event = await getEvent(params.slug)

    const date = new Date(event.date).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    })

    return (
        <main>
            <section className="relative h-[361px] overflow-hidden flex items-center justify-center py-14 md:py-20">
                <Image
                    className="object-cover z-0 blur-3xl"
                    src={event.imageUrl}
                    alt="Event background image"
                    fill
                    quality={75}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority
                />

                <div className="z-1 relative flex flex-col lg:flex-row gap-x-6 lg:gap-x-16 ">
                    <Image className="rounded-xl border-2 border-white/50 "
                        src={event.imageUrl} alt={event.name} width={300} height={201} priority />
                    <div className="flex flex-col">
                        <p className="text-white/75">{date}</p>
                        <PageTitle className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">{event.name}</PageTitle>
                        <p className=" whitespace-nowrap text-xl text-white/75">Organized by <span className="italic">{event.organizerName}</span></p>
                        <button
                            className="bg-white/20 text-lg bg-blur capitalize mt-5 lg:mt-auto w-[95vw] sm:w-full py-2 rounded-md
                             border-white/10 border-2 state-effects">
                            Get tickets
                        </button>
                    </div>
                </div>
            </section>

            <div className="min-h-[75vh]">
                <Section title="About this event">
                    {event.description}
                </Section>

                <Section title="Location">
                    {event.location}
                </Section>
            </div>
        </main>
    )
}

type SectionProps = {
    title: string,
    children: React.ReactNode
}

function Section({ title, children }: SectionProps) {
    return (
        <section className="text-center px-5 py-16">
            <h2 className="text-2xl mb-2">{title}</h2>
            <p className="max-w-4xl mx-auto text-lg leading-8 text-white/70">{children}</p>
        </section>
    )
}