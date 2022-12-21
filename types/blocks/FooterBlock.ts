import {DefaultBlock} from "./DefaultBlock";


export interface FooterBlock {
    description: string
    solutions?: FooterUrl[]
    support?: FooterUrl[]
    company?: FooterUrl[]
    legal?: FooterUrl[]
}

interface FooterUrl {
    name: string
    url: string
}