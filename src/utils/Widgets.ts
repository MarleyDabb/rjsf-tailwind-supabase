import {RegistryWidgetsType, UiSchema} from "@rjsf/utils";
import {InputField} from "../components/Form/InputField";
import {SelectBox} from "../components/Form/SelectBox";


export const widgets: RegistryWidgetsType = {
    TextWidget: InputField,
    SelectWidget: SelectBox
}

export const uiSchema: UiSchema = {
    "ui:submitButtonOptions": {
        props: {
            className: "pl-4 pr-4 pt-2 pb-2 rounded bg-blue-500 text-black"
        }
    },
}