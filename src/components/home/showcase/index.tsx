import { useRef, useState } from 'react';
import dataJSON from '../../../data/showcaseData.json';
import { Button } from '../../ui/button/button';
import { Divisor } from '../../ui/divisor';
import styles from './showcase.module.scss';
import { MenuProducts, SubTitle } from './subContentShowcase';
import { Product } from '../../../@types/showcase';

type ShowcaseProps = {
  subContent?: 'menuProducts' | 'subtitle' | '';
};

export const Showcase = ({ subContent }: ShowcaseProps) => {
  const [product, setProduct] = useState<Product>();
  const containerShowcase = useRef<HTMLDivElement>(null);
  const modal = useRef<HTMLDialogElement>(null);
  function openModal() {
    modal.current?.showModal();
  }
  function closeModal() {
    modal.current?.close();
  }

  function scroolToLeft() {
    containerShowcase.current?.scrollBy({ left: -608, behavior: 'smooth' });
  }
  function scroolToRight() {
    containerShowcase.current?.scrollBy({ left: 608, behavior: 'smooth' });
  }

  return (
    <section className={styles.showcase}>
      <div className={styles.showcase__title}>
        <Divisor />
        <h2> Produtos relacionados </h2>
        <Divisor />
      </div>
      {subContent === 'menuProducts' && <MenuProducts />}
      {subContent === 'subtitle' && <SubTitle />}

      <div className={styles.showcase__content} ref={containerShowcase}>
        {dataJSON.products.map((product) => (
          <div
            onClick={() => {
              openModal();
              setProduct(product);
            }}
            key={product.productName}
            className={styles.showcase__content__items}
          >
            <img src={product.photo} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p className={styles.showcase__content__items__beforePrice}>
              R$ {product.price * 1.2}
            </p>
            <p className={styles.showcase__content__items__price}>
              R$ {product.price}
            </p>
            <p className={styles.showcase__content__items__installments}>
              ou 2x de {product.price / 2} sem juros
            </p>
            <p className={styles.showcase__content__items__freeShipping}>
              Frete grátis
            </p>
            <Button
              variant="secondary"
              classname={styles.showcase__content__items__button}
            >
              COMPRAR
            </Button>
          </div>
        ))}

        <img
          onClick={scroolToLeft}
          className={styles.showcase__before}
          src="/ui/before.png"
          alt="ir para trás"
        />
        <img
          onClick={scroolToRight}
          className={styles.showcase__next}
          src="/ui/next.png"
          alt=" ir para frente"
        />
      </div>
      {product && (
        <dialog className={styles.dialog} ref={modal}>
          <div className={styles.showcase__modal}><div className={styles.modal__left}>
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className={styles.modal__right}>
            <h2>{product.productName}</h2>
            <p className={styles.modal__price}>R$ {product.price}</p>
            <p className={styles.modal__desc}>{product.descriptionShort}</p>
            <p className={styles.modal__more}>
              Veja mais detalhes do produto &gt;
            </p>
            <div className={styles.modal__count}>
              <div>
                <img src="minus.png" alt="menos um item" />
                <p>01</p> <img src="plus.png" alt="mais um item" />
              </div>
              <Button>COMPRAR</Button>
            </div>
            <div style={{position: 'absolute', right: '30px', top: '15px'}} className={styles.modal__close} onClick={closeModal}><img src="close.png" alt="fechar modal" /></div>
          </div></div>
          
        </dialog>
      )}
    </section>
  );
};
