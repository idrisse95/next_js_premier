import { useRouter } from 'next/router';
import { parse } from 'postcss';
import React from 'react'

export default function slug({ data }) {
     

    console.log(data);
    return (
        <pre>


            {data.map((elem) => (
                <div className='flex border [&>*]:border'>
                    <div className='w-[50%]'>{elem.fr}</div>
                    <div className='w-[50%]'>{elem.en}</div>
                </div>
            ))}


        </pre>
    )
}


export async function getServerSideProps(context) {
    const { query } = context
 
    const data = JSON.parse(query.result)

    return {
        props: {
            data
        }
    }
}