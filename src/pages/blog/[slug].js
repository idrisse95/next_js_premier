import { useRouter } from 'next/router'
import React from 'react'

export default function article() {

  const router = useRouter()

  console.log('route');
  console.log(router);
  console.log('router rouer');
  console.log(router.route);

  //chemin
  console.log(router.asPath);
  //nom ecrit a la fin
  console.log(router.query);

  const pushFunction = () => {
    router.push('/')
  }
  return (
    <div>

      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{router.query.slug}</title>
      </head>

      10 plat savoureux
      <h1>{router.query.slug}</h1>
      <button onClick={pushFunction}>
        Push
      </button>
    </div>
  )
}
