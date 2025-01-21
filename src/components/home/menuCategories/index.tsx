import styles from './menuCategories.module.scss'


const menuCategoriesData = [
  {
    text: 'Tecnologia',
    src: '/categories/tech.png',
    alt: 'Tecnologia',
  },
  {
    text: 'Supermercado',
    src: '/categories/supermercados.png',
    alt: 'Supermercado',
  },
  {
    text: 'Bebidas',
    src: '/categories/whiskey.png',
    alt: 'bebidas',
  },
  {
    text: 'Saúde',
    src: '/categories/saude.png',
    alt: 'Saúde',
  },
  {
    text: 'Esportes e Fitness',
    src: '/categories/corrida.png',
    alt: 'Esportes e Fitness',
  },
  {
    text: 'Moda',
    src: '/categories/moda.png',
    alt: 'Moda',
  },
];

export const MenuCategories = () => {
  return (
    <div className={styles.menuCategories}>
      {menuCategoriesData.map((category, index) => (
        <div key={index} className={styles.menuCategories__item}>
          <div><img src={category.src} alt={category.alt} /></div>
          <p>{category.text}</p>
        </div>
      ))}
    </div>
  );
};
