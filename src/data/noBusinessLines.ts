export interface BusinessLine {
  code: string;
  descriptionFi: string;
  descriptionEn: string;
}

export const notAcceptedBusinessLines: BusinessLine[] = [
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
    descriptionEn: 'Raising of dairy cattle',
  },
  {
    code: '01410',
    descriptionFi: 'Lypsykarjan kasvatus',
    descriptionEn: 'Raising of dairy cattle',
  },
  {
    code: '0142',
    descriptionFi: 'Muun nautakarjan ja puhvelien kasvatus',
    descriptionEn: 'Raising of other cattle and buffaloes',
  },
  {
    code: '01420',
    descriptionFi: 'Muun nautakarjan ja puhvelien kasvatus',
    descriptionEn: 'Raising of other cattle and buffaloes',
  },
  {
    code: '0143',
    descriptionFi: 'Hevosten ja muiden kavioeläinten kasvatus',
    descriptionEn: 'Raising of horses and other equines',
  },
  {
    code: '01430',
    descriptionFi: 'Hevosten ja muiden kavioeläinten kasvatus',
    descriptionEn: 'Raising of horses and other equines',
  },
  {
    code: '0144',
    descriptionFi: 'Kameli- ja muiden kaviokkaiden kasvatus',
    descriptionEn: 'Raising of camels and camelids',
  },
  {
    code: '01440',
    descriptionFi: 'Kameli- ja muiden kaviokkaiden kasvatus',
    descriptionEn: 'Raising of camels and camelids',
  },
  {
    code: '0145',
    descriptionFi: 'Lampaiden ja vuohien kasvatus',
    descriptionEn: 'Raising of sheep and goats',
  },
  {
    code: '01450',
    descriptionFi: 'Lampaiden ja vuohien kasvatus',
    descriptionEn: 'Raising of sheep and goats',
  },
  {
    code: '0146',
    descriptionFi: 'Sikojen kasvatus',
    descriptionEn: 'Raising of swine/pigs',
  },
  {
    code: '01461',
    descriptionFi: 'Sikojen kasvatus porsastuotantoa varten',
    descriptionEn: 'Raising of pigs for piglets',
  },
  {
    code: '01462',
    descriptionFi: 'Sikojen kasvatus lihantuotantoa varten',
    descriptionEn: 'Raising of pigs for meat',
  },
  {
    code: '0147',
    descriptionFi: 'Siipikarjan kasvatus',
    descriptionEn: 'Raising of poultry',
  },
  {
    code: '01471',
    descriptionFi: 'Munantuotanto',
    descriptionEn: 'Production of eggs',
  },
  {
    code: '01472',
    descriptionFi: 'Kanojen kasvatus',
    descriptionEn: 'Raising of chickens',
  },
  {
    code: '01479',
    descriptionFi: 'Muun siipikarjan kasvatus',
    descriptionEn: 'Raising of other poultry',
  },
  {
    code: '0149',
    descriptionFi: 'Muiden eläinten kasvatus',
    descriptionEn: 'Raising of other animals',
  },
  {
    code: '01491',
    descriptionFi: 'Turkistarhaus',
    descriptionEn: 'Fur farming',
  },
  {
    code: '01492',
    descriptionFi: 'Poronhoito',
    descriptionEn: 'Reindeer farming',
  },
  {
    code: '01499',
    descriptionFi: 'Muu eläinten kasvatus',
    descriptionEn: 'Other farming of animals',
  },
  {
    code: '015',
    descriptionFi: 'Sekaviljely',
    descriptionEn: 'Mixed farming',
  },
  {
    code: '0150',
    descriptionFi: 'Sekaviljely',
    descriptionEn: 'Mixed farming',
  },
  {
    code: '01500',
    descriptionFi: 'Sekaviljely',
    descriptionEn: 'Mixed farming',
  },
  {
    code: '016',
    descriptionFi:
      'Maatalouden tukipalvelut ja sadonkorjuun jälkeiset toiminnot',
    descriptionEn:
      'Support activities to agriculture and post-harvest crop activities',
  },
  {
    code: '0161',
    descriptionFi: 'Kasvituotannon tukipalvelut',
    descriptionEn: 'Support activities for crop production',
  },
  {
    code: '01611',
    descriptionFi: 'Kasvien kasvattamisen tukipalvelut',
    descriptionEn: 'Support service activities for crop growing',
  },
  {
    code: '01612',
    descriptionFi: 'Maan pitäminen maatalouskäytössä',
    descriptionEn: 'Keeping land in agricultural condition',
  },
  {
    code: '0162',
    descriptionFi: 'Eläintuotannon tukipalvelut',
    descriptionEn: 'Support activities for animal production',
  },
  {
    code: '01620',
    descriptionFi: 'Eläintuotannon tukipalvelut',
    descriptionEn: 'Support activities for animal production',
  },
  {
    code: '0163',
    descriptionFi: 'Sadonkorjuun jälkeiset toiminnot',
    descriptionEn: 'Post-harvest crop activities',
  },
  {
    code: '01630',
    descriptionFi: 'Sadonkorjuun jälkeiset toiminnot',
    descriptionEn: 'Post-harvest crop activities',
  },
  {
    code: '0164',
    descriptionFi: 'Siementen käsittely lisäämistä varten',
    descriptionEn: 'Seed processing for propagation',
  },
  {
    code: '01640',
    descriptionFi: 'Siementen käsittely lisäämistä varten',
    descriptionEn: 'Seed processing for propagation',
  },
  {
    code: '017',
    descriptionFi: 'Metsästys, ansastus ja niihin liittyvät palvelut',
    descriptionEn: 'Hunting, trapping and related service activities',
  },
  {
    code: '0170',
    descriptionFi: 'Metsästys, ansastus ja niihin liittyvät palvelut',
    descriptionEn: 'Hunting, trapping and related service activities',
  },
  {
    code: '01700',
    descriptionFi: 'Metsästys, ansastus ja niihin liittyvät palvelut',
    descriptionEn: 'Hunting, trapping and related service activities',
  },
  {
    code: '84301',
    descriptionFi: 'Kansaneläkelaitoksen vakuutustoiminta',
    descriptionEn: 'Activities of the Social Insurance Institution',
  },
];
