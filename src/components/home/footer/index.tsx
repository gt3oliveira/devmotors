import styles from './footer.module.scss'
import { Mail, Map, Phone, Clock } from 'lucide-react'

interface Props {
  contact: {
    email: string;
    phone: string;
    address: string;
    time: string;
  }
  cta_button: {
    title: string;
    url: string;
  }
}

export function Footer({ contact, cta_button }: Props) {
  return (
    <footer id='contatos' className={styles.footer}>
      <section className={styles.section}>
        <h2 className={styles.title}>Contatos</h2>

        <div className={styles.content}>
          <section className={styles.item}>
            <Mail size={28} color='#fff' />
            <div>
              <strong>Email</strong>
              <p>{contact.email}</p>
            </div>
          </section>

          <section className={styles.item}>
            <Phone size={28} color='#fff' />
            <div>
              <strong>Telefone</strong>
              <p>{contact.phone}</p>
            </div>
          </section>

          <section className={styles.item}>
            <Map size={28} color='#fff' />
            <div>
              <strong>Endereço</strong>
              <p>{contact.address}</p>
            </div>
          </section>

          <section className={styles.item}>
            <Clock size={28} color='#fff' />
            <div>
              <strong>Horário de funcionamento</strong>
              <p>{contact.time}</p>
            </div>
          </section>
        </div>
      </section>

      <a href={cta_button.url} target='_blank'
        className={styles.link}
      >
        <Phone size={24} color='#fff' />
        {cta_button.title}
      </a>
    </footer>
  )
}
