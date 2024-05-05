'use client'
import Link from 'next/link'
import styles from './error.module.scss'
import { Home } from 'lucide-react'

export default function ErrorPage() {
  return (
    <div className={styles.error}>
      <h1>Ops! Essa página não existe!</h1>
      <Link href={'/'}>
        <Home size={20} color='#fff' />
        Voltar para home
      </Link>
    </div>
  )
}
