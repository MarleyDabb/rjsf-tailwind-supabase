import Ajv, {JSONSchemaType} from "ajv";
import {RJSFSchema} from "@rjsf/utils";
import {FooterBlock} from "../../../types/blocks/FooterBlock";


export const HeroSchema: RJSFSchema = {
    title: 'Hero',
    type: 'object',
    properties: {
        style: {
            type: 'string',
            default: ''
        },
        headline: {
            type: 'string',
            description: 'The headline for your app',
            default: 'Default Headline'
        },
        subheadline: {
            type: 'string',
            default: 'Subheadline example'
        },
        description: {
            type: 'string',
            default: 'a description'
        },
        buttonOne: {
            title: 'Button One',
            type: 'string',
            default: 'primary',
        },
        buttonTwo: {
            title: 'Button Two',
            type: 'string',
            default: 'non primary',
        }
    },
    required: ['style', 'headline', 'subheadline', 'description']
}

export const FooterSchema: RJSFSchema = {
    title: 'Footer',
    type: 'object',
    properties: {
        description: {
            type: 'string',
            default: 'placeholder'
        },
    }
}

/*

export const HeroSchema: RJSFSchema = {
    title: 'Hero',
    type: 'object',
    properties: {
        style: {
            type: 'string',
            default: ''
        },
        headline: {
            type: 'string',
            description: 'The headline for your app',
            default: 'Default Headline'
        },
        subheadline: {
            type: 'string',
            default: 'Subheadline example'
        },
        description: {
            type: 'string',
            default: 'a description'
        },
        selectBoxTest: {
            type: 'string',
            title: 'Test',
            enum: [
                "test1",
                "test 2",
                "monkey"
            ],
            enumNames: [
                "for test1",
                "for test2",
                "label monkey"
            ],
            default: "test1",
            placeholder: "Select a value"
        },
        buttonOne: {
            title: 'Button One',
            type: 'string',
            default: 'primary',
        },
        buttonTwo: {
            title: 'Button Two',
            type: 'string',
            default: 'non primary',
        }
    },
    required: ['style', 'headline', 'subheadline', 'description', 'test']
}
 */