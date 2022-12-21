import {RegistryWidgetsType, RJSFSchema} from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import {InputField} from "../src/components/Form/InputField";
import {SelectBox} from "../src/components/Form/SelectBox";
import AddButton from "../src/components/src/AddButton";
import {Form} from "@rjsf/material-ui";
import MuiForm from "../src/components/src"


export default function Test() {

    const schema: RJSFSchema = {
        title: 'Test Form',
        type: 'object',
        properties: {
            // Input Field
            title: {type: 'string', title: 'Title', default: 'default title :P'},
            // ArrayFieldItemTemplate
            "array": {
                "title": "Array",
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "nested": {
                            "title": "Nested array",
                            "type": "string",
                            "default": "nested array default"
                        }
                    }
                }
            }
        },
        required: []
    }

    const widgets: RegistryWidgetsType = {
        TextWidget: InputField,
        SelectWidget: SelectBox,

    }

    return (
        <>
            <h1>Test Page</h1>
            <AddButton />
            <div className={'p-20'}>
                <Form schema={schema} validator={validator} />
                <MuiForm schema={schema} validator={validator} />
            </div>
        </>
    )
}