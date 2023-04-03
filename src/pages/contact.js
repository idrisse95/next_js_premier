import Image from 'next/image'
import React from 'react'
import img1 from '../../public/assets/img1.avif'
import img2 from '../../public/assets/img2.jpg'



export default function contact() {

 
 

  return (


    <div>



      <div>Contact</div>
      <Image src={img1} width="54565" height="45434"/>
      <Image src={img2} width="54565" height="45434"/>

      {/* // <img src="/assets/img1.avif" alt="" /><img src="/assets/img2.jpg" alt="" /> */}


    </div>
  )
}


