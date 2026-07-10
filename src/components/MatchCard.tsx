import { PendingPitch, PitchDiagram } from "@/components/PitchDiagram";
import { PredictionPanel } from "@/components/PredictionPanel";
import type { Match } from "@/lib/types";

export function MatchCard({ match }: { match: Match }) {
  const formattedDate = new Date(match.date).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {match.teamA} <span className="text-zinc-400">vs</span> {match.teamB}
          </h2>
          <p className="text-sm text-zinc-500">
            {match.competition} · {formattedDate}
            {match.kickoff && ` · ${match.kickoff}`}
          </p>
        </div>
        <StatusBadge status={match.status} />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <SectionLabel>Our Prediction</SectionLabel>
          <PredictionPanel
            prediction={match.prediction}
            teamAName={match.teamA}
            teamBName={match.teamB}
          />
        </div>
        <div>
          <SectionLabel>Actual Lineup</SectionLabel>
          {match.actual ? (
            <PitchDiagram
              teamA={match.actual.teamA}
              teamB={match.actual.teamB}
              teamAName={match.teamA}
              teamBName={match.teamB}
            />
          ) : (
            <PendingPitch note="Actual formations will be added once the match kicks off." />
          )}
        </div>
      </div>
    </article>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
      {children}
    </h3>
  );
}

function StatusBadge({ status }: { status: Match["status"] }) {
  const isCompleted = status === "completed";
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        isCompleted
          ? "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
          : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
      }`}
    >
      {isCompleted ? "Full time" : "Upcoming"}
    </span>
  );
}
