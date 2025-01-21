import styles from './menu.module.scss';
const menuIcons = [
  {
    src: 'headerIcons/Group.svg',
    alt: 'icone de caixa',
  },
  {
    src: 'headerIcons/Heart.svg',
    alt: 'icone de menu',
  },
  {
    src: 'headerIcons/User.svg',
    alt: 'icone de usuário',
  },
  {
    src: 'headerIcons/ShoppingCart.svg',
    alt: 'icone de carrinho',
  },
];

export const MenuHeader = () => {
  return (
    <div className={styles.menu}>
      <img src="/headerIcons/Logo.png" alt="logo da empresa" />
      <label className={styles.menu__input}>
        <input type="text" placeholder="O que você está buscando?" />
        <img src="headerIcons\MagnifyingGlass.svg" alt="icone de busca" />
      </label>
      <div className={styles.menu__icons}>
        {menuIcons.map((item, index) => (
          <img key={index} src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  );
};
