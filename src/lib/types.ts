export type TeamFormation = {
  formation: string;
  /** A `null` entry means that slot hasn't been resolved yet ("Unfilled"). */
  players: (string | null)[];
};

export type MatchFormations = {
  teamA: TeamFormation;
  teamB: TeamFormation;
};

export type TeamPrediction = {
  primary: TeamFormation;
  /** Tactical Plan B for this team, if one has been recorded. */
  alternative?: TeamFormation;
};

export type MatchPrediction = {
  teamA: TeamPrediction;
  teamB: TeamPrediction;
};

export type Match = {
  id: string;
  date: string;
  /** 24h "HH:mm" kickoff time, shown alongside the date when present. */
  kickoff?: string;
  competition: string;
  teamA: string;
  teamB: string;
  status: "upcoming" | "completed";
  prediction: MatchPrediction;
  actual: MatchFormations | null;
};
