import { MatchCard } from "@/components/MatchCard";
import { matches } from "@/data/matches";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predictions — Velo",
};

export default function PredictionsPage() {
  const upcoming = matches
    .filter((m) => m.status === "upcoming")
    .sort((a, b) => a.date.localeCompare(b.date));
  const historical = matches
    .filter((m) => m.status === "completed")
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Predictions</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Our predicted starting formations for each fixture, next to the actual lineup once the match is played.
        </p>
      </div>

      {upcoming.length > 0 && (
        <section className="flex flex-col gap-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Upcoming
          </h2>
          {upcoming.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </section>
      )}

      {historical.length > 0 && (
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Historical Predictions
            </h2>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          </div>
          {historical.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </section>
      )}
    </div>
  );
}
