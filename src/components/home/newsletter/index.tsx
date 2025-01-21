import { Button } from '../../ui/button/button';
import styles from './newsLetter.module.scss';

export const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletter__container}>
        <div className={styles.newsletter__container__text}>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>
        <div className={styles.newsletter__container__form}>
          <form>
            <input type="text" name="nome" placeholder="Digite seu nome" />
            <input type="text" name="email" placeholder="Digite seu e-mail" />
            <label>
              <input type="checkbox" placeholder="samdasdad" />
              Aceito os termos e condições
            </label>

            <Button>INCREVER</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
