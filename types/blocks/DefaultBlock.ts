import { RJSFSchema } from "@rjsf/utils"
import {PageBlock, Types} from "../PageBlock";

export interface DefaultBlock {
    type: keyof Types | string
    schema: RJSFSchema
    created_at?: Date
    id?: number
}