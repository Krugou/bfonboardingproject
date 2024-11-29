const notAcceptedBusinessLines: BusinessLine[] = [
  {
    code: '00',
    descriptionFi: 'Toimiala tuntematon',
    descriptionEn: 'Unknown sector',
  },
  {
    code: '000',
    descriptionFi: 'Toimiala tuntematon',
    descriptionEn: 'Unknown sector',
  },
  {
    code: '0000',
    descriptionFi: 'Toimiala tuntematon',
    descriptionEn: 'Unknown sector',
  },
  {
    code: '00000',
    descriptionFi: 'Toimiala tuntematon',
    descriptionEn: 'Unknown sector',
  },
  {
    code: '01',
    descriptionFi:
      'Kasvinviljely ja kotieläintalous, riistatalous ja niihin liittyvät palvelut',
    descriptionEn:
      'Crop production, animal farming, game farming, and related services',
  },
  {
    code: '011',
    descriptionFi: 'Yksivuotisten kasvien viljely',
    descriptionEn: 'Annual plant cultivation',
  },
  {
    code: '0111',
    descriptionFi:
      'Viljakasvien (pl. riisin), palkokasvien ja öljysiemenkasvien viljely',
    descriptionEn: 'Cereal (excluding rice), legume, and oilseed cultivation',
  },
  {
    code: '01110',
    descriptionFi:
      'Viljakasvien (pl. riisin), palkokasvien ja öljysiemenkasvien viljely',
    descriptionEn: 'Cereal (excluding rice), legume, and oilseed cultivation',
  },
  {
    code: '0112',
    descriptionFi: 'Riisin viljely',
    descriptionEn: 'Rice cultivation',
  },
  {
    code: '01120',
    descriptionFi: 'Riisin viljely',
    descriptionEn: 'Rice cultivation',
  },
  {
    code: '0113',
    descriptionFi:
      'Vihannesten ja melonien, juuresten ja mukulakasvien viljely',
    descriptionEn: 'Vegetable, melon, root, and tuber cultivation',
  },
  {
    code: '01131',
    descriptionFi:
      'Vihannesten viljely avomaalla (pl. peruna ja sokerijuurikas)',
    descriptionEn:
      'Field vegetable cultivation (excluding potatoes and sugar beets)',
  },
  {
    code: '01132',
    descriptionFi: 'Vihannesten viljely kasvihuoneessa',
    descriptionEn: 'Greenhouse vegetable cultivation',
  },
  {
    code: '01133',
    descriptionFi: 'Perunan viljely',
    descriptionEn: 'Potato cultivation',
  },
  {
    code: '01134',
    descriptionFi: 'Sokerijuurikkaan viljely',
    descriptionEn: 'Sugar beet cultivation',
  },
  {
    code: '0114',
    descriptionFi: "Sokeriruo'on viljely",
    descriptionEn: 'Sugarcane cultivation',
  },
  {
    code: '01140',
    descriptionFi: "Sokeriruo'on viljely",
    descriptionEn: 'Sugarcane cultivation',
  },
  {
    code: '0115',
    descriptionFi: 'Tupakan viljely',
    descriptionEn: 'Tobacco cultivation',
  },
  {
    code: '01150',
    descriptionFi: 'Tupakan viljely',
    descriptionEn: 'Tobacco cultivation',
  },
  {
    code: '0116',
    descriptionFi: 'Kuitukasvien viljely',
    descriptionEn: 'Fibre crop cultivation',
  },
  {
    code: '01160',
    descriptionFi: 'Kuitukasvien viljely',
    descriptionEn: 'Fibre crop cultivation',
  },
  {
    code: '0119',
    descriptionFi: 'Muu yksivuotisten ja koristekasvien viljely',
    descriptionEn: 'Other annual and ornamental plant cultivation',
  },
  {
    code: '01191',
    descriptionFi: 'Koristekasvien viljely',
    descriptionEn: 'Ornamental plant cultivation',
  },
  {
    code: '01199',
    descriptionFi: 'Muiden yksivuotisten kasvien viljely',
    descriptionEn: 'Other annual plant cultivation',
  },
  {
    code: '012',
    descriptionFi: 'Monivuotisten kasvien viljely',
    descriptionEn: 'Perennial plant cultivation',
  },
  {
    code: '0121',
    descriptionFi: 'Rypäleiden viljely',
    descriptionEn: 'Grape cultivation',
  },
  {
    code: '01210',
    descriptionFi: 'Rypäleiden viljely',
    descriptionEn: 'Grape cultivation',
  },
  {
    code: '0122',
    descriptionFi: 'Trooppisten ja subtrooppisten hedelmien viljely',
    descriptionEn: 'Tropical and subtropical fruit cultivation',
  },
  {
    code: '01220',
    descriptionFi: 'Trooppisten ja subtrooppisten hedelmien viljely',
    descriptionEn: 'Tropical and subtropical fruit cultivation',
  },
  {
    code: '0123',
    descriptionFi: 'Sitrushedelmien viljely',
    descriptionEn: 'Citrus fruit cultivation',
  },
  {
    code: '01230',
    descriptionFi: 'Sitrushedelmien viljely',
    descriptionEn: 'Citrus fruit cultivation',
  },
  {
    code: '0124',
    descriptionFi:
      'Omenoiden, kirsikoiden, luumujen ym. kota- ja kivihedelmien viljely',
    descriptionEn:
      'Cultivation of pome and stone fruits (apples, cherries, plums, etc.)',
  },
  {
    code: '01240',
    descriptionFi:
      'Omenoiden, kirsikoiden, luumujen ym. kota- ja kivihedelmien viljely',
    descriptionEn:
      'Cultivation of pome and stone fruits (apples, cherries, plums, etc.)',
  },
  {
    code: '0125',
    descriptionFi:
      'Marjojen, pähkinöiden ja muiden puissa ja pensaissa kasvavien hedelmien viljely',
    descriptionEn:
      'Cultivation of berries, nuts, and other fruits growing on trees and bushes',
  },
  {
    code: '01250',
    descriptionFi:
      'Marjojen, pähkinöiden ja muiden puissa ja pensaissa kasvavien hedelmien viljely',
    descriptionEn:
      'Cultivation of berries, nuts, and other fruits growing on trees and bushes',
  },
  {
    code: '0126',
    descriptionFi: 'Öljyä sisältävien hedelmien viljely',
    descriptionEn: 'Cultivation of oil-bearing fruits',
  },
  {
    code: '01260',
    descriptionFi: 'Öljyä sisältävien hedelmien viljely',
    descriptionEn: 'Cultivation of oil-bearing fruits',
  },
  {
    code: '0127',
    descriptionFi: 'Juomakasvien viljely',
    descriptionEn: 'Cultivation of beverage crops',
  },
  {
    code: '01270',
    descriptionFi: 'Juomakasvien viljely',
    descriptionEn: 'Cultivation of beverage crops',
  },
  {
    code: '0128',
    descriptionFi: 'Mauste-, aromi-, rohdos- ja lääkekasvien viljely',
    descriptionEn:
      'Cultivation of spice, aromatic, medicinal, and herbal plants',
  },
  {
    code: '01280',
    descriptionFi: 'Mauste-, aromi-, rohdos- ja lääkekasvien viljely',
    descriptionEn:
      'Cultivation of spice, aromatic, medicinal, and herbal plants',
  },
  {
    code: '0129',
    descriptionFi: 'Muu monivuotisten kasvien viljely',
    descriptionEn: 'Other perennial plant cultivation',
  },
  {
    code: '01290',
    descriptionFi: 'Muu monivuotisten kasvien viljely',
    descriptionEn: 'Other perennial plant cultivation',
  },
  {
    code: '013',
    descriptionFi: 'Taimien kasvatus ja muu kasvien lisääminen',
    descriptionEn: 'Seedling cultivation and other plant propagation',
  },
  {
    code: '0130',
    descriptionFi: 'Taimien kasvatus ja muu kasvien lisääminen',
    descriptionEn: 'Seedling cultivation and other plant propagation',
  },
  {
    code: '01300',
    descriptionFi: 'Taimien kasvatus ja muu kasvien lisääminen',
    descriptionEn: 'Seedling cultivation and other plant propagation',
  },
  {
    code: '014',
    descriptionFi: 'Kotieläintalous',
    descriptionEn: 'Animal farming',
  },
  {
    code: '0141',
    descriptionFi: 'Lypsykarjan kasvatus',
    descriptionEn: 'Dairy cattle farming',
  },
  {
    code: '01410',
    descriptionFi: 'Lypsykarjan kasvatus',
    descriptionEn: 'Dairy cattle farming',
  },
  {
    code: '0142',
    descriptionFi: 'Muun nautakarjan ja puhvelien kasvatus',
    descriptionEn: 'Other cattle and buffalo farming',
  },
  {
    code: '01420',
    descriptionFi: 'Muun nautakarjan ja puhvelien kasvatus',
    descriptionEn: 'Other cattle and buffalo farming',
  },
  {
    code: '84301',
    descriptionFi: 'Kansaneläkelaitoksen vakuutustoiminta',
    descriptionEn: 'Activities of the Social Insurance Institution',
  },
];
