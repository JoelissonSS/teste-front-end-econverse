import { InfoList } from './infoList';
import styles from './header.module.scss';
import { MenuHeader } from './menu';
import { Divisor } from '../../ui/divisor';
import { NavBar } from './navbar';
export const Header = () => {
  return (
    <header className={styles.header}>
      <InfoList />
      <Divisor />
      <MenuHeader />
      <Divisor />
      <NavBar />
    </header>
  );
};
