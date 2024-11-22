import type {AnswerOption} from '@/app/types';

export const companyTypes: AnswerOption[] = [
  {
    key: 'startup',
    score: 3,
    text: {
      en: 'Startup companies',
      fi: 'Startup-yritykset',
    },
  },
  {
    key: 'research_institution',
    score: 2,
    text: {
      en: 'Research institutions (e.g. VTT)',
      fi: 'Tutkimuslaitokset (esim. VTT)',
    },
  },
  {
    key: 'university',
    score: 2,
    weight: 0.8,
    text: {
      en: 'Universities',
      fi: 'Korkeakoulut',
    },
  },
  {
    key: 'sme',
    score: 3,
    text: {
      en: 'SME companies',
      fi: 'PK-yritykset',
    },
  },
];
