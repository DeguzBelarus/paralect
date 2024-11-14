import { MutableRefObject, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { Nullable } from 'types/types';

interface ITimelineHandleData {
  timeline: gsap.core.Timeline;
  isFirstLoad: boolean;
  setIsFirstLoad: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useGSAPTimeline = (
  isPaused: boolean,
  scrollTrigger?: gsap.DOMTarget | ScrollTrigger.Vars,
  scopeElement?: MutableRefObject<HTMLDivElement>,
  dependencies?: Array<unknown>,
): Nullable<ITimelineHandleData> => {
  const [timeline, setTimeline] = useState<gsap.core.Timeline>(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  useGSAP(
    () => {
      setTimeline(gsap.timeline({ paused: isPaused, scrollTrigger }));
    },
    { dependencies, scope: scopeElement, revertOnUpdate: true },
  );
  return { timeline, isFirstLoad, setIsFirstLoad };
};
