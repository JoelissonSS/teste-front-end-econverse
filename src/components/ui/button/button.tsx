import styles from './button.module.scss';

type ButtonProps = {
  children: string;
  variant?: 'primary' | 'secondary';
  classname?: string;
};

export const Button = ({
  children,
  variant = 'primary',

  classname,
}: ButtonProps) => {
  return (
    <button className={`${styles[variant]} ${classname} `}>{children}</button>
  );
};
