//pics
import example1 from "./assets/exaple.svg"

export type projectTypes = {
  id: number;
  title:string;
  type: "kitchen" | "bathroom" | "other";
  address: string;
  details: string;
  photo: string[];
};

export const projectLists:projectTypes[] = [
  {
    id: 1,
    title:'kitchen',
    type: "kitchen",
    address: "21 Whitaker palce 1010 Auckland",
    details: "Fix bath room, Do a lot of thing, cleaning, checking, fixing",
    photo: [example1]
  },
  {
    id: 2,
    title:'Test',
    type: "kitchen",
    address: "21 Whitaker palce 1010 Auckland",
    details: "Fix bath room, Do a lot of thing, cleaning, checking, fixing",
    photo: [example1]
  },
  {
    id: 3,
    title:'Test',
    type: "kitchen",
    address: "21 Whitaker palce 1010 Auckland",
    details: "Fix bath room, Do a lot of thing, cleaning, checking, fixing",
    photo: [example1]
  },
  {
    id: 4,
    title:'kitchen',
    type: "kitchen",
    address: "21 Whitaker palce 1010 Auckland",
    details: "Fix bath room, Do a lot of thing, cleaning, checking, fixing",
    photo: [example1]
  },
  {
    id: 5,
    title:'kitchen',
    type: "kitchen",
    address: "21 Whitaker palce 1010 Auckland",
    details: "Fix bath room, Do a lot of thing, cleaning, checking, fixing",
    photo: [example1]
  },
  {
    id: 6,
    title:'bathroom',
    type: "bathroom",
    address: "21 Whitaker palce 1010 Auckland",
    details: "Fix bath room, Do a lot of thing, cleaning, checking, fixing",
    photo: [example1]
  },
];
