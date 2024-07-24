import { TEvent } from "@/lib/types"
import EventCard from "./event-card"
import { getEvents, sleep } from "@/lib/utils"
import PaginationControls from "./pagination-controls"

type EventsListProps = {
    city: string,
    page: number
}

export default async function EventsList({ city, page }: EventsListProps) {
    const { events, totalEvents } = await getEvents(city, page)

    console.log(totalEvents)
    const previousPath = page > 1 ? `/events/${city}?page=${+page - 1}` : '';
    const nextPath = totalEvents > 6 * page ? `/events/${city}?page=${+page + 1}` : '';

    return (
        <section className="flex flex-wrap gap-20 justify-center px-[20px]">
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}

            <PaginationControls previousPath={previousPath} nextPath={nextPath} />
        </section>
    )
}