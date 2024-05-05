import { ReactNode } from 'react'
import styles from './hero.module.scss'
import Image from 'next/image'

interface Props {
  heading: string
  buttonUrl: string
  buttonTitle: string
  bannerUrl: string
  icon: ReactNode
}

export function Hero({ ...props }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>
          {props.heading}
        </h1>

        <a
          target='_blank'
          href={props.buttonUrl}
          className={styles.link}
        >
          {props.icon}
          {props.buttonTitle}
        </a>
      </div>

      <div className={styles.contentBanner}>
        <Image
          className={styles.banner}
          alt={props.heading}
          src={props.bannerUrl}
          priority
          sizes='(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw'
          quality={100}
          fill
        />
      </div>
    </main>
  )
}
