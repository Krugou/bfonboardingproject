import type {AnswerOption} from '@/app/types';

export const stageOfCompany: AnswerOption[] = [
  {
    key: 'interested_in_growth',
    score: 1,
    weight: 0.5,
    text: {
      en: 'I am interested in growth',
      fi: 'Olen kiinnostunut kasvusta',
    },
  },
  {
    key: 'find_out_how_to_grow_and_internationalize',
    score: 2,
    weight: 0.6,
    text: {
      en: 'I want to find out how my company can grow and internationalize',
      fi: 'Haluan selvittää miten yritykseni voi kasvaa ja kansainvälistyä',
    },
  },
  {
    key: 'planning_growth_and_internationalization',
    score: 3,
    weight: 0.8,
    text: {
      en: 'I am planning growth and internationalization',
      fi: 'Suunnittelen kasvua ja kansainvälistymistä',
    },
  },
  {
    key: 'entering_the_market',
    score: 3,
    weight: 0.9,
    text: {
      en: 'I am entering the market',
      fi: 'Olen menossa markkinoille',
    },
  },
  {
    key: 'trading',
    score: 2,
    weight: 0.7,
    text: {
      en: 'I am trading',
      fi: 'Käyn kauppaa',
    },
  },
  {
    key: 'expand_and_renew',
    score: 3,
    weight: 1,
    text: {
      en: 'I want to expand and renew',
      fi: 'Haluan laajentua ja uudistua',
    },
  },
];
