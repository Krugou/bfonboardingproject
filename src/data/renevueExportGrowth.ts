import type {AnswerOption} from '@/app/types';

export const revenueExportGrowth: AnswerOption[] = [
  {
    key: 'research_and_development',
    score: 1,
    text: {
      en: 'Through research and development (e.g., developing new products and services)',
      fi: 'Tutkimus- ja kehitystyöllä (esim. uusia tuotteita ja palveluita kehittämällä)',
    },
  },
  {
    key: 'strengthening_international_sales',
    score: 1,
    text: {
      en: 'Strengthening international sales',
      fi: 'Vahvistamalla kansainvälistä myyntiä',
    },
  },
  {
    key: 'develop_or_renew_export_activities',
    score: 1,
    text: {
      en: 'Looking for ways to develop or renew export activities',
      fi: 'Etsimme tapoja kehittää tai uudistaa vientitoimintaa',
    },
  },
  {
    key: 'dont_know',
    score: 0,
    text: {
      en: "I don't know",
      fi: 'En tiedä',
    },
  },
];
