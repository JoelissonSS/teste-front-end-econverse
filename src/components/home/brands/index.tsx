import styles from './brands.module.scss'

export const Brands = () => {
  return (
    <section className={styles.brands}>
      <h2>Navegue por marcas</h2>
      <div className={styles.brands__content}>
        <img src="/brand.png" alt="marcas" />
        <img src="/brand.png" alt="marcas" />
        <img src="/brand.png" alt="marcas" />
        <img src="/brand.png" alt="marcas" />
        <img src="/brand.png" alt="marcas" />
      </div>
    </section>
  );
};
