import { Pont } from "./Pont";
import { vakterkep } from "./vakterkep";

export const alap: vakterkep = {
    neve: "Magyarország vaktérképe (1920 előtti határokkal)",
    imgPath: "/assets/Magyarorszag_vakterkep.JPG",
    helyes: 10,
    hibas: 20,
    pontok: new Map<string,Pont>([
        ["Szeged",new Pont(50,50)],
        ["Pozsony",new Pont(10,20)]
    ]),
    vissza: true
}