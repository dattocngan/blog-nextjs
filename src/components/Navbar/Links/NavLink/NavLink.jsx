'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './NavLink.module.css'

const NavLink = ({ item }) => {
  const pathName = usePathname()
  return (
    <Link
      href={item.url}
      className={`${styles.container} ${
        pathName === item.url && styles.active
      }`}
    >
      {item.name}
    </Link>
  )
}

export default NavLink
