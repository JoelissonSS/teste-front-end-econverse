import styles from './navbar.module.scss'
type NavBarDataType = {
    text: string;
    icon?: string;
    alt?: string; 
} 

const NavBarData: NavBarDataType[] = [
  {
    text: 'Todas Categorias',
  },
  {
    text: 'Supermercado',
  },
  {
    text: 'Livros',
  },
  {
    text: 'Moda',
  },
  {
    text: 'Lançamentos',
  },
  {
    text: 'Ofertas do dia',
  },
  {
    text: 'Assinatura',
    icon: '/CrownSimple.svg',
    alt: 'imagem de coroa',
  },
];

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      {NavBarData.map((item, index) => (
        <a key={index} href="#">
          {item.icon && <img src={item.icon} alt={item.alt} />}
          {item.text}
        </a>
      ))}
    </nav>
  );
};
