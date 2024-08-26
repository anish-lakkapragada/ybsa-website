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

  return (
    <>
      <BoardMemberLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </BoardMemberLayout> 
    </>
  )
}
