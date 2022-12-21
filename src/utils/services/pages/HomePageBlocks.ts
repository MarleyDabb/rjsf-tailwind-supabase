import { PageBlock } from "../../../../types/PageBlock";
import {JSONSchemaType} from "ajv";
import {FooterSchema, HeroSchema} from "../ComponentSchemas";
import {RJSFSchema} from "@rjsf/utils";


export function HomePageTest() {
}

export function HomePageBlocks() {
 const blocks : PageBlock[] = [
     {
         id: 555,
         created_at: new Date,
         data: {
             style: '',
             headline: 'Headline',
             subheadline: 'subheadline text',
             description: 'description placeholder',
             buttonOne: 'Primary Button',
             buttonTwo: 'Secondary Button'
         },
         type: 'hero',
         schema: HeroSchema
     },
     {
         data: {
             description: 'description placeholder'
         },
         type: 'footer',
         schema: FooterSchema,
         id: 666,
         created_at: new Date
     }
 ]
    return blocks
}


/*

cta: [
                 {text: 'primary', isPrimary: true, href: '/', target: ''},
                 {text: 'non primary', isPrimary: false, href: '/', target: ''}
             ],
 */