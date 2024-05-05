import React from 'react'
import styles from './services.module.scss'
import Image from 'next/image'

interface Props {
  about: {
    description: string;
    banner: {
      url: string;
    };
  }
  services: ServicesProps[]
}

interface ServicesProps {
  image: {
    url: string
  },
  description: string
}

export function Services({ about, services }: Props) {
  return (
    <>
      <section id='servicos' className={styles.about}>
        <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{about.description}</p>
        </article>

        <div className={styles.bannerAbout}>
          <Image
            className={styles.imageAbout}
            alt="Banner"
            quality={100}
            sizes='(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw'
            fill
            src={about.banner.url}
          />
        </div>
      </section>

      <h2 className={styles.titleServices}>Conheça nossos serviços</h2>

      <section className={styles.services}>
        {services.map((service) => (
          <article key={service.description} className={styles.service}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                alt="Imagem do serviço"
                quality={100}
                sizes='(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw'
                fill
                src={service.image.url}
              />
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  )
}
