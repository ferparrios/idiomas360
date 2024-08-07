import styles from './Form.module.css'

export const Form = () => {
  return(
    <form className={`${styles.form} ${styles['form--contact']}`}>
      <div className={styles.input__container}>
        <label htmlFor="name" className={styles.label}>Nombres:</label>
        <input className={styles.input} type="text" id="name" name="name" placeholder='Tu Nombre'/>
      </div>
      <div className={styles.input__container}>
        <label htmlFor="email" className={styles.label}>Correo:</label>
        <input className={styles.input} type="email" id="email" name="email" placeholder='tunombre@gmail.com'/>
      </div>
      <div className={styles.input__container}>
        <label htmlFor="cell-number" className={styles.label}>Celular:</label>
        <input className={styles.input} type="number" id="cell-number" name="cell-number" placeholder='987654321'/>
      </div>
      <div className={styles.input__container}>
        <label htmlFor="subject" className={styles.label}>Asunto:</label>
        <textarea className={styles.textarea} id="subject" name="subject"/>
      </div>
      <button className={styles.button}>Enviar</button>
    </form>
  );
}