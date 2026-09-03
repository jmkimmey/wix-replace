import alumniRosterData from "../data/alumni_roster.json";
import publicationsData from "../data/publications.json";
import teamData from "../data/team.json";

export type Person = {
  name: string;
  slug: string;
  job_title: string;
  dates: string;
  highlights: string[];
  bio: string;
  email: string;
  photo: string;
  areas: string[];
  order: number;
};

export type Publication = {
  title: string;
  slug: string;
  authors: string;
  journal: string;
  date: string;
  url: string;
  abstract: string;
  keywords: string;
  news: string;
  press: string;
  image: string;
};

export type AlumniRosterGroup = {
  heading: string;
  people: {
    name: string;
    rest: string;
    slug: string | null;
  }[];
};

export const getImagePath = (path: string) =>
  `/assets/kimmeylab/${path.replace(/^assets\//, "")}`;

export const splitParagraphs = (text: string) =>
  text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

export const currentPeople = [...(teamData.current as Person[])].sort(
  (a, b) => a.order - b.order || a.name.localeCompare(b.name),
);

export const alumniProfiles = [...(teamData.alumni_profiles as Person[])].sort(
  (a, b) => a.name.localeCompare(b.name),
);

export const alumniRoster = alumniRosterData.groups as AlumniRosterGroup[];

export const publications = [...(publicationsData as Publication[])].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export const findPerson = (slug: string) =>
  [...currentPeople, ...alumniProfiles].find((person) => person.slug === slug);

export const findAlumnus = (slug: string) =>
  alumniProfiles.find((person) => person.slug === slug);

export const findPublication = (slug: string) =>
  publications.find((publication) => publication.slug === slug);
