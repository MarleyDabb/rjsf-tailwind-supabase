import {PageBlock, Types} from "../../types/PageBlock";
import {Dispatch, Fragment, SetStateAction} from "react";
import {Hero} from "./Hero";
import {ArrowDownIcon, ArrowUpIcon, PencilIcon, PlusIcon, TrashIcon} from "@heroicons/react/24/outline";
import {Footer} from "./Footer";
import {AddBlockButton} from "./AddBlockButton";
import {RJSFSchema} from "@rjsf/utils";
import {AtRule} from "csstype";
import supabase from "../utils/supabase";

interface Props {
    blocks: PageBlock[]
    setBlocks: Dispatch<SetStateAction<PageBlock[]>>
    editMode: boolean
    setShowEditor: Dispatch<SetStateAction<boolean>>
    setSelectedBlock: Dispatch<SetStateAction<null | PageBlock>>
}

export const PageBlocksLayout: React.FC<Props> = ({blocks, setBlocks, editMode, setShowEditor, setSelectedBlock}) => {

    const addBlock = async (type: keyof Types | string) => {
        const Type = type[0].toUpperCase() + type.substring(1)

        const retrievedSchema = await supabase.from('schemas').select().eq('title', Type).single()

        console.log(retrievedSchema)

        const newBlock: PageBlock = {
            data: {},
            type: type,
            schema: retrievedSchema,
        }

        setBlocks(prevState => [
            ...prevState,
            newBlock
        ])

        const res = await supabase.from('home-page').insert({
            data: {},
            type: type,
            schema: Type
        })

        console.log(res)
    }

    const deleteBlock = async (block: PageBlock) => {
        const res = await supabase.from('home-page').delete().eq('id', block.id)
        console.log(res)

        setBlocks(prevState => [
            ...prevState.filter(data => data.id !== block.id)
        ])
    }

    const onMoveUp = (block: PageBlock) => {
        const index = blocks.indexOf(block);
        if (index > 0) {
            const newBlocks = [...blocks];
            newBlocks[index] = newBlocks[index - 1];
            newBlocks[index - 1] = block;
            setBlocks(newBlocks);

            console.log(blocks)
        }
    }

    const onMoveDown = (block: PageBlock) => {
        const index = blocks.indexOf(block);
        if (index < blocks.length - 1) {
            const newBlocks = [...blocks];
            newBlocks[index] = newBlocks[index + 1];
            newBlocks[index + 1] = block;
            setBlocks(newBlocks);
        }
    }

    return (
        <>
        <div>
            {blocks.map((block, index) => (
                <Fragment key={index}>
                    <div className={`group relative ${block.type === 'header' && 'z-10'}`}>
                        {editMode && (
                            <div
                                className={"group-hover:block hidden top-0 z-10 w-full border-2 border-dashed border-theme-500 bg-theme-50 p-2 py-2 px-2 opacity-90 shadow-inner flex"}
                            >
                                <div className="mx-auto flex w-full max-w-md items-center justify-between">
                                    <div>
                                        <AddBlockButton addBlock={addBlock} />
                                    </div>
                                    <div className="text-lg font-extrabold text-gray-900">{block.type}</div>
                                    <div className="flex items-center space-x-1">
                                        <button onClick={() => deleteBlock(block)}>
                                            <TrashIcon className="h-4 w-4" />
                                        </button>
                                        <button onClick={() => {
                                            setSelectedBlock(block)
                                            setShowEditor(true)
                                        }}>
                                            <PencilIcon className="h-4 w-4" />
                                        </button>
                                        <button onClick={() => onMoveUp(block)}>
                                            <ArrowUpIcon className="h-4 w-4" />
                                        </button>
                                        <button onClick={() => onMoveDown(block)}>
                                            <ArrowDownIcon className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}


                        {block.type === 'hero' && <Hero block={block.data} />}
                        {block.type === 'footer' && <Footer block={block.data} />}
                    </div>
                </Fragment>
            ))}
        </div>
        </>
    )
}