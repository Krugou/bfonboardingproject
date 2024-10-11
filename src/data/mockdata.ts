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
      en: 'Is the business information correct?',
      fi: 'Onko yrityksen perustiedot oikein?',
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
      en: 'I am interested in growth# I want to find out how my company can grow and internationalize# I am planning growth and internationalization# I am entering the market# I am trading# I want to expand and renew.',
      fi: 'Olen kiinnostunut kasvusta# Haluan selvittää miten yritykseni voi kasvaa ja kansainvälistyä# Suunnittelen kasvua ja kansainvälistymistä# Olen menossa markkinoille# Käyn kauppaa# Haluan laajentua ja uudistua.',
    },
    targetAudience: 'Everyone',
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
      en: "Afghanistan#Åland Islands#Albania#Algeria#American Samoa#Andorra#Angola#Anguilla#Antarctica#Antigua and Barbuda#Argentina#Armenia#Aruba#Australia#Austria#Azerbaijan#Bahamas#Bahrain#Bangladesh#Barbados#Belarus#Belgium#Belize#Benin#Bermuda#Bhutan#Bolivia (Plurinational State of)#Bonaire, Sint Eustatius and Saba#Bosnia and Herzegovina#Botswana#Bouvet Island#Brazil#British Indian Ocean Territory#Brunei Darussalam#Bulgaria#Burkina Faso#Burundi#Cabo Verde#Cambodia#Cameroon#Canada#Cayman Islands#Central African Republic#Chad#Chile#China#Christmas Island#Cocos (Keeling) Islands#Colombia#Comoros#Congo#Congo (Democratic Republic of the)#Cook Islands#Costa Rica#Croatia#Cuba#Curaçao#Cyprus#Czech Republic#Denmark#Djibouti#Dominica#Dominican Republic#Ecuador#Egypt#El Salvador#Equatorial Guinea#Eritrea#Estonia#Ethiopia#Falkland Islands (Malvinas)#Faroe Islands#Fiji#Finland#France#French Guiana#French Polynesia#French Southern Territories#Gabon#Gambia#Georgia#Germany#Ghana#Gibraltar#Greece#Greenland#Grenada#Guadeloupe#Guam#Guatemala#Guernsey#Guinea#Guinea-Bissau#Guyana#Haiti#Heard Island and McDonald Islands#Honduras#Hong Kong#Hungary#Iceland#India#Indonesia#Iran (Islamic Republic of)#Iraq#Ireland#Isle of Man#Israel#Italy#Ivory Coast#Jamaica#Japan#Jersey#Jordan#Kazakhstan#Kenya#Kiribati#Korea (Democratic People's Republic of)#Korea (Republic of)#Kuwait#Kyrgyzstan#Lao People's Democratic Republic#Latvia#Lebanon#Lesotho#Liberia#Libya#Liechtenstein#Lithuania#Luxembourg#Macao#Madagascar#Malawi#Malaysia#Maldives#Mali#Malta#Marshall Islands#Martinique#Mauritania#Mauritius#Mayotte#Mexico#Micronesia (Federated States of)#Moldova (Republic of)#Monaco#Mongolia#Montenegro#Montserrat#Morocco#Mozambique#Myanmar#Namibia#Nauru#Nepal#Netherlands#New Caledonia#New Zealand#Nicaragua#Niger#Nigeria#Niue#Norfolk Island#North Macedonia#Northern Mariana Islands#Norway#Oman#Pakistan#Palau#Palestine, State of#Panama#Papua New Guinea#Paraguay#Peru#Philippines#Pitcairn#Poland#Portugal#Puerto Rico#Qatar#Republic of Kosovo#Réunion#Romania#Russian Federation#Rwanda#Saint Barthélemy#Saint Helena, Ascension and Tristan da Cunha#Saint Kitts and Nevis#Saint Lucia#Saint Martin (French part)#Saint Pierre and Miquelon#Saint Vincent and the Grenadines#Samoa#San Marino#Sao Tome and Principe#Saudi Arabia#Senegal#Serbia#Seychelles#Sierra Leone#Singapore#Sint Maarten (Dutch part)#Slovakia#Slovenia#Solomon Islands#Somalia#South Africa#South Georgia and the South Sandwich Islands#South Sudan#Spain#Sri Lanka#Sudan#Suriname#Svalbard and Jan Mayen#Swaziland#Sweden#Switzerland#Syrian Arab Republic#Taiwan#Tajikistan#Tanzania, United Republic of#Thailand#Timor-Leste#Togo#Tokelau#Tonga#Trinidad and Tobago#Tunisia#Turkey#Turkmenistan#Turks and Caicos Islands#Tuvalu#Uganda#Ukraine#United Arab Emirates#United Kingdom of Great Britain and Northern Ireland#United States Minor Outlying Islands#United States of America#Uruguay#Uzbekistan#Vanuatu#Vatican City State#Venezuela (Bolivarian Republic of)#Viet Nam#Virgin Islands (British)#Virgin Islands (U.S.)#Wallis and Futuna#Western Sahara#Yemen#Zambia#Zimbabwe",
      fi: 'Afganistan#Ahvenanmaa#Albania#Algeria#Amerikan Samoa#Andorra#Angola#Anguilla#Etelämanner#Antigua ja Barbuda#Argentiina#Armenia#Aruba#Australia#Itävalta#Azerbaidžan#Bahama#Bahrain#Bangladesh#Barbados#Valko-Venäjä#Belgia#Belize#Benin#Bermuda#Bhutan#Bolivia (monikansallinen valtio)#Bonaire, Sint Eustatius ja Saba#Bosnia ja Hertsegovina#Botswana#Bouvetin saari#Brasilia#Brittiläinen Intian valtameren alue#Brunei Darussalam#Bulgaria#Burkina Faso#Burundi#Cabo Verde#Kambodža#Kamerun#Kanada#Caymansaaret#Keski-Afrikan tasavalta#Tšad#Chile#Kiina#Joulusaari#Kookossaaret (Keeling-saaret)#Kolumbia#Komorit#Kongo#Kongo (Kongon demokraattinen tasavalta)#Cookinsaaret#Costa Rica#Kroatia#Kuuba#Curaçao#Kypros#Tšekin tasavalta#Tanska#Djibouti#Dominica#Dominikaaninen tasavalta#Ecuador#Egypti#El Salvador#Päiväntasaajan Guinea#Eritrea#Viro#Etiopia#Falklandinsaaret (Malvinas)#Färsaaret#Fidži#Suomi#Ranska#Ranskan Guayana#Ranskan Polynesia#Ranskan eteläiset alueet#Gabon#Gambia#Georgia#Saksa#Ghana#Gibraltar#Kreikka#Grönlanti#Grenada#Guadeloupe#Guam#Guatemala#Guernsey#Guinea#Guinea-Bissau#Guyana#Haiti#Heardin saari ja McDonaldin saaret#Honduras#Hongkong#Unkari#Islanti#Intia#Indonesia#Iran (islamilainen tasavalta)#Irak#Irlanti#Mansaari#Israel#Italia#Norsunluurannikko#Jamaika#Japani#Jersey#Jordania#Kazakstan#Kenia#Kiribati#Korea (Korean demokraattinen kansantasavalta)#Korea (Korean tasavalta)#Kuwait#Kirgisia#Laosin demokraattinen kansantasavalta#Latvia#Libanon#Lesotho#Liberia#Libya#Liechtenstein#Liettua#Luxemburg#Macao#Madagaskar#Malawi#Malesia#Malediivit#Mali#Malta#Marshallinsaaret#Martinique#Mauritania#Mauritius#Mayotte#Meksiko#Mikronesia (liittovaltio)#Moldova (tasavalta)#Monaco#Mongolia#Montenegro#Montserrat#Marokko#Mosambik#Myanmar#Namibia#Nauru#Nepal#Alankomaat#Uusi-Kaledonia#Uusi-Seelanti#Nicaragua#Niger#Nigeria#Niue#Norfolkin saari#Pohjois-Makedonia#Pohjois-Mariaanit#Norja#Oman#Pakistan#Palau#Palestiinan valtio#Panama#Papua-Uusi-Guinea#Paraguay#Peru#Filippiinit#Pitcairn#Puola#Portugali#Puerto Rico#Qatar#Kosovon tasavalta#Réunion#Romania#Venäjän federaatio#Ruanda#Saint Barthélemy#Saint Helena, Ascension ja Tristan da Cunha#Saint Kitts ja Nevis#Saint Lucia#Saint Martin (Ranskan osa)#Saint Pierre ja Miquelon#Saint Vincent ja Grenadiinit#Samoa#San Marino#Sao Tome ja Principe#Saudi-Arabia#Senegal#Serbia#Seychellit#Sierra Leone#Singapore#Sint Maarten (Alankomaiden osa)#Slovakia#Slovenia#Salomonsaaret#Somalia#Etelä-Afrikka#Etelä-Georgia ja Eteläiset Sandwichsaaret#Etelä-Sudan#Espanja#Sri Lanka#Sudan#Suriname#Svalbard ja Jan Mayen#Swazimaa#Ruotsi#Sveitsi#Syyrian arabitasavalta#Taiwan#Tadžikistan#Tansania, Yhdistynyt tasavalta#Thaimaa#Itä-Timor#Togo#Tokelau#Tonga#Trinidad ja Tobago#Tunisia#Turkki#Turkmenistan#Turks- ja Caicossaaret#Tuvalu#Uganda#Ukraina#Yhdistyneet arabiemiirikunnat#Ison-Britannian ja Pohjois-Irlannin yhdistynyt kuningaskunta#Yhdysvallat Pienet syrjäiset saaret#Amerikan yhdysvallat#Uruguay#Uzbekistan#Vanuatu#Vatikaanivaltio#Venezuela (Bolivarilainen tasavalta)#Vietnam#Neitsytsaaret (Britannia)#Neitsytsaaret (Yhdysvallat)#Wallis ja Futuna#Länsi-Sahara#Jemen#Sambia#Zimbabwe',
    },
    targetAudience: 'Everyone',
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
      en: 'Bioeconomy and Chemical Industry#Communication and Mobility#Consumer Brands#Electronics and Electrical Engineering#Energy and Built Environment#Food#Games and Immersive Games#Health and Well-being#Maritime#Metal and Machinery#Software and Data#Other',
      fi: 'Biotalous ja kemianteollisuus#Viestintä ja liikkuvuus#Kuluttajabrändit#Elektroniikka ja sähkötekniikka#Energia ja rakennettu ympäristö#Elintarvikkeet#Pelit ja immersiiviset pelit#Terveys ja hyvinvointi#Merenkulku#Metalli ja koneet#Ohjelmistot ja data#Muut',
    },
    targetAudience: 'Everyone',
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
      en: 'Arctic#EU#Horizon Europe#NATO#UN#Sustainable Development#Low Carbon#Renewal#Megatrends and Future#Ecosystems and Value Chains#Partners and Networks#Recruitment#Research, Development, and Innovation#Piloting#Technology#Data Economy#Digitalization#Space#Creative Economy#Funding#Sales and Marketing#Sales Leads#Internationalization#Country Information#Emerging Markets#Export Rules and Regulations#Export Trade Finance and Credit Risks#Trade Policy',
      fi: 'Arktisuus#EU#Horisontti Eurooppa#NATO#YK#Kestäväkehitys#Vähähiilisyys#Uudistuminen#Megatrendit ja tulevaisuus#Ekosysteemit ja arvoketjut#Kumppanit ja verkostot#Rekrytointi#Tutkimus, tuotekehitys ja innovaatiot#Pilotointi#Teknologia#Datatalous#Digitalisaatio#Avaruus#Luova talous#Rahoitus#Myynti ja markkinointi#Myyntiliidit#Kansainvälistyminen#Maatieto#Kehittyvät markkinat#Vientiä koskevat säännöt ja määräykset#Vientikaupan rahoitus ja luottoriskit#Kauppapolitiikka',
    },
    targetAudience: 'Everyone',
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
