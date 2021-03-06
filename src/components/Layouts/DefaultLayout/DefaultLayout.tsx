import { PropsWithChildren } from 'react';

import style from './DefaultLayout.module.scss';

export const DefaultLayout = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  return (
    <div className={style.layoutContainer}>
      <div className={style.innerContainer}>{children}</div>
    </div>
  );
};
