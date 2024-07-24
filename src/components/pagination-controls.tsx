import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

type PaginationControlsProps = {
    previousPath: string,
    nextPath: string
}

const styleBtn = 'text-white flex items-center gap-x-2 px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm'

export default function PaginationControls({ previousPath, nextPath }: PaginationControlsProps) {
    console.log(previousPath)
    return (
        <section className="flex justify-between w-full">
            {previousPath ? (
                <Link className={styleBtn} href={previousPath}>
                    <FaArrowLeftLong />
                    Previous
                </Link>
            ) : <div />}
            {nextPath ? (
                <Link className={styleBtn} href={nextPath}>
                    Next
                    <FaArrowRightLong />
                </Link>
            ): (<div />)}
        </section>
    )
}