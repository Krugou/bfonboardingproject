import {Condition} from '@/app/types';

export const conditions: Condition[] = [
  {
    shorthand: 'under5',
    nameFi: 'Alle 5v. (Startti)',
    nameEn: 'Under 5 years (Startup)',
  },
  {shorthand: 'sme', nameFi: 'PK-yritys', nameEn: 'SME'},
  {shorthand: 'large', nameFi: 'Suuri yritys', nameEn: 'Large company'},
  {shorthand: 'housing', nameFi: 'As Oy', nameEn: 'Housing company'},
  {shorthand: 'all', nameFi: 'Kaikki', nameEn: 'All'},
  {shorthand: 'skip', nameFi: 'Ohita', nameEn: 'Skip'},
];

