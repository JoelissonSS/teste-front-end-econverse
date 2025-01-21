import styles from './infoList.module.scss';

export const InfoList = () => {
  return (
    <div className={styles.infoList}>
      <div className={styles.infoList__item}>
        <img src="/headerIcons/ShieldCheck.svg" alt="icone de compra segura" />
        <p>
          Compra{' '}
          <span className={styles.infoList__item__textHignlight}>
            100% segura
          </span>
        </p>
      </div>
      <div className={styles.infoList__item}>
        <img src="/headerIcons/Truck.svg" alt="icone de caminhão" />
        <p>
          <span className={styles.infoList__item__textHignlight}>
            Frete grátis
          </span>{' '}
          acima de R$ 200
        </p>
      </div>
      <div className={styles.infoList__item}>
        <img src="/headerIcons/CreditCard.svg" alt="icone de cartão de credito" />
        <p>
          <span className={styles.infoList__item__textHignlight}>Parcele</span>{' '}
          suas compras
        </p>
      </div>
    </div>
  );
};
