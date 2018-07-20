import React from 'react'
import Link from 'next/link'

const HomePage = () => (
  <div> this is homepage

    <Link href='/product'>
      <a> go to Product page</a>
    </Link>
    <Link href='/mobx'>
      <a> go to Mobx Example page</a>
    </Link>
    <Link href='/bootstrap'>
      <a> go to bootstrap </a>
    </Link>
  </div>
)

export default HomePage
