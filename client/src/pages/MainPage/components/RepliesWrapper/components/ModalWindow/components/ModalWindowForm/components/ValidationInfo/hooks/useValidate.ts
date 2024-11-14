import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { useModalWindow } from '../../../../../hooks/useModalWindow';
import { useReply } from '../../../hooks/useReply';
import { getIsModalWindowOpenedForCreation } from 'redux/slices/main/exports';

export const useValidate = () => {
  const dispatch = useAppDispatch();
};
