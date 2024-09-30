import "react-photo-album/rows.css";
import { genPageMetadata } from 'app/seo'
export const metadata = genPageMetadata({ title: 'Gallery' });
import Image from "next/image";

export default function HomeFunction(){
  return (
    <>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Yale's Birding Club.
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            We <em> really </em> love birding.
          </p>
          <hr className="border-t-2 border-gray-300"></hr>
        
          <Image src="/static/images/gallery/[ZZ] East Rock-Unspecified Date/East Rock-1.jpeg" width="600" height="450" alt="YBSA Logo." className="w-full text-center"/>
          
          <h3 className="text-4xl text-center"> <strong> What do we do? </strong> </h3>

          {/** 
           * Sections for this website we are hoping for: 
           * (1) Showing the entire team together. 
           * (2) Explaining what we do? 
           *    (cards?)
           *    --> birding trips 
           *    --> birding meetings 
           *    --> bird advocacy 
           */}
 
        </div>
      </div>
    </>
  )
}
