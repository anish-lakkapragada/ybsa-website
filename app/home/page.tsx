/** 
 * Things to ask about: 
 * (a) which photos should use with the cards? 
 * (b) do we have a form for "Joining Us"? 
 * (c) 
 */
import "react-photo-album/rows.css";
import { genPageMetadata } from 'app/seo'
export const metadata = genPageMetadata({ title: 'Gallery' });
import Image from "next/image";
import Card from "@/components/Card";

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

          <div className="flex flex-row gap-2"> 
            <Card title="Birding Trips" description="We go on biweekly birding trips at Yale University and the broader New Haven." href="https://yale.edu" imgSrc="https://picsum.photos/536/354" />
            <Card title="Bird Education" description="We host fun biweekly meetings to review birding concepts and teach about birding!" href="https://yale.edu" imgSrc="https://picsum.photos/536/354" />
            <Card title="Bird Advocacy" description="We contribute to social efforts for bird conservation, such as the Yale Bird-Friendly Building Initiative." href="https://yale.edu" imgSrc="https://picsum.photos/536/354" />
          </div> 

          <h3 className="text-4xl text-center"> <strong> Join us! </strong> </h3>

        </div>
      </div>
    </>
  )
}
