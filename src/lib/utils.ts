import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TEvent } from "./types";
import { notFound } from "next/navigation";

export function cn(...clases: ClassValue[]) {
    return twMerge(clsx(...clases))
}

export function capitalize(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export async function sleep(ms: number) {
    return new Promise((test) => {
        setTimeout(test, ms)
    })
}

export async function getEvents(city: string, page = 1) {
    try {
        const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`)
        if (!response.ok) throw new Error("Failed to fetch events")
        const events: TEvent[] = await response.json()
        if (!events) return notFound()

        const totalEvents = events.length
        const spliceEvents: TEvent[] = events.slice(page * 6 - 6, page * 6)
        return {events: spliceEvents , totalEvents}

    } catch (error) {
        console.error('Error fetching events:', error);
        return notFound();
    }
}

export async function getEvent(slug: string) {
    try {
        const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`)
        if (!response.ok) throw new Error("Failed to fetch event")
        const event: TEvent = await response.json();
        if (!event) return notFound()
        return event
    } catch (error) {
        console.error('Error fetching events:', error);
        return notFound();
    }
}