import styles from './subContentShowcase.module.scss'
const MenuProductsData = ['CELULAR' ,'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', ' TVS', 'VER TODOS', ]


export const SubTitle = () => {
  return (
    
      <p className={styles.subtitle}> Ver todas</p>
    
  );
}


export const  MenuProducts = () => {
    return (
        <ul className={styles.menuProducts}>{MenuProductsData.map(item => (
            <li>{item}</li>
        ))}</ul>
    )
}