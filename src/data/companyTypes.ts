import type {AnswerOption} from '@/app/types';

export const companyTypes: AnswerOption[] = [
  {
    key: 'startup',
    score: 1,
    text: {
      en: 'Startup companies',
      fi: 'Startup-yritykset',
    },
  },
  {
    key: 'research_institution',
    score: 1,
    text: {
      en: 'Research institutions (e.g. VTT)',
      fi: 'Tutkimuslaitokset (esim. VTT)',
    },
  },
  {
    key: 'university',
    score: 1,
    text: {
      en: 'Universities',
      fi: 'Korkeakoulut',
    },
  },
  {
    key: 'sme',
    score: 1,
    text: {
      en: 'SME companies',
      fi: 'PK-yritykset',
    },
  },
];
