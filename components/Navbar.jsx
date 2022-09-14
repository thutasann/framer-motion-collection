import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';


const Navbar = () => {

  const router = useRouter();

  return (
    <div className='nav'>
        <Link href="/" className={router.pathname == "/" ? "active" : ""}>
            Home
        </Link>
        <Link href="/parallax-two-section" className={router.pathname == "/parallax-two-section" ? "active" : ""}>
            Simple Parallax Two Section
        </Link>
    </div>
  )
}

export default Navbar