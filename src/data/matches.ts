import type { Match } from "@/lib/types";

/**
 * Add new fixtures here. When a match kicks off, fill in `actual` with the
 * lineups that were actually used and flip `status` to "completed".
 */
export const matches: Match[] = [
  {
    id: "2026-07-11-esp-bel",
    date: "2026-07-11",
    kickoff: "00:30",
    competition: "FIFA World Cup 2026",
    teamA: "Spain",
    teamB: "Belgium",
    status: "completed",
    prediction: {
      teamA: {
        primary: {
          formation: "4-2-3-1",
          players: [
            "Unai Simon",
            "Cucurella",
            "Laporte",
            "Le Normand",
            "Carvajal",
            "Rodri",
            "Fabian Ruiz",
            "Nico Williams",
            "Pedri",
            "Yamal",
            "Morata",
          ],
        },
        alternative: {
          formation: "4-3-3",
          players: [
            "Unai Simon",
            "Cucurella",
            "Laporte",
            "Le Normand",
            "Carvajal",
            "Rodri",
            "Pedri",
            "Dani Olmo",
            "Nico Williams",
            "Morata",
            "Yamal",
          ],
        },
      },
      teamB: {
        primary: {
          formation: "4-2-3-1",
          players: [
            "Casteels",
            "Theate",
            "Vertonghen",
            "Faes",
            "Castagne",
            "Onana",
            "Tielemans",
            "Doku",
            "De Bruyne",
            "Lukebakio",
            "Lukaku",
          ],
        },
        alternative: {
          formation: "4-4-2",
          players: [
            "Casteels",
            "Theate",
            "Vertonghen",
            "Faes",
            "Castagne",
            "Doku",
            "De Bruyne",
            null, // unfilled: no second CM left once Onana/Tielemans are dropped
            "Lukebakio",
            "Lukaku",
            "Openda",
          ],
        },
      },
    },
    actual: {
      teamA: {
        formation: "4-2-3-1",
        players: [
          "Unai Simon",
          "Porro",
          "Cubarsi",
          "Laporte",
          "Cucurella",
          "Rodri",
          "Fabian Ruiz",
          "Yamal",
          "Dani Olmo",
          "Baena",
          "Oyarzabal",
        ],
      },
      teamB: {
        formation: "4-2-3-1",
        players: [
          "Courtois",
          "De Cuyper",
          "Mechele",
          "Ngoy",
          "Castagne",
          "Vanaken",
          "Raskin",
          "Trossard",
          "De Bruyne",
          "Doku",
          "De Ketelaere",
        ],
      },
    },
  },
  {
    id: "2026-07-12-nor-eng",
    date: "2026-07-12",
    kickoff: "02:30",
    competition: "FIFA World Cup 2026",
    teamA: "Norway",
    teamB: "England",
    status: "upcoming",
    prediction: {
      teamA: {
        primary: {
          formation: "4-1-4-1",
          players: [
            "Egil Selvik",
            "Bjorkan",
            "Ostigard",
            "Langas",
            "Ryerson",
            "Berge",
            null, // unfilled: no LW option left in the squad data
            "Thorstvedt",
            "Odegaard",
            null, // unfilled: no RW option left in the squad data
            "Nusa",
          ],
        },
        alternative: {
          formation: "4-2-3-1",
          players: [
            "Egil Selvik",
            "Bjorkan",
            "Ostigard",
            "Langas",
            "Ryerson",
            "Berge",
            null, // unfilled: no second DM option in the squad data
            null, // unfilled: no LW option left in the squad data
            "Thorstvedt",
            null, // unfilled: no RW option left in the squad data
            "Nusa",
          ],
        },
      },
      teamB: {
        primary: {
          formation: "4-2-3-1",
          players: [
            "Pickford",
            "Spence",
            "Konsa",
            "O'Reilly",
            "James",
            "Rice",
            "Anderson",
            null, // unfilled: no LW option left in the squad data
            "Gordon",
            null, // unfilled: no RW option left in the squad data
            "Kane",
          ],
        },
        alternative: {
          formation: "4-4-1-1",
          players: [
            "Pickford",
            "Spence",
            "Konsa",
            "O'Reilly",
            "James",
            null, // unfilled: no LW option left in the squad data
            "Gordon",
            "Bellingham",
            null, // unfilled: no RW option left in the squad data
            "Rogers",
            "Kane",
          ],
        },
      },
    },
    actual: null,
  },
  {
    id: "2026-07-12-arg-sui",
    date: "2026-07-12",
    kickoff: "06:30",
    competition: "FIFA World Cup 2026",
    teamA: "Argentina",
    teamB: "Switzerland",
    status: "upcoming",
    prediction: {
      teamA: {
        primary: {
          formation: "4-4-2",
          players: [
            "Emiliano Martinez",
            "Tagliafico",
            "Romero",
            "Lisandro Martinez",
            "Montiel",
            "Garnacho",
            "Mac Allister",
            "Di Maria",
            null, // unfilled: Messi's free role doesn't surface a dedicated RW candidate
            "Messi",
            "Alvarez",
          ],
        },
        alternative: {
          formation: "4-3-3",
          players: [
            "Emiliano Martinez",
            "Tagliafico",
            "Romero",
            "Lisandro Martinez",
            "Montiel",
            "Mac Allister",
            "Enzo Fernandez",
            "Di Maria",
            "Garnacho",
            "Messi",
            null, // unfilled: same RW gap as Plan A
          ],
        },
      },
      teamB: {
        primary: {
          formation: "3-4-2-1",
          players: [
            "Sommer",
            "Akanji",
            "Schar",
            "Rodriguez",
            "Aebischer",
            "Vargas",
            "Shaqiri",
            "Widmer",
            "Rieder",
            "Ndoye",
            "Embolo",
          ],
        },
        alternative: {
          formation: "3-4-1-2",
          players: [
            "Sommer",
            "Akanji",
            "Schar",
            "Rodriguez",
            "Aebischer",
            "Vargas",
            "Ndoye",
            "Widmer",
            "Rieder",
            "Embolo",
            "Duah",
          ],
        },
      },
    },
    actual: null,
  },
];
