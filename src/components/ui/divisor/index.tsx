import styles from './divisor.module.scss'
type DivisorProps = {
  classname?: string | null;
};

export const Divisor = (
  {classname
}: DivisorProps) => {
  return (
    <div
      className={`${classname} ${styles.divisor}`}
      
    />
  );
};
