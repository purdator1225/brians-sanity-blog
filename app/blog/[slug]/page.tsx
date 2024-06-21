import { client, urlFor } from '@/app/lib/sanity'
import Image from 'next/image'
import React from 'react'

async function getData(slug:string){
    const query = `*[_type =='blog' && slug.current == '${slug}']`

    const data = await client.fetch(query)

    return data

    
}

export const revalidate = 30


async function BlogArticle({params}:{params:{slug:string}}) {


    let data = await getData(params.slug)

    console.log(params.slug)

    let postData = data[0]


  return (
    <div>

        <Image width={500} height={500} alt='image' src={urlFor(postData.titleImage).url()}></Image>

        <h1 className='text-2xl'>{postData.title}</h1>
        <p>{postData.smallDescription}</p>
        <p>{postData._updatedAt}</p>
        
    
  </div>)
}

export default BlogArticle