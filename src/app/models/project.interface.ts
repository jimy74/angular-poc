import { Attribute, NewAttribute } from "./attribute.interface";

export interface Project {
    id: number,
    name: string,
    attributes: Attribute[]
}

export interface NewProject {
    name: string,
    attributes: NewAttribute[]
}