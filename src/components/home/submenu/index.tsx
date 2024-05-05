'use client'
import { useState, useEffect } from 'react'
import styles from './submenu.module.scss'
import Link from 'next/link'

import { X, Menu } from 'lucide-react'
import { SubMenuProps } from '@/utils/menu.type'

export function Submenu({ objects }: SubMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={34} color='#121212' />
        Menu
      </div>
      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>

        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={54} color='#121212' />
          </button>
        )}
        {objects.map((menu) => (
          <li key={menu.slug}>
            <Link href={`/post/${menu.slug}`}>
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
