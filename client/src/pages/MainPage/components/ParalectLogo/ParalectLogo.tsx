import { FC } from 'react';

import { PARALECT_LOGO_SRC } from 'constants/assetsSrcConstants';
import { PARALECT_WEBSITE_URL } from 'constants/constants';
import styles from './ParalectLogo.module.scss';

export const ParalectLogo: FC = () => {
  return (
    <a className={styles.ParalectLogo} href={PARALECT_WEBSITE_URL} target="_blanc">
      <img draggable={false} src={PARALECT_LOGO_SRC} alt="" />
    </a>
  );
};
