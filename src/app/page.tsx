import Link from "next/link";
import { matches } from "@/data/matches";

export default function Home() {
  const upcoming = matches.filter((m) => m.status === "upcoming").sort((a, b) => a.date.localeCompare(b.date));
  const completed = matches.filter((m) => m.status === "completed");
  const nextMatch = upcoming[0];

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Velo — Football Predictions
        </h1>
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
          Before every match we lock in our predicted starting formations for both teams. Once the
          match is played, we add the actual lineup alongside it so you can see how close we got.
        </p>
        <div>
          <Link
            href="/predictions"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            View predictions
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <Stat label="Upcoming fixtures" value={upcoming.length} />
        <Stat label="Matches played" value={completed.length} />
        <Stat label="Total tracked" value={matches.length} />
      </section>

      {nextMatch && (
        <section className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Next up</h2>
          <p className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            {nextMatch.teamA} <span className="text-zinc-400">vs</span> {nextMatch.teamB}
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            {nextMatch.competition} ·{" "}
            {new Date(nextMatch.date).toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            {nextMatch.kickoff && ` · ${nextMatch.kickoff}`}
          </p>
          <Link
            href="/predictions"
            className="mt-4 inline-block text-sm font-medium text-emerald-600 hover:underline"
          >
            See our predicted formations →
          </Link>
        </section>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
      <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{value}</p>
      <p className="mt-1 text-xs text-zinc-500">{label}</p>
    </div>
  );
}
