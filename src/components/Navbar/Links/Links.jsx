'use client'
import React, { useState } from 'react'
import styles from './Links.module.css'
import NavLink from './NavLink/NavLink'

const links = [
  { name: 'Homepage', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' }
]

const Links = () => {
  const [open, setOpen] = useState(false)
  const session = true
  const isAdmin = false

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.name} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ name: 'Admin', url: '/admin' }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ name: 'Login', url: '/login' }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.name} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Links
