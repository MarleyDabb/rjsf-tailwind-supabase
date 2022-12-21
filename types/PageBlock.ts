import {HeroBlock} from "./blocks/HeroBlock";
import {FooterBlock} from "./blocks/FooterBlock";
import {DefaultBlock} from "./blocks/DefaultBlock";
import {JSONSchemaType} from "ajv";

export type Types = {
    hero: HeroBlock,
    footer: FooterBlock,
    header: string
}

export interface PageBlock extends DefaultBlock {
    data: any
}

export const PageBlockTypes = (): string[] => {
    return ['hero', 'footer', 'header']
}