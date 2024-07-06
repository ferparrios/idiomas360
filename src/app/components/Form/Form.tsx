import styles from './Form.module.css'

export const Form = () => {
  return(
    <form className={`${styles.form} ${styles['form--contact']}`}>
      <div className={styles.input__container}>
        <label htmlFor="name">Nombres:</label>
        <input className={styles.input} type="text" id="name" name="name"/>
      </div>
      <div className={styles.input__container}>
        <label htmlFor="email">Correo:</label>
        <input className={styles.input} type="email" id="email" name="email"/>
      </div>
      <div className={styles.input__container}>
        <label htmlFor="cell-number">Celular:</label>
        <input className={styles.input} type="number" id="cell-number" name="cell-number"/>
      </div>
      <div className={styles.input__container}>
        <label htmlFor="subject">Asunto:</label>
        <textarea className={styles.textarea} id="subject" name="subject"/>
      </div>
    </form>
  );
}