import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
    return (
        <div className={cn("animate-pulse h-4 w-[550px] rounded-md bg-white/5", className)} />
    )
}