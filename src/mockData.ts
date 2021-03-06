import { itemOverviewProps } from "./components/ItemOverview";

export const litItems = [
  {
    contributors: ["Adam Riese", "Max Mustermann"],
    title: "Wie man ein Buch schreibt",
    year: 2000,
    type: "Monographie",
    itemId: "1",
  },
  {
    contributors: ["Adam Riese", "Max Mustermann"],
    title: "Wie man ein zweites Buch schreibt",
    year: 2001,
    type: "Monographie",
    itemId: "2",
  },
  {
    contributors: ["Adam Riese", "Max Mustermann"],
    title: "Wie man ein Buch schreibt",
    year: 2000,
    type: "Monographie",
    itemId: "3",
  },
  {
    contributors: ["Adam Riese", "Max Mustermann"],
    title: "Wie man ein zweites Buch schreibt",
    year: 2001,
    type: "Monographie",
    itemId: "4",
  },
  {
    contributors: ["Adam Riese", "Max Mustermann"],
    title: "Wie man ein Buch schreibt",
    year: 2000,
    type: "Monographie",
    itemId: "5",
  },
  {
    contributors: ["Adam Riese", "Max Mustermann"],
    title: "Wie man ein zweites Buch schreibt",
    year: 2001,
    type: "Monographie",
    itemId: "6",
  },
  {
    contributors: ["Adam Riese", "Max Mustermann"],
    title: "Wie man ein Buch schreibt",
    year: 2000,
    type: "Monographie",
    itemId: "7",
  },
  {
    contributors: ["Adam Riese", "Max Mustermann"],
    title: "Wie man ein zweites Buch schreibt",
    year: 2001,
    type: "Monographie",
    itemId: "8",
  },
  {
    contributors: ["Adam Riese", "Max Mustermann"],
    title: "Wie man ein Buch schreibt",
    year: 2000,
    type: "Monographie",
    itemId: "9",
  },
  {
    contributors: ["Adam Riese", "Max Mustermann"],
    title: "Wie man ein zweites Buch schreibt",
    year: 2001,
    type: "Monographie",
    itemId: "10",
  },
  {
    contributors: ["Adam Riese", "Max Mustermann"],
    title: "Wie man ein Buch schreibt",
    year: 2000,
    type: "Monographie",
    itemId: "11",
  },
  {
    contributors: ["Adam Riese", "Max Mustermann"],
    title: "Wie man ein zweites Buch schreibt",
    year: 2001,
    type: "Monographie",
    itemId: "12",
  },
];

export const itemOverviewContent: itemOverviewProps = {
  abstract:
    "In diesem Buch geht es um die spannende Frage, wie man ein Buch schreibt. Die Autoren befassen sich dabei sowohl mit der Auswahl der richtigen Schriftfarbe (blassrosa), als auch der Wahl des korrekten Fonts (Comic Sans).",
  categories: ["3.4 Beispiele f??r nutzlose Literatur"],
  contributors: ["Adam Riese", "Max Mustermann"],
  title: "Wie man ein Buch schreibt",
  year: 2000,
  type: "Monographie",
  evaluation: 1,
  fileType: "epub",
  itemId: "1",
  keywords: ["nutzlos", "lustig"],
  lastChecked: new Date(2022, 5, 18),
  lastUpdated: new Date(2021, 3, 2),
  onlineAddress: "www.example.org/wie_man_ein_buch_schreibt",
  publisher: "The Publisher Company",
};

export const pdfPath =
  process.env.PUBLIC_URL +
  "/files/Educating_and_Raising_Awareness_on_Cyber_Security_Social_Engineering_A_Literature_Review.pdf";
