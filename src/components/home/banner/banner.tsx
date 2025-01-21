import { Button } from '../../ui/button/button';
import styles from './banner.module.scss';
export const Banner = () => {
  return (
    <section className={styles.banner}>
        <div className={styles.gradient} />
      <div>
        <h1>Venha conhecer nossas <br /> promoções</h1>
        <p>
          <span>50% Off </span> nos produtos{' '}
        </p>
        <Button >Ver produto</Button>
      </div>
    </section>
  );
};
