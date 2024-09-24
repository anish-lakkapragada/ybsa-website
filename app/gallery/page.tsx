import "react-photo-album/rows.css";
import { genPageMetadata } from 'app/seo'
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const imagesDir = path.join(process.cwd(), 'public/static/images/gallery');
  console.log(`brah: ${imagesDir}`);

  const filenames = fs.readdirSync(imagesDir);
  console.log(filenames);
  
  const images = filenames.filter((file) =>
    file.match(/\.(jpg|jpeg|png|gif)$/)
  );

  return {
    props: {
      images,
    },
  };
}

export const metadata = genPageMetadata({ title: 'Gallery' })

export default function Gallery() {
  const imagesDir = path.join(process.cwd(), 'public/static/images/gallery');
  const filenames = fs.readdirSync(imagesDir);
  console.log(filenames);
  
  const images = filenames.filter((file) =>
    file.match(/\.(jpg|jpeg|png|gif)$/)
  );
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
        </div>
      </div>
    </>
  )
}
