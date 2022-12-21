import {PageBlock} from "../../../../types/PageBlock";
import {HomePageBlocks} from "./HomePageBlocks";

export type PageConfiguration = {
    slug: string
    blocks: PageBlock[]
}

export function getPageBlocks(slug: string) {
    let blocks: PageBlock[] = []

    if (slug === "/home") {
        blocks = HomePageBlocks()
    }
    return blocks
}