import { AttributeType } from "./attribute-types.enum";

export interface Attribute {
    id: number,
    name: string,
    value: string,
    valueType: AttributeType
}

export interface NewAttribute {
    name: string,
    value: string,
    valueType: AttributeType
}
