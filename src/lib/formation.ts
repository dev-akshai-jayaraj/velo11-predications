export type PlottedPlayer = {
  x: number;
  y: number;
  label: string;
  filled: boolean;
};

/** "4-3-3" -> [4, 3, 3] */
function parseFormation(formation: string): number[] {
  return formation
    .split("-")
    .map((part) => Number.parseInt(part, 10))
    .filter((n) => Number.isFinite(n) && n > 0);
}

/**
 * Places a team's players on a vertical half-pitch.
 * "bottom" teams defend the bottom edge and attack toward the halfway line (y=50).
 * "top" teams defend the top edge and attack toward the halfway line (y=50).
 *
 * A `null` entry in `players` means that slot hasn't been resolved yet
 * (e.g. no player fit the remaining role) and is plotted as "Unfilled".
 */
export function computeFormationPositions(
  formation: string,
  players: (string | null)[],
  side: "bottom" | "top"
): PlottedPlayer[] {
  const rows = [1, ...parseFormation(formation)]; // goalkeeper + outfield lines
  const rowCount = rows.length;

  const defensiveEdge = side === "bottom" ? 94 : 6;
  const attackingEdge = side === "bottom" ? 58 : 42;
  const step = rowCount > 1 ? (attackingEdge - defensiveEdge) / (rowCount - 1) : 0;

  const positions: PlottedPlayer[] = [];
  let playerIndex = 0;

  rows.forEach((playersInRow, rowIndex) => {
    const y = defensiveEdge + step * rowIndex;
    for (let col = 0; col < playersInRow; col++) {
      const x = ((col + 1) / (playersInRow + 1)) * 100;
      const player = players[playerIndex];
      const filled = player != null && player !== "";
      const label = filled ? (player as string) : "Unfilled";
      positions.push({ x, y, label, filled });
      playerIndex++;
    }
  });

  return positions;
}
