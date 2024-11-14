import { ReplyDataInputType } from 'types/types';

export const getReplyDataInputPlaceholder = (type: ReplyDataInputType) => {
  switch (type) {
    case 'company':
      return 'Enter the company name';
    case 'position':
      return 'Enter the position name';
    case 'note':
      return 'Enter a note for your reply';
  }
};
