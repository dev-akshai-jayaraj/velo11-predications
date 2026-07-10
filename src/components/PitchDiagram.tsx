import { computeFormationPositions } from "@/lib/formation";
import type { TeamFormation } from "@/lib/types";

type PitchDiagramProps = {
  teamA: TeamFormation;
  teamB: TeamFormation;
  teamAName: string;
  teamBName: string;
};

const TEAM_A_COLOR = "bg-sky-500";
const TEAM_B_COLOR = "bg-rose-500";

export function PitchDiagram({ teamA, teamB, teamAName, teamBName }: PitchDiagramProps) {
  const teamAPlayers = computeFormationPositions(teamA.formation, teamA.players, "bottom");
  const teamBPlayers = computeFormationPositions(teamB.formation, teamB.players, "top");

  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg border border-emerald-900 bg-gradient-to-b from-emerald-700 to-emerald-800">
      <PitchMarkings />

      {teamBPlayers.map((player, i) => (
        <PlayerDot
          key={`b-${i}`}
          x={player.x}
          y={player.y}
          label={player.label}
          filled={player.filled}
          color={TEAM_B_COLOR}
          labelPosition="above"
        />
      ))}
      {teamAPlayers.map((player, i) => (
        <PlayerDot
          key={`a-${i}`}
          x={player.x}
          y={player.y}
          label={player.label}
          filled={player.filled}
          color={TEAM_A_COLOR}
          labelPosition="below"
        />
      ))}

      <div className="absolute left-2 top-2 rounded bg-black/40 px-2 py-1 text-[10px] font-medium text-white">
        {teamBName} · {teamB.formation}
      </div>
      <div className="absolute bottom-2 left-2 rounded bg-black/40 px-2 py-1 text-[10px] font-medium text-white">
        {teamAName} · {teamA.formation}
      </div>
    </div>
  );
}

export function PendingPitch({ note }: { note: string }) {
  return (
    <div className="relative flex w-full aspect-[3/4] items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-emerald-900/40 bg-emerald-950/20">
      <PitchMarkings faded />
      <p className="relative max-w-[70%] text-center text-xs font-medium text-emerald-900/70 dark:text-emerald-100/50">
        {note}
      </p>
    </div>
  );
}

function PitchMarkings({ faded = false }: { faded?: boolean }) {
  const lineColor = faded ? "border-emerald-900/20" : "border-white/40";
  const dotColor = faded ? "bg-emerald-900/20" : "bg-white/40";
  const bgLineColor = faded ? "bg-emerald-900/20" : "bg-white/40";

  return (
    <>
      <div className={`absolute inset-[3%] rounded-sm border-2 ${lineColor}`} />
      <div className={`absolute left-[3%] right-[3%] top-1/2 h-px ${bgLineColor}`} />
      <div className={`absolute left-1/2 top-1/2 aspect-square w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${lineColor}`} />
      <div className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${dotColor}`} />
      <div className={`absolute left-[22%] right-[22%] top-[3%] h-[16%] border-2 border-t-0 ${lineColor}`} />
      <div className={`absolute bottom-[3%] left-[22%] right-[22%] h-[16%] border-2 border-b-0 ${lineColor}`} />
      <div className={`absolute left-[38%] right-[38%] top-[3%] h-[7%] border-2 border-t-0 ${lineColor}`} />
      <div className={`absolute bottom-[3%] left-[38%] right-[38%] h-[7%] border-2 border-b-0 ${lineColor}`} />
    </>
  );
}

function PlayerDot({
  x,
  y,
  label,
  color,
  filled,
  labelPosition,
}: {
  x: number;
  y: number;
  label: string;
  color: string;
  filled: boolean;
  labelPosition: "above" | "below";
}) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-0.5"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {labelPosition === "above" && <Label label={label} muted={!filled} />}
      <span
        className={`h-3 w-3 rounded-full shadow ${
          filled ? `ring-2 ring-white ${color}` : "border-2 border-dashed border-white/80 bg-transparent"
        }`}
      />
      {labelPosition === "below" && <Label label={label} muted={!filled} />}
    </div>
  );
}

function Label({ label, muted = false }: { label: string; muted?: boolean }) {
  return (
    <span
      className={`whitespace-nowrap rounded px-1 text-[9px] leading-tight ${
        muted ? "bg-black/30 italic text-white/70" : "bg-black/50 text-white"
      }`}
    >
      {label}
    </span>
  );
}
