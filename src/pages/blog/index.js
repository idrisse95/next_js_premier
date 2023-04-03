import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'



export default function index(props) {

  console.log(props);
  const router = useRouter()

  const navigateTo = (element) => router.push(`/${element.capital}`)

  return (
    <div>le blog
       <Link href='/blog/10 plats basque'>
        <p>10 plats basque</p>
       </Link>

    <div className='gap-10 flex-wrap'>
      {props.data.map((element)=> (
        <button className='odd:bg-red-300 even:bg-blue-300 border' onClick={()=>{navigateTo(element)}}>{element.capital}</button>
      ))}
    </div>

    </div>
  )
}

export async function getStaticProps(){
  const quote = await fetch('https://restcountries.com/v3.1/all')
  const data = await quote.json()


  // if (data.length < 150) {
  // return {
  //   notFound: true
  // }    
  // }

  // if (data.length < 150) {
  //   return {
  //     redirect : {
  //       destination :'/contact'
  //     }
  //   }    
  //   }

  return {
    props: {
      data
    }
}

}
