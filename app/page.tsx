import Image from "next/image";
import { client } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { urlFor } from "./lib/sanity";
import { Button } from "@/components/ui/button";
import Link from "next/link";


async function getData(){
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
  title, 
  smallDescription,
  'currentSlug': slug.current,
  titleImage
  
}`; 


const data = await client.fetch(query)


return data


}


export const revalidate = 30



export default async function Home() {

  const data:simpleBlogCard[] = await getData(); 

  console.log(data)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
      {data.map((post, idx)=>(
        <Card  key={post.currentSlug}>
          <CardHeader>
            <Image 
            className="rounded-t-lg h-[200px] object-cover"
            width={500} 
            height={500} 
            src={urlFor(post.titleImage).url()} alt='image'></Image>
          <CardTitle>{post.title}</CardTitle>

          
          </CardHeader>

          <CardContent>
            <p className="text-lg line-clamp-3 mt-2 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>

            <Button asChild className="w-full mt-7">
           <Link href={ `/blog/${post.currentSlug}`}>Read More</Link>
            </Button>

          </CardContent>
         
        

          
          
           </Card>

      ))}
    </div>

  );
}
