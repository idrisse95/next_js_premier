import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

export default function liste(props) {

  const router = useRouter()

  const b = (elem) => {

    setTimeout(() => {
      router.push({
        pathname: `/liste/${elem.name}`,
        query: {
          result: JSON.stringify(elem.data),

        }
      })
    }, 400);

    console.log(JSON.parse(JSON.stringify(elem.data)));
  }

  return (
    <div className='h-[80vh] flex justify-center  pt-[100px]'>
      <div className='w-[80%]'>
        <p className='text-4xl font-semibold'>Les listes de Vocabulaire</p>
        <div className='w-full mt-8'>
          <div className='  [&>*]:text-blue-500 [&>*]:underline [&>*]:uppercase [&>*]:w-full [&>*]:border'>
            {props.array.map((elem) => (
              <div>

                <p className='my-5 cursor-pointer' onClick={() => { b(elem) }}>{elem.name}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export async function getStaticProps() {


  const data = await import('../../../data/liste.json');
  const array = data.englishList

  return {
    props: {
      array
    }
  }
}