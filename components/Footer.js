import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={`footer mt-6 has-border-top-width-3`}>
      <div className={`${styles.content} content pt-2 has-text-centered`}>
        <p>WTF needs a copyright?</p>
      </div>
    </footer>
  )
}
