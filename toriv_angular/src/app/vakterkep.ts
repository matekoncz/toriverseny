import { Pont } from "./Pont"

export interface vakterkep{
    neve: string,
    imgPath: string,
    pontok: Map<string, Pont>
    helyes: number,
    hibas: number,
    vissza: boolean
} 