import { FC, useRef } from 'react';
import { useAppSelector } from 'redux/hooks';

import { MONGODB_LOGO_SRC } from 'constants/assetsSrcConstants';
import { getRequestStatus } from 'redux/slices/main/exports';
import { useAnimateLoaderAppearing } from './hooks/useAnimate';
import styles from './Loader.module.scss';

export const Loader: FC = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const isLoaderShown = useAppSelector(getRequestStatus) === 'loading';
  useAnimateLoaderAppearing(isLoaderShown, loaderRef);
  return (
    <div className={styles.Loader} ref={loaderRef}>
      <img src={MONGODB_LOGO_SRC} alt="" />
    </div>
  );
};
