import { MutableRefObject } from 'react';

import { useGSAPTimeline } from 'hooks/GSAP/useGSAPTimeline';
import { LADER_APPEARING_DURATION } from 'constants/gsapConstants';

export const useAnimateLoaderAppearing = (
  isLoaderShown: boolean,
  scopeElement: MutableRefObject<HTMLDivElement>,
) => {
  const opacity = isLoaderShown ? 1 : 0;
  const { timeline: loaderAppearingTimeline } = useGSAPTimeline(false, undefined, scopeElement, [
    isLoaderShown,
  ]);
  loaderAppearingTimeline &&
    loaderAppearingTimeline.to(scopeElement.current, {
      opacity,
      duration: LADER_APPEARING_DURATION,
    });
};
