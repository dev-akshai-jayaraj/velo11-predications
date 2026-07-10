import { MatchCard } from "@/components/MatchCard";
import { matches } from "@/data/matches";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predictions — Velo",
};

export default function PredictionsPage() {
  const sorted = [...matches].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Predictions</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Our predicted starting formations for each fixture, next to the actual lineup once the match is played.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {sorted.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
