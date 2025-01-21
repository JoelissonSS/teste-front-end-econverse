import styles from './partners.module.scss'
import { Button } from '../../ui/button/button';

export const Partners = () => {
  return (
    <section className={styles.Partners}>
      <div className={styles.Partners_Banner}>
        <h3>Parceiros</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <Button>CONFIRA</Button>
      </div>
      <div className={styles.Partners_Banner}>
        <h3>Parceiros</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <Button>CONFIRA</Button>
      </div>
    </section>
  );
};
