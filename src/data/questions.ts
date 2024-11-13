import {QuestionItem} from '@/app/types';
import {countries} from './countries';
import {services} from './services';
import {currentTopics} from './currentTopics';
import {industries} from './industries';
import {stageOfCompany} from './stageOfCompany';
import {revenueExportGrowth} from './renevueExportGrowth';
import {companyTypes} from './companyTypes';

const questions: QuestionItem[] = [
  {
    id: 'k1',
    question: {
      en: 'What is your company’s business ID?',
      fi: 'Mikä on yrityksen Y-tunnus?',
    },
    conditions: ['all'],
    tooltip: {
      en: 'Please provide your company’s business ID.',
      fi: 'Anna yrityksesi Y-tunnus.',
    },
    syntaxPlaceholder: {
      en: 'Business ID format (validation) ',
      fi: 'Y-tunnus formaatti (validointi) ',
    },
    answerType: 'directInput',

    errorAnswer: {
      en: 'Please provide a valid business ID.',
      fi: 'Anna kelvollinen Y-tunnus.',
    },
    validationRegex: {
      en: '^[0-9]{7}-[0-9]$',
      fi: '^[0-9]{7}-[0-9]$',
    },
    maxLength: 9,
  },
  {
    id: 'k1.1',
    question: {
      en: 'Is the business information correct?',
      fi: 'Onko yrityksen perustiedot oikein?',
    },
    conditions: ['all'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: [
      {
        key: 'yes',
        score: 1,
        weight: 1,
        text: {
          en: 'Yes',
          fi: 'Kyllä',
        },
      },
      {
        key: 'no',
        score: 0,
        weight: 1,
        text: {
          en: 'No',
          fi: 'Ei',
        },
      },
    ],

    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k1.2',
    question: {
      en: 'Please correct your company basic data',
      fi: 'Korjaa yrityksen perustiedot',
    },
    conditions: ['all'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'specialInput',
    answerOptions: [
      {
        key: 'yes',
        score: 1,
        weight: 1,
        text: {
          en: 'Yes',
          fi: 'Kyllä',
        },
      },
      {
        key: 'no',
        score: 0,
        weight: 1,
        text: {
          en: 'No',
          fi: 'Ei',
        },
      },
    ],

    errorAnswer: {
      en: '',
      fi: '',
    },
  },

  {
    id: 'k1.4',
    question: {
      en: 'Do you plan to recruit staff in the next year?',
      fi: 'Onko yritykseen tarkoitus rekrytoida henkilökuntaa seuraavan vuoden aikana?',
    },
    conditions: ['all'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: [
      {
        key: 'yes',
        score: 1,
        weight: 1,
        text: {
          en: 'Yes',
          fi: 'Kyllä',
        },
      },
      {
        key: 'no',
        score: 0,
        weight: 1,
        text: {
          en: 'No',
          fi: 'Ei',
        },
      },
    ],
    specialCondition: {
      questionId: 'k1.2',
      allowedAnswers: [0, 1],
    },
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k2',
    question: {
      en: 'How much of your company’s own free capital are you prepared to use for development and internationalization in the next 12 months?',
      fi: 'Paljonko yrityksen omaa vapaata pääomaa olette varautuneet käyttämään kehittämiseen ja kansainvälistymiseen seuraavan 12 kk:n aikana?',
    },
    conditions: ['under5', 'sme'],
    tooltip: {
      en: 'What is own free capital? Own free capital is capital that does not have a repayment obligation, such as accumulated profits and investments made in the company (e.g., invested unrestricted equity fund - SVOP). For example, possible dividends are paid from the company’s free capital.',
      fi: 'Mikä on oma vapaa pääoma? Oma vapaa pääomaa on pääomaa, jolla ei ole takaisinmaksuvelvoitetta kuten yritykseen kertyneet voittovarat ja yritykseen tehdyt sijoitukset (ns. sijoitetun vapaan oman pääoman rahasto - SVOP). Esimerkiksi mahdolliset osingot maksetaan yrityksen vapaasta pääomasta.',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: [
      {
        key: 'less_than_30000',
        score: 1,
        weight: 0.25,
        text: {
          en: 'Less than €30,000',
          fi: 'Alle 30 000€',
        },
      },
      {
        key: '30000_to_200000',
        score: 2,
        weight: 0.5,
        text: {
          en: '€30,000 - €200,000',
          fi: '30 000 - 200 000€',
        },
      },
      {
        key: '200000_to_1m',
        score: 3,
        weight: 0.75,
        text: {
          en: '€200,000 - €1M',
          fi: '200 000 - 1M€',
        },
      },
      {
        key: 'more_than_1m',
        score: 4,
        weight: 1,
        text: {
          en: 'More than €1M',
          fi: 'Yli 1M€',
        },
      },
    ],

    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k2.1',
    question: {
      en: 'Do the founders or core team have previous experience in establishing or managing international, scalable business?',
      fi: 'Onko perustajilla tai ydintiimillä aiempaa kokemusta kansainvälisen, skaalautuvan liiketoiminnan perustamisesta tai johtamisesta?',
    },
    conditions: ['under5'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: [
      {
        key: 'yes',
        score: 1,
        weight: 1,
        text: {
          en: 'Yes',
          fi: 'Kyllä',
        },
      },
      {
        key: 'no',
        score: 0,
        weight: 1,
        text: {
          en: 'No',
          fi: 'Ei',
        },
      },
    ],
    specialCondition: {
      questionId: 'k1.2',
      allowedAnswers: [0, 1],
      companyAge: {maxYears: 5},
    },
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k2.2',
    question: {
      en: 'Does the company have intangible rights that are protected or intended to be protected by patents, trademarks, design rights, or other means?',
      fi: 'Onko yrityksellä aineettomia oikeuksia, jotka on suojattu tai aiotaan suojata patenteilla, tuotemerkeillä, mallisuojilla tai muulla tavoin?',
    },
    conditions: ['under5'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: [
      {
        key: 'yes',
        score: 1,
        weight: 1,
        text: {
          en: 'Yes',
          fi: 'Kyllä',
        },
      },
      {
        key: 'no',
        score: 0,
        weight: 1,
        text: {
          en: 'No',
          fi: 'Ei',
        },
      },
    ],
    specialCondition: {
      questionId: 'k1.2',
      allowedAnswers: [0, 1],
      companyAge: {maxYears: 5},
    },
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k2.3',
    question: {
      en: 'Is your business idea based on research conducted in universities or research institutes?',
      fi: 'Perustuuko liikeideanne korkeakouluissa tai tutkimuslaitoksissa tehtyyn tutkimukseen?',
    },
    conditions: ['under5'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: [
      {
        key: 'yes',
        score: 1,
        weight: 1,
        text: {
          en: 'Yes',
          fi: 'Kyllä',
        },
      },
      {
        key: 'no',
        score: 0,
        weight: 1,
        text: {
          en: 'No',
          fi: 'Ei',
        },
      },
    ],
    specialCondition: {
      questionId: 'k1.2',
      allowedAnswers: [0, 1],
      companyAge: {maxYears: 5},
    },
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k2.4',
    question: {
      en: 'How much external investment has the company received?',
      fi: 'Kuinka paljon ulkopuolista sijoitusrahaa yritys on saanut?',
    },
    conditions: ['under5'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'directInput',

    errorAnswer: {
      en: '',
      fi: '',
    },
    maxLength: 9,
  },
  {
    id: 'k2.5',
    question: {
      en: 'How many employees does the company have in Finland?',
      fi: 'Yrityksen Suomessa työskentelevän henkilöstön määrä',
    },
    conditions: ['large'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'directInput',
    specialCondition: {
      numberOfEmployees: {max: 250},
    },

    errorAnswer: {
      en: '',
      fi: '',
    },
    maxLength: 9,
  },
  {
    id: 'k2.6',
    question: {
      en: 'Has the organization developed a product development and innovation strategy?',
      fi: 'Onko organisaatiossa laadittu tuotekehitys ja innovaatiostrategia?',
    },
    conditions: ['large'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: [
      {
        key: 'yes',
        score: 1,
        weight: 1,
        text: {
          en: 'Yes',
          fi: 'Kyllä',
        },
      },
      {
        key: 'no',
        score: 0,
        weight: 1,
        text: {
          en: 'No',
          fi: 'Ei',
        },
      },
    ],
    specialCondition: {
      numberOfEmployees: {max: 250},
    },
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k2.7',
    question: {
      en: 'Are you actively seeking partners to advance your innovation strategy?',
      fi: 'Oletteko aktiivisesti hakemassa kumppaneita oman innovaatiostrategian edistämiseksi?',
    },
    conditions: ['large'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: [
      {
        key: 'yes',
        score: 1,
        weight: 1,
        text: {
          en: 'Yes',
          fi: 'Kyllä',
        },
      },
      {
        key: 'no',
        score: 0,
        weight: 1,
        text: {
          en: 'No',
          fi: 'Ei',
        },
      },
    ],
    specialCondition: {
      numberOfEmployees: {max: 250},
    },
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k2.8',
    question: {
      en: ' janne "keksii" tähän lisä Large kysymyksen 1 ',
      fi: 'Janne "keksii" tähän lisä Large kysymyksen 1',
    },
    conditions: ['large'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: companyTypes,
    specialCondition: {
      numberOfEmployees: {max: 250},
      questionId: 'k2.7',
      allowedAnswers: ['yes', 'kyllä'],
    },
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k2.9',
    question: {
      en: 'Has the housing company prepared an energy saving survey?',
      fi: 'Onko taloyhtiössänne laadittu energiasäästökartoitus?',
    },
    conditions: ['housing'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: [
      {
        key: 'yes',
        score: 1,
        weight: 1,
        text: {
          en: 'Yes',
          fi: 'Kyllä',
        },
      },
      {
        key: 'no',
        score: 0,
        weight: 1,
        text: {
          en: 'No',
          fi: 'Ei',
        },
      },
    ],
    specialCondition: {
      companyType: 'housing',
    },
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k2.91',
    question: {
      en: 'Has the housing company received or have you submitted an energy grant application?',
      fi: 'Onko taloyhtiöllenne myönnetty tai oletteko jättäneet energia-avustus hakemuksen?',
    },
    conditions: ['housing'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: [
      {
        key: 'yes',
        score: 1,
        weight: 1,
        text: {
          en: 'Yes',
          fi: 'Kyllä',
        },
      },
      {
        key: 'no',
        score: 0,
        weight: 1,
        text: {
          en: 'No',
          fi: 'Ei',
        },
      },
    ],
    specialCondition: {
      companyType: 'housing',
    },
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k3.1',
    question: {
      en: 'Does the company have a recognized competitive advantage in international markets?',
      fi: 'Onko yrityksellä tunnistettu kilpailuetu kansainvälisillä markkinoilla?',
    },
    conditions: ['under5'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: [
      {
        key: 'yes',
        score: 1,
        weight: 1,
        text: {
          en: 'Yes',
          fi: 'Kyllä',
        },
      },
      {
        key: 'no',
        score: 0,
        weight: 1,
        text: {
          en: 'No',
          fi: 'Ei',
        },
      },
    ],

    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k3.2',
    question: {
      en: 'Is the company currently operating in international markets?',
      fi: 'Toimiiko yritys tällä hetkellä kansainvälisillä markkinoilla?',
    },
    conditions: ['all'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: [
      {
        key: 'no',
        score: 0,
        weight: 0,
        text: {
          en: 'No',
          fi: 'Ei',
        },
      },
      {
        key: 'yes_domestic_and_international',
        score: 2,
        weight: 0.5,
        text: {
          en: 'Yes (domestic and international markets)',
          fi: 'Kyllä (koti- ja kansainvälisillä markkinoilla)',
        },
      },
      {
        key: 'yes_international_only',
        score: 3,
        weight: 1,
        text: {
          en: 'Yes (only international markets)',
          fi: 'Kyllä (ainoastaan kansainvälisillä markkinoilla)',
        },
      },
    ],

    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k3.3',
    question: {
      en: 'Is the company aiming for growth in international markets within 1-3 years?',
      fi: 'Tavoitteleeko yritys kasvua kansainvälisiltä markkinoilta 1-3 vuoden kuluessa?',
    },
    conditions: ['under5', 'sme'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: [
      {
        key: 'no',
        score: 0,
        weight: 0,
        text: {
          en: 'No',
          fi: 'Ei',
        },
      },
      {
        key: 'yes_strengthening_current_markets',
        score: 2,
        weight: 0.7,
        text: {
          en: 'Yes (strengthening current markets)',
          fi: 'Kyllä (nykymarkkinoita vahvistamalla)',
        },
      },
      {
        key: 'yes_opening_new_markets',
        score: 3,
        weight: 1,
        text: {
          en: 'Yes (opening new markets)',
          fi: 'Kyllä (uusia markkinoita avaamalla)',
        },
      },
    ],
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k3.4',
    question: {
      en: 'How do you plan to achieve revenue and export growth?',
      fi: 'Millä keinoilla liikevaihdon ja viennin kasvu aiotaan toteuttaa?',
    },
    conditions: ['under5', 'sme'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: revenueExportGrowth,

    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k4',
    question: {
      en: 'What stage is your company in? What is relevant for your company now?',
      fi: 'Missä vaiheessa yrityksesi on? Mikä on sinun yrityksellesi ajankohtaista nyt?',
    },
    conditions: ['under5', 'sme'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: stageOfCompany,

    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k5',
    question: {
      en: 'Which markets are you interested in?',
      fi: 'Mistä markkinoista olet kiinnostunut?',
    },
    conditions: ['all'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'dropdown',
    answerOptions: countries,

    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k6',
    question: {
      en: 'Which industries are you interested in?',
      fi: 'Mistä toimialoista olet kiinnostunut?',
    },
    conditions: ['all'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: industries,

    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k7',
    question: {
      en: 'Which current topics are you interested in?',
      fi: 'Mistä ajankohtaisista aiheista olet kiinnostunut?',
    },
    conditions: ['all'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: currentTopics,
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k8',
    question: {
      en: 'Which Business Finland or Team Finland services are you primarily interested in?',
      fi: 'Mistä Business Finlandin tai Team Finlandin palveluista olette ensisijaisesti kiinnostunut?',
    },
    conditions: ['all'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: services,

    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'k9',
    question: {
      en: 'Please freely describe your needs (max 500 characters)',
      fi: 'Kerro vapaasti mikä on tarpeesi (max 500 merkkiä)?',
    },
    conditions: ['all'],
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'directTextArea',

    errorAnswer: {
      en: '',
      fi: '',
    },
    maxLength: 500,
  },
];

export default questions;
