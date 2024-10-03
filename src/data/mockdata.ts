import {QuestionItem} from '@/app/types';
const yesAndNo = {
  en: 'Yes# No',
  fi: 'Kyllä# Ei',
};

const questions: QuestionItem[] = [
  {
    id: 'k1',
    question: {
      en: 'What is your company’s business ID?',
      fi: 'Mikä on yrityksen Y-tunnus?',
    },
    condition: '',
    tooltip: {
      en: 'Please provide your company’s business ID.',
      fi: 'Anna yrityksesi Y-tunnus.',
    },
    syntaxPlaceholder: {
      en: 'Business ID format (validation)',
      fi: 'Y-tunnus formaatti (validointi)',
    },
    answerType: 'directInput',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Everyone',
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
      en: 'Please correct your company basic data',
      fi: 'Korjaa yrityksen perustiedot',
    },
    condition: 'If answer to k1 = 0',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: yesAndNo,
    targetAudience: 'Everyone',
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
    condition: 'If answer to k1 = 0',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'specialInput',
    answerOptions: yesAndNo,
    targetAudience: 'Everyone',
    errorAnswer: {
      en: '',
      fi: '',
    },
  },

  {
    id: 'k1.3',
    question: {
      en: 'Do you plan to recruit staff in the next year?',
      fi: 'Onko yritykseen tarkoitus rekrytoida henkilökuntaa seuraavan vuoden aikana?',
    },
    condition: 'If answer to k1 = 0 or 1',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: yesAndNo,
    targetAudience: 'Everyone',
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
    condition: '',
    tooltip: {
      en: 'What is own free capital? Own free capital is capital that does not have a repayment obligation, such as accumulated profits and investments made in the company (e.g., invested unrestricted equity fund - SVOP). For example, possible dividends are paid from the company’s free capital.',
      fi: 'Mikä on oma vapaa pääoma? Oma vapaa pääomaa on pääomaa, jolla ei ole takaisinmaksuvelvoitetta kuten yritykseen kertyneet voittovarat ja yritykseen tehdyt sijoitukset (ns. sijoitetun vapaan oman pääoman rahasto - SVOP). Esimerkiksi mahdolliset osingot maksetaan yrityksen vapaasta pääomasta.',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: {
      en: 'Less than €30,000# €30,000 - €200,000# €200,000 - €1M# More than €1M',
      fi: 'Alle 30 000€# 30 000 - 200 000€# 200 000 - 1M€# Yli 1M€',
    },
    targetAudience: 'Everyone',
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
    condition: 'If answer to k1 = 0 or 1 and if <5 years',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: yesAndNo,
    targetAudience: 'Under 5 years (Start)',
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
    condition: 'If answer to k1 = 0 or 1 and if <5 years',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: yesAndNo,
    targetAudience: 'Under 5 years (Start)',

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
    condition: 'If answer to k1 = 0 or 1 and if <5 years',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: yesAndNo,
    targetAudience: 'Under 5 years (Start)',
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
    condition: 'If answer to k1 = 0 or 1 and if <5 years',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'directInput',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Under 5 years (Start)',
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
    condition: '',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: yesAndNo,
    targetAudience: 'Everyone',
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
    condition: '',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: {
      en: 'No# Yes (domestic and international markets)# Yes (only international markets)',
      fi: 'Ei# Kyllä (koti- ja kansainvälisillä markkinoilla)# Kyllä (ainoastaan kansainvälisillä markkinoilla)',
    },
    targetAudience: 'Everyone',
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
    condition: '',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: {
      en: 'No# Yes (strengthening current markets)# Yes (opening new markets)',
      fi: 'Ei# Kyllä (nykymarkkinoita vahvistamalla)# Kyllä (uusia markkinoita avaamalla)',
    },
    targetAudience: 'Everyone',
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
    condition: '',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: {
      en: 'Through research and development (e.g., developing new products and services)# Strengthening international sales# Looking for ways to develop or renew export activities# I don’t know',
      fi: 'Tutkimus- ja kehitystyöllä (esim. uusia tuotteita ja palveluita kehittämällä)# Vahvistamalla kansainvälistä myyntiä# Etsimme tapoja kehittää tai uudistaa vientitoimintaa# En tiedä',
    },
    targetAudience: 'Everyone',
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
    condition: '',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: {
      en: 'I am interested in growth# I want to find out how my company can grow and internationalize# I am planning growth and internationalization, I am entering the market, I am trading, I want to expand and renew.',
      fi: 'Olen kiinnostunut kasvusta# Haluan selvittää miten yritykseni voi kasvaa ja kansainvälistyä# Suunnittelen kasvua ja kansainvälistymistä# Olen menossa markkinoille# Käyn kauppaa# Haluan laajentua ja uudistua.',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  // {
  //   id: 'k5',
  //   question: {
  //     en: 'Which markets are you interested in?',
  //     fi: 'Mistä markkinoista olet kiinnostunut?',
  //   },
  //   condition: '',
  //   tooltip: {
  //     en: '',
  //     fi: '',
  //   },
  //   syntaxPlaceholder: {
  //     en: '',
  //     fi: '',
  //   },
  //   answerType: 'multiChoice',
  //   answerOptions: {
  //     en: 'Janne will provide a list of markets',
  //     fi: 'Janne toimittaa listan markkinoista',
  //   },
  //   targetAudience: 'Everyone',
  //   errorAnswer: {
  //     en: '',
  //     fi: '',
  //   },
  // },
  // {
  //   id: 'k6',
  //   question: {
  //     en: 'Which industries are you interested in?',
  //     fi: 'Mistä toimialoista olet kiinnostunut?',
  //   },
  //   condition: '',
  //   tooltip: {
  //     en: '',
  //     fi: '',
  //   },
  //   syntaxPlaceholder: {
  //     en: '',
  //     fi: '',
  //   },
  //   answerType: 'multiChoice',
  //   answerOptions: {
  //     en: 'Janne will provide a list of industries',
  //     fi: 'Janne toimittaa listan toimialoista',
  //   },
  //   targetAudience: 'Everyone',
  //   errorAnswer: {
  //     en: '',
  //     fi: '',
  //   },
  // },
  // {
  //   id: 'k7',
  //   question: {
  //     en: 'Which current topics are you interested in?',
  //     fi: 'Mistä ajankohtaisista aiheista olet kiinnostunut?',
  //   },
  //   condition: '',
  //   tooltip: {
  //     en: '',
  //     fi: '',
  //   },
  //   syntaxPlaceholder: {
  //     en: '',
  //     fi: '',
  //   },
  //   answerType: 'singleChoice',
  //   answerOptions: {
  //     en: 'Janne will provide a list of current topics',
  //     fi: 'Janne toimittaa listan ajankohtaisista aiheista',
  //   },
  //   targetAudience: 'Everyone',
  //   errorAnswer: {
  //     en: '',
  //     fi: '',
  //   },
  // },

  {
    id: 'k8',
    question: {
      en: 'Which Business Finland or Team Finland services are you primarily interested in?',
      fi: 'Mistä Business Finlandin tai Team Finlandin palveluista olette ensisijaisesti kiinnostunut?',
    },
    condition: '',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: {
      en: 'Internationalization services# Product and service development (R&D)# Energy support',
      fi: 'Kansainvälistymispalvelut# Tuotteiden ja palveluiden kehittäminen (T&K)# Energiatuki',
    },
    targetAudience: 'Everyone',
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
    condition: '',
    tooltip: {
      en: '',
      fi: '',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'directTextArea',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: '',
      fi: '',
    },
    maxLength: 500,
  },
];

export default questions;
