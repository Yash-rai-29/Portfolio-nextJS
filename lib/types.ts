import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectData = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: string | null;
  websiteUrl: string | null;
  sourceUrl: string | null;
  caseStudyUrl: string | null;
  /** Shown when the project has no links. Defaults to the NDA badge. */
  emptyLinksLabel?: string;
};
