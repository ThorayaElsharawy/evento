import PageTitle from "@/components/page-title";
import SearchForm from "@/components/search-form";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <PageTitle>
        Find events around you
      </PageTitle>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than
        <span className="px-2 font-bold text-accent italic underline">
          10,000
        </span>
        events around you
      </p>
      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular: </p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin?page=1">Austin</Link>
          <Link href="/events/seattle?page=1">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
