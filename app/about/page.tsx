/** 
 * This page will be used for all board members. 
 */

import { Authors, allAuthors } from '.contentlayer/generated'
import {Board, allBoards} from ".contentlayer/generated";

import { MDXLayoutRenderer } from 'pliny/mdx-components'
import BoardMemberLayout from '@/layouts/BoardMemberLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author);

  console.log(allBoards);

  return (
    <>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
          <hr className="border-t-2 border-gray-300"></hr>
      </div>
      {allBoards.map((boardMember) => {
          return <BoardMemberLayout key={boardMember._id} content={coreContent(boardMember)}>
              <MDXLayoutRenderer code={boardMember.body.code} />
          </BoardMemberLayout> 
      })}
    </>
  )
}
