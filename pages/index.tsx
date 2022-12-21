import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { PageBlocksLayout } from '../src/components/PageBlocksLayout'
import { getPageBlocks } from '../src/utils/services/pages/PagesServices'
import { PageBlock } from '../types/PageBlock'
import {useRouter} from "next/router";
import {PageBlockEdit} from "../src/components/PageBlockEdit";
import {RJSFSchema} from "@rjsf/utils";
import supabase from '../src/utils/supabase'
import AddButton from "../src/components/src/AddButton";
import ArrayFieldItemTemplate from "../src/components/src/ArrayFieldItemTemplate";

export default function Home({ data }: any) {
    const [showEditor, setShowEditor] = useState(false)
    const [selectedBlock, setSelectedBlock] = useState<PageBlock | null>(null)

    const [blocks, setBlocks] = useState<PageBlock[]>(data)
    const router = useRouter()
    const [blockToEdit, setBlockToEdit] = useState(null)


    console.log(data)

    const isEditMode = (): boolean => {
        const {editMode} = router.query

        if (editMode) return true
        else return false
    }

    const setEditMode = () => {
        if (isEditMode()) router.push('')
        else router.push('?editMode=true')
    }

  return (
      <div>
          {showEditor && <PageBlockEdit setShowEditor={setShowEditor} block={selectedBlock} setBlocks={setBlocks} />}
          <h1 className={'bg-gray-500 cursor-pointer p-2'} onClick={() => setEditMode()}>Toggle Edit Mode</h1>
          <PageBlocksLayout blocks={blocks} setBlocks={setBlocks} editMode={isEditMode()} setShowEditor={setShowEditor} setSelectedBlock={setSelectedBlock} />
      </div>
  )
}

export async function getServerSideProps() {
    const {data} = await supabase.from('home-page').select(`*, schema ( * )`)

    console.log('data', data)

    return {
        props: {
            data: data
        }
    }
}
