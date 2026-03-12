'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const HeaderClient: React.FC = () => {
  const pathname = usePathname()
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive)
    document.body.classList.toggle('mobile-nav-active')
  }

  useEffect(() => {
    // Close mobile nav on route change
    setIsMobileNavActive(false)
    document.body.classList.remove('mobile-nav-active')
  }, [pathname])

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          <img src="/assets/img/MKG-DEMS-logo.jpg" alt="Muskegon Democratic Party" />
          <h1 className="sitename">Muskegon Democratic Party</h1>
        </Link>

        <nav id="navmenu" className={`navmenu ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link href="/get-involved" className={pathname === '/get-involved' ? 'active' : ''}>Get Involved</Link></li>
            <li><Link href="/elections" className={pathname === '/elections' ? 'active' : ''}>Elections & Voting</Link></li>
            <li><Link href="/governance" className={pathname === '/governance' ? 'active' : ''}>Governance</Link></li>
            <li><Link href="/people" className={pathname === '/people' ? 'active' : ''}>People</Link></li>
            <li><Link href="/newsletters" className={pathname === '/newsletters' ? 'active' : ''}>Newsletters</Link></li>
            <li><Link href="/blog" className={pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
            <li><Link href="/events" className={pathname === '/events' ? 'active' : ''}>Events</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
          <i 
            className={`mobile-nav-toggle bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`} 
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  )
}
