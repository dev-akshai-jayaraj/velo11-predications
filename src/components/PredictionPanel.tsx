"use client";

import { useState } from "react";
import { PitchDiagram } from "@/components/PitchDiagram";
import type { MatchPrediction } from "@/lib/types";

type Plan = "primary" | "alternative";

export function PredictionPanel({
  prediction,
  teamAName,
  teamBName,
}: {
  prediction: MatchPrediction;
  teamAName: string;
  teamBName: string;
}) {
  const [teamAPlan, setTeamAPlan] = useState<Plan>("primary");
  const [teamBPlan, setTeamBPlan] = useState<Plan>("primary");

  const teamAFormation = prediction.teamA[teamAPlan] ?? prediction.teamA.primary;
  const teamBFormation = prediction.teamB[teamBPlan] ?? prediction.teamB.primary;

  return (
    <div>
      <div className="mb-2 flex items-start justify-between gap-2">
        <PlanToggle
          label={teamAName}
          value={teamAPlan}
          onChange={setTeamAPlan}
          hasAlternative={Boolean(prediction.teamA.alternative)}
        />
        <PlanToggle
          label={teamBName}
          value={teamBPlan}
          onChange={setTeamBPlan}
          hasAlternative={Boolean(prediction.teamB.alternative)}
          align="right"
        />
      </div>
      <PitchDiagram
        teamA={teamAFormation}
        teamB={teamBFormation}
        teamAName={teamAName}
        teamBName={teamBName}
      />
    </div>
  );
}

function PlanToggle({
  label,
  value,
  onChange,
  hasAlternative,
  align = "left",
}: {
  label: string;
  value: Plan;
  onChange: (plan: Plan) => void;
  hasAlternative: boolean;
  align?: "left" | "right";
}) {
  return (
    <div className={`flex flex-col gap-1 ${align === "right" ? "items-end" : "items-start"}`}>
      <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
        {label}
      </span>
      <div className="flex overflow-hidden rounded-full border border-zinc-200 text-xs dark:border-zinc-700">
        <button
          type="button"
          onClick={() => onChange("primary")}
          className={`px-2.5 py-1 font-medium transition-colors ${
            value === "primary"
              ? "bg-emerald-600 text-white"
              : "bg-white text-zinc-500 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
          }`}
        >
          Plan A
        </button>
        <button
          type="button"
          onClick={() => hasAlternative && onChange("alternative")}
          disabled={!hasAlternative}
          title={hasAlternative ? undefined : "No tactical alternative recorded yet"}
          className={`px-2.5 py-1 font-medium transition-colors ${
            value === "alternative" && hasAlternative
              ? "bg-emerald-600 text-white"
              : hasAlternative
                ? "bg-white text-zinc-500 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
                : "cursor-not-allowed bg-zinc-100 text-zinc-300 dark:bg-zinc-800 dark:text-zinc-600"
          }`}
        >
          Plan B
        </button>
      </div>
    </div>
  );
}
