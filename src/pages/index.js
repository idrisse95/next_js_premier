import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../../components/Navbar/Navbar'
import data from '../../data/voca.json'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  console.log(props);
  return (

    <>



      <div>
        <h1>Vocabulaire de base</h1>
        <table>
          <tbody>
            {props.array.map((elemeny, index) => (
              <tr className='mb-5 border'>
                <td className='bg-blue-400 pr-3 pl-1 '>{elemeny.en}</td>
                <td>{elemeny.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </>

  )
}


export async function getStaticProps() {

  const data = await import('../../data/voca.json');
  const array = data.vocabulary

  return {
    props: {
      array
    }
  }
}