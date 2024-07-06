import styles from './Header.module.css'

export const Header = () => {
  return (
    <header>
      <nav className={styles['nav']}>
        {/* <img src="" alt="Idiomas 360" /> */}
        <div className={styles['logo-container']}>
          <p className={styles.logo}>IDIOMAS <span>360</span></p>
        </div>
        <ul className={styles['nav__items']}>
          <li className={styles['nav__item']}><a href="#home">Inicio</a></li>
          <li className={styles['nav__item']}><a href="#about">Nosotros</a></li>
          <li className={styles['nav__item']}><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}