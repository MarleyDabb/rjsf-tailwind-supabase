import {Dispatch, SetStateAction} from "react";
import Ajv from "ajv";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";
import {RJSFSchema, UiSchema} from "@rjsf/utils";
import {uiSchema, widgets} from "../utils/Widgets";
import {PageBlock} from "../../types/PageBlock";
import supabase from "../utils/supabase";

interface Props {
    setShowEditor: Dispatch<SetStateAction<boolean>>
    block: null | PageBlock
    setBlocks: Dispatch<SetStateAction<PageBlock[]>>
}



export const PageBlockEdit: React.FC<Props> = ({setShowEditor, block, setBlocks}) => {

    const saveData = async (data: any) => {
        if (block) {
            console.log(data)
            const res = await supabase.from('home-page').update({ data: data }).eq('id', block.id)
            console.log(res)

            const newData = block
            newData.data = data

            if (!res.error) {
                setBlocks(prevState => [
                    ...prevState.filter(data => data.id !== newData.id),
                    newData
                ])
            }
        } else {
            console.log('Block is invalid')
        }
    }

    return (
        <div className={''}>
            <div className={'fixed z-10 bg-gray-900/50 w-full h-full'} onClick={() => setShowEditor(false)}></div>
            <div className={'fixed z-20 right-0 w-2/6 h-full bg-gray-50 shadow-md p-8'}>
                {block && (
                    <Form schema={block.schema} uiSchema={uiSchema} formData={block.data} widgets={widgets} validator={validator} onSubmit={(data) => saveData(data.formData)}>

                    </Form>
                )}
            </div>
        </div>
    )
}