import {QuestionItem} from '@/app/types';

const questions: QuestionItem[] = [
  {
    id: 'q1',
    question: {
      en: 'Please provide your Finnish business ID.',
      fi: 'Anna suomalainen yritystunnus.',
    },
    condition: '',
    tooltip: {
      en: 'A Finnish business ID is a unique identifier for businesses in Finland. Example: 1234567-8.',
      fi: 'Suomalainen yritystunnus on ainutlaatuinen tunniste suomalaisille yrityksille. Esimerkki: 1234567-8.',
    },
    syntaxPlaceholder: {
      en: 'Example: 1234567-8',
      fi: 'Esimerkki: 1234567-8',
    },
    answerType: 'directInput',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: 'Please provide a valid business ID.',
      fi: 'Anna kelvollinen yritystunnus.',
    },
  },
  {
    id: 'q2',
    question: {
      en: 'Is this your business information?',
      fi: 'Onko tämä yrityksesi tiedot?',
    },
    condition: '',
    tooltip: {
      en: 'Confirm whether the provided information pertains to your business.',
      fi: 'Vahvista, koskevatko annetut tiedot yritystäsi.',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: {
      en: 'Yes, No',
      fi: 'Kyllä, Ei',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: '',
      fi: '',
    },
    optionalStepAnswer: {
      en: 'Is this correct?',
      fi: 'Onko tämä oikein?',
    },
  },
  {
    id: 'q3',
    question: {
      en: "How much of the company's own free capital are you prepared to use for development and internationalization in the next 12 months?",
      fi: 'Kuinka paljon yrityksen omaa vapaata pääomaa olet valmis käyttämään kehittämiseen ja kansainvälistymiseen seuraavien 12 kuukauden aikana?',
    },
    condition: '',
    tooltip: {
      en: 'Own free capital refers to capital that does not have a repayment obligation, such as accumulated profits and investments made in the company (e.g., invested unrestricted equity fund - SVOP).',
      fi: 'Oma vapaa pääoma tarkoittaa pääomaa, jolla ei ole takaisinmaksuvelvoitetta, kuten kertyneet voitot ja yritykseen tehdyt sijoitukset (esim. sijoitettu vapaan oman pääoman rahasto - SVOP).',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'slider',
    answerOptions: {
      en: '0, 100000, 10000',
      fi: '0, 100000, 10000',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: '',
      fi: '',
    },
    unit: 'EUR',
  },
  {
    id: 'q4',
    question: {
      en: 'What is your company’s annual turnover?',
      fi: 'Mikä on yrityksesi vuotuinen liikevaihto?',
    },
    condition: '',
    tooltip: {
      en: 'Annual turnover refers to the total revenue generated by your company in a year.',
      fi: 'Vuotuinen liikevaihto tarkoittaa yrityksesi vuoden aikana tuottamaa kokonaistuloa.',
    },
    syntaxPlaceholder: {
      en: 'Example: 500000',
      fi: 'Esimerkki: 500000',
    },
    answerType: 'directInput',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: 'Please provide a valid annual turnover.',
      fi: 'Anna kelvollinen vuotuinen liikevaihto.',
    },
  },
  {
    id: 'q5',
    question: {
      en: 'Which of the following services does your company use?',
      fi: 'Mitä seuraavista palveluista yrityksesi käyttää?',
    },
    condition: '',
    tooltip: {
      en: 'Select all the services that your company currently utilizes.',
      fi: 'Valitse kaikki palvelut, joita yrityksesi tällä hetkellä käyttää.',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: {
      en: 'Accounting, Legal, Marketing, IT Support, Human Resources, Customer Service, Sales, Logistics, Procurement, Research and Development',
      fi: 'Kirjanpito, Oikeudelliset palvelut, Markkinointi, IT-tuki, Henkilöstöhallinto, Asiakaspalvelu, Myynti, Logistiikka, Hankinta, Tutkimus ja kehitys',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'q6',
    question: {
      en: 'What is the primary industry of your business?',
      fi: 'Mikä on yrityksesi päätoimiala?',
    },
    condition: '',
    tooltip: {
      en: 'Specify the main industry in which your business operates.',
      fi: 'Määritä päätoimiala, jolla yrityksesi toimii.',
    },
    syntaxPlaceholder: {
      en: 'Example: Information Technology',
      fi: 'Esimerkki: Tietotekniikka',
    },
    answerType: 'directInput',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: 'Please provide a valid industry.',
      fi: 'Anna kelvollinen toimiala.',
    },
  },
  {
    id: 'q7',
    question: {
      en: 'Do you have a dedicated research and development (R&D) department?',
      fi: 'Onko yritykselläsi oma tutkimus- ja kehitysosasto (T&K)?',
    },
    condition: '',
    tooltip: {
      en: 'Indicate whether your company has a department specifically for research and development.',
      fi: 'Ilmoita, onko yritykselläsi osasto, joka on erityisesti tutkimusta ja kehitystä varten.',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: {
      en: 'Yes, No',
      fi: 'Kyllä, Ei',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'q8',
    question: {
      en: 'How many employees does your company have?',
      fi: 'Kuinka monta työntekijää yrityksessäsi on?',
    },
    condition: '',
    tooltip: {
      en: 'Provide the total number of employees working in your company.',
      fi: 'Anna yrityksessäsi työskentelevien työntekijöiden kokonaismäärä.',
    },
    syntaxPlaceholder: {
      en: 'Example: 50',
      fi: 'Esimerkki: 50',
    },
    answerType: 'directInput',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: 'Please provide a valid number of employees.',
      fi: 'Anna kelvollinen työntekijöiden määrä.',
    },
  },
  {
    id: 'q9',
    question: {
      en: 'What percentage of your revenue is reinvested into the business annually?',
      fi: 'Mikä prosenttiosuus liikevaihdostasi sijoitetaan uudelleen yritykseen vuosittain?',
    },
    condition: '',
    tooltip: {
      en: 'Specify the percentage of your company’s revenue that is reinvested into the business each year.',
      fi: 'Määritä prosenttiosuus yrityksesi liikevaihdosta, joka sijoitetaan uudelleen yritykseen vuosittain.',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'slider',
    answerOptions: {
      en: '0, 100, 1',
      fi: '0, 100, 1',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: '',
      fi: '',
    },
    unit: '%',
  },
  {
    id: 'q10',
    question: {
      en: 'Which regions does your company operate in?',
      fi: 'Millä alueilla yrityksesi toimii?',
    },
    condition: '',
    tooltip: {
      en: 'Select all the regions where your company has operations.',
      fi: 'Valitse kaikki alueet, joilla yritykselläsi on toimintaa.',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'multiChoice',
    answerOptions: {
      en: 'North America, Europe, Asia, Africa, South America, Australia',
      fi: 'Pohjois-Amerikka, Eurooppa, Aasia, Afrikka, Etelä-Amerikka, Australia',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'q11',
    question: {
      en: 'What is the primary goal of your business for the next year?',
      fi: 'Mikä on yrityksesi ensisijainen tavoite ensi vuodelle?',
    },
    condition: '',
    tooltip: {
      en: 'Specify the main objective your business aims to achieve in the upcoming year.',
      fi: 'Määritä yrityksesi päätavoite, jonka se pyrkii saavuttamaan tulevana vuonna.',
    },
    syntaxPlaceholder: {
      en: 'Example: Increase market share by 10%',
      fi: 'Esimerkki: Markkinaosuuden kasvattaminen 10%',
    },
    answerType: 'directInput',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: 'Please provide a valid goal.',
      fi: 'Anna kelvollinen tavoite.',
    },
  },
  {
    id: 'q12',
    question: {
      en: 'Does your company have an environmental sustainability policy?',
      fi: 'Onko yritykselläsi ympäristön kestävyyspolitiikkaa?',
    },
    condition: '',
    tooltip: {
      en: 'Indicate whether your company has a policy focused on environmental sustainability.',
      fi: 'Ilmoita, onko yritykselläsi ympäristön kestävyyteen keskittyvää politiikkaa.',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: {
      en: 'Yes, No',
      fi: 'Kyllä, Ei',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'q13',
    question: {
      en: 'What is your company’s customer satisfaction rate?',
      fi: 'Mikä on yrityksesi asiakastyytyväisyysaste?',
    },
    condition: '',
    tooltip: {
      en: 'Provide the percentage of customers who are satisfied with your company’s products or services.',
      fi: 'Anna prosenttiosuus asiakkaista, jotka ovat tyytyväisiä yrityksesi tuotteisiin tai palveluihin.',
    },
    syntaxPlaceholder: {
      en: 'Example: 85%',
      fi: 'Esimerkki: 85%',
    },
    answerType: 'directInput',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: 'Please provide a valid customer satisfaction rate.',
      fi: 'Anna kelvollinen asiakastyytyväisyysaste.',
    },
  },
  {
    id: 'q14',
    question: {
      en: 'How much does your company spend on marketing annually?',
      fi: 'Kuinka paljon yrityksesi käyttää markkinointiin vuosittain?',
    },
    condition: '',
    tooltip: {
      en: 'Specify the total annual expenditure on marketing activities.',
      fi: 'Määritä markkinointitoiminnan vuotuinen kokonaiskustannus.',
    },
    syntaxPlaceholder: {
      en: 'Example: 20000',
      fi: 'Esimerkki: 20000',
    },
    answerType: 'directInput',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: 'Please provide a valid amount.',
      fi: 'Anna kelvollinen summa.',
    },
  },
  {
    id: 'q15',
    question: {
      en: 'Which of the following best describes your company’s growth strategy?',
      fi: 'Mikä seuraavista kuvaa parhaiten yrityksesi kasvustrategiaa?',
    },
    condition: '',
    tooltip: {
      en: 'Select the option that best describes your company’s approach to growth.',
      fi: 'Valitse vaihtoehto, joka parhaiten kuvaa yrityksesi lähestymistapaa kasvuun.',
    },
    syntaxPlaceholder: {
      en: '',
      fi: '',
    },
    answerType: 'singleChoice',
    answerOptions: {
      en: 'Organic Growth, Mergers and Acquisitions, Partnerships, Franchising',
      fi: 'Orgaaninen kasvu, Fuusiot ja yritysostot, Kumppanuudet, Franchising',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: '',
      fi: '',
    },
  },
  {
    id: 'q16',
    question: {
      en: 'What percentage of your workforce is involved in remote work?',
      fi: 'Mikä prosenttiosuus työvoimastasi työskentelee etänä?',
    },
    condition: '',
    tooltip: {
      en: 'Specify the percentage of employees who work remotely in your company.',
      fi: 'Määritä prosenttiosuus työntekijöistä, jotka työskentelevät etänä yrityksessäsi.',
    },
    syntaxPlaceholder: {
      en: 'Example: 50',
      fi: 'Esimerkki: 50',
    },
    answerType: 'directInput',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: 'Please provide a valid percentage.',
      fi: 'Anna kelvollinen prosenttiosuus.',
    },
  },
  {
    id: 'q17',
    question: {
      en: 'How satisfied are you with your current IT infrastructure?',
      fi: 'Kuinka tyytyväinen olet nykyiseen IT-infrastruktuuriisi?',
    },
    condition: '',
    tooltip: {
      en: 'Rate your satisfaction with your company’s IT infrastructure.',
      fi: 'Arvioi tyytyväisyytesi yrityksesi IT-infrastruktuuriin.',
    },
    syntaxPlaceholder: {
      en: 'Example: Very Satisfied, Satisfied, Neutral, Dissatisfied, Very Dissatisfied',
      fi: 'Esimerkki: Erittäin tyytyväinen, Tyytyväinen, Neutraali, Tyytymätön, Erittäin tyytymätön',
    },
    answerType: 'singleChoice',
    answerOptions: {
      en: 'Very Satisfied, Satisfied, Neutral, Dissatisfied, Very Dissatisfied',
      fi: 'Erittäin tyytyväinen, Tyytyväinen, Neutraali, Tyytymätön, Erittäin tyytymätön',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: 'Please select a valid option.',
      fi: 'Valitse kelvollinen vaihtoehto.',
    },
  },
  {
    id: 'q18',
    question: {
      en: 'What is your company’s annual revenue?',
      fi: 'Mikä on yrityksesi vuotuinen liikevaihto?',
    },
    condition: '',
    tooltip: {
      en: 'Provide the total annual revenue of your company.',
      fi: 'Anna yrityksesi vuotuinen kokonaisliikevaihto.',
    },
    syntaxPlaceholder: {
      en: 'Example: 500000',
      fi: 'Esimerkki: 500000',
    },
    answerType: 'directInput',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: 'Please provide a valid revenue amount.',
      fi: 'Anna kelvollinen liikevaihtosumma.',
    },
  },
  {
    id: 'q19',
    question: {
      en: 'How many employees does your company have?',
      fi: 'Kuinka monta työntekijää yrityksessäsi on?',
    },
    condition: '',
    tooltip: {
      en: 'Provide the total number of employees in your company.',
      fi: 'Anna yrityksesi työntekijöiden kokonaismäärä.',
    },
    syntaxPlaceholder: {
      en: 'Example: 100',
      fi: 'Esimerkki: 100',
    },
    answerType: 'directInput',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: 'Please provide a valid number of employees.',
      fi: 'Anna kelvollinen työntekijöiden määrä.',
    },
  },
  {
    id: 'q20',
    question: {
      en: 'What is your company’s primary industry?',
      fi: 'Mikä on yrityksesi päätoimiala?',
    },
    condition: '',
    tooltip: {
      en: 'Specify the primary industry in which your company operates.',
      fi: 'Määritä yrityksesi päätoimiala.',
    },
    syntaxPlaceholder: {
      en: 'Example: Information Technology, Healthcare',
      fi: 'Esimerkki: Tietotekniikka, Terveydenhuolto',
    },
    answerType: 'directInput',
    answerOptions: {
      en: '',
      fi: '',
    },
    targetAudience: 'Everyone',
    errorAnswer: {
      en: 'Please provide a valid industry.',
      fi: 'Anna kelvollinen toimiala.',
    },
  },
];

export default questions;
