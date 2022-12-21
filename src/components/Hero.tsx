import { Fragment } from 'react'
import {HeroBlock} from "../../types/blocks/HeroBlock";
import {JSONSchemaType} from "ajv";
import {RJSFSchema} from "@rjsf/utils";
import {PageBlock} from "../../types/PageBlock";

interface Props {
    block: HeroBlock
}

export const Hero: React.FC<Props> = ({block}) => {
    console.log('comp', block)

    return (
        <div className="relative bg-gray-50">

            <main className="lg:relative">
                <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block xl:inline">{block.headline}</span>{' '} <br/>
                            <span className="block text-nsAdmin-600 xl:inline">{block.subheadline}</span>
                        </h1>
                        <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            {block.description}
                        </p>
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                            <div className={"rounded-md shadow"}>
                                <a
                                    href="#"
                                    className={"flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 font-medium md:py-4 md:px-10 md:text-lg text-white bg-nsAdmin-600 hover:bg-nsAdmin-700"}
                                >
                                    {block.buttonOne}
                                </a>
                            </div>
                            <div className={"rounded-md shadow mt-3 sm:mt-0 sm:ml-3"}>
                                <a
                                    href="#"
                                    className={"flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 font-medium md:py-4 md:px-10 md:text-lg text-nsAdmin-600 bg-white hover:bg-gray-50"}
                                >
                                    {block.buttonTwo}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                        alt=""
                    />
                </div>
            </main>
        </div>
    )
}
