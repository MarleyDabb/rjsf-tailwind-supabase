import {TextWithLink} from "../TextWithLink";
import {DefaultBlock} from "./DefaultBlock";

export interface HeroBlock  {
    style: string
    headline: string
    subheadline: string
    description?: string
    image?: string
    // topText: TextWithLink
    buttonOne: string
    buttonTwo: string
    // bottomText?: TextWithLink
}
