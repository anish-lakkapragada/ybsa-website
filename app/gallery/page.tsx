import "react-photo-album/rows.css";
import { genPageMetadata } from 'app/seo'
import fs from 'fs';
import path from 'path';
import Image from "next/image";
export const metadata = genPageMetadata({ title: 'Gallery' });
import sizeOf from "image-size";


interface ImageType {
  name: string; 
  width: number | undefined; 
  height: number | undefined; 
  alt: string;
}

export default function Gallery(){

  const imageSet: ImageType[] = []; 
  const folders = fs.readdirSync('public/static/images/gallery');
  for (const folder of folders) {
    if (folder == ".DS_Store" || folder.includes("MACOSX")) {continue;}
    const imagesDir = path.join(process.cwd(), `public/static/images/gallery/${folder}`);
    const filenames = fs.readdirSync(imagesDir).filter((file) =>
      file.match(/\.(jpg|jpeg|png|gif)$/)
    );
    for (const file of filenames) {
      const imagePath = path.join(imagesDir, file);
      const dimensions = sizeOf(imagePath);
      console.log(`/public/static/images/gallery/${folder}/` + file);
      console.log(`${dimensions.width} ${dimensions.height}`)
      imageSet.push({
        name: `/static/images/gallery/${folder}/` + file,
        width: dimensions.width,
        height: dimensions.height,
        alt: `A photograph from our trip to ${folder.substring(0, folder.indexOf("-"))} in ${folder.substring(folder.indexOf("-") + 1)}!`
      });
    }
  }

  return (
    <>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Gallery
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Photographs from our many trips :)
          </p>
          <hr className="border-t-2 border-gray-300"></hr>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4">
            {imageSet.map((image, i) => (
              <div key={i + 1} className="mb-4 relative">
                <Image
                  src={image.name}
                  alt={"A photograph of YBSA on one of its birding trips."}
                  width={image.width}
                  height={image.height}
                  layout="responsive"
                  loading="eager"
                />
              </div>
            ))}
           </div>
        </div>
      </div>
    </>
  )
}
