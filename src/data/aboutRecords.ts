export type AboutRecord = {
  id: number;
  title: string;
  body: string;
};

export const aboutRecords: AboutRecord[] = [
  {
    id: 2,
    title: "About the Event",
    body: `DEF CON is our flagship event, designed to bring together curious minds interested in cybersecurity, problem-solving, and exploration.

The Cicada 3301 challenge is part of this experience, encouraging participants to look beyond the obvious and question how systems are built.`,
  },
  {
    id: 3,
    title: "Event Philosophy",
    body: `DEF CON 3301 represents curiosity, persistence, and the willingness to explore.

Strong systems are not broken by force alone — they often fail when assumptions go unquestioned.`,
  },
  {
    id: 5,
    title: "Access Control",
    body: `Authentication confirms identity.
Authorization controls access.

Confusing the two can expose more than intended.`,
  },
  {
    id: 7,
    title: "Observation",
    body: `You noticed a pattern.

Patterns exist because someone assumed they would not be noticed.`,
  },
  {
    id: 11,
    title: "Pattern",
    body: `Some numbers stand alone.

Their isolation gives them meaning.`,
  },
  {
    id: 3301,
    title: "Restricted Archive",
    body: `DEF CON has always rewarded those who think differently.

You accessed a record that was never meant to be public — not through force, but through understanding.

Defcon_flag{IDOR_Vulnerability_3301}`,
  },
];
