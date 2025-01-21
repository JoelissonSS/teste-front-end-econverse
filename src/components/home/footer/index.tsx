import { Divisor } from '../../ui/divisor';
import styles from './footer.module.scss'
export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__content}>
        <div className={styles.footer__content__left}>
          <img src="/Logo.png" alt="logo econverse" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div>
            <img src="/footer/instagram.png" alt="logo instagram" />
            <img src="/footer/facebook.png" alt="logo facebook" />
            <img src="/footer/linkedin.png" alt="logo linkedin" />
          </div>
        </div>
        <Divisor  classname={styles.footer__content__divisor}/>
        <div className={styles.footer__content__right}>
          <div>
            <h3>Institucional</h3>
            <p>Sobre Nós</p>
            <p>Movimento</p>
            <p>Trabalhe conosco</p>
          </div>
          <div>
            <h3>Ajuda</h3>
            <p>Suporte</p>
            <p>Fale Conosco</p>
            <p>Perguntas Frequentes</p>
          </div>
          <div>
            <h3>Termos</h3>
            <p>Termos e Condições</p>
            <p>Política de Privacidade</p>
            <p>Troca e Devolução</p>
          </div>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};
