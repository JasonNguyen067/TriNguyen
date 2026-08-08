import type { Moment } from "@/types/moment";

// TODO: drop the real tracks in /public and point `song` at them.
// Any card without a `song` simply ignores the double-click.
export const moments: Moment[] = [
  {
    id: "usaa",
    date: "Summer 2026",
    title: "USAA, San Antonio Trip",
    description:
      "business expense",
    image: "/sanantoniointerns.png",
    song: "/Clouds.mp3",
  },
  {
    id: "riverwalk",
    date: "Summer 2026",
    title: "San Antonio Riverwalk",
    description: "exploring",
    image: "/riverwalksanantonio.png",
  },
  {
    id: "fusion",
    date: "April 2026",
    title: "Fusion ICS Project",
    description:
      "led an 8-person team to design and ship a full-stack app over the course of 9 months, best ux award",
    image: "/fusionspeaking.png",
  },
  {
    id: "cutie-hacks-win",
    date: "April 2025",
    title: "Best Social Impact",
    description:
      "first hackathon win!",
    image: "/hackathonwin.png",
    // the award slide sits just left of center
    imagePosition: "44% 40%",
  },
  {
    id: "michigan",
    date: "Summer 2024",
    title: "Last Time in Michigan",
    description:
      "the beginning of the end",
    image: "/lasttimeinmichigan.png",
  },
  {
    id: "crystal-cove",
    date: "March 2026",
    title: "Crystal Cove",
    description: "whatta beaut",
    image: "/crystalcovebeach.png",
  },
  {
    id: "laguna-spot",
    date: "2025",
    title: "The Laguna Spot",
    description: "motivating",
    image: "/lagunabeachspot.png",
  },
  {
    id: "laguna-purple",
    date: "2025",
    title: "Laguna, Purple Hour",
    description: "sunrise",
    image: "/lagunabeachpurple.png",
  },
  {
    id: "jason-kevin",
    date: "December 2024",
    title: "Good Company",
    description: "brotha",
    image: "/jasonkevinbeach.png",
    // center sits in the gap between you two — shift right to catch both
    imagePosition: "60% 45%",
  },
  {
    id: "sand-dune",
    date: "2025",
    title: "Sand Dunes",
    description: "sunrise",
    image: "/sanddune.png",
  },
];
