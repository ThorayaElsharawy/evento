import EventsList from "@/components/events-list";
import PageTitle from "@/components/page-title";
import { TEvent } from "@/lib/types";
import { capitalize, sleep } from "@/lib/utils";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";

type Props = {
    params: {
        city: string,
    }
}

type EventProps = Props & {
    searchParams: {
        page: number
    }
}

export function generateMetadata({ params }: Props): Metadata {
    return {
        title: params.city === 'all' ? 'All Events' : `Events in ${capitalize(params.city)}`
    }
}

export default function events({ params, searchParams }: EventProps) {
    const { city } = params;
    const { page } = searchParams

    return (
        <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
            <PageTitle className="mb-14">
                {city === 'all' && 'All Events'}
                {city !== 'all' && `Events in ${capitalize(city)}`}
            </PageTitle>

            <Suspense key={city + page} fallback={<Loading />}>
                <EventsList city={city} page={page} />
            </Suspense>
        </main>
    )
}