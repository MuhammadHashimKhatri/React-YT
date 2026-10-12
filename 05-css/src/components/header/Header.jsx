import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h3 className={styles.logo}>Hello, World!</h3>
        <button className={styles.btn}>login</button>
    </div>
  )
}

export default Header