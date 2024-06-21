import {createClient} from 'next-sanity';

import ImageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: '9t8uvof1', 
    useCdn: false
})


const builder = ImageUrlBuilder(client)


export function urlFor(source:any){

    console.log(source)
    return builder.image(source)

}