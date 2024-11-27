interface BusinessLine {
  code: string;
  descriptionFi: string;
  descriptionEn: string;
}

const acceptedBusinessLines: BusinessLine[] = [

  {
    code: '000',
    descriptionFi: 'Toimiala tuntematon',
    descriptionEn: 'Industry unknown',
  },
  {
    code: '0000',
    descriptionFi: 'Toimiala tuntematon',
    descriptionEn: 'Industry unknown',
  },
  {
    code: '00000',
    descriptionFi: 'Toimiala tuntematon',
    descriptionEn: 'Industry unknown',
  },
  {
    code: '02',
    descriptionFi: 'Metsätalous ja puunkorjuu',
    descriptionEn: 'Forestry and logging',
  },
  {code: '021', descriptionFi: 'Metsänhoito', descriptionEn: 'Forestry'},
  {code: '0210', descriptionFi: 'Metsänhoito', descriptionEn: 'Forestry'},
  {code: '02100', descriptionFi: 'Metsänhoito', descriptionEn: 'Forestry'},
  {code: '022', descriptionFi: 'Puunkorjuu', descriptionEn: 'Logging'},
  {code: '0220', descriptionFi: 'Puunkorjuu', descriptionEn: 'Logging'},
  {code: '02200', descriptionFi: 'Puunkorjuu', descriptionEn: 'Logging'},
  {
    code: '023',
    descriptionFi: 'Luonnon tuotteiden keruu (pl. polttopuu)',
    descriptionEn: 'Gathering of natural products (excl. firewood)',
  },
  {
    code: '0230',
    descriptionFi: 'Luonnon tuotteiden keruu (pl. polttopuu)',
    descriptionEn: 'Gathering of natural products (excl. firewood)',
  },
  {
    code: '02300',
    descriptionFi: 'Luonnon tuotteiden keruu (pl. polttopuu)',
    descriptionEn: 'Gathering of natural products (excl. firewood)',
  },
  {
    code: '024',
    descriptionFi: 'Metsätaloutta palveleva toiminta',
    descriptionEn: 'Forestry support activities',
  },
  {
    code: '0240',
    descriptionFi: 'Metsätaloutta palveleva toiminta',
    descriptionEn: 'Forestry support activities',
  },
  {
    code: '02400',
    descriptionFi: 'Metsätaloutta palveleva toiminta',
    descriptionEn: 'Forestry support activities',
  },
  {
    code: '03',
    descriptionFi: 'Kalastus ja vesiviljely',
    descriptionEn: 'Fishing and aquaculture',
  },
  {code: '031', descriptionFi: 'Kalastus', descriptionEn: 'Fishing'},
  {
    code: '0311',
    descriptionFi: 'Merikalastus',
    descriptionEn: 'Marine fishing',
  },
  {
    code: '03110',
    descriptionFi: 'Merikalastus',
    descriptionEn: 'Marine fishing',
  },
  {
    code: '0312',
    descriptionFi: 'Sisävesikalastus',
    descriptionEn: 'Inland fishing',
  },
  {
    code: '03120',
    descriptionFi: 'Sisävesikalastus',
    descriptionEn: 'Inland fishing',
  },
  {code: '032', descriptionFi: 'Vesiviljely', descriptionEn: 'Aquaculture'},
  {
    code: '0321',
    descriptionFi: 'Kalanviljely meressä',
    descriptionEn: 'Marine aquaculture',
  },
  {
    code: '03210',
    descriptionFi: 'Kalanviljely meressä',
    descriptionEn: 'Marine aquaculture',
  },
  {
    code: '0322',
    descriptionFi: 'Kalanviljely sisävesissä',
    descriptionEn: 'Inland aquaculture',
  },
  {
    code: '03220',
    descriptionFi: 'Kalanviljely sisävesissä',
    descriptionEn: 'Inland aquaculture',
  },
  {
    code: '05',
    descriptionFi: 'Kivihiilen ja ruskohiilen kaivu',
    descriptionEn: 'Mining of coal and lignite',
  },
  {
    code: '051',
    descriptionFi: 'Kivihiilen kaivu',
    descriptionEn: 'Coal mining',
  },
  {
    code: '0510',
    descriptionFi: 'Kivihiilen kaivu',
    descriptionEn: 'Coal mining',
  },
  {
    code: '05100',
    descriptionFi: 'Kivihiilen kaivu',
    descriptionEn: 'Coal mining',
  },
  {
    code: '052',
    descriptionFi: 'Ruskohiilen kaivu',
    descriptionEn: 'Lignite mining',
  },
  {
    code: '0520',
    descriptionFi: 'Ruskohiilen kaivu',
    descriptionEn: 'Lignite mining',
  },
  {
    code: '05200',
    descriptionFi: 'Ruskohiilen kaivu',
    descriptionEn: 'Lignite mining',
  },
  {
    code: '06',
    descriptionFi: 'Raakaöljyn ja maakaasun tuotanto',
    descriptionEn: 'Extraction of crude petroleum and natural gas',
  },
  {
    code: '061',
    descriptionFi: 'Raakaöljyn tuotanto',
    descriptionEn: 'Crude petroleum extraction',
  },
  {
    code: '0610',
    descriptionFi: 'Raakaöljyn tuotanto',
    descriptionEn: 'Crude petroleum extraction',
  },
  {
    code: '06100',
    descriptionFi: 'Raakaöljyn tuotanto',
    descriptionEn: 'Crude petroleum extraction',
  },
  {
    code: '062',
    descriptionFi: 'Maakaasun tuotanto',
    descriptionEn: 'Natural gas extraction',
  },
  {
    code: '0620',
    descriptionFi: 'Maakaasun tuotanto',
    descriptionEn: 'Natural gas extraction',
  },
  {
    code: '06200',
    descriptionFi: 'Maakaasun tuotanto',
    descriptionEn: 'Natural gas extraction',
  },
  {
    code: '07',
    descriptionFi: 'Metallimalmien louhinta',
    descriptionEn: 'Mining of metal ores',
  },
  {
    code: '071',
    descriptionFi: 'Rautamalmien louhinta',
    descriptionEn: 'Iron ore mining',
  },
  {
    code: '0710',
    descriptionFi: 'Rautamalmien louhinta',
    descriptionEn: 'Iron ore mining',
  },
  {
    code: '07100',
    descriptionFi: 'Rautamalmien louhinta',
    descriptionEn: 'Iron ore mining',
  },
  {
    code: '072',
    descriptionFi: 'Värimetallimalmien louhinta',
    descriptionEn: 'Mining of non-ferrous metal ores',
  },
  {
    code: '0721',
    descriptionFi: 'Uraani- ja toriummalmien louhinta',
    descriptionEn: 'Uranium and thorium ore mining',
  },
  {
    code: '07210',
    descriptionFi: 'Uraani- ja toriummalmien louhinta',
    descriptionEn: 'Uranium and thorium ore mining',
  },
  {
    code: '0729',
    descriptionFi: 'Muiden värimetallimalmien louhinta',
    descriptionEn: 'Other non-ferrous metal ore mining',
  },
  {
    code: '07290',
    descriptionFi: 'Muiden värimetallimalmien louhinta',
    descriptionEn: 'Other non-ferrous metal ore mining',
  },
  {
    code: '08',
    descriptionFi: 'Muu kaivostoiminta ja louhinta',
    descriptionEn: 'Other mining and quarrying',
  },
  {
    code: '081',
    descriptionFi: 'Kiven louhinta, hiekan ja saven otto',
    descriptionEn: 'Quarrying of stone, sand and clay',
  },
  {
    code: '0811',
    descriptionFi:
      'Koriste- ja rakennuskiven, kalkkikiven, kipsin, liidun ja liuskekiven louhinta',
    descriptionEn:
      'Quarrying of ornamental and building stone, limestone, gypsum, chalk and slate',
  },
  {
    code: '08111',
    descriptionFi: 'Koriste- ja rakennuskiven louhinta',
    descriptionEn: 'Quarrying of ornamental and building stone',
  },
  {
    code: '08112',
    descriptionFi: 'Kalkkikiven, kipsin, liidun ja dolomiitin louhinta',
    descriptionEn: 'Quarrying of limestone, gypsum, chalk and dolomite',
  },
  {
    code: '08113',
    descriptionFi: 'Liuskekiven louhinta',
    descriptionEn: 'Quarrying of slate',
  },
  {
    code: '0812',
    descriptionFi: 'Soran, hiekan, saven ja kaoliinin otto',
    descriptionEn:
      'Operation of gravel and sand pits; mining of clays and kaolin',
  },
  {
    code: '08120',
    descriptionFi: 'Soran, hiekan, saven ja kaoliinin otto',
    descriptionEn:
      'Operation of gravel and sand pits; mining of clays and kaolin',
  },
  {
    code: '089',
    descriptionFi: 'Muu mineraalien kaivu',
    descriptionEn: 'Other mining and quarrying n.e.c.',
  },
  {
    code: '0891',
    descriptionFi: 'Kemiallisten ja lannoitemineraalien louhinta',
    descriptionEn: 'Mining of chemical and fertilizer minerals',
  },
  {
    code: '08910',
    descriptionFi: 'Kemiallisten ja lannoitemineraalien louhinta',
    descriptionEn: 'Mining of chemical and fertilizer minerals',
  },
  {
    code: '0892',
    descriptionFi: 'Turpeen nosto',
    descriptionEn: 'Extraction of peat',
  },
  {
    code: '08920',
    descriptionFi: 'Turpeen nosto',
    descriptionEn: 'Extraction of peat',
  },
  {
    code: '0893',
    descriptionFi: 'Suolan tuotanto',
    descriptionEn: 'Extraction of salt',
  },
  {
    code: '08930',
    descriptionFi: 'Suolan tuotanto',
    descriptionEn: 'Extraction of salt',
  },
  {
    code: '0899',
    descriptionFi: 'Muualla luokittelematon kaivostoiminta ja louhinta',
    descriptionEn: 'Other mining and quarrying n.e.c.',
  },
  {
    code: '08990',
    descriptionFi: 'Muualla luokittelematon kaivostoiminta ja louhinta',
    descriptionEn: 'Other mining and quarrying n.e.c.',
  },
  {
    code: '09',
    descriptionFi: 'Kaivostoimintaa palveleva toiminta',
    descriptionEn: 'Mining support service activities',
  },
  {
    code: '091',
    descriptionFi: 'Raakaöljyn ja maakaasun tuotantoa palveleva toiminta',
    descriptionEn:
      'Support activities for petroleum and natural gas extraction',
  },
  {
    code: '0910',
    descriptionFi: 'Raakaöljyn ja maakaasun tuotantoa palveleva toiminta',
    descriptionEn:
      'Support activities for petroleum and natural gas extraction',
  },
  {
    code: '09100',
    descriptionFi: 'Raakaöljyn ja maakaasun tuotantoa palveleva toiminta',
    descriptionEn:
      'Support activities for petroleum and natural gas extraction',
  },
  {
    code: '099',
    descriptionFi: 'Muuta kaivostoimintaa ja louhintaa palveleva toiminta',
    descriptionEn: 'Support activities for other mining and quarrying',
  },
  {
    code: '0990',
    descriptionFi: 'Muuta kaivostoimintaa ja louhintaa palveleva toiminta',
    descriptionEn: 'Support activities for other mining and quarrying',
  },
  {
    code: '09900',
    descriptionFi: 'Muuta kaivostoimintaa ja louhintaa palveleva toiminta',
    descriptionEn: 'Support activities for other mining and quarrying',
  },
  {
    code: '10',
    descriptionFi: 'Elintarvikkeiden valmistus',
    descriptionEn: 'Manufacture of food products',
  },
  {
    code: '101',
    descriptionFi:
      'Teurastus, lihan säilyvyyskäsittely ja lihatuotteiden valmistus',
    descriptionEn:
      'Processing and preserving of meat and production of meat products',
  },
  {
    code: '1011',
    descriptionFi: 'Teurastus ja lihan säilyvyyskäsittely (pl. siipikarja)',
    descriptionEn: 'Processing and preserving of meat (except poultry)',
  },
  {
    code: '10110',
    descriptionFi: 'Teurastus ja lihan säilyvyyskäsittely (pl. siipikarja)',
    descriptionEn: 'Processing and preserving of meat (except poultry)',
  },
  {
    code: '1012',
    descriptionFi: 'Siipikarjan teurastus ja lihan säilyvyyskäsittely',
    descriptionEn: 'Processing and preserving of poultry meat',
  },
  {
    code: '10120',
    descriptionFi: 'Siipikarjan teurastus ja lihan säilyvyyskäsittely',
    descriptionEn: 'Processing and preserving of poultry meat',
  },
  {
    code: '1013',
    descriptionFi: 'Liha- ja siipikarjatuotteiden valmistus',
    descriptionEn: 'Production of meat and poultry meat products',
  },
  {
    code: '10130',
    descriptionFi: 'Liha- ja siipikarjatuotteiden valmistus',
    descriptionEn: 'Production of meat and poultry meat products',
  },
  {
    code: '102',
    descriptionFi: 'Kalan, äyriäisten ja nilviäisten jalostus ja säilöntä',
    descriptionEn:
      'Processing and preserving of fish, crustaceans and molluscs',
  },
  {
    code: '1020',
    descriptionFi: 'Kalan, äyriäisten ja nilviäisten jalostus ja säilöntä',
    descriptionEn:
      'Processing and preserving of fish, crustaceans and molluscs',
  },
  {
    code: '10200',
    descriptionFi: 'Kalan, äyriäisten ja nilviäisten jalostus ja säilöntä',
    descriptionEn:
      'Processing and preserving of fish, crustaceans and molluscs',
  },
  {
    code: '103',
    descriptionFi: 'Hedelmien ja kasvisten jalostus ja säilöntä',
    descriptionEn: 'Processing and preserving of fruit and vegetables',
  },
  {
    code: '1031',
    descriptionFi: 'Perunoiden jalostus ja säilöntä',
    descriptionEn: 'Processing and preserving of potatoes',
  },
  {
    code: '10310',
    descriptionFi: 'Perunoiden jalostus ja säilöntä',
    descriptionEn: 'Processing and preserving of potatoes',
  },
  {
    code: '1032',
    descriptionFi: 'Hedelmä-, marja- ja kasvismehujen valmistus',
    descriptionEn: 'Manufacture of fruit and vegetable juice',
  },
  {
    code: '10320',
    descriptionFi: 'Hedelmä-, marja- ja kasvismehujen valmistus',
    descriptionEn: 'Manufacture of fruit and vegetable juice',
  },
  {
    code: '1039',
    descriptionFi: 'Muu hedelmien, marjojen ja kasvisten jalostus ja säilöntä',
    descriptionEn: 'Other processing and preserving of fruit and vegetables',
  },
  {
    code: '10390',
    descriptionFi: 'Muu hedelmien, marjojen ja kasvisten jalostus ja säilöntä',
    descriptionEn: 'Other processing and preserving of fruit and vegetables',
  },
  {
    code: '104',
    descriptionFi: 'Kasvi- ja eläinöljyjen ja -rasvojen valmistus',
    descriptionEn: 'Manufacture of vegetable and animal oils and fats',
  },
  {
    code: '1041',
    descriptionFi:
      'Kasvi- ja eläinperäisten öljyjen ja -rasvojen valmistus (pl. ravintorasvat)',
    descriptionEn:
      'Manufacture of oils and fats (except margarine and similar edible fats)',
  },
  {
    code: '10410',
    descriptionFi:
      'Kasvi- ja eläinperäisten öljyjen ja -rasvojen valmistus (pl. ravintorasvat)',
    descriptionEn:
      'Manufacture of oils and fats (except margarine and similar edible fats)',
  },
  {
    code: '1042',
    descriptionFi: 'Margariinin ja sen kaltaisten ravintorasvojen valmistus',
    descriptionEn: 'Manufacture of margarine and similar edible fats',
  },
  {
    code: '10420',
    descriptionFi: 'Margariinin ja sen kaltaisten ravintorasvojen valmistus',
    descriptionEn: 'Manufacture of margarine and similar edible fats',
  },
  {
    code: '105',
    descriptionFi: 'Maitotaloustuotteiden valmistus',
    descriptionEn: 'Manufacture of dairy products',
  },
  {
    code: '1051',
    descriptionFi: 'Maitotaloustuotteiden ja juuston valmistus',
    descriptionEn: 'Manufacture of dairy products and cheese',
  },
  {
    code: '10510',
    descriptionFi: 'Maitotaloustuotteiden ja juuston valmistus',
    descriptionEn: 'Manufacture of dairy products and cheese',
  },
  {
    code: '1052',
    descriptionFi: 'Jäätelön valmistus',
    descriptionEn: 'Manufacture of ice cream',
  },
  {
    code: '10520',
    descriptionFi: 'Jäätelön valmistus',
    descriptionEn: 'Manufacture of ice cream',
  },
  {
    code: '106',
    descriptionFi: 'Mylly- ja tärkkelystuotteiden valmistus',
    descriptionEn:
      'Manufacture of grain mill products, starches and starch products',
  },
  {
    code: '1061',
    descriptionFi: 'Myllytuotteiden valmistus',
    descriptionEn: 'Manufacture of grain mill products',
  },
  {
    code: '10610',
    descriptionFi: 'Myllytuotteiden valmistus',
    descriptionEn: 'Manufacture of grain mill products',
  },
  {
    code: '1062',
    descriptionFi: 'Tärkkelyksen ja tärkkelystuotteiden valmistus',
    descriptionEn: 'Manufacture of starches and starch products',
  },
  {
    code: '10620',
    descriptionFi: 'Tärkkelyksen ja tärkkelystuotteiden valmistus',
    descriptionEn: 'Manufacture of starches and starch products',
  },
  {
    code: '107',
    descriptionFi: 'Leipomotuotteiden, makaronien yms. valmistus',
    descriptionEn: 'Manufacture of bakery and farinaceous products',
  },
  {
    code: '1071',
    descriptionFi:
      'Leivän valmistus; tuoreiden leivonnaisten ja kakkujen valmistus',
    descriptionEn:
      'Manufacture of bread; manufacture of fresh pastry goods and cakes',
  },
  {
    code: '10710',
    descriptionFi:
      'Leivän valmistus; tuoreiden leivonnaisten ja kakkujen valmistus',
    descriptionEn:
      'Manufacture of bread; manufacture of fresh pastry goods and cakes',
  },
  {
    code: '1072',
    descriptionFi:
      'Näkkileivän ja keksien valmistus; säilyvien leivonnaisten ja kakkujen valmistus',
    descriptionEn:
      'Manufacture of rusks and biscuits; manufacture of preserved pastry goods and cakes',
  },
  {
    code: '10720',
    descriptionFi:
      'Näkkileivän ja keksien valmistus; säilyvien leivonnaisten ja kakkujen valmistus',
    descriptionEn:
      'Manufacture of rusks and biscuits; manufacture of preserved pastry goods and cakes',
  },
  {
    code: '1073',
    descriptionFi:
      'Makaronin, nuudelien, kuskusin ja vastaavien jauhotuotteiden valmistus',
    descriptionEn:
      'Manufacture of macaroni, noodles, couscous and similar farinaceous products',
  },
  {
    code: '10730',
    descriptionFi:
      'Makaronin, nuudelien, kuskusin ja vastaavien jauhotuotteiden valmistus',
    descriptionEn:
      'Manufacture of macaroni, noodles, couscous and similar farinaceous products',
  },
  {
    code: '108',
    descriptionFi: 'Muiden elintarvikkeiden valmistus',
    descriptionEn: 'Manufacture of other food products',
  },
  {
    code: '1081',
    descriptionFi: 'Sokerin valmistus',
    descriptionEn: 'Manufacture of sugar',
  },
  {
    code: '10810',
    descriptionFi: 'Sokerin valmistus',
    descriptionEn: 'Manufacture of sugar',
  },
  {
    code: '1082',
    descriptionFi: 'Kaakaon, suklaan ja makeisten valmistus',
    descriptionEn: 'Manufacture of cocoa, chocolate and sugar confectionery',
  },
  {
    code: '10820',
    descriptionFi: 'Kaakaon, suklaan ja makeisten valmistus',
    descriptionEn: 'Manufacture of cocoa, chocolate and sugar confectionery',
  },
  {
    code: '1083',
    descriptionFi: 'Teen ja kahvin valmistus',
    descriptionEn: 'Manufacture of tea and coffee',
  },
  {
    code: '10830',
    descriptionFi: 'Teen ja kahvin valmistus',
    descriptionEn: 'Manufacture of tea and coffee',
  },
  {
    code: '1084',
    descriptionFi: 'Mausteiden ja maustekastikkeiden valmistus',
    descriptionEn: 'Manufacture of condiments and seasonings',
  },
  {
    code: '10840',
    descriptionFi: 'Mausteiden ja maustekastikkeiden valmistus',
    descriptionEn: 'Manufacture of condiments and seasonings',
  },
  {
    code: '1085',
    descriptionFi: 'Einesten ja valmisruokien valmistus',
    descriptionEn: 'Manufacture of prepared meals and dishes',
  },
  {
    code: '10850',
    descriptionFi: 'Einesten ja valmisruokien valmistus',
    descriptionEn: 'Manufacture of prepared meals and dishes',
  },
  {
    code: '1086',
    descriptionFi:
      'Homogenoitujen ravintovalmisteiden ja dieettiruokien valmistus',
    descriptionEn:
      'Manufacture of homogenized food preparations and dietetic food',
  },
  {
    code: '10860',
    descriptionFi:
      'Homogenoitujen ravintovalmisteiden ja dieettiruokien valmistus',
    descriptionEn:
      'Manufacture of homogenized food preparations and dietetic food',
  },
  {
    code: '1089',
    descriptionFi: 'Muualla luokittelematon elintarvikkeiden valmistus',
    descriptionEn: 'Manufacture of other food products n.e.c.',
  },
  {
    code: '10890',
    descriptionFi: 'Muualla luokittelematon elintarvikkeiden valmistus',
    descriptionEn: 'Manufacture of other food products n.e.c.',
  },
  {
    code: '109',
    descriptionFi: 'Eläinten ruokien valmistus',
    descriptionEn: 'Manufacture of prepared animal feeds',
  },
  {
    code: '1091',
    descriptionFi: 'Kotieläinten rehujen valmistus',
    descriptionEn: 'Manufacture of prepared feeds for farm animals',
  },
  {
    code: '10910',
    descriptionFi: 'Kotieläinten rehujen valmistus',
    descriptionEn: 'Manufacture of prepared feeds for farm animals',
  },
  {
    code: '1092',
    descriptionFi: 'Lemmikkieläinten ruokien valmistus',
    descriptionEn: 'Manufacture of prepared pet foods',
  },
  {
    code: '10920',
    descriptionFi: 'Lemmikkieläinten ruokien valmistus',
    descriptionEn: 'Manufacture of prepared pet foods',
  },
  {
    code: '11',
    descriptionFi: 'Juomien valmistus',
    descriptionEn: 'Manufacture of beverages',
  },
  {
    code: '110',
    descriptionFi: 'Juomien valmistus',
    descriptionEn: 'Manufacture of beverages',
  },
  {
    code: '1101',
    descriptionFi:
      'Alkoholijuomien tislaus ja sekoittaminen; etyylialkoholin valmistus käymisteitse',
    descriptionEn:
      'Distilling, rectifying and blending of spirits; ethyl alcohol production from fermented materials',
  },
  {
    code: '11010',
    descriptionFi:
      'Alkoholijuomien tislaus ja sekoittaminen; etyylialkoholin valmistus käymisteitse',
    descriptionEn:
      'Distilling, rectifying and blending of spirits; ethyl alcohol production from fermented materials',
  },
  {
    code: '1102',
    descriptionFi: 'Viinin valmistus rypäleistä',
    descriptionEn: 'Manufacture of wine from grape',
  },
  {
    code: '11020',
    descriptionFi: 'Viinin valmistus rypäleistä',
    descriptionEn: 'Manufacture of wine from grape',
  },
  {
    code: '1103',
    descriptionFi: 'Siiderin, hedelmä- ja marjaviinien valmistus',
    descriptionEn: 'Manufacture of cider and other fruit wines',
  },
  {
    code: '11030',
    descriptionFi: 'Siiderin, hedelmä- ja marjaviinien valmistus',
    descriptionEn: 'Manufacture of cider and other fruit wines',
  },
  {
    code: '1104',
    descriptionFi: 'Muiden tislaamattomien juomien valmistus käymisteitse',
    descriptionEn: 'Manufacture of other non-distilled fermented beverages',
  },
  {
    code: '11040',
    descriptionFi: 'Muiden tislaamattomien juomien valmistus käymisteitse',
    descriptionEn: 'Manufacture of other non-distilled fermented beverages',
  },
  {
    code: '1105',
    descriptionFi: 'Oluen valmistus',
    descriptionEn: 'Manufacture of beer',
  },
  {
    code: '11050',
    descriptionFi: 'Oluen valmistus',
    descriptionEn: 'Manufacture of beer',
  },
  {
    code: '1106',
    descriptionFi: 'Maltaiden valmistus',
    descriptionEn: 'Manufacture of malt',
  },
  {
    code: '11060',
    descriptionFi: 'Maltaiden valmistus',
    descriptionEn: 'Manufacture of malt',
  },
  {
    code: '1107',
    descriptionFi:
      'Virvoitusjuomien valmistus; kivennäisvesien ja muiden pullotettujen vesien tuotanto',
    descriptionEn:
      'Manufacture of soft drinks; production of mineral waters and other bottled waters',
  },
  {
    code: '11070',
    descriptionFi:
      'Virvoitusjuomien valmistus; kivennäisvesien ja muiden pullotettujen vesien tuotanto',
    descriptionEn:
      'Manufacture of soft drinks; production of mineral waters and other bottled waters',
  },
  {
    code: '12',
    descriptionFi: 'Tupakkatuotteiden valmistus',
    descriptionEn: 'Manufacture of tobacco products',
  },
  {
    code: '120',
    descriptionFi: 'Tupakkatuotteiden valmistus',
    descriptionEn: 'Manufacture of tobacco products',
  },
  {
    code: '1200',
    descriptionFi: 'Tupakkatuotteiden valmistus',
    descriptionEn: 'Manufacture of tobacco products',
  },
  {
    code: '12000',
    descriptionFi: 'Tupakkatuotteiden valmistus',
    descriptionEn: 'Manufacture of tobacco products',
  },
  {
    code: '13',
    descriptionFi: 'Tekstiilien valmistus',
    descriptionEn: 'Manufacture of textiles',
  },
  {
    code: '131',
    descriptionFi: 'Tekstiilikuitujen valmistelu ja kehruu',
    descriptionEn: 'Preparation and spinning of textile fibres',
  },
  {
    code: '1310',
    descriptionFi: 'Tekstiilikuitujen valmistelu ja kehruu',
    descriptionEn: 'Preparation and spinning of textile fibres',
  },
  {
    code: '13100',
    descriptionFi: 'Tekstiilikuitujen valmistelu ja kehruu',
    descriptionEn: 'Preparation and spinning of textile fibres',
  },
  {
    code: '132',
    descriptionFi: 'Kankaiden kudonta',
    descriptionEn: 'Weaving of textiles',
  },
  {
    code: '1320',
    descriptionFi: 'Kankaiden kudonta',
    descriptionEn: 'Weaving of textiles',
  },
  {
    code: '13200',
    descriptionFi: 'Kankaiden kudonta',
    descriptionEn: 'Weaving of textiles',
  },
  {
    code: '133',
    descriptionFi: 'Tekstiilien viimeistely',
    descriptionEn: 'Finishing of textiles',
  },
  {
    code: '1330',
    descriptionFi: 'Tekstiilien viimeistely',
    descriptionEn: 'Finishing of textiles',
  },
  {
    code: '13300',
    descriptionFi: 'Tekstiilien viimeistely',
    descriptionEn: 'Finishing of textiles',
  },
  {
    code: '139',
    descriptionFi: 'Muiden tekstiilituotteiden valmistus',
    descriptionEn: 'Manufacture of other textiles',
  },
  {
    code: '1391',
    descriptionFi: 'Neulosten valmistus',
    descriptionEn: 'Manufacture of knitted and crocheted fabrics',
  },
  {
    code: '13910',
    descriptionFi: 'Neulosten valmistus',
    descriptionEn: 'Manufacture of knitted and crocheted fabrics',
  },
  {
    code: '1392',
    descriptionFi: 'Sovitettujen tekstiilituotteiden valmistus (pl. vaatteet)',
    descriptionEn: 'Manufacture of made-up textile articles, except apparel',
  },
  {
    code: '13921',
    descriptionFi: 'Sisustustekstiilien valmistus',
    descriptionEn: 'Manufacture of soft furnishings',
  },
  {
    code: '13922',
    descriptionFi:
      'Tavaranpeitteiden, purjeiden ja muiden sovitettujen tekstiilituotteiden valmistus',
    descriptionEn:
      'Manufacture of other made-up textile articles, except apparel',
  },
  {
    code: '1393',
    descriptionFi: 'Mattojen valmistus',
    descriptionEn: 'Manufacture of carpets and rugs',
  },
  {
    code: '13930',
    descriptionFi: 'Mattojen valmistus',
    descriptionEn: 'Manufacture of carpets and rugs',
  },
  {
    code: '1394',
    descriptionFi: 'Purjelankojen, nuoran, sidelangan ja verkkojen valmistus',
    descriptionEn: 'Manufacture of cordage, rope, twine and netting',
  },
  {
    code: '13940',
    descriptionFi: 'Purjelankojen, nuoran, sidelangan ja verkkojen valmistus',
    descriptionEn: 'Manufacture of cordage, rope, twine and netting',
  },
  {
    code: '1395',
    descriptionFi:
      'Kuitukankaiden ja kuitukangastuotteiden valmistus (pl. vaatteet)',
    descriptionEn:
      'Manufacture of non-wovens and articles made from non-wovens, except apparel',
  },
  {
    code: '13950',
    descriptionFi:
      'Kuitukankaiden ja kuitukangastuotteiden valmistus (pl. vaatteet)',
    descriptionEn:
      'Manufacture of non-wovens and articles made from non-wovens, except apparel',
  },
  {
    code: '1396',
    descriptionFi: 'Teknisten ja teollisuustekstiilien valmistus',
    descriptionEn: 'Manufacture of technical and industrial textiles',
  },
  {
    code: '13960',
    descriptionFi: 'Teknisten ja teollisuustekstiilien valmistus',
    descriptionEn: 'Manufacture of technical and industrial textiles',
  },
  {
    code: '1399',
    descriptionFi: 'Muualla luokittelematon tekstiilituotteiden valmistus',
    descriptionEn: 'Manufacture of other textiles n.e.c.',
  },
  {
    code: '13990',
    descriptionFi: 'Muualla luokittelematon tekstiilituotteiden valmistus',
    descriptionEn: 'Manufacture of other textiles n.e.c.',
  },
  {
    code: '14',
    descriptionFi: 'Vaatteiden valmistus',
    descriptionEn: 'Manufacture of wearing apparel',
  },
  {
    code: '141',
    descriptionFi: 'Vaatteiden valmistus (pl. turkisvaatteet)',
    descriptionEn: 'Manufacture of wearing apparel, except fur apparel',
  },
  {
    code: '1411',
    descriptionFi: 'Nahkavaatteiden valmistus',
    descriptionEn: 'Manufacture of leather clothes',
  },
  {
    code: '14110',
    descriptionFi: 'Nahkavaatteiden valmistus',
    descriptionEn: 'Manufacture of leather clothes',
  },
  {
    code: '1412',
    descriptionFi: 'Työvaatteiden valmistus',
    descriptionEn: 'Manufacture of workwear',
  },
  {
    code: '14120',
    descriptionFi: 'Työvaatteiden valmistus',
    descriptionEn: 'Manufacture of workwear',
  },
  {
    code: '1413',
    descriptionFi: 'Muu takkien, pukujen, housujen, hameiden yms. valmistus',
    descriptionEn: 'Manufacture of other outerwear',
  },
  {
    code: '14130',
    descriptionFi: 'Muu takkien, pukujen, housujen, hameiden yms. valmistus',
    descriptionEn: 'Manufacture of other outerwear',
  },
  {
    code: '1414',
    descriptionFi: 'Alusvaatteiden valmistus',
    descriptionEn: 'Manufacture of underwear',
  },
  {
    code: '14140',
    descriptionFi: 'Alusvaatteiden valmistus',
    descriptionEn: 'Manufacture of underwear',
  },
  {
    code: '1419',
    descriptionFi: 'Muiden vaatteiden ja asusteiden valmistus',
    descriptionEn: 'Manufacture of other wearing apparel and accessories',
  },
  {
    code: '14190',
    descriptionFi: 'Muiden vaatteiden ja asusteiden valmistus',
    descriptionEn: 'Manufacture of other wearing apparel and accessories',
  },
  {
    code: '142',
    descriptionFi: 'Turkisvaatteiden ja -tuotteiden valmistus',
    descriptionEn: 'Manufacture of articles of fur',
  },
  {
    code: '1420',
    descriptionFi: 'Turkisvaatteiden ja -tuotteiden valmistus',
    descriptionEn: 'Manufacture of articles of fur',
  },
  {
    code: '14200',
    descriptionFi: 'Turkisvaatteiden ja -tuotteiden valmistus',
    descriptionEn: 'Manufacture of articles of fur',
  },
  {
    code: '143',
    descriptionFi: 'Neulevaatteiden ja sukkien valmistus',
    descriptionEn: 'Manufacture of knitted and crocheted apparel',
  },
  {
    code: '1431',
    descriptionFi: 'Sukkien ja sukkahousujen valmistus',
    descriptionEn: 'Manufacture of knitted and crocheted hosiery',
  },
  {
    code: '14310',
    descriptionFi: 'Sukkien ja sukkahousujen valmistus',
    descriptionEn: 'Manufacture of knitted and crocheted hosiery',
  },
  {
    code: '1439',
    descriptionFi: 'Muiden neulevaatteiden valmistus',
    descriptionEn: 'Manufacture of other knitted and crocheted apparel',
  },
  {
    code: '14390',
    descriptionFi: 'Muiden neulevaatteiden valmistus',
    descriptionEn: 'Manufacture of other knitted and crocheted apparel',
  },
  {
    code: '15',
    descriptionFi: 'Nahan ja nahkatuotteiden valmistus',
    descriptionEn: 'Manufacture of leather and related products',
  },
  {
    code: '151',
    descriptionFi:
      'Nahan parkitseminen ja muokkaus; matka- ja käsilaukkujen, satuloiden ja valjaiden valmistus; turkisten muokkaus ja värjäys',
    descriptionEn:
      'Tanning and dressing of leather; manufacture of luggage, handbags, saddlery and harness; dressing and dyeing of fur',
  },
  {
    code: '1511',
    descriptionFi: 'Turkisten ja nahan muokkaus ja värjäys',
    descriptionEn:
      'Tanning and dressing of leather; dressing and dyeing of fur',
  },
  {
    code: '15110',
    descriptionFi: 'Turkisten ja nahan muokkaus ja värjäys',
    descriptionEn:
      'Tanning and dressing of leather; dressing and dyeing of fur',
  },
  {
    code: '1512',
    descriptionFi:
      'Matka-, käsi- ym. laukkujen, satuloiden ja valjaiden valmistus',
    descriptionEn:
      'Manufacture of luggage, handbags and the like, saddlery and harness',
  },
  {
    code: '15120',
    descriptionFi:
      'Matka-, käsi- ym. laukkujen, satuloiden ja valjaiden valmistus',
    descriptionEn:
      'Manufacture of luggage, handbags and the like, saddlery and harness',
  },
  {
    code: '152',
    descriptionFi: 'Jalkineiden valmistus',
    descriptionEn: 'Manufacture of footwear',
  },
  {
    code: '1520',
    descriptionFi: 'Jalkineiden valmistus',
    descriptionEn: 'Manufacture of footwear',
  },
  {
    code: '15200',
    descriptionFi: 'Jalkineiden valmistus',
    descriptionEn: 'Manufacture of footwear',
  },
  {
    code: '16',
    descriptionFi:
      'Sahatavaran sekä puu- ja korkkituotteiden valmistus (pl. huonekalut); olki- ja punontatuotteiden valmistus',
    descriptionEn:
      'Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials',
  },
  {
    code: '161',
    descriptionFi: 'Puun sahaus, höyläys ja kyllästys',
    descriptionEn: 'Sawmilling and planing of wood',
  },
  {
    code: '1610',
    descriptionFi: 'Puun sahaus, höyläys ja kyllästys',
    descriptionEn: 'Sawmilling and planing of wood',
  },
  {
    code: '16100',
    descriptionFi: 'Puun sahaus, höyläys ja kyllästys',
    descriptionEn: 'Sawmilling and planing of wood',
  },
  {
    code: '162',
    descriptionFi: 'Puu-, korkki-, olki- ja punontatuotteiden valmistus',
    descriptionEn:
      'Manufacture of products of wood, cork, straw and plaiting materials',
  },
  {
    code: '1621',
    descriptionFi: 'Vaneriviilun ja puupaneelien valmistus',
    descriptionEn: 'Manufacture of veneer sheets and wood-based panels',
  },
  {
    code: '16211',
    descriptionFi: 'Vanerin ja vaneriviilun valmistus',
    descriptionEn: 'Manufacture of veneer sheets and wood-based panels',
  },
  {
    code: '16212',
    descriptionFi: 'Lastulevyn valmistus',
    descriptionEn: 'Manufacture of veneer sheets and wood-based panels',
  },
  {
    code: '16213',
    descriptionFi: 'Kuitulevyn valmistus',
    descriptionEn: 'Manufacture of veneer sheets and wood-based panels',
  },
  {
    code: '1622',
    descriptionFi: 'Asennettavien parkettilevyjen valmistus',
    descriptionEn: 'Manufacture of assembled parquet floors',
  },
  {
    code: '16220',
    descriptionFi: 'Asennettavien parkettilevyjen valmistus',
    descriptionEn: 'Manufacture of assembled parquet floors',
  },
  {
    code: '1623',
    descriptionFi: 'Muiden rakennuspuusepäntuotteiden valmistus',
    descriptionEn: "Manufacture of other builders' carpentry and joinery",
  },
  {
    code: '16231',
    descriptionFi: 'Puutalojen valmistus',
    descriptionEn: 'Manufacture of prefabricated wooden buildings',
  },
  {
    code: '16239',
    descriptionFi: 'Muu rakennuspuusepäntuotteiden valmistus',
    descriptionEn: "Manufacture of other builders' carpentry and joinery",
  },
  {
    code: '1624',
    descriptionFi: 'Puupakkausten valmistus',
    descriptionEn: 'Manufacture of wooden containers',
  },
  {
    code: '16240',
    descriptionFi: 'Puupakkausten valmistus',
    descriptionEn: 'Manufacture of wooden containers',
  },
  {
    code: '1629',
    descriptionFi:
      'Muiden puutuotteiden valmistus; korkki-, olki- ja punontatuotteiden valmistus',
    descriptionEn:
      'Manufacture of other products of wood; manufacture of articles of cork, straw and plaiting materials',
  },
  {
    code: '16290',
    descriptionFi:
      'Muiden puutuotteiden valmistus; korkki-, olki- ja punontatuotteiden valmistus',
    descriptionEn:
      'Manufacture of other products of wood; manufacture of articles of cork, straw and plaiting materials',
  },
  {
    code: '17',
    descriptionFi: 'Paperin, paperi- ja kartonkituotteiden valmistus',
    descriptionEn: 'Manufacture of paper and paper products',
  },
  {
    code: '171',
    descriptionFi: 'Massan, paperin, kartongin ja pahvin valmistus',
    descriptionEn: 'Manufacture of pulp, paper and paperboard',
  },
  {
    code: '1711',
    descriptionFi: 'Massan valmistus',
    descriptionEn: 'Manufacture of pulp',
  },
  {
    code: '17110',
    descriptionFi: 'Massan valmistus',
    descriptionEn: 'Manufacture of pulp',
  },
  {
    code: '1712',
    descriptionFi: 'Paperin, kartongin ja pahvin valmistus',
    descriptionEn: 'Manufacture of paper and paperboard',
  },
  {
    code: '17120',
    descriptionFi: 'Paperin, kartongin ja pahvin valmistus',
    descriptionEn: 'Manufacture of paper and paperboard',
  },
  {
    code: '172',
    descriptionFi: 'Paperi-, kartonki- ja pahvituotteiden valmistus',
    descriptionEn: 'Manufacture of articles of paper and paperboard',
  },
  {
    code: '1721',
    descriptionFi:
      'Aaltopaperin ja -pahvin sekä paperi-, kartonki- ja pahvipakkausten valmistus',
    descriptionEn:
      'Manufacture of corrugated paper and paperboard and of containers of paper and paperboard',
  },
  {
    code: '17211',
    descriptionFi: 'Paperisäkkien ja -pussien valmistus',
    descriptionEn: 'Manufacture of paper sacks and bags',
  },
  {
    code: '17212',
    descriptionFi: 'Aaltopahvin sekä paperi- ja kartonkipakkausten valmistus',
    descriptionEn:
      'Manufacture of corrugated paper and paperboard and of containers of paper and paperboard',
  },
  {
    code: '1722',
    descriptionFi: 'Paperisten talous- ja hygieniatarvikkeiden valmistus',
    descriptionEn:
      'Manufacture of household and sanitary goods and of toilet requisites',
  },
  {
    code: '17220',
    descriptionFi: 'Paperisten talous- ja hygieniatarvikkeiden valmistus',
    descriptionEn:
      'Manufacture of household and sanitary goods and of toilet requisites',
  },
  {
    code: '1723',
    descriptionFi: 'Paperikauppatavaroiden valmistus',
    descriptionEn: 'Manufacture of paper stationery',
  },
  {
    code: '17230',
    descriptionFi: 'Paperikauppatavaroiden valmistus',
    descriptionEn: 'Manufacture of paper stationery',
  },
  {
    code: '1724',
    descriptionFi: 'Tapettien valmistus',
    descriptionEn: 'Manufacture of wallpaper',
  },
  {
    code: '17240',
    descriptionFi: 'Tapettien valmistus',
    descriptionEn: 'Manufacture of wallpaper',
  },
  {
    code: '1729',
    descriptionFi: 'Muiden paperi-, kartonki- ja pahvituotteiden valmistus',
    descriptionEn: 'Manufacture of other articles of paper and paperboard',
  },
  {
    code: '17290',
    descriptionFi: 'Muiden paperi-, kartonki- ja pahvituotteiden valmistus',
    descriptionEn: 'Manufacture of other articles of paper and paperboard',
  },
  {
    code: '18',
    descriptionFi: 'Painaminen ja tallenteiden jäljentäminen',
    descriptionEn: 'Printing and reproduction of recorded media',
  },
  {
    code: '181',
    descriptionFi: 'Painaminen ja siihen liittyvät palvelut',
    descriptionEn: 'Printing and service activities related to printing',
  },
  {
    code: '1811',
    descriptionFi: 'Sanomalehtien painaminen',
    descriptionEn: 'Printing of newspapers',
  },
  {
    code: '18110',
    descriptionFi: 'Sanomalehtien painaminen',
    descriptionEn: 'Printing of newspapers',
  },
  {
    code: '1812',
    descriptionFi: 'Muu painaminen',
    descriptionEn: 'Other printing',
  },
  {
    code: '18120',
    descriptionFi: 'Muu painaminen',
    descriptionEn: 'Other printing',
  },
  {
    code: '1813',
    descriptionFi: 'Painamista ja julkaisemista edeltävät palvelut',
    descriptionEn: 'Pre-press and pre-media services',
  },
  {
    code: '18130',
    descriptionFi: 'Painamista ja julkaisemista edeltävät palvelut',
    descriptionEn: 'Pre-press and pre-media services',
  },
  {
    code: '1814',
    descriptionFi: 'Sidonta ja siihen liittyvät palvelut',
    descriptionEn: 'Binding and related services',
  },
  {
    code: '18140',
    descriptionFi: 'Sidonta ja siihen liittyvät palvelut',
    descriptionEn: 'Binding and related services',
  },
  {
    code: '182',
    descriptionFi: 'Ääni-, kuva- ja atk-tallenteiden tuotanto',
    descriptionEn: 'Reproduction of recorded media',
  },
  {
    code: '1820',
    descriptionFi: 'Ääni-, kuva- ja atk-tallenteiden tuotanto',
    descriptionEn: 'Reproduction of recorded media',
  },
  {
    code: '18200',
    descriptionFi: 'Ääni-, kuva- ja atk-tallenteiden tuotanto',
    descriptionEn: 'Reproduction of recorded media',
  },
  {
    code: '19',
    descriptionFi: 'Koksin ja jalostettujen öljytuotteiden valmistus',
    descriptionEn: 'Manufacture of coke and refined petroleum products',
  },
  {
    code: '191',
    descriptionFi: 'Koksituotteiden valmistus',
    descriptionEn: 'Manufacture of coke oven products',
  },
  {
    code: '1910',
    descriptionFi: 'Koksituotteiden valmistus',
    descriptionEn: 'Manufacture of coke oven products',
  },
  {
    code: '19100',
    descriptionFi: 'Koksituotteiden valmistus',
    descriptionEn: 'Manufacture of coke oven products',
  },
  {
    code: '192',
    descriptionFi: 'Jalostettujen öljytuotteiden valmistus',
    descriptionEn: 'Manufacture of refined petroleum products',
  },
  {
    code: '1920',
    descriptionFi: 'Jalostettujen öljytuotteiden valmistus',
    descriptionEn: 'Manufacture of refined petroleum products',
  },
  {
    code: '19200',
    descriptionFi: 'Jalostettujen öljytuotteiden valmistus',
    descriptionEn: 'Manufacture of refined petroleum products',
  },
  {
    code: '20',
    descriptionFi: 'Kemikaalien ja kemiallisten tuotteiden valmistus',
    descriptionEn: 'Manufacture of chemicals and chemical products',
  },
  {
    code: '201',
    descriptionFi:
      'Peruskemikaalien, lannoitteiden ja typpiyhdisteiden, muoviaineiden ja synteettisen kumiraaka-aineen valmistus',
    descriptionEn:
      'Manufacture of basic chemicals, fertilizers and nitrogen compounds, plastics and synthetic rubber in primary forms',
  },
  {
    code: '2011',
    descriptionFi: 'Teollisuuskaasujen valmistus',
    descriptionEn: 'Manufacture of industrial gases',
  },
  {
    code: '20110',
    descriptionFi: 'Teollisuuskaasujen valmistus',
    descriptionEn: 'Manufacture of industrial gases',
  },
  {
    code: '2012',
    descriptionFi: 'Värien ja pigmenttien valmistus',
    descriptionEn: 'Manufacture of dyes and pigments',
  },
  {
    code: '20120',
    descriptionFi: 'Värien ja pigmenttien valmistus',
    descriptionEn: 'Manufacture of dyes and pigments',
  },
  {
    code: '2013',
    descriptionFi: 'Muiden epäorgaanisten peruskemikaalien valmistus',
    descriptionEn: 'Manufacture of other inorganic basic chemicals',
  },
  {
    code: '20130',
    descriptionFi: 'Muiden epäorgaanisten peruskemikaalien valmistus',
    descriptionEn: 'Manufacture of other inorganic basic chemicals',
  },
  {
    code: '2014',
    descriptionFi: 'Muiden orgaanisten peruskemikaalien valmistus',
    descriptionEn: 'Manufacture of other organic basic chemicals',
  },
  {
    code: '20140',
    descriptionFi: 'Muiden orgaanisten peruskemikaalien valmistus',
    descriptionEn: 'Manufacture of other organic basic chemicals',
  },
  {
    code: '2015',
    descriptionFi: 'Lannoitteiden ja typpiyhdisteiden valmistus',
    descriptionEn: 'Manufacture of fertilizers and nitrogen compounds',
  },
  {
    code: '20150',
    descriptionFi: 'Lannoitteiden ja typpiyhdisteiden valmistus',
    descriptionEn: 'Manufacture of fertilizers and nitrogen compounds',
  },
  {
    code: '2016',
    descriptionFi: 'Muoviaineiden valmistus',
    descriptionEn: 'Manufacture of plastics in primary forms',
  },
  {
    code: '20160',
    descriptionFi: 'Muoviaineiden valmistus',
    descriptionEn: 'Manufacture of plastics in primary forms',
  },
  {
    code: '2017',
    descriptionFi: 'Synteettisen kumiraaka-aineen valmistus',
    descriptionEn: 'Manufacture of synthetic rubber in primary forms',
  },
  {
    code: '20170',
    descriptionFi: 'Synteettisen kumiraaka-aineen valmistus',
    descriptionEn: 'Manufacture of synthetic rubber in primary forms',
  },
  {
    code: '202',
    descriptionFi: 'Torjunta-aineiden ja muiden maatalouskemikaalien valmistus',
    descriptionEn: 'Manufacture of pesticides and other agrochemical products',
  },
  {
    code: '2020',
    descriptionFi: 'Torjunta-aineiden ja muiden maatalouskemikaalien valmistus',
    descriptionEn: 'Manufacture of pesticides and other agrochemical products',
  },
  {
    code: '20200',
    descriptionFi: 'Torjunta-aineiden ja muiden maatalouskemikaalien valmistus',
    descriptionEn: 'Manufacture of pesticides and other agrochemical products',
  },
  {
    code: '203',
    descriptionFi: 'Maalien, lakan, painovärien yms. valmistus',
    descriptionEn:
      'Manufacture of paints, varnishes and similar coatings, printing ink and mastics',
  },
  {
    code: '2030',
    descriptionFi: 'Maalien, lakan, painovärien yms. valmistus',
    descriptionEn:
      'Manufacture of paints, varnishes and similar coatings, printing ink and mastics',
  },
  {
    code: '20300',
    descriptionFi: 'Maalien, lakan, painovärien yms. valmistus',
    descriptionEn:
      'Manufacture of paints, varnishes and similar coatings, printing ink and mastics',
  },
  {
    code: '204',
    descriptionFi:
      'Saippuan, pesu-, puhdistus- ja kiillotusaineiden; hajuvesien ja hygieniatuotteiden valmistus',
    descriptionEn:
      'Manufacture of soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations',
  },
  {
    code: '2041',
    descriptionFi: 'Saippuan, pesu-, puhdistus- ja kiillotusaineiden valmistus',
    descriptionEn:
      'Manufacture of soap and detergents, cleaning and polishing preparations',
  },
  {
    code: '20410',
    descriptionFi: 'Saippuan, pesu-, puhdistus- ja kiillotusaineiden valmistus',
    descriptionEn:
      'Manufacture of soap and detergents, cleaning and polishing preparations',
  },
  {
    code: '2042',
    descriptionFi: 'Hajuvesien ja hygieniatuotteiden valmistus',
    descriptionEn: 'Manufacture of perfumes and toilet preparations',
  },
  {
    code: '20420',
    descriptionFi: 'Hajuvesien ja hygieniatuotteiden valmistus',
    descriptionEn: 'Manufacture of perfumes and toilet preparations',
  },
  {
    code: '205',
    descriptionFi: 'Muiden kemiallisten tuotteiden valmistus',
    descriptionEn: 'Manufacture of other chemical products',
  },
  {
    code: '2051',
    descriptionFi: 'Räjähdysaineiden valmistus',
    descriptionEn: 'Manufacture of explosives',
  },
  {
    code: '20510',
    descriptionFi: 'Räjähdysaineiden valmistus',
    descriptionEn: 'Manufacture of explosives',
  },
  {
    code: '2052',
    descriptionFi: 'Liimojen valmistus',
    descriptionEn: 'Manufacture of glues',
  },
  {
    code: '20520',
    descriptionFi: 'Liimojen valmistus',
    descriptionEn: 'Manufacture of glues',
  },
  {
    code: '2053',
    descriptionFi: 'Eteeristen öljyjen valmistus',
    descriptionEn: 'Manufacture of essential oils',
  },
  {
    code: '20530',
    descriptionFi: 'Eteeristen öljyjen valmistus',
    descriptionEn: 'Manufacture of essential oils',
  },
  {
    code: '2059',
    descriptionFi: 'Muualla luokittelematon kemiallisten tuotteiden valmistus',
    descriptionEn: 'Manufacture of other chemical products n.e.c.',
  },
  {
    code: '20590',
    descriptionFi: 'Muualla luokittelematon kemiallisten tuotteiden valmistus',
    descriptionEn: 'Manufacture of other chemical products n.e.c.',
  },
  {
    code: '206',
    descriptionFi: 'Tekokuitujen valmistus',
    descriptionEn: 'Manufacture of man-made fibers',
  },
  {
    code: '2060',
    descriptionFi: 'Tekokuitujen valmistus',
    descriptionEn: 'Manufacture of man-made fibers',
  },
  {
    code: '20600',
    descriptionFi: 'Tekokuitujen valmistus',
    descriptionEn: 'Manufacture of man-made fibers',
  },
  {
    code: '21',
    descriptionFi: 'Lääkeaineiden ja lääkkeiden valmistus',
    descriptionEn: 'Manufacture of pharmaceuticals',
  },
  {
    code: '211',
    descriptionFi: 'Lääkeaineiden valmistus',
    descriptionEn: 'Manufacture of basic pharmaceutical products',
  },
  {
    code: '2110',
    descriptionFi: 'Lääkeaineiden valmistus',
    descriptionEn: 'Manufacture of basic pharmaceutical products',
  },
  {
    code: '21100',
    descriptionFi: 'Lääkeaineiden valmistus',
    descriptionEn: 'Manufacture of basic pharmaceutical products',
  },
  {
    code: '212',
    descriptionFi: 'Lääkkeiden ja muiden lääkevalmisteiden valmistus',
    descriptionEn: 'Manufacture of pharmaceutical preparations',
  },
  {
    code: '2120',
    descriptionFi: 'Lääkkeiden ja muiden lääkevalmisteiden valmistus',
    descriptionEn: 'Manufacture of pharmaceutical preparations',
  },
  {
    code: '21200',
    descriptionFi: 'Lääkkeiden ja muiden lääkevalmisteiden valmistus',
    descriptionEn: 'Manufacture of pharmaceutical preparations',
  },
  {
    code: '22',
    descriptionFi: 'Kumi- ja muovituotteiden valmistus',
    descriptionEn: 'Manufacture of rubber and plastic products',
  },
  {
    code: '221',
    descriptionFi: 'Kumituotteiden valmistus',
    descriptionEn: 'Manufacture of rubber products',
  },
  {
    code: '2211',
    descriptionFi: 'Renkaiden valmistus ja uudelleenpinnoitus',
    descriptionEn:
      'Manufacture of rubber tires and tubes; retreading and rebuilding of rubber tires',
  },
  {
    code: '22110',
    descriptionFi: 'Renkaiden valmistus ja uudelleenpinnoitus',
    descriptionEn:
      'Manufacture of rubber tires and tubes; retreading and rebuilding of rubber tires',
  },
  {
    code: '2219',
    descriptionFi: 'Muiden kumituotteiden valmistus',
    descriptionEn: 'Manufacture of other rubber products',
  },
  {
    code: '22190',
    descriptionFi: 'Muiden kumituotteiden valmistus',
    descriptionEn: 'Manufacture of other rubber products',
  },
  {
    code: '222',
    descriptionFi: 'Muovituotteiden valmistus',
    descriptionEn: 'Manufacture of plastic products',
  },
  {
    code: '2221',
    descriptionFi: 'Muovilevyjen, -kalvojen, -putkien ja -profiilien valmistus',
    descriptionEn: 'Manufacture of plastic plates, sheets, tubes and profiles',
  },
  {
    code: '22210',
    descriptionFi: 'Muovilevyjen, -kalvojen, -putkien ja -profiilien valmistus',
    descriptionEn: 'Manufacture of plastic plates, sheets, tubes and profiles',
  },
  {
    code: '2222',
    descriptionFi: 'Muovipakkausten valmistus',
    descriptionEn: 'Manufacture of plastic packing goods',
  },
  {
    code: '22220',
    descriptionFi: 'Muovipakkausten valmistus',
    descriptionEn: 'Manufacture of plastic packing goods',
  },
  {
    code: '2223',
    descriptionFi: 'Rakennusmuovien valmistus',
    descriptionEn: "Manufacture of builders' plastics",
  },
  {
    code: '22230',
    descriptionFi: 'Rakennusmuovien valmistus',
    descriptionEn: "Manufacture of builders' plastics",
  },
  {
    code: '2229',
    descriptionFi: 'Muiden muovituotteiden valmistus',
    descriptionEn: 'Manufacture of other plastic products',
  },
  {
    code: '22290',
    descriptionFi: 'Muiden muovituotteiden valmistus',
    descriptionEn: 'Manufacture of other plastic products',
  },
  {
    code: '23',
    descriptionFi: 'Muiden ei-metallisten mineraalituotteiden valmistus',
    descriptionEn: 'Manufacture of other non-metallic mineral products',
  },
  {
    code: '231',
    descriptionFi: 'Lasin ja lasituotteiden valmistus',
    descriptionEn: 'Manufacture of glass and glass products',
  },
  {
    code: '2311',
    descriptionFi: 'Tasolasin valmistus',
    descriptionEn: 'Manufacture of flat glass',
  },
  {
    code: '23110',
    descriptionFi: 'Tasolasin valmistus',
    descriptionEn: 'Manufacture of flat glass',
  },
  {
    code: '2312',
    descriptionFi: 'Tasolasin muotoilu ja muokkaus',
    descriptionEn: 'Shaping and processing of flat glass',
  },
  {
    code: '23120',
    descriptionFi: 'Tasolasin muotoilu ja muokkaus',
    descriptionEn: 'Shaping and processing of flat glass',
  },
  {
    code: '2313',
    descriptionFi: 'Onton lasitavaran valmistus',
    descriptionEn: 'Manufacture of hollow glass',
  },
  {
    code: '23130',
    descriptionFi: 'Onton lasitavaran valmistus',
    descriptionEn: 'Manufacture of hollow glass',
  },
  {
    code: '2314',
    descriptionFi: 'Lasikuitujen valmistus',
    descriptionEn: 'Manufacture of glass fibres',
  },
  {
    code: '23140',
    descriptionFi: 'Lasikuitujen valmistus',
    descriptionEn: 'Manufacture of glass fibres',
  },
  {
    code: '2319',
    descriptionFi:
      'Muu lasin valmistus ja muokkaus, mukaan lukien tekniset lasituotteet',
    descriptionEn:
      'Manufacture and processing of other glass, including technical glassware',
  },
  {
    code: '23190',
    descriptionFi:
      'Muu lasin valmistus ja muokkaus, mukaan lukien tekniset lasituotteet',
    descriptionEn:
      'Manufacture and processing of other glass, including technical glassware',
  },
  {
    code: '232',
    descriptionFi: 'Tulenkestävien keraamisten tuotteiden valmistus',
    descriptionEn: 'Manufacture of refractory ceramic products',
  },
  {
    code: '2320',
    descriptionFi: 'Tulenkestävien keraamisten tuotteiden valmistus',
    descriptionEn: 'Manufacture of refractory ceramic products',
  },
  {
    code: '23200',
    descriptionFi: 'Tulenkestävien keraamisten tuotteiden valmistus',
    descriptionEn: 'Manufacture of refractory ceramic products',
  },
  {
    code: '233',
    descriptionFi: 'Keraamisten rakennusaineiden valmistus',
    descriptionEn: 'Manufacture of ceramic building materials',
  },
  {
    code: '2331',
    descriptionFi: 'Keraamisten tiilien ja laattojen valmistus',
    descriptionEn: 'Manufacture of ceramic tiles and flags',
  },
  {
    code: '23310',
    descriptionFi: 'Keraamisten tiilien ja laattojen valmistus',
    descriptionEn: 'Manufacture of ceramic tiles and flags',
  },
  {
    code: '2332',
    descriptionFi: 'Poltettujen tiilien ja muun rakennuskeramiikan valmistus',
    descriptionEn:
      'Manufacture of bricks, tiles and construction products, in baked clay',
  },
  {
    code: '23320',
    descriptionFi: 'Poltettujen tiilien ja muun rakennuskeramiikan valmistus',
    descriptionEn:
      'Manufacture of bricks, tiles and construction products, in baked clay',
  },
  {
    code: '234',
    descriptionFi: 'Muiden posliini- ja keramiikkatuotteiden valmistus',
    descriptionEn: 'Manufacture of other porcelain and ceramic products',
  },
  {
    code: '2341',
    descriptionFi: 'Keraamisten talous- ja koriste-esineiden valmistus',
    descriptionEn: 'Manufacture of ceramic household and ornamental articles',
  },
  {
    code: '23410',
    descriptionFi: 'Keraamisten talous- ja koriste-esineiden valmistus',
    descriptionEn: 'Manufacture of ceramic household and ornamental articles',
  },
  {
    code: '2342',
    descriptionFi: 'Keraamisten saniteettikalusteiden valmistus',
    descriptionEn: 'Manufacture of ceramic sanitary fixtures',
  },
  {
    code: '23420',
    descriptionFi: 'Keraamisten saniteettikalusteiden valmistus',
    descriptionEn: 'Manufacture of ceramic sanitary fixtures',
  },
  {
    code: '2343',
    descriptionFi: 'Keraamisten eristystuotteiden valmistus',
    descriptionEn: 'Manufacture of ceramic insulators and insulating fittings',
  },
  {
    code: '23430',
    descriptionFi: 'Keraamisten eristystuotteiden valmistus',
    descriptionEn: 'Manufacture of ceramic insulators and insulating fittings',
  },
  {
    code: '2344',
    descriptionFi: 'Muiden teknisten keraamisten tuotteiden valmistus',
    descriptionEn: 'Manufacture of other technical ceramic products',
  },
  {
    code: '23440',
    descriptionFi: 'Muiden teknisten keraamisten tuotteiden valmistus',
    descriptionEn: 'Manufacture of other technical ceramic products',
  },
  {
    code: '2349',
    descriptionFi: 'Muiden keramiikkatuotteiden valmistus',
    descriptionEn: 'Manufacture of other ceramic products',
  },
  {
    code: '23490',
    descriptionFi: 'Muiden keramiikkatuotteiden valmistus',
    descriptionEn: 'Manufacture of other ceramic products',
  },
  {
    code: '235',
    descriptionFi: 'Sementin, kalkin ja kipsin valmistus',
    descriptionEn: 'Manufacture of cement, lime and plaster',
  },
  {
    code: '2351',
    descriptionFi: 'Sementin valmistus',
    descriptionEn: 'Manufacture of cement',
  },
  {
    code: '23510',
    descriptionFi: 'Sementin valmistus',
    descriptionEn: 'Manufacture of cement',
  },
  {
    code: '2352',
    descriptionFi: 'Kalkin ja kipsin valmistus',
    descriptionEn: 'Manufacture of lime and plaster',
  },
  {
    code: '23520',
    descriptionFi: 'Kalkin ja kipsin valmistus',
    descriptionEn: 'Manufacture of lime and plaster',
  },
  {
    code: '236',
    descriptionFi: 'Betoni-, kipsi- ja sementtituotteiden valmistus',
    descriptionEn: 'Manufacture of articles of concrete, cement and plaster',
  },
  {
    code: '2361',
    descriptionFi: 'Betonituotteiden valmistus rakennustarkoituksiin',
    descriptionEn: 'Manufacture of concrete products for construction purposes',
  },
  {
    code: '23610',
    descriptionFi: 'Betonituotteiden valmistus rakennustarkoituksiin',
    descriptionEn: 'Manufacture of concrete products for construction purposes',
  },
  {
    code: '2362',
    descriptionFi: 'Kipsituotteiden valmistus rakennustarkoituksiin',
    descriptionEn: 'Manufacture of plaster products for construction purposes',
  },
  {
    code: '23620',
    descriptionFi: 'Kipsituotteiden valmistus rakennustarkoituksiin',
    descriptionEn: 'Manufacture of plaster products for construction purposes',
  },
  {
    code: '2363',
    descriptionFi: 'Valmisbetonin valmistus',
    descriptionEn: 'Manufacture of ready-mixed concrete',
  },
  {
    code: '23630',
    descriptionFi: 'Valmisbetonin valmistus',
    descriptionEn: 'Manufacture of ready-mixed concrete',
  },
  {
    code: '2364',
    descriptionFi: 'Muurauslaastin valmistus',
    descriptionEn: 'Manufacture of mortars',
  },
  {
    code: '23640',
    descriptionFi: 'Muurauslaastin valmistus',
    descriptionEn: 'Manufacture of mortars',
  },
  {
    code: '2365',
    descriptionFi: 'Kuitusementin valmistus',
    descriptionEn: 'Manufacture of fibre cement',
  },
  {
    code: '23650',
    descriptionFi: 'Kuitusementin valmistus',
    descriptionEn: 'Manufacture of fibre cement',
  },
  {
    code: '2369',
    descriptionFi: 'Muiden betoni-, kipsi- ja sementtituotteiden valmistus',
    descriptionEn:
      'Manufacture of other articles of concrete, plaster and cement',
  },
  {
    code: '23690',
    descriptionFi: 'Muiden betoni-, kipsi- ja sementtituotteiden valmistus',
    descriptionEn:
      'Manufacture of other articles of concrete, plaster and cement',
  },
  {
    code: '237',
    descriptionFi: 'Kiven leikkaaminen, muotoilu ja viimeistely',
    descriptionEn: 'Cutting, shaping and finishing of stone',
  },
  {
    code: '2370',
    descriptionFi: 'Kiven leikkaaminen, muotoilu ja viimeistely',
    descriptionEn: 'Cutting, shaping and finishing of stone',
  },
  {
    code: '23700',
    descriptionFi: 'Kiven leikkaaminen, muotoilu ja viimeistely',
    descriptionEn: 'Cutting, shaping and finishing of stone',
  },
  {
    code: '239',
    descriptionFi:
      'Hiontatuotteiden ja muualla luokittelemattomien ei-metallisten mineraalituotteiden valmistus',
    descriptionEn:
      'Manufacture of abrasive products and other non-metallic mineral products n.e.c.',
  },
  {
    code: '2391',
    descriptionFi: 'Hiontatuotteiden valmistus',
    descriptionEn: 'Manufacture of abrasive products',
  },
  {
    code: '23910',
    descriptionFi: 'Hiontatuotteiden valmistus',
    descriptionEn: 'Manufacture of abrasive products',
  },
  {
    code: '2399',
    descriptionFi:
      'Muualla luokittelemattomien ei-metallisten mineraalituotteiden valmistus',
    descriptionEn: 'Manufacture of other non-metallic mineral products n.e.c.',
  },
  {
    code: '23990',
    descriptionFi:
      'Muualla luokittelemattomien ei-metallisten mineraalituotteiden valmistus',
    descriptionEn: 'Manufacture of other non-metallic mineral products n.e.c.',
  },
  {
    code: '24',
    descriptionFi: 'Metallien jalostus',
    descriptionEn: 'Manufacture of basic metals',
  },
  {
    code: '241',
    descriptionFi: 'Raudan, teräksen ja rautaseosten valmistus',
    descriptionEn: 'Manufacture of basic iron, steel and ferro-alloys',
  },
  {
    code: '2410',
    descriptionFi: 'Raudan, teräksen ja rautaseosten valmistus',
    descriptionEn: 'Manufacture of basic iron, steel and ferro-alloys',
  },
  {
    code: '24100',
    descriptionFi: 'Raudan, teräksen ja rautaseosten valmistus',
    descriptionEn: 'Manufacture of basic iron, steel and ferro-alloys',
  },
  {
    code: '242',
    descriptionFi:
      'Putkien, profiiliputkien ja niihin liittyvien tarvikkeiden valmistus teräksestä',
    descriptionEn:
      'Manufacture of steel tubes, pipes, hollow profiles and related fittings',
  },
  {
    code: '2420',
    descriptionFi:
      'Putkien, profiiliputkien ja niihin liittyvien tarvikkeiden valmistus teräksestä',
    descriptionEn:
      'Manufacture of steel tubes, pipes, hollow profiles and related fittings',
  },
  {
    code: '24200',
    descriptionFi:
      'Putkien, profiiliputkien ja niihin liittyvien tarvikkeiden valmistus teräksestä',
    descriptionEn:
      'Manufacture of steel tubes, pipes, hollow profiles and related fittings',
  },
  {
    code: '243',
    descriptionFi: 'Muu teräksen jalostus',
    descriptionEn: 'Other processing of steel',
  },
  {
    code: '2431',
    descriptionFi: 'Raudan ja teräksen kylmävetäminen',
    descriptionEn: 'Cold drawing of bars',
  },
  {
    code: '24310',
    descriptionFi: 'Raudan ja teräksen kylmävetäminen',
    descriptionEn: 'Cold drawing of bars',
  },
  {
    code: '2432',
    descriptionFi: 'Rainan kylmävalssaus',
    descriptionEn: 'Cold rolling of narrow strip',
  },
  {
    code: '24320',
    descriptionFi: 'Rainan kylmävalssaus',
    descriptionEn: 'Cold rolling of narrow strip',
  },
  {
    code: '2433',
    descriptionFi: 'Kylmämuovaus tai kylmätaitto',
    descriptionEn: 'Cold forming or folding',
  },
  {
    code: '24330',
    descriptionFi: 'Kylmämuovaus tai kylmätaitto',
    descriptionEn: 'Cold forming or folding',
  },
  {
    code: '2434',
    descriptionFi: 'Teräslangan veto',
    descriptionEn: 'Wire drawing',
  },
  {
    code: '24340',
    descriptionFi: 'Teräslangan veto',
    descriptionEn: 'Wire drawing',
  },
  {
    code: '244',
    descriptionFi: 'Jalometallien ja muiden värimetallien valmistus',
    descriptionEn: 'Manufacture of basic precious and other non-ferrous metals',
  },
  {
    code: '2441',
    descriptionFi: 'Jalometallien valmistus',
    descriptionEn: 'Manufacture of precious metals',
  },
  {
    code: '24410',
    descriptionFi: 'Jalometallien valmistus',
    descriptionEn: 'Manufacture of precious metals',
  },
  {
    code: '2442',
    descriptionFi: 'Alumiinin valmistus',
    descriptionEn: 'Aluminium production',
  },
  {
    code: '24420',
    descriptionFi: 'Alumiinin valmistus',
    descriptionEn: 'Aluminium production',
  },
  {
    code: '2443',
    descriptionFi: 'Lyijyn, sinkin ja tinan valmistus',
    descriptionEn: 'Lead, zinc and tin production',
  },
  {
    code: '24430',
    descriptionFi: 'Lyijyn, sinkin ja tinan valmistus',
    descriptionEn: 'Lead, zinc and tin production',
  },
  {
    code: '2444',
    descriptionFi: 'Kuparin valmistus',
    descriptionEn: 'Copper production',
  },
  {
    code: '24440',
    descriptionFi: 'Kuparin valmistus',
    descriptionEn: 'Copper production',
  },
  {
    code: '2445',
    descriptionFi: 'Muiden värimetallien valmistus',
    descriptionEn: 'Other non-ferrous metal production',
  },
  {
    code: '24450',
    descriptionFi: 'Muiden värimetallien valmistus',
    descriptionEn: 'Other non-ferrous metal production',
  },
  {
    code: '2446',
    descriptionFi: 'Ydinpolttoaineen valmistus',
    descriptionEn: 'Processing of nuclear fuel',
  },
  {
    code: '24460',
    descriptionFi: 'Ydinpolttoaineen valmistus',
    descriptionEn: 'Processing of nuclear fuel',
  },
  {
    code: '245',
    descriptionFi: 'Metallien valu',
    descriptionEn: 'Casting of metals',
  },
  {
    code: '2451',
    descriptionFi: 'Raudan valu',
    descriptionEn: 'Casting of iron',
  },
  {
    code: '24510',
    descriptionFi: 'Raudan valu',
    descriptionEn: 'Casting of iron',
  },
  {
    code: '2452',
    descriptionFi: 'Teräksen valu',
    descriptionEn: 'Casting of steel',
  },
  {
    code: '24520',
    descriptionFi: 'Teräksen valu',
    descriptionEn: 'Casting of steel',
  },
  {
    code: '2453',
    descriptionFi: 'Kevytmetallien valu',
    descriptionEn: 'Casting of light metals',
  },
  {
    code: '24530',
    descriptionFi: 'Kevytmetallien valu',
    descriptionEn: 'Casting of light metals',
  },
  {
    code: '2454',
    descriptionFi: 'Muiden värimetallien valu',
    descriptionEn: 'Casting of other non-ferrous metals',
  },
  {
    code: '24540',
    descriptionFi: 'Muiden värimetallien valu',
    descriptionEn: 'Casting of other non-ferrous metals',
  },
  {
    code: '25',
    descriptionFi: 'Metallituotteiden valmistus (pl. koneet ja laitteet)',
    descriptionEn:
      'Manufacture of fabricated metal products, except machinery and equipment',
  },
  {
    code: '251',
    descriptionFi: 'Metallirakenteiden valmistus',
    descriptionEn: 'Manufacture of structural metal products',
  },
  {
    code: '2511',
    descriptionFi: 'Metallirakenteiden ja niiden osien valmistus',
    descriptionEn: 'Manufacture of metal structures and parts of structures',
  },
  {
    code: '25110',
    descriptionFi: 'Metallirakenteiden ja niiden osien valmistus',
    descriptionEn: 'Manufacture of metal structures and parts of structures',
  },
  {
    code: '2512',
    descriptionFi: 'Metalliovien ja -ikkunoiden valmistus',
    descriptionEn: 'Manufacture of doors and windows of metal',
  },
  {
    code: '25120',
    descriptionFi: 'Metalliovien ja -ikkunoiden valmistus',
    descriptionEn: 'Manufacture of doors and windows of metal',
  },
  {
    code: '252',
    descriptionFi: 'Metallisäiliöiden ja -altaiden yms. valmistus',
    descriptionEn: 'Manufacture of tanks, reservoirs and containers of metal',
  },
  {
    code: '2521',
    descriptionFi: 'Keskuslämmityspatterien ja kuumavesivaraajien valmistus',
    descriptionEn: 'Manufacture of central heating radiators and boilers',
  },
  {
    code: '25210',
    descriptionFi: 'Keskuslämmityspatterien ja kuumavesivaraajien valmistus',
    descriptionEn: 'Manufacture of central heating radiators and boilers',
  },
  {
    code: '2529',
    descriptionFi: 'Muiden metallisäiliöiden ja -altaiden yms. valmistus',
    descriptionEn:
      'Manufacture of other tanks, reservoirs and containers of metal',
  },
  {
    code: '25290',
    descriptionFi: 'Muiden metallisäiliöiden ja -altaiden yms. valmistus',
    descriptionEn:
      'Manufacture of other tanks, reservoirs and containers of metal',
  },
  {
    code: '253',
    descriptionFi: 'Höyrykattiloiden valmistus (pl. keskuslämmityslaitteet)',
    descriptionEn:
      'Manufacture of steam generators, except central heating hot water boilers',
  },
  {
    code: '2530',
    descriptionFi: 'Höyrykattiloiden valmistus (pl. keskuslämmityslaitteet)',
    descriptionEn:
      'Manufacture of steam generators, except central heating hot water boilers',
  },
  {
    code: '25300',
    descriptionFi: 'Höyrykattiloiden valmistus (pl. keskuslämmityslaitteet)',
    descriptionEn:
      'Manufacture of steam generators, except central heating hot water boilers',
  },
  {
    code: '254',
    descriptionFi: 'Aseiden ja ammusten valmistus',
    descriptionEn: 'Manufacture of weapons and ammunition',
  },
  {
    code: '2540',
    descriptionFi: 'Aseiden ja ammusten valmistus',
    descriptionEn: 'Manufacture of weapons and ammunition',
  },
  {
    code: '25400',
    descriptionFi: 'Aseiden ja ammusten valmistus',
    descriptionEn: 'Manufacture of weapons and ammunition',
  },
  {
    code: '255',
    descriptionFi:
      'Metallin takominen, puristaminen, meistäminen ja valssaus; jauhemetallurgia',
    descriptionEn:
      'Forging, pressing, stamping and roll-forming of metal; powder metallurgy',
  },
  {
    code: '2550',
    descriptionFi:
      'Metallin takominen, puristaminen, meistäminen ja valssaus; jauhemetallurgia',
    descriptionEn:
      'Forging, pressing, stamping and roll-forming of metal; powder metallurgy',
  },
  {
    code: '25500',
    descriptionFi:
      'Metallin takominen, puristaminen, meistäminen ja valssaus; jauhemetallurgia',
    descriptionEn:
      'Forging, pressing, stamping and roll-forming of metal; powder metallurgy',
  },
  {
    code: '256',
    descriptionFi: 'Metallien käsittely, päällystäminen ja työstö',
    descriptionEn: 'Treatment and coating of metals; machining',
  },
  {
    code: '2561',
    descriptionFi: 'Metallien käsittely ja päällystäminen',
    descriptionEn: 'Treatment and coating of metals',
  },
  {
    code: '25610',
    descriptionFi: 'Metallien käsittely ja päällystäminen',
    descriptionEn: 'Treatment and coating of metals',
  },
  {code: '2562', descriptionFi: 'Metallien työstö', descriptionEn: 'Machining'},
  {
    code: '25620',
    descriptionFi: 'Metallien työstö',
    descriptionEn: 'Machining',
  },
  {
    code: '257',
    descriptionFi:
      'Ruokailu- ja leikkuuvälineiden yms. sekä työkalujen ja rautatavaran valmistus',
    descriptionEn: 'Manufacture of cutlery, tools and general hardware',
  },
  {
    code: '2571',
    descriptionFi: 'Ruokailu- ja leikkuuvälineiden yms. valmistus',
    descriptionEn: 'Manufacture of cutlery',
  },
  {
    code: '25710',
    descriptionFi: 'Ruokailu- ja leikkuuvälineiden yms. valmistus',
    descriptionEn: 'Manufacture of cutlery',
  },
  {
    code: '2572',
    descriptionFi: 'Lukkojen ja saranoiden valmistus',
    descriptionEn: 'Manufacture of locks and hinges',
  },
  {
    code: '25720',
    descriptionFi: 'Lukkojen ja saranoiden valmistus',
    descriptionEn: 'Manufacture of locks and hinges',
  },
  {
    code: '2573',
    descriptionFi: 'Työkalujen valmistus',
    descriptionEn: 'Manufacture of tools',
  },
  {
    code: '25730',
    descriptionFi: 'Työkalujen valmistus',
    descriptionEn: 'Manufacture of tools',
  },
  {
    code: '259',
    descriptionFi: 'Muu metallituotteiden valmistus',
    descriptionEn: 'Manufacture of other fabricated metal products',
  },
  {
    code: '2591',
    descriptionFi: 'Metallipakkausten ja -astioiden valmistus',
    descriptionEn: 'Manufacture of metal tanks and drums',
  },
  {
    code: '25910',
    descriptionFi: 'Metallipakkausten ja -astioiden valmistus',
    descriptionEn: 'Manufacture of metal tanks and drums',
  },
  {
    code: '2592',
    descriptionFi: 'Kevytmetallipakkausten valmistus',
    descriptionEn: 'Manufacture of lightweight metal packages',
  },
  {
    code: '25920',
    descriptionFi: 'Kevytmetallipakkausten valmistus',
    descriptionEn: 'Manufacture of lightweight metal packages',
  },
  {
    code: '2593',
    descriptionFi: 'Metallilankatuotteiden, ketjujen ja jousien valmistus',
    descriptionEn: 'Manufacture of wire products, chains and springs',
  },
  {
    code: '25930',
    descriptionFi: 'Metallilankatuotteiden, ketjujen ja jousien valmistus',
    descriptionEn: 'Manufacture of wire products, chains and springs',
  },
  {
    code: '2594',
    descriptionFi: 'Kiinnittimien ja ruuvituotteiden valmistus',
    descriptionEn: 'Manufacture of fasteners and screws',
  },
  {
    code: '25940',
    descriptionFi: 'Kiinnittimien ja ruuvituotteiden valmistus',
    descriptionEn: 'Manufacture of fasteners and screws',
  },
  {
    code: '2599',
    descriptionFi: 'Muiden metallituotteiden valmistus',
    descriptionEn: 'Manufacture of other fabricated metal products n.e.c.',
  },
  {
    code: '25990',
    descriptionFi: 'Muiden metallituotteiden valmistus',
    descriptionEn: 'Manufacture of other fabricated metal products n.e.c.',
  },
  {
    code: '26',
    descriptionFi:
      'Tietokoneiden sekä elektronisten ja optisten tuotteiden valmistus',
    descriptionEn:
      'Manufacture of computers and electronic and optical products',
  },
  {
    code: '261',
    descriptionFi: 'Elektronisten komponenttien ja piirilevyjen valmistus',
    descriptionEn: 'Manufacture of electronic components and boards',
  },
  {
    code: '2611',
    descriptionFi: 'Elektronisten komponenttien valmistus',
    descriptionEn: 'Manufacture of electronic components',
  },
  {
    code: '26110',
    descriptionFi: 'Elektronisten komponenttien valmistus',
    descriptionEn: 'Manufacture of electronic components',
  },
  {
    code: '2612',
    descriptionFi: 'Kalustettujen piirilevyjen valmistus',
    descriptionEn: 'Manufacture of loaded printed circuit boards',
  },
  {
    code: '26120',
    descriptionFi: 'Kalustettujen piirilevyjen valmistus',
    descriptionEn: 'Manufacture of loaded printed circuit boards',
  },
  {
    code: '262',
    descriptionFi: 'Tietokoneiden ja niiden oheislaitteiden valmistus',
    descriptionEn: 'Manufacture of computers and peripheral equipment',
  },
  {
    code: '2620',
    descriptionFi: 'Tietokoneiden ja niiden oheislaitteiden valmistus',
    descriptionEn: 'Manufacture of computers and peripheral equipment',
  },
  {
    code: '26200',
    descriptionFi: 'Tietokoneiden ja niiden oheislaitteiden valmistus',
    descriptionEn: 'Manufacture of computers and peripheral equipment',
  },
  {
    code: '263',
    descriptionFi: 'Viestintälaitteiden valmistus',
    descriptionEn: 'Manufacture of communication equipment',
  },
  {
    code: '2630',
    descriptionFi: 'Viestintälaitteiden valmistus',
    descriptionEn: 'Manufacture of communication equipment',
  },
  {
    code: '26300',
    descriptionFi: 'Viestintälaitteiden valmistus',
    descriptionEn: 'Manufacture of communication equipment',
  },
  {
    code: '264',
    descriptionFi: 'Viihde-elektroniikan valmistus',
    descriptionEn: 'Manufacture of consumer electronics',
  },
  {
    code: '2640',
    descriptionFi: 'Viihde-elektroniikan valmistus',
    descriptionEn: 'Manufacture of consumer electronics',
  },
  {
    code: '26400',
    descriptionFi: 'Viihde-elektroniikan valmistus',
    descriptionEn: 'Manufacture of consumer electronics',
  },
  {
    code: '265',
    descriptionFi:
      'Mittaus-, testaus- ja navigointivälineiden ja -laitteiden valmistus; kellot',
    descriptionEn:
      'Manufacture of instruments and appliances for measuring, testing, and navigation; watches and clocks',
  },
  {
    code: '2651',
    descriptionFi:
      'Mittaus-, testaus- ja navigointivälineiden ja -laitteiden valmistus',
    descriptionEn:
      'Manufacture of instruments and appliances for measuring, testing, and navigation',
  },
  {
    code: '26510',
    descriptionFi:
      'Mittaus-, testaus- ja navigointivälineiden ja -laitteiden valmistus',
    descriptionEn:
      'Manufacture of instruments and appliances for measuring, testing, and navigation',
  },
  {
    code: '2652',
    descriptionFi: 'Kellojen valmistus',
    descriptionEn: 'Manufacture of watches and clocks',
  },
  {
    code: '26520',
    descriptionFi: 'Kellojen valmistus',
    descriptionEn: 'Manufacture of watches and clocks',
  },
  {
    code: '266',
    descriptionFi:
      'Säteilylaitteiden sekä elektronisten lääkintä- ja terapialaitteiden valmistus',
    descriptionEn:
      'Manufacture of irradiation, electromedical and electrotherapeutic equipment',
  },
  {
    code: '2660',
    descriptionFi:
      'Säteilylaitteiden sekä elektronisten lääkintä- ja terapialaitteiden valmistus',
    descriptionEn:
      'Manufacture of irradiation, electromedical and electrotherapeutic equipment',
  },
  {
    code: '26600',
    descriptionFi:
      'Säteilylaitteiden sekä elektronisten lääkintä- ja terapialaitteiden valmistus',
    descriptionEn:
      'Manufacture of irradiation, electromedical and electrotherapeutic equipment',
  },
  {
    code: '267',
    descriptionFi: 'Optisten instrumenttien ja valokuvausvälineiden valmistus',
    descriptionEn:
      'Manufacture of optical instruments and photographic equipment',
  },
  {
    code: '2670',
    descriptionFi: 'Optisten instrumenttien ja valokuvausvälineiden valmistus',
    descriptionEn:
      'Manufacture of optical instruments and photographic equipment',
  },
  {
    code: '26700',
    descriptionFi: 'Optisten instrumenttien ja valokuvausvälineiden valmistus',
    descriptionEn:
      'Manufacture of optical instruments and photographic equipment',
  },
  {
    code: '268',
    descriptionFi: 'Tallennevälineiden valmistus',
    descriptionEn: 'Manufacture of magnetic and optical media',
  },
  {
    code: '2680',
    descriptionFi: 'Tallennevälineiden valmistus',
    descriptionEn: 'Manufacture of magnetic and optical media',
  },
  {
    code: '26800',
    descriptionFi: 'Tallennevälineiden valmistus',
    descriptionEn: 'Manufacture of magnetic and optical media',
  },
  {
    code: '27',
    descriptionFi: 'Sähkölaitteiden valmistus',
    descriptionEn: 'Manufacture of electrical equipment',
  },
  {
    code: '271',
    descriptionFi:
      'Sähkömoottorien, generaattorien, muuntajien sekä sähkönjakelu- ja valvontalaitteiden valmistus',
    descriptionEn:
      'Manufacture of electric motors, generators, transformers, and electricity distribution and control apparatus',
  },
  {
    code: '2711',
    descriptionFi: 'Sähkömoottorien, generaattorien ja muuntajien valmistus',
    descriptionEn:
      'Manufacture of electric motors, generators, and transformers',
  },
  {
    code: '27110',
    descriptionFi: 'Sähkömoottorien, generaattorien ja muuntajien valmistus',
    descriptionEn:
      'Manufacture of electric motors, generators, and transformers',
  },
  {
    code: '2712',
    descriptionFi: 'Sähkönjakelu- ja valvontalaitteiden valmistus',
    descriptionEn:
      'Manufacture of electricity distribution and control apparatus',
  },
  {
    code: '27120',
    descriptionFi: 'Sähkönjakelu- ja valvontalaitteiden valmistus',
    descriptionEn:
      'Manufacture of electricity distribution and control apparatus',
  },
  {
    code: '272',
    descriptionFi: 'Paristojen ja akkujen valmistus',
    descriptionEn: 'Manufacture of batteries and accumulators',
  },
  {
    code: '2720',
    descriptionFi: 'Paristojen ja akkujen valmistus',
    descriptionEn: 'Manufacture of batteries and accumulators',
  },
  {
    code: '27200',
    descriptionFi: 'Paristojen ja akkujen valmistus',
    descriptionEn: 'Manufacture of batteries and accumulators',
  },
  {
    code: '273',
    descriptionFi: 'Sähköjohtojen ja kytkentälaitteiden valmistus',
    descriptionEn: 'Manufacture of wiring and wiring devices',
  },
  {
    code: '2731',
    descriptionFi: 'Optisten kuitukaapelien valmistus',
    descriptionEn: 'Manufacture of fibre optic cables',
  },
  {
    code: '27310',
    descriptionFi: 'Optisten kuitukaapelien valmistus',
    descriptionEn: 'Manufacture of fibre optic cables',
  },
  {
    code: '2732',
    descriptionFi:
      'Muiden elektronisten ja sähköjohtojen sekä -kaapelien valmistus',
    descriptionEn:
      'Manufacture of other electronic and electric wires and cables',
  },
  {
    code: '27320',
    descriptionFi:
      'Muiden elektronisten ja sähköjohtojen sekä -kaapelien valmistus',
    descriptionEn:
      'Manufacture of other electronic and electric wires and cables',
  },
  {
    code: '2733',
    descriptionFi: 'Kytkentälaitteiden valmistus',
    descriptionEn: 'Manufacture of wiring devices',
  },
  {
    code: '27330',
    descriptionFi: 'Kytkentälaitteiden valmistus',
    descriptionEn: 'Manufacture of wiring devices',
  },
  {
    code: '274',
    descriptionFi: 'Sähkölamppujen ja valaisimien valmistus',
    descriptionEn: 'Manufacture of electric lighting equipment',
  },
  {
    code: '2740',
    descriptionFi: 'Sähkölamppujen ja valaisimien valmistus',
    descriptionEn: 'Manufacture of electric lighting equipment',
  },
  {
    code: '27400',
    descriptionFi: 'Sähkölamppujen ja valaisimien valmistus',
    descriptionEn: 'Manufacture of electric lighting equipment',
  },
  {
    code: '275',
    descriptionFi: 'Kodinkoneiden valmistus',
    descriptionEn: 'Manufacture of domestic appliances',
  },
  {
    code: '2751',
    descriptionFi: 'Sähköisten kodinkoneiden valmistus',
    descriptionEn: 'Manufacture of electric domestic appliances',
  },
  {
    code: '27510',
    descriptionFi: 'Sähköisten kodinkoneiden valmistus',
    descriptionEn: 'Manufacture of electric domestic appliances',
  },
  {
    code: '2752',
    descriptionFi: 'Sähköistämättömien kodinkoneiden valmistus',
    descriptionEn: 'Manufacture of non-electric domestic appliances',
  },
  {
    code: '27520',
    descriptionFi: 'Sähköistämättömien kodinkoneiden valmistus',
    descriptionEn: 'Manufacture of non-electric domestic appliances',
  },
  {
    code: '279',
    descriptionFi: 'Muiden sähkölaitteiden valmistus',
    descriptionEn: 'Manufacture of other electrical equipment',
  },
  {
    code: '2790',
    descriptionFi: 'Muiden sähkölaitteiden valmistus',
    descriptionEn: 'Manufacture of other electrical equipment',
  },
  {
    code: '27900',
    descriptionFi: 'Muiden sähkölaitteiden valmistus',
    descriptionEn: 'Manufacture of other electrical equipment',
  },
  {
    code: '28',
    descriptionFi: 'Muiden koneiden ja laitteiden valmistus',
    descriptionEn: 'Manufacture of machinery and equipment n.e.c.',
  },
  {
    code: '281',
    descriptionFi: 'Yleiskäyttöön tarkoitettujen voimakoneiden valmistus',
    descriptionEn: 'Manufacture of general-purpose machinery',
  },
  {
    code: '2811',
    descriptionFi:
      'Moottorien ja turbiinien valmistus (pl. lentokoneiden ja ajoneuvojen moottorit)',
    descriptionEn:
      'Manufacture of engines and turbines, except aircraft, vehicle, and cycle engines',
  },
  {
    code: '28110',
    descriptionFi:
      'Moottorien ja turbiinien valmistus (pl. lentokoneiden ja ajoneuvojen moottorit)',
    descriptionEn:
      'Manufacture of engines and turbines, except aircraft, vehicle, and cycle engines',
  },
  {
    code: '2812',
    descriptionFi: 'Hydraulisten voimalaitteiden valmistus',
    descriptionEn: 'Manufacture of fluid power equipment',
  },
  {
    code: '28120',
    descriptionFi: 'Hydraulisten voimalaitteiden valmistus',
    descriptionEn: 'Manufacture of fluid power equipment',
  },
  {
    code: '2813',
    descriptionFi: 'Pumppujen ja kompressoreiden valmistus',
    descriptionEn: 'Manufacture of pumps and compressors',
  },
  {
    code: '28130',
    descriptionFi: 'Pumppujen ja kompressoreiden valmistus',
    descriptionEn: 'Manufacture of pumps and compressors',
  },
  {
    code: '2814',
    descriptionFi: 'Muiden hanojen ja venttiilien valmistus',
    descriptionEn: 'Manufacture of other taps and valves',
  },
  {
    code: '28140',
    descriptionFi: 'Muiden hanojen ja venttiilien valmistus',
    descriptionEn: 'Manufacture of other taps and valves',
  },
  {
    code: '2815',
    descriptionFi:
      'Laakereiden, hammaspyörien, vaihteisto- ja ohjauselementtien valmistus',
    descriptionEn:
      'Manufacture of bearings, gears, gearing, and driving elements',
  },
  {
    code: '28150',
    descriptionFi:
      'Laakereiden, hammaspyörien, vaihteisto- ja ohjauselementtien valmistus',
    descriptionEn:
      'Manufacture of bearings, gears, gearing, and driving elements',
  },
  {
    code: '282',
    descriptionFi: 'Muiden yleiskäyttöön tarkoitettujen koneiden valmistus',
    descriptionEn: 'Manufacture of other general-purpose machinery',
  },
  {
    code: '2821',
    descriptionFi:
      'Teollisuusuunien, lämmitysjärjestelmien ja tulipesäpolttimien valmistus',
    descriptionEn: 'Manufacture of industrial furnaces and burners',
  },
  {
    code: '28210',
    descriptionFi:
      'Teollisuusuunien, lämmitysjärjestelmien ja tulipesäpolttimien valmistus',
    descriptionEn: 'Manufacture of industrial furnaces and burners',
  },
  {
    code: '2822',
    descriptionFi: 'Nosto- ja siirtolaitteiden valmistus',
    descriptionEn: 'Manufacture of lifting and handling equipment',
  },
  {
    code: '28220',
    descriptionFi: 'Nosto- ja siirtolaitteiden valmistus',
    descriptionEn: 'Manufacture of lifting and handling equipment',
  },
  {
    code: '2823',
    descriptionFi:
      'Konttorikoneiden ja -laitteiden valmistus (pl. tietokoneet ja niiden oheislaitteet)',
    descriptionEn:
      'Manufacture of office machinery and equipment (except computers and peripheral equipment)',
  },
  {
    code: '28230',
    descriptionFi:
      'Konttorikoneiden ja -laitteiden valmistus (pl. tietokoneet ja niiden oheislaitteet)',
    descriptionEn:
      'Manufacture of office machinery and equipment (except computers and peripheral equipment)',
  },
  {
    code: '2824',
    descriptionFi: 'Voimakäyttöisten käsityökalujen valmistus',
    descriptionEn: 'Manufacture of power-driven hand tools',
  },
  {
    code: '28240',
    descriptionFi: 'Voimakäyttöisten käsityökalujen valmistus',
    descriptionEn: 'Manufacture of power-driven hand tools',
  },
  {
    code: '2825',
    descriptionFi:
      'Muuhun kuin kotitalouskäyttöön tarkoitettujen jäähdytys- ja tuuletuslaitteiden valmistus',
    descriptionEn:
      'Manufacture of non-domestic cooling and ventilation equipment',
  },
  {
    code: '28250',
    descriptionFi:
      'Muuhun kuin kotitalouskäyttöön tarkoitettujen jäähdytys- ja tuuletuslaitteiden valmistus',
    descriptionEn:
      'Manufacture of non-domestic cooling and ventilation equipment',
  },
  {
    code: '2829',
    descriptionFi:
      'Muualla luokittelematon yleiskäyttöön tarkoitettujen koneiden valmistus',
    descriptionEn: 'Manufacture of other general-purpose machinery n.e.c.',
  },
  {
    code: '28290',
    descriptionFi:
      'Muualla luokittelematon yleiskäyttöön tarkoitettujen koneiden valmistus',
    descriptionEn: 'Manufacture of other general-purpose machinery n.e.c.',
  },
  {
    code: '283',
    descriptionFi: 'Maa- ja metsätalouskoneiden valmistus',
    descriptionEn: 'Manufacture of agricultural and forestry machinery',
  },
  {
    code: '2830',
    descriptionFi: 'Maa- ja metsätalouskoneiden valmistus',
    descriptionEn: 'Manufacture of agricultural and forestry machinery',
  },
  {
    code: '28300',
    descriptionFi: 'Maa- ja metsätalouskoneiden valmistus',
    descriptionEn: 'Manufacture of agricultural and forestry machinery',
  },
  {
    code: '284',
    descriptionFi: 'Metallin työstökoneiden ja konetyökalujen valmistus',
    descriptionEn: 'Manufacture of metal-forming machinery and machine tools',
  },
  {
    code: '2841',
    descriptionFi: 'Metallin työstökoneiden valmistus',
    descriptionEn: 'Manufacture of metal-working machinery',
  },
  {
    code: '28410',
    descriptionFi: 'Metallin työstökoneiden valmistus',
    descriptionEn: 'Manufacture of metal-working machinery',
  },
  {
    code: '2849',
    descriptionFi: 'Muiden konetyökalujen valmistus',
    descriptionEn: 'Manufacture of other machine tools',
  },
  {
    code: '28490',
    descriptionFi: 'Muiden konetyökalujen valmistus',
    descriptionEn: 'Manufacture of other machine tools',
  },
  {
    code: '289',
    descriptionFi: 'Muiden erikoiskoneiden valmistus',
    descriptionEn: 'Manufacture of other special-purpose machinery',
  },
  {
    code: '2891',
    descriptionFi: 'Metallinjalostuskoneiden valmistus',
    descriptionEn: 'Manufacture of machinery for metallurgy',
  },
  {
    code: '28910',
    descriptionFi: 'Metallinjalostuskoneiden valmistus',
    descriptionEn: 'Manufacture of machinery for metallurgy',
  },
  {
    code: '2892',
    descriptionFi: 'Kaivos-, louhinta- ja rakennuskoneiden valmistus',
    descriptionEn:
      'Manufacture of mining, quarrying and construction machinery',
  },
  {
    code: '28920',
    descriptionFi: 'Kaivos-, louhinta- ja rakennuskoneiden valmistus',
    descriptionEn:
      'Manufacture of mining, quarrying and construction machinery',
  },
  {
    code: '2893',
    descriptionFi:
      'Elintarvike-, juoma- ja tupakkateollisuuden koneiden valmistus',
    descriptionEn:
      'Manufacture of machinery for food, beverage, and tobacco processing',
  },
  {
    code: '28930',
    descriptionFi:
      'Elintarvike-, juoma- ja tupakkateollisuuden koneiden valmistus',
    descriptionEn:
      'Manufacture of machinery for food, beverage, and tobacco processing',
  },
  {
    code: '2894',
    descriptionFi: 'Tekstiili-, vaate- ja nahkateollisuuden koneiden valmistus',
    descriptionEn:
      'Manufacture of machinery for textile, apparel, and leather production',
  },
  {
    code: '28940',
    descriptionFi: 'Tekstiili-, vaate- ja nahkateollisuuden koneiden valmistus',
    descriptionEn:
      'Manufacture of machinery for textile, apparel, and leather production',
  },
  {
    code: '2895',
    descriptionFi: 'Paperi-, kartonki- ja pahviteollisuuden koneiden valmistus',
    descriptionEn:
      'Manufacture of machinery for paper and paperboard production',
  },
  {
    code: '28950',
    descriptionFi: 'Paperi-, kartonki- ja pahviteollisuuden koneiden valmistus',
    descriptionEn:
      'Manufacture of machinery for paper and paperboard production',
  },
  {
    code: '2896',
    descriptionFi: 'Muovi- ja kumiteollisuuden koneiden valmistus',
    descriptionEn:
      'Manufacture of machinery for plastics and rubber production',
  },
  {
    code: '28960',
    descriptionFi: 'Muovi- ja kumiteollisuuden koneiden valmistus',
    descriptionEn:
      'Manufacture of machinery for plastics and rubber production',
  },
  {
    code: '2899',
    descriptionFi: 'Muualla luokittelematon erikoiskoneiden valmistus',
    descriptionEn: 'Manufacture of other special-purpose machinery n.e.c.',
  },
  {
    code: '28990',
    descriptionFi: 'Muualla luokittelematon erikoiskoneiden valmistus',
    descriptionEn: 'Manufacture of other special-purpose machinery n.e.c.',
  },
  {
    code: '29',
    descriptionFi:
      'Moottoriajoneuvojen, perävaunujen ja puoliperävaunujen valmistus',
    descriptionEn: 'Manufacture of motor vehicles, trailers, and semi-trailers',
  },
  {
    code: '291',
    descriptionFi: 'Moottoriajoneuvojen valmistus',
    descriptionEn: 'Manufacture of motor vehicles',
  },
  {
    code: '2910',
    descriptionFi: 'Moottoriajoneuvojen valmistus',
    descriptionEn: 'Manufacture of motor vehicles',
  },
  {
    code: '29100',
    descriptionFi: 'Moottoriajoneuvojen valmistus',
    descriptionEn: 'Manufacture of motor vehicles',
  },
  {
    code: '292',
    descriptionFi:
      'Moottoriajoneuvojen korien valmistus; perävaunujen ja puoliperävaunujen valmistus',
    descriptionEn:
      'Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers',
  },
  {
    code: '2920',
    descriptionFi:
      'Moottoriajoneuvojen korien valmistus; perävaunujen ja puoliperävaunujen valmistus',
    descriptionEn:
      'Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers',
  },
  {
    code: '29200',
    descriptionFi:
      'Moottoriajoneuvojen korien valmistus; perävaunujen ja puoliperävaunujen valmistus',
    descriptionEn:
      'Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers',
  },
  {
    code: '293',
    descriptionFi: 'Osien ja tarvikkeiden valmistus moottoriajoneuvoihin',
    descriptionEn: 'Manufacture of parts and accessories for motor vehicles',
  },
  {
    code: '2931',
    descriptionFi:
      'Sähkö- ja elektroniikkalaitteiden valmistus moottoriajoneuvoihin',
    descriptionEn:
      'Manufacture of electrical and electronic equipment for motor vehicles',
  },
  {
    code: '29310',
    descriptionFi:
      'Sähkö- ja elektroniikkalaitteiden valmistus moottoriajoneuvoihin',
    descriptionEn:
      'Manufacture of electrical and electronic equipment for motor vehicles',
  },
  {
    code: '2932',
    descriptionFi:
      'Muiden osien ja tarvikkeiden valmistus moottoriajoneuvoihin',
    descriptionEn:
      'Manufacture of other parts and accessories for motor vehicles',
  },
  {
    code: '29320',
    descriptionFi:
      'Muiden osien ja tarvikkeiden valmistus moottoriajoneuvoihin',
    descriptionEn:
      'Manufacture of other parts and accessories for motor vehicles',
  },
  {
    code: '30',
    descriptionFi: 'Muiden kulkuneuvojen valmistus',
    descriptionEn: 'Manufacture of other transport equipment',
  },
  {
    code: '301',
    descriptionFi: 'Laivojen ja veneiden rakentaminen',
    descriptionEn: 'Building of ships and boats',
  },
  {
    code: '3011',
    descriptionFi: 'Laivojen ja kelluvien rakenteiden rakentaminen',
    descriptionEn: 'Building of ships and floating structures',
  },
  {
    code: '30110',
    descriptionFi: 'Laivojen ja kelluvien rakenteiden rakentaminen',
    descriptionEn: 'Building of ships and floating structures',
  },
  {
    code: '3012',
    descriptionFi: 'Huvi- ja urheiluveneiden rakentaminen',
    descriptionEn: 'Building of pleasure and sporting boats',
  },
  {
    code: '30120',
    descriptionFi: 'Huvi- ja urheiluveneiden rakentaminen',
    descriptionEn: 'Building of pleasure and sporting boats',
  },
  {
    code: '302',
    descriptionFi: 'Raideliikenteen kulkuneuvojen valmistus',
    descriptionEn: 'Manufacture of railway locomotives and rolling stock',
  },
  {
    code: '3020',
    descriptionFi: 'Raideliikenteen kulkuneuvojen valmistus',
    descriptionEn: 'Manufacture of railway locomotives and rolling stock',
  },
  {
    code: '30200',
    descriptionFi: 'Raideliikenteen kulkuneuvojen valmistus',
    descriptionEn: 'Manufacture of railway locomotives and rolling stock',
  },
  {
    code: '303',
    descriptionFi:
      'Ilma- ja avaruusalusten ja niihin liittyvien koneiden valmistus',
    descriptionEn: 'Manufacture of air and spacecraft and related machinery',
  },
  {
    code: '3030',
    descriptionFi:
      'Ilma- ja avaruusalusten ja niihin liittyvien koneiden valmistus',
    descriptionEn: 'Manufacture of air and spacecraft and related machinery',
  },
  {
    code: '30300',
    descriptionFi:
      'Ilma- ja avaruusalusten ja niihin liittyvien koneiden valmistus',
    descriptionEn: 'Manufacture of air and spacecraft and related machinery',
  },
  {
    code: '304',
    descriptionFi: 'Taisteluajoneuvojen valmistus',
    descriptionEn: 'Manufacture of military fighting vehicles',
  },
  {
    code: '3040',
    descriptionFi: 'Taisteluajoneuvojen valmistus',
    descriptionEn: 'Manufacture of military fighting vehicles',
  },
  {
    code: '30400',
    descriptionFi: 'Taisteluajoneuvojen valmistus',
    descriptionEn: 'Manufacture of military fighting vehicles',
  },
  {
    code: '309',
    descriptionFi: 'Muualla luokittelematon kulkuneuvojen valmistus',
    descriptionEn: 'Manufacture of other transport equipment n.e.c.',
  },
  {
    code: '3091',
    descriptionFi: 'Moottoripyörien valmistus',
    descriptionEn: 'Manufacture of motorcycles',
  },
  {
    code: '30910',
    descriptionFi: 'Moottoripyörien valmistus',
    descriptionEn: 'Manufacture of motorcycles',
  },
  {
    code: '3092',
    descriptionFi: 'Polkupyörien ja invalidiajoneuvojen valmistus',
    descriptionEn: 'Manufacture of bicycles and invalid carriages',
  },
  {
    code: '30920',
    descriptionFi: 'Polkupyörien ja invalidiajoneuvojen valmistus',
    descriptionEn: 'Manufacture of bicycles and invalid carriages',
  },
  {
    code: '3099',
    descriptionFi: 'Muiden muualla luokittelemattomien kulkuneuvojen valmistus',
    descriptionEn: 'Manufacture of other transport equipment n.e.c.',
  },
  {
    code: '30990',
    descriptionFi: 'Muiden muualla luokittelemattomien kulkuneuvojen valmistus',
    descriptionEn: 'Manufacture of other transport equipment n.e.c.',
  },
  {
    code: '31',
    descriptionFi: 'Huonekalujen valmistus',
    descriptionEn: 'Manufacture of furniture',
  },
  {
    code: '310',
    descriptionFi: 'Huonekalujen valmistus',
    descriptionEn: 'Manufacture of furniture',
  },
  {
    code: '3101',
    descriptionFi: 'Konttori- ja myymäläkalusteiden valmistus',
    descriptionEn: 'Manufacture of office and shop furniture',
  },
  {
    code: '31010',
    descriptionFi: 'Konttori- ja myymäläkalusteiden valmistus',
    descriptionEn: 'Manufacture of office and shop furniture',
  },
  {
    code: '3102',
    descriptionFi: 'Keittiökalusteiden valmistus',
    descriptionEn: 'Manufacture of kitchen furniture',
  },
  {
    code: '31020',
    descriptionFi: 'Keittiökalusteiden valmistus',
    descriptionEn: 'Manufacture of kitchen furniture',
  },
  {
    code: '3103',
    descriptionFi: 'Patjojen valmistus',
    descriptionEn: 'Manufacture of mattresses',
  },
  {
    code: '31030',
    descriptionFi: 'Patjojen valmistus',
    descriptionEn: 'Manufacture of mattresses',
  },
  {
    code: '3109',
    descriptionFi: 'Muiden huonekalujen valmistus',
    descriptionEn: 'Manufacture of other furniture',
  },
  {
    code: '31090',
    descriptionFi: 'Muiden huonekalujen valmistus',
    descriptionEn: 'Manufacture of other furniture',
  },
  {
    code: '32',
    descriptionFi: 'Muu valmistus',
    descriptionEn: 'Other manufacturing',
  },
  {
    code: '321',
    descriptionFi:
      'Korujen, kultasepäntuotteiden ja muiden vastaavien tuotteiden valmistus',
    descriptionEn: 'Manufacture of jewellery, bijouterie, and related products',
  },
  {
    code: '3211',
    descriptionFi: 'Kolikoiden ja mitalien valmistus',
    descriptionEn: 'Manufacture of coins and medals',
  },
  {
    code: '32110',
    descriptionFi: 'Kolikoiden ja mitalien valmistus',
    descriptionEn: 'Manufacture of coins and medals',
  },
  {
    code: '3212',
    descriptionFi: 'Jalokivikorujen ja muiden kultasepäntuotteiden valmistus',
    descriptionEn: 'Manufacture of jewellery of precious metals',
  },
  {
    code: '32120',
    descriptionFi: 'Jalokivikorujen ja muiden kultasepäntuotteiden valmistus',
    descriptionEn: 'Manufacture of jewellery of precious metals',
  },
  {
    code: '3213',
    descriptionFi:
      'Jäljitelmäkorujen ja muiden vastaavien tuotteiden valmistus',
    descriptionEn: 'Manufacture of imitation jewellery and similar articles',
  },
  {
    code: '32130',
    descriptionFi:
      'Jäljitelmäkorujen ja muiden vastaavien tuotteiden valmistus',
    descriptionEn: 'Manufacture of imitation jewellery and similar articles',
  },
  {
    code: '322',
    descriptionFi: 'Soitinten valmistus',
    descriptionEn: 'Manufacture of musical instruments',
  },
  {
    code: '3220',
    descriptionFi: 'Soitinten valmistus',
    descriptionEn: 'Manufacture of musical instruments',
  },
  {
    code: '32200',
    descriptionFi: 'Soitinten valmistus',
    descriptionEn: 'Manufacture of musical instruments',
  },
  {
    code: '323',
    descriptionFi: 'Urheiluvälineiden valmistus',
    descriptionEn: 'Manufacture of sports goods',
  },
  {
    code: '3230',
    descriptionFi: 'Urheiluvälineiden valmistus',
    descriptionEn: 'Manufacture of sports goods',
  },
  {
    code: '32300',
    descriptionFi: 'Urheiluvälineiden valmistus',
    descriptionEn: 'Manufacture of sports goods',
  },
  {
    code: '324',
    descriptionFi: 'Pelien ja leikkikalujen valmistus',
    descriptionEn: 'Manufacture of games and toys',
  },
  {
    code: '3240',
    descriptionFi: 'Pelien ja leikkikalujen valmistus',
    descriptionEn: 'Manufacture of games and toys',
  },
  {
    code: '32400',
    descriptionFi: 'Pelien ja leikkikalujen valmistus',
    descriptionEn: 'Manufacture of games and toys',
  },
  {
    code: '325',
    descriptionFi:
      'Lääkintä- ja hammaslääkintäinstrumenttien ja -tarvikkeiden valmistus',
    descriptionEn: 'Manufacture of medical and dental instruments and supplies',
  },
  {
    code: '3250',
    descriptionFi:
      'Lääkintä- ja hammaslääkintäinstrumenttien ja -tarvikkeiden valmistus',
    descriptionEn: 'Manufacture of medical and dental instruments and supplies',
  },
  {
    code: '32501',
    descriptionFi:
      'Lääkintä- ja hammaslääkintäinstrumenttien ja -tarvikkeiden valmistus (pl. hammasproteesit)',
    descriptionEn:
      'Manufacture of medical and dental instruments and supplies (excluding dental prostheses)',
  },
  {
    code: '32502',
    descriptionFi: 'Hammasproteesien, keinohampaiden ym. valmistus',
    descriptionEn: 'Manufacture of dental prostheses, artificial teeth, etc.',
  },
  {
    code: '329',
    descriptionFi: 'Muualla luokittelematon valmistus',
    descriptionEn: 'Other manufacturing n.e.c.',
  },
  {
    code: '3291',
    descriptionFi: 'Luutien ja harjojen valmistus',
    descriptionEn: 'Manufacture of brooms and brushes',
  },
  {
    code: '32910',
    descriptionFi: 'Luutien ja harjojen valmistus',
    descriptionEn: 'Manufacture of brooms and brushes',
  },
  {
    code: '3299',
    descriptionFi: 'Muu muualla luokittelematon valmistus',
    descriptionEn: 'Other manufacturing n.e.c.',
  },
  {
    code: '32991',
    descriptionFi: 'Turvavarusteiden valmistus',
    descriptionEn: 'Manufacture of safety equipment',
  },
  {
    code: '32999',
    descriptionFi: 'Muu muualla luokittelemattomien tuotteiden valmistus',
    descriptionEn: 'Manufacture of other products n.e.c.',
  },
  {
    code: '33',
    descriptionFi: 'Koneiden ja laitteiden korjaus, huolto ja asennus',
    descriptionEn:
      'Repair, maintenance, and installation of machinery and equipment',
  },
  {
    code: '331',
    descriptionFi:
      'Metallituotteiden, teollisuuden koneiden ja laitteiden korjaus ja huolto',
    descriptionEn:
      'Repair and maintenance of metal products, industrial machinery, and equipment',
  },
  {
    code: '3311',
    descriptionFi: 'Metallituotteiden korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of metal products',
  },
  {
    code: '33110',
    descriptionFi: 'Metallituotteiden korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of metal products',
  },
  {
    code: '3312',
    descriptionFi: 'Teollisuuden koneiden ja laitteiden korjaus ja huolto',
    descriptionEn:
      'Repair and maintenance of industrial machinery and equipment',
  },
  {
    code: '33121',
    descriptionFi: 'Yleiskäyttöön tarkoitettujen koneiden korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of general-purpose machinery',
  },
  {
    code: '33122',
    descriptionFi: 'Maa- ja metsätalouskoneiden korjaus ja huolto',
    descriptionEn:
      'Repair and maintenance of agricultural and forestry machinery',
  },
  {
    code: '33123',
    descriptionFi:
      'Metallintyöstökoneiden ja muiden konetyökalujen korjaus ja huolto',
    descriptionEn:
      'Repair and maintenance of metalworking machines and other machine tools',
  },
  {
    code: '33129',
    descriptionFi: 'Muiden erikoiskoneiden korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of other specialized machines',
  },
  {
    code: '3313',
    descriptionFi: 'Elektronisten ja optisten laitteiden korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of electronic and optical devices',
  },
  {
    code: '33130',
    descriptionFi: 'Elektronisten ja optisten laitteiden korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of electronic and optical devices',
  },
  {
    code: '3314',
    descriptionFi: 'Sähkölaitteiden korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of electrical equipment',
  },
  {
    code: '33140',
    descriptionFi: 'Sähkölaitteiden korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of electrical equipment',
  },
  {
    code: '3315',
    descriptionFi: 'Laivojen ja veneiden korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of ships and boats',
  },
  {
    code: '33150',
    descriptionFi: 'Laivojen ja veneiden korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of ships and boats',
  },
  {
    code: '3316',
    descriptionFi: 'Ilma- ja avaruusalusten korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of aircraft and spacecraft',
  },
  {
    code: '33160',
    descriptionFi: 'Ilma- ja avaruusalusten korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of aircraft and spacecraft',
  },
  {
    code: '3317',
    descriptionFi: 'Muiden kulkuneuvojen korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of other vehicles',
  },
  {
    code: '33170',
    descriptionFi: 'Muiden kulkuneuvojen korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of other vehicles',
  },
  {
    code: '3319',
    descriptionFi: 'Muiden laitteiden korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of other equipment',
  },
  {
    code: '33190',
    descriptionFi: 'Muiden laitteiden korjaus ja huolto',
    descriptionEn: 'Repair and maintenance of other equipment',
  },
  {
    code: '332',
    descriptionFi: 'Teollisuuden koneiden ja laitteiden ym. asennus',
    descriptionEn: 'Installation of industrial machinery and equipment',
  },
  {
    code: '3320',
    descriptionFi: 'Teollisuuden koneiden ja laitteiden ym. asennus',
    descriptionEn: 'Installation of industrial machinery and equipment',
  },
  {
    code: '33200',
    descriptionFi: 'Teollisuuden koneiden ja laitteiden ym. asennus',
    descriptionEn: 'Installation of industrial machinery and equipment',
  },
  {
    code: '35',
    descriptionFi: 'Sähkö-, kaasu- ja lämpöhuolto, jäähdytysliiketoiminta',
    descriptionEn: 'Electricity, gas, heat supply, and refrigeration services',
  },
  {
    code: '351',
    descriptionFi: 'Sähkövoiman tuotanto, siirto ja jakelu',
    descriptionEn: 'Electricity generation, transmission, and distribution',
  },
  {
    code: '3511',
    descriptionFi: 'Sähkön tuotanto',
    descriptionEn: 'Electricity generation',
  },
  {
    code: '35111',
    descriptionFi: 'Sähkön tuotanto vesi- ja tuulivoimalla',
    descriptionEn: 'Electricity generation by hydro and wind power',
  },
  {
    code: '35112',
    descriptionFi: 'Sähkön erillistuotanto lämpövoimalla',
    descriptionEn: 'Separate electricity generation by thermal power',
  },
  {
    code: '35113',
    descriptionFi: 'Sähkön ja kaukolämmön yhteistuotanto',
    descriptionEn: 'Combined electricity and district heating generation',
  },
  {
    code: '35114',
    descriptionFi: 'Sähkön tuotanto ydinvoimalla',
    descriptionEn: 'Electricity generation by nuclear power',
  },
  {
    code: '35115',
    descriptionFi: 'Teollisuutta palveleva sähkön ja lämmön tuotanto',
    descriptionEn: 'Electricity and heat generation serving industry',
  },
  {
    code: '3512',
    descriptionFi: 'Sähkön siirto',
    descriptionEn: 'Electricity transmission',
  },
  {
    code: '35120',
    descriptionFi: 'Sähkön siirto',
    descriptionEn: 'Electricity transmission',
  },
  {
    code: '3513',
    descriptionFi: 'Sähkön jakelu',
    descriptionEn: 'Electricity distribution',
  },
  {
    code: '35130',
    descriptionFi: 'Sähkön jakelu',
    descriptionEn: 'Electricity distribution',
  },
  {
    code: '3514',
    descriptionFi: 'Sähkön kauppa',
    descriptionEn: 'Electricity trading',
  },
  {
    code: '35140',
    descriptionFi: 'Sähkön kauppa',
    descriptionEn: 'Electricity trading',
  },
  {
    code: '352',
    descriptionFi:
      'Kaasun tuotanto; kaasumaisten polttoaineiden jakelu putkiverkossa',
    descriptionEn: 'Gas production; distribution of gaseous fuels via pipeline',
  },
  {
    code: '3521',
    descriptionFi: 'Kaasun tuotanto',
    descriptionEn: 'Gas production',
  },
  {
    code: '35210',
    descriptionFi: 'Kaasun tuotanto',
    descriptionEn: 'Gas production',
  },
  {
    code: '3522',
    descriptionFi: 'Kaasumaisten polttoaineiden jakelu putkiverkossa',
    descriptionEn: 'Distribution of gaseous fuels via pipeline',
  },
  {
    code: '35220',
    descriptionFi: 'Kaasumaisten polttoaineiden jakelu putkiverkossa',
    descriptionEn: 'Distribution of gaseous fuels via pipeline',
  },
  {
    code: '3523',
    descriptionFi: 'Kaasun kauppa putkiverkossa',
    descriptionEn: 'Gas trading via pipeline',
  },
  {
    code: '35230',
    descriptionFi: 'Kaasun kauppa putkiverkossa',
    descriptionEn: 'Gas trading via pipeline',
  },
  {
    code: '353',
    descriptionFi: 'Lämmön ja kylmän tuotanto ja jakelu',
    descriptionEn: 'Heat and cold generation and distribution',
  },
  {
    code: '3530',
    descriptionFi: 'Lämmön ja kylmän tuotanto ja jakelu',
    descriptionEn: 'Heat and cold generation and distribution',
  },
  {
    code: '35301',
    descriptionFi: 'Kaukolämmön ja -kylmän erillistuotanto ja jakelu',
    descriptionEn:
      'Separate production and distribution of district heat and cold',
  },
  {
    code: '35302',
    descriptionFi: 'Teollisuutta palveleva lämmön ja kylmän erillistuotanto',
    descriptionEn: 'Separate production of heat and cold serving industry',
  },
  {
    code: '36',
    descriptionFi: 'Veden otto, puhdistus ja jakelu',
    descriptionEn: 'Water extraction, treatment, and distribution',
  },
  {
    code: '360',
    descriptionFi: 'Veden otto, puhdistus ja jakelu',
    descriptionEn: 'Water extraction, treatment, and distribution',
  },
  {
    code: '3600',
    descriptionFi: 'Veden otto, puhdistus ja jakelu',
    descriptionEn: 'Water extraction, treatment, and distribution',
  },
  {
    code: '36000',
    descriptionFi: 'Veden otto, puhdistus ja jakelu',
    descriptionEn: 'Water extraction, treatment, and distribution',
  },
  {
    code: '37',
    descriptionFi: 'Viemäri- ja jätevesihuolto',
    descriptionEn: 'Sewerage and wastewater services',
  },
  {
    code: '370',
    descriptionFi: 'Viemäri- ja jätevesihuolto',
    descriptionEn: 'Sewerage and wastewater services',
  },
  {
    code: '3700',
    descriptionFi: 'Viemäri- ja jätevesihuolto',
    descriptionEn: 'Sewerage and wastewater services',
  },
  {
    code: '37000',
    descriptionFi: 'Viemäri- ja jätevesihuolto',
    descriptionEn: 'Sewerage and wastewater services',
  },
  {
    code: '38',
    descriptionFi:
      'Jätteen keruu, käsittely ja loppusijoitus; materiaalien kierrätys',
    descriptionEn:
      'Waste collection, treatment and disposal; material recycling',
  },
  {
    code: '381',
    descriptionFi: 'Jätteen keruu',
    descriptionEn: 'Waste collection',
  },
  {
    code: '3811',
    descriptionFi: 'Tavanomaisen jätteen keruu',
    descriptionEn: 'Collection of ordinary waste',
  },
  {
    code: '38110',
    descriptionFi: 'Tavanomaisen jätteen keruu',
    descriptionEn: 'Collection of ordinary waste',
  },
  {
    code: '3812',
    descriptionFi: 'Ongelmajätteen keruu',
    descriptionEn: 'Collection of hazardous waste',
  },
  {
    code: '38120',
    descriptionFi: 'Ongelmajätteen keruu',
    descriptionEn: 'Collection of hazardous waste',
  },
  {
    code: '382',
    descriptionFi: 'Jätteen käsittely ja loppusijoitus',
    descriptionEn: 'Waste treatment and disposal',
  },
  {
    code: '3821',
    descriptionFi: 'Tavanomaisen jätteen käsittely ja loppusijoitus',
    descriptionEn: 'Treatment and disposal of ordinary waste',
  },
  {
    code: '38210',
    descriptionFi: 'Tavanomaisen jätteen käsittely ja loppusijoitus',
    descriptionEn: 'Treatment and disposal of ordinary waste',
  },
  {
    code: '3822',
    descriptionFi: 'Ongelmajätteen käsittely, loppusijoitus ja hävittäminen',
    descriptionEn: 'Treatment, disposal, and destruction of hazardous waste',
  },
  {
    code: '38220',
    descriptionFi: 'Ongelmajätteen käsittely, loppusijoitus ja hävittäminen',
    descriptionEn: 'Treatment, disposal, and destruction of hazardous waste',
  },
  {
    code: '383',
    descriptionFi: 'Materiaalien kierrätys',
    descriptionEn: 'Material recycling',
  },
  {
    code: '3831',
    descriptionFi: 'Romujen purkaminen',
    descriptionEn: 'Scrap dismantling',
  },
  {
    code: '38310',
    descriptionFi: 'Romujen purkaminen',
    descriptionEn: 'Scrap dismantling',
  },
  {
    code: '3832',
    descriptionFi: 'Lajiteltujen materiaalien kierrätys',
    descriptionEn: 'Recycling of sorted materials',
  },
  {
    code: '38320',
    descriptionFi: 'Lajiteltujen materiaalien kierrätys',
    descriptionEn: 'Recycling of sorted materials',
  },
  {
    code: '39',
    descriptionFi:
      'Maaperän ja vesistöjen kunnostus ja muut ympäristönhuoltopalvelut',
    descriptionEn:
      'Soil and water restoration and other environmental services',
  },
  {
    code: '390',
    descriptionFi:
      'Maaperän ja vesistöjen kunnostus ja muut ympäristönhuoltopalvelut',
    descriptionEn:
      'Soil and water restoration and other environmental services',
  },
  {
    code: '3900',
    descriptionFi:
      'Maaperän ja vesistöjen kunnostus ja muut ympäristönhuoltopalvelut',
    descriptionEn:
      'Soil and water restoration and other environmental services',
  },
  {
    code: '39000',
    descriptionFi:
      'Maaperän ja vesistöjen kunnostus ja muut ympäristönhuoltopalvelut',
    descriptionEn:
      'Soil and water restoration and other environmental services',
  },
  {
    code: '41',
    descriptionFi: 'Talonrakentaminen',
    descriptionEn: 'Building construction',
  },
  {
    code: '411',
    descriptionFi: 'Rakennuttaminen ja rakennushankkeiden kehittäminen',
    descriptionEn:
      'Building management and development of construction projects',
  },
  {
    code: '4110',
    descriptionFi: 'Rakennuttaminen ja rakennushankkeiden kehittäminen',
    descriptionEn:
      'Building management and development of construction projects',
  },
  {
    code: '41100',
    descriptionFi: 'Rakennuttaminen ja rakennushankkeiden kehittäminen',
    descriptionEn:
      'Building management and development of construction projects',
  },
  {
    code: '412',
    descriptionFi: 'Asuin- ja muiden rakennusten rakentaminen',
    descriptionEn: 'Residential and other building construction',
  },
  {
    code: '4120',
    descriptionFi: 'Asuin- ja muiden rakennusten rakentaminen',
    descriptionEn: 'Residential and other building construction',
  },
  {
    code: '41200',
    descriptionFi: 'Asuin- ja muiden rakennusten rakentaminen',
    descriptionEn: 'Residential and other building construction',
  },
  {
    code: '42',
    descriptionFi: 'Maa- ja vesirakentaminen',
    descriptionEn: 'Civil engineering and water construction',
  },
  {
    code: '421',
    descriptionFi: 'Teiden ja rautateiden rakentaminen',
    descriptionEn: 'Road and railway construction',
  },
  {
    code: '4211',
    descriptionFi: 'Teiden ja moottoriteiden rakentaminen',
    descriptionEn: 'Road and motorway construction',
  },
  {
    code: '42110',
    descriptionFi: 'Teiden ja moottoriteiden rakentaminen',
    descriptionEn: 'Road and motorway construction',
  },
  {
    code: '4212',
    descriptionFi: 'Rautateiden ja metrolinjojen rakentaminen',
    descriptionEn: 'Railway and metro line construction',
  },
  {
    code: '42120',
    descriptionFi: 'Rautateiden ja metrolinjojen rakentaminen',
    descriptionEn: 'Railway and metro line construction',
  },
  {
    code: '4213',
    descriptionFi: 'Siltojen ja tunneleiden rakentaminen',
    descriptionEn: 'Bridge and tunnel construction',
  },
  {
    code: '42130',
    descriptionFi: 'Siltojen ja tunneleiden rakentaminen',
    descriptionEn: 'Bridge and tunnel construction',
  },
  {
    code: '422',
    descriptionFi: 'Yleisten jakeluverkkojen rakentaminen',
    descriptionEn: 'Construction of general distribution networks',
  },
  {
    code: '4221',
    descriptionFi:
      'Yleisten jakeluverkkojen rakentaminen nestemäisiä ja kaasumaisia aineita varten',
    descriptionEn:
      'Construction of general distribution networks for liquid and gaseous substances',
  },
  {
    code: '42210',
    descriptionFi:
      'Yleisten jakeluverkkojen rakentaminen nestemäisiä ja kaasumaisia aineita varten',
    descriptionEn:
      'Construction of general distribution networks for liquid and gaseous substances',
  },
  {
    code: '4222',
    descriptionFi: 'Sähkö- ja tietoliikenneverkkojen rakentaminen',
    descriptionEn:
      'Construction of electricity and telecommunications networks',
  },
  {
    code: '42220',
    descriptionFi: 'Sähkö- ja tietoliikenneverkkojen rakentaminen',
    descriptionEn:
      'Construction of electricity and telecommunications networks',
  },
  {
    code: '429',
    descriptionFi: 'Muu maa- ja vesirakentaminen',
    descriptionEn: 'Other civil engineering and water construction',
  },
  {
    code: '4291',
    descriptionFi: 'Vesirakentaminen',
    descriptionEn: 'Water construction',
  },
  {
    code: '42910',
    descriptionFi: 'Vesirakentaminen',
    descriptionEn: 'Water construction',
  },
  {
    code: '4299',
    descriptionFi: 'Muualla luokittelematon maa- ja vesirakentaminen',
    descriptionEn:
      'Other unclassified civil engineering and water construction',
  },
  {
    code: '42991',
    descriptionFi:
      'Maa- ja vesirakennushankkeiden kehittäminen ja rakennuttaminen',
    descriptionEn:
      'Development and management of civil engineering and water construction projects',
  },
  {
    code: '42999',
    descriptionFi: 'Muu muualla luokittelematon maa- ja vesirakentaminen',
    descriptionEn:
      'Other unclassified civil engineering and water construction',
  },
  {
    code: '43',
    descriptionFi: 'Erikoistunut rakennustoiminta',
    descriptionEn: 'Specialized construction activities',
  },
  {
    code: '431',
    descriptionFi:
      'Rakennusten ja rakennelmien purku ja rakennuspaikan valmistelutyöt',
    descriptionEn:
      'Building and structure demolition and site preparation works',
  },
  {
    code: '4311',
    descriptionFi: 'Rakennusten ja rakennelmien purku',
    descriptionEn: 'Building and structure demolition',
  },
  {
    code: '43110',
    descriptionFi: 'Rakennusten ja rakennelmien purku',
    descriptionEn: 'Building and structure demolition',
  },
  {
    code: '4312',
    descriptionFi: 'Rakennuspaikan valmistelutyöt',
    descriptionEn: 'Site preparation works',
  },
  {
    code: '43120',
    descriptionFi: 'Rakennuspaikan valmistelutyöt',
    descriptionEn: 'Site preparation works',
  },
  {code: '4313', descriptionFi: 'Koeporaus', descriptionEn: 'Test drilling'},
  {code: '43130', descriptionFi: 'Koeporaus', descriptionEn: 'Test drilling'},
  {
    code: '432',
    descriptionFi: 'Sähkö-, vesijohto- ja muu rakennusasennus',
    descriptionEn: 'Electrical, plumbing and other building installations',
  },
  {
    code: '4321',
    descriptionFi: 'Sähköasennus',
    descriptionEn: 'Electrical installation',
  },
  {
    code: '43210',
    descriptionFi: 'Sähköasennus',
    descriptionEn: 'Electrical installation',
  },
  {
    code: '4322',
    descriptionFi: 'Lämpö-, vesijohto- ja ilmastointiasennus',
    descriptionEn: 'Heating, plumbing, and air conditioning installation',
  },
  {
    code: '43220',
    descriptionFi: 'Lämpö-, vesijohto- ja ilmastointiasennus',
    descriptionEn: 'Heating, plumbing, and air conditioning installation',
  },
  {
    code: '4329',
    descriptionFi: 'Muu rakennusasennus',
    descriptionEn: 'Other building installations',
  },
  {
    code: '43291',
    descriptionFi: 'Lämpö-, ääni- ja tärinäeristeiden asennus',
    descriptionEn: 'Installation of heat, sound, and vibration insulation',
  },
  {
    code: '43292',
    descriptionFi: 'Hissien ja liukuportaiden asennus',
    descriptionEn: 'Installation of elevators and escalators',
  },
  {
    code: '43299',
    descriptionFi: 'Muualla luokittelematon rakennusasennus',
    descriptionEn: 'Other unclassified building installations',
  },
  {
    code: '433',
    descriptionFi: 'Rakennusten ja rakennelmien viimeistely',
    descriptionEn: 'Finishing work for buildings and structures',
  },
  {code: '4331', descriptionFi: 'Rappaus', descriptionEn: 'Plastering'},
  {code: '43310', descriptionFi: 'Rappaus', descriptionEn: 'Plastering'},
  {
    code: '4332',
    descriptionFi: 'Rakennuspuusepän asennustyöt',
    descriptionEn: 'Carpentry installation works',
  },
  {
    code: '43320',
    descriptionFi: 'Rakennuspuusepän asennustyöt',
    descriptionEn: 'Carpentry installation works',
  },
  {
    code: '4333',
    descriptionFi: 'Lattianpäällystys ja seinien verhoilu',
    descriptionEn: 'Flooring and wall cladding',
  },
  {
    code: '43330',
    descriptionFi: 'Lattianpäällystys ja seinien verhoilu',
    descriptionEn: 'Flooring and wall cladding',
  },
  {
    code: '4334',
    descriptionFi: 'Maalaus ja lasitus',
    descriptionEn: 'Painting and glazing',
  },
  {code: '43341', descriptionFi: 'Maalaus', descriptionEn: 'Painting'},
  {code: '43342', descriptionFi: 'Lasitus', descriptionEn: 'Glazing'},
  {
    code: '4339',
    descriptionFi: 'Muu rakennusten viimeistely',
    descriptionEn: 'Other building finishing',
  },
  {
    code: '43390',
    descriptionFi: 'Muu rakennusten viimeistely',
    descriptionEn: 'Other building finishing',
  },
  {
    code: '439',
    descriptionFi: 'Muu erikoistunut rakennustoiminta',
    descriptionEn: 'Other specialized construction activities',
  },
  {
    code: '4391',
    descriptionFi: 'Kattorakenteiden asennus ja kattaminen',
    descriptionEn: 'Roof structure installation and covering',
  },
  {
    code: '43910',
    descriptionFi: 'Kattorakenteiden asennus ja kattaminen',
    descriptionEn: 'Roof structure installation and covering',
  },
  {
    code: '4399',
    descriptionFi: 'Muualla luokittelematon erikoistunut rakennustoiminta',
    descriptionEn: 'Other unclassified specialized construction activities',
  },
  {
    code: '43991',
    descriptionFi: 'Rakennuskonevuokraus käyttäjineen',
    descriptionEn: 'Rental of construction machinery with operators',
  },
  {
    code: '43999',
    descriptionFi: 'Muu muualla luokittelematon erikoistunut rakennustoiminta',
    descriptionEn: 'Other unclassified specialized construction activities',
  },
  {
    code: '45',
    descriptionFi:
      'Moottoriajoneuvojen ja moottoripyörien tukku- ja vähittäiskauppa sekä korjaus',
    descriptionEn:
      'Wholesale and retail trade of motor vehicles and motorcycles, and repair',
  },
  {
    code: '451',
    descriptionFi: 'Moottoriajoneuvojen kauppa',
    descriptionEn: 'Motor vehicle trade',
  },
  {
    code: '4511',
    descriptionFi: 'Henkilöautojen ja kevyiden moottoriajoneuvojen kauppa',
    descriptionEn: 'Sale of passenger cars and light motor vehicles',
  },
  {
    code: '45111',
    descriptionFi: 'Henkilöautojen ja kevyiden moottoriajoneuvojen tukkukauppa',
    descriptionEn: 'Wholesale of passenger cars and light motor vehicles',
  },
  {
    code: '45112',
    descriptionFi:
      'Henkilöautojen ja kevyiden moottoriajoneuvojen vähittäiskauppa',
    descriptionEn: 'Retail trade of passenger cars and light motor vehicles',
  },
  {
    code: '4519',
    descriptionFi: 'Muiden moottoriajoneuvojen myynti',
    descriptionEn: 'Sale of other motor vehicles',
  },
  {
    code: '45191',
    descriptionFi:
      'Kuorma-autojen ja muiden raskaiden moottoriajoneuvojen tukkukauppa',
    descriptionEn: 'Wholesale of trucks and other heavy motor vehicles',
  },
  {
    code: '45192',
    descriptionFi:
      'Matkailuvaunujen ja muualla luokittelemattomien moottoriajoneuvojen vähittäiskauppa',
    descriptionEn:
      'Retail trade of caravans and other unclassified motor vehicles',
  },
  {
    code: '452',
    descriptionFi: 'Moottoriajoneuvojen huolto ja korjaus (pl. moottoripyörät)',
    descriptionEn:
      'Motor vehicle maintenance and repair (excluding motorcycles)',
  },
  {
    code: '4520',
    descriptionFi: 'Moottoriajoneuvojen huolto ja korjaus (pl. moottoripyörät)',
    descriptionEn:
      'Motor vehicle maintenance and repair (excluding motorcycles)',
  },
  {
    code: '45201',
    descriptionFi: 'Moottoriajoneuvojen huolto ja korjaus (pl. renkaat)',
    descriptionEn: 'Motor vehicle maintenance and repair (excluding tires)',
  },
  {
    code: '45202',
    descriptionFi: 'Renkaiden korjaus',
    descriptionEn: 'Tire repair',
  },
  {
    code: '453',
    descriptionFi: 'Moottoriajoneuvojen osien ja varusteiden kauppa',
    descriptionEn: 'Motor vehicle parts and accessories trade',
  },
  {
    code: '4531',
    descriptionFi: 'Moottoriajoneuvojen osien ja varusteiden tukkukauppa',
    descriptionEn: 'Wholesale of motor vehicle parts and accessories',
  },
  {
    code: '45311',
    descriptionFi:
      'Moottoriajoneuvojen osien ja varusteiden tukkukauppa (pl. renkaat)',
    descriptionEn:
      'Wholesale of motor vehicle parts and accessories (excluding tires)',
  },
  {
    code: '45312',
    descriptionFi: 'Renkaiden tukkukauppa',
    descriptionEn: 'Wholesale of tires',
  },
  {
    code: '4532',
    descriptionFi: 'Moottoriajoneuvojen osien ja varusteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of motor vehicle parts and accessories',
  },
  {
    code: '45321',
    descriptionFi:
      'Moottoriajoneuvojen osien ja varusteiden vähittäiskauppa (pl. renkaat)',
    descriptionEn:
      'Retail trade of motor vehicle parts and accessories (excluding tires)',
  },
  {
    code: '45322',
    descriptionFi: 'Renkaiden vähittäiskauppa',
    descriptionEn: 'Retail trade of tires',
  },
  {
    code: '454',
    descriptionFi:
      'Moottoripyörien sekä niiden osien ja varusteiden myynti, huolto ja korjaus',
    descriptionEn:
      'Sale, maintenance, and repair of motorcycles and their parts and accessories',
  },
  {
    code: '4540',
    descriptionFi:
      'Moottoripyörien sekä niiden osien ja varusteiden myynti, huolto ja korjaus',
    descriptionEn:
      'Sale, maintenance, and repair of motorcycles and their parts and accessories',
  },
  {
    code: '45401',
    descriptionFi:
      'Moottoripyörien sekä niiden osien ja varusteiden tukkukauppa',
    descriptionEn: 'Wholesale of motorcycles and their parts and accessories',
  },
  {
    code: '45402',
    descriptionFi:
      'Moottoripyörien sekä niiden osien ja varusteiden vähittäiskauppa',
    descriptionEn:
      'Retail trade of motorcycles and their parts and accessories',
  },
  {
    code: '45403',
    descriptionFi: 'Moottoripyörien huolto ja korjaus',
    descriptionEn: 'Motorcycle maintenance and repair',
  },
  {
    code: '46',
    descriptionFi:
      'Tukkukauppa (pl. moottoriajoneuvojen ja moottoripyörien kauppa)',
    descriptionEn: 'Wholesale trade (excluding motor vehicles and motorcycles)',
  },
  {
    code: '461',
    descriptionFi: 'Agentuuritoiminta',
    descriptionEn: 'Agency activities',
  },
  {
    code: '4611',
    descriptionFi:
      'Maatalousraaka-aineiden, elävien eläinten, tekstiiliraaka-aineiden sekä puolivalmisteiden agentuuritoiminta',
    descriptionEn:
      'Agency activities for agricultural raw materials, live animals, textile raw materials, and semi-finished goods',
  },
  {
    code: '46110',
    descriptionFi:
      'Maatalousraaka-aineiden, elävien eläinten, tekstiiliraaka-aineiden sekä puolivalmisteiden agentuuritoiminta',
    descriptionEn:
      'Agency activities for agricultural raw materials, live animals, textile raw materials, and semi-finished goods',
  },
  {
    code: '4612',
    descriptionFi:
      'Polttoaineiden, malmien, metallien ja teollisuuskemikaalien agentuuritoiminta',
    descriptionEn:
      'Agency activities for fuels, ores, metals, and industrial chemicals',
  },
  {
    code: '46120',
    descriptionFi:
      'Polttoaineiden, malmien, metallien ja teollisuuskemikaalien agentuuritoiminta',
    descriptionEn:
      'Agency activities for fuels, ores, metals, and industrial chemicals',
  },
  {
    code: '4613',
    descriptionFi: 'Puutavaran ja rakennusmateriaalien agentuuritoiminta',
    descriptionEn: 'Agency activities for timber and building materials',
  },
  {
    code: '46130',
    descriptionFi: 'Puutavaran ja rakennusmateriaalien agentuuritoiminta',
    descriptionEn: 'Agency activities for timber and building materials',
  },
  {
    code: '4614',
    descriptionFi: 'Koneiden ja laitteiden agentuuritoiminta',
    descriptionEn: 'Agency activities for machinery and equipment',
  },
  {
    code: '46140',
    descriptionFi: 'Koneiden ja laitteiden agentuuritoiminta',
    descriptionEn: 'Agency activities for machinery and equipment',
  },
  {
    code: '4615',
    descriptionFi:
      'Huonekalujen, taloustavaroiden ja rautakauppatavaroiden agentuuritoiminta',
    descriptionEn:
      'Agency activities for furniture, household goods, and hardware',
  },
  {
    code: '46150',
    descriptionFi:
      'Huonekalujen, taloustavaroiden ja rautakauppatavaroiden agentuuritoiminta',
    descriptionEn:
      'Agency activities for furniture, household goods, and hardware',
  },
  {
    code: '4616',
    descriptionFi:
      'Tekstiilien, vaatteiden, jalkineiden ja nahkavalmisteiden agentuuritoiminta',
    descriptionEn:
      'Agency activities for textiles, clothing, footwear, and leather products',
  },
  {
    code: '46160',
    descriptionFi:
      'Tekstiilien, vaatteiden, jalkineiden ja nahkavalmisteiden agentuuritoiminta',
    descriptionEn:
      'Agency activities for textiles, clothing, footwear, and leather products',
  },
  {
    code: '4617',
    descriptionFi: 'Elintarvikkeiden, juomien ja tupakan agentuuritoiminta',
    descriptionEn: 'Agency activities for food, beverages, and tobacco',
  },
  {
    code: '46170',
    descriptionFi: 'Elintarvikkeiden, juomien ja tupakan agentuuritoiminta',
    descriptionEn: 'Agency activities for food, beverages, and tobacco',
  },
  {
    code: '4618',
    descriptionFi: 'Muu erikoistunut agentuuritoiminta',
    descriptionEn: 'Other specialized agency activities',
  },
  {
    code: '46181',
    descriptionFi: 'Paperialan agentuuritoiminta',
    descriptionEn: 'Agency activities in the paper industry',
  },
  {
    code: '46189',
    descriptionFi: 'Muualla luokittelematon erikoistunut agentuuritoiminta',
    descriptionEn: 'Other unclassified specialized agency activities',
  },
  {
    code: '4619',
    descriptionFi: 'Yleisagentuuritoiminta',
    descriptionEn: 'General agency activities',
  },
  {
    code: '46190',
    descriptionFi: 'Yleisagentuuritoiminta',
    descriptionEn: 'General agency activities',
  },
  {
    code: '462',
    descriptionFi:
      'Maatalousperäisten raaka-aineiden ja elävien eläinten tukkukauppa',
    descriptionEn:
      'Wholesale trade of agricultural raw materials and live animals',
  },
  {
    code: '4621',
    descriptionFi:
      'Viljan, raakatupakan, siementen ja eläinrehujen tukkukauppa',
    descriptionEn:
      'Wholesale trade of cereals, raw tobacco, seeds, and animal feeds',
  },
  {
    code: '46210',
    descriptionFi:
      'Viljan, raakatupakan, siementen ja eläinrehujen tukkukauppa',
    descriptionEn:
      'Wholesale trade of cereals, raw tobacco, seeds, and animal feeds',
  },
  {
    code: '4622',
    descriptionFi: 'Kukkien ja taimien tukkukauppa',
    descriptionEn: 'Wholesale trade of flowers and plants',
  },
  {
    code: '46220',
    descriptionFi: 'Kukkien ja taimien tukkukauppa',
    descriptionEn: 'Wholesale trade of flowers and plants',
  },
  {
    code: '4623',
    descriptionFi: 'Elävien eläinten tukkukauppa',
    descriptionEn: 'Wholesale trade of live animals',
  },
  {
    code: '46230',
    descriptionFi: 'Elävien eläinten tukkukauppa',
    descriptionEn: 'Wholesale trade of live animals',
  },
  {
    code: '4624',
    descriptionFi: 'Turkisten ja nahkojen tukkukauppa',
    descriptionEn: 'Wholesale trade of furs and skins',
  },
  {
    code: '46240',
    descriptionFi: 'Turkisten ja nahkojen tukkukauppa',
    descriptionEn: 'Wholesale trade of furs and skins',
  },
  {
    code: '463',
    descriptionFi: 'Elintarvikkeiden, juomien ja tupakan tukkukauppa',
    descriptionEn: 'Wholesale trade of food, beverages, and tobacco',
  },
  {
    code: '4631',
    descriptionFi: 'Juures-, vihannes- marja- ja hedelmätukkukauppa',
    descriptionEn: 'Wholesale trade of roots, vegetables, berries, and fruits',
  },
  {
    code: '46310',
    descriptionFi: 'Juures-, vihannes- marja- ja hedelmätukkukauppa',
    descriptionEn: 'Wholesale trade of roots, vegetables, berries, and fruits',
  },
  {
    code: '4632',
    descriptionFi: 'Lihan ja lihatuotteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of meat and meat products',
  },
  {
    code: '46320',
    descriptionFi: 'Lihan ja lihatuotteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of meat and meat products',
  },
  {
    code: '4633',
    descriptionFi:
      'Maitotaloustuotteiden, munien sekä ravintoöljyjen ja -rasvojen tukkukauppa',
    descriptionEn:
      'Wholesale trade of dairy products, eggs, and edible oils and fats',
  },
  {
    code: '46331',
    descriptionFi:
      'Maitotaloustuotteiden, ravintoöljyjen ja -rasvojen tukkukauppa',
    descriptionEn: 'Wholesale trade of dairy products, edible oils, and fats',
  },
  {
    code: '46332',
    descriptionFi: 'Munatukkukauppa',
    descriptionEn: 'Wholesale trade of eggs',
  },
  {
    code: '4634',
    descriptionFi: 'Alkoholi- ja muiden juomien tukkukauppa',
    descriptionEn: 'Wholesale trade of alcoholic beverages and other drinks',
  },
  {
    code: '46340',
    descriptionFi: 'Alkoholi- ja muiden juomien tukkukauppa',
    descriptionEn: 'Wholesale trade of alcoholic beverages and other drinks',
  },
  {
    code: '4635',
    descriptionFi: 'Tupakkatuotteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of tobacco products',
  },
  {
    code: '46350',
    descriptionFi: 'Tupakkatuotteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of tobacco products',
  },
  {
    code: '4636',
    descriptionFi:
      'Sokerin, suklaan, makeisten ja leipomotuotteiden tukkukauppa',
    descriptionEn:
      'Wholesale trade of sugar, chocolate, confectionery, and baked goods',
  },
  {
    code: '46360',
    descriptionFi:
      'Sokerin, suklaan, makeisten ja leipomotuotteiden tukkukauppa',
    descriptionEn:
      'Wholesale trade of sugar, chocolate, confectionery, and baked goods',
  },
  {
    code: '4637',
    descriptionFi: 'Kahvin, teen, kaakaon ja mausteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of coffee, tea, cocoa, and spices',
  },
  {
    code: '46370',
    descriptionFi: 'Kahvin, teen, kaakaon ja mausteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of coffee, tea, cocoa, and spices',
  },
  {
    code: '4638',
    descriptionFi:
      'Kalan, luontaistuotteiden ja muiden elintarvikkeiden tukkukauppa',
    descriptionEn: 'Wholesale trade of fish, natural products, and other food',
  },
  {
    code: '46381',
    descriptionFi: 'Kalattukkukauppa',
    descriptionEn: 'Wholesale trade of fish',
  },
  {
    code: '46382',
    descriptionFi: 'Luontaistuotteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of natural products',
  },
  {
    code: '46383',
    descriptionFi: 'Lemmikkieläinten ruokien tukkukauppa',
    descriptionEn: 'Wholesale trade of pet foods',
  },
  {
    code: '46389',
    descriptionFi: 'Muualla luokittelematon elintarvikkeiden tukkukauppa',
    descriptionEn: 'Other unclassified wholesale trade of food',
  },
  {
    code: '4639',
    descriptionFi: 'Elintarvikkeiden, juomien ja tupakan yleistukkukauppa',
    descriptionEn: 'General wholesale trade of food, beverages, and tobacco',
  },
  {
    code: '46390',
    descriptionFi: 'Elintarvikkeiden, juomien ja tupakan yleistukkukauppa',
    descriptionEn: 'General wholesale trade of food, beverages, and tobacco',
  },
  {
    code: '464',
    descriptionFi: 'Taloustavaroiden tukkukauppa',
    descriptionEn: 'Wholesale trade of household goods',
  },
  {
    code: '4641',
    descriptionFi: 'Tekstiilien tukkukauppa',
    descriptionEn: 'Wholesale trade of textiles',
  },
  {
    code: '46411',
    descriptionFi: 'Kangas- ja lankatukkukauppa',
    descriptionEn: 'Wholesale trade of fabrics and yarn',
  },
  {
    code: '46412',
    descriptionFi: 'Tekstiilivalmisteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of textile products',
  },
  {
    code: '4642',
    descriptionFi: 'Vaatteiden ja jalkineiden tukkukauppa',
    descriptionEn: 'Wholesale trade of clothing and footwear',
  },
  {
    code: '46421',
    descriptionFi: 'Vaatteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of clothing',
  },
  {
    code: '46422',
    descriptionFi: 'Jalkineiden tukkukauppa',
    descriptionEn: 'Wholesale trade of footwear',
  },
  {
    code: '4643',
    descriptionFi: 'Kodinkoneiden tukkukauppa',
    descriptionEn: 'Wholesale trade of household appliances',
  },
  {
    code: '46431',
    descriptionFi: 'Kodinkoneiden ja kodin sähkölaitteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of home appliances and electrical devices',
  },
  {
    code: '46432',
    descriptionFi: 'Viihde-elektroniikan tukkukauppa',
    descriptionEn: 'Wholesale trade of entertainment electronics',
  },
  {
    code: '46433',
    descriptionFi: 'Valokuvausvälineiden ja -tarvikkeiden tukkukauppa',
    descriptionEn: 'Wholesale trade of photography equipment and accessories',
  },
  {
    code: '46434',
    descriptionFi: 'Optisen alan tukkukauppa',
    descriptionEn: 'Wholesale trade of optical products',
  },
  {
    code: '4644',
    descriptionFi:
      'Posliini-, lasi- ja muiden taloustavaroiden sekä puhdistusaineiden tukkukauppa',
    descriptionEn:
      'Wholesale trade of porcelain, glass, other household goods, and cleaning products',
  },
  {
    code: '46441',
    descriptionFi: 'Taloustavaroiden ja -tarvikkeiden tukkukauppa',
    descriptionEn: 'Wholesale trade of household goods and accessories',
  },
  {
    code: '46442',
    descriptionFi: 'Puhdistusaineiden tukkukauppa',
    descriptionEn: 'Wholesale trade of cleaning agents',
  },
  {
    code: '4645',
    descriptionFi: 'Hajuvesien ja kosmetiikan tukkukauppa',
    descriptionEn: 'Wholesale trade of perfumes and cosmetics',
  },
  {
    code: '46450',
    descriptionFi: 'Hajuvesien ja kosmetiikan tukkukauppa',
    descriptionEn: 'Wholesale trade of perfumes and cosmetics',
  },
  {
    code: '4646',
    descriptionFi: 'Farmaseuttisten tuotteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of pharmaceutical products',
  },
  {
    code: '46461',
    descriptionFi: 'Lääketukkukauppa',
    descriptionEn: 'Wholesale trade of medicines',
  },
  {
    code: '46462',
    descriptionFi: 'Laboratorio- ja sairaanhoitovälineiden tukkukauppa',
    descriptionEn: 'Wholesale trade of laboratory and medical equipment',
  },
  {
    code: '4647',
    descriptionFi: 'Huonekalujen, mattojen ja valaisimien tukkukauppa',
    descriptionEn: 'Wholesale trade of furniture, carpets, and lighting',
  },
  {
    code: '46470',
    descriptionFi: 'Huonekalujen, mattojen ja valaisimien tukkukauppa',
    descriptionEn: 'Wholesale trade of furniture, carpets, and lighting',
  },
  {
    code: '4648',
    descriptionFi: 'Kellojen ja korujen tukkukauppa',
    descriptionEn: 'Wholesale trade of watches and jewelry',
  },
  {
    code: '46480',
    descriptionFi: 'Kellojen ja korujen tukkukauppa',
    descriptionEn: 'Wholesale trade of watches and jewelry',
  },
  {
    code: '4649',
    descriptionFi: 'Muiden taloustavaroiden tukkukauppa',
    descriptionEn: 'Wholesale trade of other household goods',
  },
  {
    code: '46491',
    descriptionFi: 'Paperi- ja toimistotarvikkeiden tukkukauppa',
    descriptionEn: 'Wholesale trade of paper and office supplies',
  },
  {
    code: '46492',
    descriptionFi: 'Kirjatukkukauppa',
    descriptionEn: 'Wholesale trade of books',
  },
  {
    code: '46493',
    descriptionFi: 'Urheilualan tukkukauppa',
    descriptionEn: 'Wholesale trade of sports equipment',
  },
  {
    code: '46494',
    descriptionFi: 'Musiikkitarvikkeiden tukkukauppa',
    descriptionEn: 'Wholesale trade of musical instruments',
  },
  {
    code: '46495',
    descriptionFi: 'Veneiden ja veneilytarvikkeiden tukkukauppa',
    descriptionEn: 'Wholesale trade of boats and boating equipment',
  },
  {
    code: '46496',
    descriptionFi: 'Lelujen ja pelien tukkukauppa',
    descriptionEn: 'Wholesale trade of toys and games',
  },
  {
    code: '46499',
    descriptionFi: 'Muu kotitaloustavaroiden tukkukauppa',
    descriptionEn: 'Wholesale trade of other household goods',
  },
  {
    code: '465',
    descriptionFi: 'Tieto- ja viestintäteknisten laitteiden tukkukauppa',
    descriptionEn:
      'Wholesale trade of information and communication technology equipment',
  },
  {
    code: '4651',
    descriptionFi:
      'Tietokoneiden, oheislaitteiden ja ohjelmistojen tukkukauppa',
    descriptionEn: 'Wholesale trade of computers, peripherals, and software',
  },
  {
    code: '46510',
    descriptionFi:
      'Tietokoneiden, oheislaitteiden ja ohjelmistojen tukkukauppa',
    descriptionEn: 'Wholesale trade of computers, peripherals, and software',
  },
  {
    code: '4652',
    descriptionFi: 'Elektroniikka- ja viestintälaitteiden ja osien tukkukauppa',
    descriptionEn:
      'Wholesale trade of electronics and communication devices and parts',
  },
  {
    code: '46521',
    descriptionFi: 'Viestintälaitteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of communication devices',
  },
  {
    code: '46522',
    descriptionFi: 'Elektronisten komponenttien tukkukauppa',
    descriptionEn: 'Wholesale trade of electronic components',
  },
  {
    code: '466',
    descriptionFi: 'Muiden koneiden, laitteiden ja tarvikkeiden tukkukauppa',
    descriptionEn:
      'Wholesale trade of other machinery, equipment, and accessories',
  },
  {
    code: '4661',
    descriptionFi:
      'Maa- ja metsätalouskoneiden ja -tarvikkeiden tukkukauppa mukaan lukien traktorit',
    descriptionEn:
      'Wholesale trade of agricultural and forestry machinery and accessories, including tractors',
  },
  {
    code: '46610',
    descriptionFi:
      'Maa- ja metsätalouskoneiden ja -tarvikkeiden tukkukauppa mukaan lukien traktorit',
    descriptionEn:
      'Wholesale trade of agricultural and forestry machinery and accessories, including tractors',
  },
  {
    code: '4662',
    descriptionFi: 'Työstökoneiden tukkukauppa',
    descriptionEn: 'Wholesale trade of machine tools',
  },
  {
    code: '46620',
    descriptionFi: 'Työstökoneiden tukkukauppa',
    descriptionEn: 'Wholesale trade of machine tools',
  },
  {
    code: '4663',
    descriptionFi: 'Kaivos- ja rakennuskoneiden tukkukauppa',
    descriptionEn: 'Wholesale trade of mining and construction machinery',
  },
  {
    code: '46630',
    descriptionFi: 'Kaivos- ja rakennuskoneiden tukkukauppa',
    descriptionEn: 'Wholesale trade of mining and construction machinery',
  },
  {
    code: '4664',
    descriptionFi:
      'Tekstiiliteollisuuden koneiden sekä ompelu- ja kutomakoneiden tukkukauppa',
    descriptionEn:
      'Wholesale trade of textile industry machinery, including sewing and weaving machines',
  },
  {
    code: '46640',
    descriptionFi:
      'Tekstiiliteollisuuden koneiden sekä ompelu- ja kutomakoneiden tukkukauppa',
    descriptionEn:
      'Wholesale trade of textile industry machinery, including sewing and weaving machines',
  },
  {
    code: '4665',
    descriptionFi: 'Toimitilakalusteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of office furniture',
  },
  {
    code: '46650',
    descriptionFi: 'Toimitilakalusteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of office furniture',
  },
  {
    code: '4666',
    descriptionFi: 'Muiden konttorikoneiden ja -laitteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of other office machines and equipment',
  },
  {
    code: '46660',
    descriptionFi: 'Muiden konttorikoneiden ja -laitteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of other office machines and equipment',
  },
  {
    code: '4669',
    descriptionFi: 'Muiden koneiden, laitteiden ja tarvikkeiden tukkukauppa',
    descriptionEn:
      'Wholesale trade of other machinery, equipment, and accessories',
  },
  {
    code: '46691',
    descriptionFi: 'Sähkötarviketukkukauppa',
    descriptionEn: 'Wholesale trade of electrical accessories',
  },
  {
    code: '46692',
    descriptionFi: 'Teollisuudessa käytettävien muiden koneiden tukkukauppa',
    descriptionEn: 'Wholesale trade of other machinery used in industry',
  },
  {
    code: '46699',
    descriptionFi:
      'Muualla luokittelemattomien koneiden ja laitteiden tukkukauppa',
    descriptionEn:
      'Wholesale trade of other unclassified machinery and equipment',
  },
  {
    code: '467',
    descriptionFi: 'Muu erikoistunut tukkukauppa',
    descriptionEn: 'Other specialized wholesale trade',
  },
  {
    code: '4671',
    descriptionFi:
      'Kiinteiden, nestemäisten ja kaasumaisten polttoaineiden yms. tukkukauppa',
    descriptionEn: 'Wholesale trade of solid, liquid, and gaseous fuels, etc.',
  },
  {
    code: '46711',
    descriptionFi: 'Nestemäisten ja kaasumaisten polttoaineiden tukkukauppa',
    descriptionEn: 'Wholesale trade of liquid and gaseous fuels',
  },
  {
    code: '46719',
    descriptionFi: 'Muiden polttoaineiden tukkukauppa',
    descriptionEn: 'Wholesale trade of other fuels',
  },
  {
    code: '4672',
    descriptionFi: 'Raakametallien ja metallimalmien tukkukauppa',
    descriptionEn: 'Wholesale trade of raw metals and metal ores',
  },
  {
    code: '46720',
    descriptionFi: 'Raakametallien ja metallimalmien tukkukauppa',
    descriptionEn: 'Wholesale trade of raw metals and metal ores',
  },
  {
    code: '4673',
    descriptionFi:
      'Puun, rakennusmateriaalien ja saniteettilaitteiden tukkukauppa',
    descriptionEn:
      'Wholesale trade of wood, building materials, and sanitary equipment',
  },
  {
    code: '46731',
    descriptionFi: 'Raakapuutukkukauppa',
    descriptionEn: 'Wholesale trade of raw timber',
  },
  {
    code: '46732',
    descriptionFi: 'Puutavaratuotetukkukauppa',
    descriptionEn: 'Wholesale trade of timber products',
  },
  {
    code: '46733',
    descriptionFi: 'Metalli- ja mineraalituotteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of metal and mineral products',
  },
  {
    code: '46734',
    descriptionFi: 'Kylpyhuonekalusteiden ja -tarvikkeiden tukkukauppa',
    descriptionEn: 'Wholesale trade of bathroom furniture and accessories',
  },
  {
    code: '46735',
    descriptionFi: 'Lattianpäällysteiden ja tapettien tukkukauppa',
    descriptionEn: 'Wholesale trade of flooring and wallpaper',
  },
  {
    code: '46739',
    descriptionFi: 'Rakennustarvikkeiden yleistukkukauppa',
    descriptionEn: 'Wholesale trade of general building materials',
  },
  {
    code: '4674',
    descriptionFi:
      'Rautakauppatavaroiden, LVI-laitteiden ja -tarvikkeiden tukkukauppa',
    descriptionEn:
      'Wholesale trade of hardware, HVAC equipment, and accessories',
  },
  {
    code: '46741',
    descriptionFi: 'Työkalu- ja tarviketukkukauppa',
    descriptionEn: 'Wholesale trade of tools and accessories',
  },
  {
    code: '46742',
    descriptionFi:
      'Lämpö-, vesi- ja ilmastointilaitteiden ja -tarvikkeiden tukkukauppa',
    descriptionEn:
      'Wholesale trade of heating, water, and air conditioning equipment and accessories',
  },
  {
    code: '4675',
    descriptionFi: 'Peruskemikaalien, lannoitteiden yms. tukkukauppa',
    descriptionEn: 'Wholesale trade of basic chemicals, fertilizers, etc.',
  },
  {
    code: '46750',
    descriptionFi: 'Peruskemikaalien, lannoitteiden yms. tukkukauppa',
    descriptionEn: 'Wholesale trade of basic chemicals, fertilizers, etc.',
  },
  {
    code: '4676',
    descriptionFi: 'Muiden välituotteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of other intermediate products',
  },
  {
    code: '46760',
    descriptionFi: 'Muiden välituotteiden tukkukauppa',
    descriptionEn: 'Wholesale trade of other intermediate products',
  },
  {
    code: '4677',
    descriptionFi: 'Jätteen ja romun tukkukauppa',
    descriptionEn: 'Wholesale trade of waste and scrap',
  },
  {
    code: '46770',
    descriptionFi: 'Jätteen ja romun tukkukauppa',
    descriptionEn: 'Wholesale trade of waste and scrap',
  },
  {
    code: '469',
    descriptionFi: 'Muu tukkukauppa',
    descriptionEn: 'Other wholesale trade',
  },
  {
    code: '4690',
    descriptionFi: 'Muu tukkukauppa',
    descriptionEn: 'Other wholesale trade',
  },
  {
    code: '46901',
    descriptionFi: 'Yleistukkukauppa',
    descriptionEn: 'General wholesale trade',
  },
  {
    code: '46909',
    descriptionFi: 'Muualla luokittelematon tukkukauppa',
    descriptionEn: 'Other unclassified wholesale trade',
  },
  {
    code: '47',
    descriptionFi:
      'Vähittäiskauppa (pl. moottoriajoneuvojen ja moottoripyörien kauppa)',
    descriptionEn:
      'Retail trade (except for the sale of motor vehicles and motorcycles)',
  },
  {
    code: '471',
    descriptionFi: 'Vähittäiskauppa erikoistumattomissa myymälöissä',
    descriptionEn: 'Retail trade in non-specialized stores',
  },
  {
    code: '4711',
    descriptionFi:
      'Elintarvikkeiden, juomien ja tupakan erikoistumaton vähittäiskauppa',
    descriptionEn:
      'Non-specialized retail trade of food, beverages, and tobacco',
  },
  {
    code: '47111',
    descriptionFi: 'Isot supermarketit (yli 1000 m2)',
    descriptionEn: 'Large supermarkets (over 1000 m²)',
  },
  {
    code: '47112',
    descriptionFi: 'Pienet supermarketit (400-1000 m2)',
    descriptionEn: 'Small supermarkets (400-1000 m²)',
  },
  {
    code: '47113',
    descriptionFi: 'Valintamyymälät (yli 100, alle 400 m2)',
    descriptionEn: 'Convenience stores (over 100 m², under 400 m²)',
  },
  {
    code: '47114',
    descriptionFi: 'Elintarvike-, makeis- ym. kioskit (alle 100 m2)',
    descriptionEn: 'Food, candy, etc. kiosks (under 100 m²)',
  },
  {
    code: '4719',
    descriptionFi: 'Muu vähittäiskauppa erikoistumattomissa myymälöissä',
    descriptionEn: 'Other retail trade in non-specialized stores',
  },
  {
    code: '47191',
    descriptionFi: 'Itsepalvelutavaratalot (yli 2500 m2)',
    descriptionEn: 'Self-service department stores (over 2500 m²)',
  },
  {
    code: '47192',
    descriptionFi: 'Tavaratalot (yli 2500 m2)',
    descriptionEn: 'Department stores (over 2500 m²)',
  },
  {
    code: '47199',
    descriptionFi:
      'Pienoistavaratalot ja muut erikoistumattomat myymälät (alle 2500 m2)',
    descriptionEn:
      'Small department stores and other non-specialized stores (under 2500 m²)',
  },
  {
    code: '472',
    descriptionFi:
      'Elintarvikkeiden, juomien ja tupakan vähittäiskauppa erikoismyymälöissä',
    descriptionEn:
      'Retail trade of food, beverages, and tobacco in specialized stores',
  },
  {
    code: '4721',
    descriptionFi: 'Hedelmien, marjojen ja vihannesten vähittäiskauppa',
    descriptionEn: 'Retail trade of fruits, berries, and vegetables',
  },
  {
    code: '47210',
    descriptionFi: 'Hedelmien, marjojen ja vihannesten vähittäiskauppa',
    descriptionEn: 'Retail trade of fruits, berries, and vegetables',
  },
  {
    code: '4722',
    descriptionFi: 'Lihan ja lihatuotteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of meat and meat products',
  },
  {
    code: '47220',
    descriptionFi: 'Lihan ja lihatuotteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of meat and meat products',
  },
  {
    code: '4723',
    descriptionFi: 'Kalan, äyriäisten ja nilviäisten vähittäiskauppa',
    descriptionEn: 'Retail trade of fish, shellfish, and mollusks',
  },
  {
    code: '47230',
    descriptionFi: 'Kalan, äyriäisten ja nilviäisten vähittäiskauppa',
    descriptionEn: 'Retail trade of fish, shellfish, and mollusks',
  },
  {
    code: '4724',
    descriptionFi: 'Leipomotuotteiden ja makeisten vähittäiskauppa',
    descriptionEn: 'Retail trade of bakery products and sweets',
  },
  {
    code: '47241',
    descriptionFi: 'Leipomotuotteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of bakery products',
  },
  {
    code: '47242',
    descriptionFi: 'Makeisten vähittäiskauppa',
    descriptionEn: 'Retail trade of sweets',
  },
  {
    code: '4725',
    descriptionFi: 'Alkoholi- ja muiden juomien vähittäiskauppa',
    descriptionEn: 'Retail trade of alcoholic and other beverages',
  },
  {
    code: '47250',
    descriptionFi: 'Alkoholi- ja muiden juomien vähittäiskauppa',
    descriptionEn: 'Retail trade of alcoholic and other beverages',
  },
  {
    code: '4726',
    descriptionFi: 'Tupakkatuotteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of tobacco products',
  },
  {
    code: '47260',
    descriptionFi: 'Tupakkatuotteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of tobacco products',
  },
  {
    code: '4729',
    descriptionFi: 'Muu vähittäiskauppa erikoismyymälöissä',
    descriptionEn: 'Other retail trade in specialized stores',
  },
  {
    code: '47291',
    descriptionFi: 'Jäätelökioskit',
    descriptionEn: 'Ice cream kiosks',
  },
  {
    code: '47292',
    descriptionFi: 'Luontaistuotteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of natural products',
  },
  {
    code: '47299',
    descriptionFi: 'Muu päivittäistavaroiden erikoisvähittäiskauppa',
    descriptionEn: 'Other retail trade of daily goods',
  },
  {
    code: '473',
    descriptionFi: 'Ajoneuvojen polttoaineen vähittäiskauppa',
    descriptionEn: 'Retail trade of vehicle fuel',
  },
  {
    code: '4730',
    descriptionFi: 'Ajoneuvojen polttoaineen vähittäiskauppa',
    descriptionEn: 'Retail trade of vehicle fuel',
  },
  {
    code: '47301',
    descriptionFi: 'Huoltamotoiminta',
    descriptionEn: 'Service station operations',
  },
  {
    code: '47302',
    descriptionFi: 'Polttoaineiden vähittäiskauppa automaateista',
    descriptionEn: 'Retail trade of fuels from automated machines',
  },
  {
    code: '474',
    descriptionFi:
      'Tieto- ja viestintäteknisten laitteiden vähittäiskauppa erikoismyymälöissä',
    descriptionEn:
      'Retail trade of information and communication technology devices in specialized stores',
  },
  {
    code: '4741',
    descriptionFi:
      'Tietokoneiden, niiden oheislaitteiden ja ohjelmistojen vähittäiskauppa',
    descriptionEn: 'Retail trade of computers, their peripherals, and software',
  },
  {
    code: '47410',
    descriptionFi:
      'Tietokoneiden, niiden oheislaitteiden ja ohjelmistojen vähittäiskauppa',
    descriptionEn: 'Retail trade of computers, their peripherals, and software',
  },
  {
    code: '4742',
    descriptionFi: 'Televiestintälaitteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of telecommunication devices',
  },
  {
    code: '47420',
    descriptionFi: 'Televiestintälaitteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of telecommunication devices',
  },
  {
    code: '4743',
    descriptionFi: 'Viihde-elektroniikan vähittäiskauppa',
    descriptionEn: 'Retail trade of entertainment electronics',
  },
  {
    code: '47430',
    descriptionFi: 'Viihde-elektroniikan vähittäiskauppa',
    descriptionEn: 'Retail trade of entertainment electronics',
  },
  {
    code: '475',
    descriptionFi:
      'Muiden kotitaloustavaroiden vähittäiskauppa erikoismyymälöissä',
    descriptionEn:
      'Retail trade of other household goods in specialized stores',
  },
  {
    code: '4751',
    descriptionFi: 'Tekstiilien vähittäiskauppa',
    descriptionEn: 'Retail trade of textiles',
  },
  {
    code: '47511',
    descriptionFi: 'Kankaiden vähittäiskauppa',
    descriptionEn: 'Retail trade of fabrics',
  },
  {
    code: '47512',
    descriptionFi: 'Lankojen ja käsityötarvikkeiden vähittäiskauppa',
    descriptionEn: 'Retail trade of yarns and craft supplies',
  },
  {
    code: '4752',
    descriptionFi: 'Rautakauppatavaran, maalien ja lasin vähittäiskauppa',
    descriptionEn: 'Retail trade of hardware, paints, and glass',
  },
  {
    code: '47521',
    descriptionFi: 'Rauta- ja rakennustarvikkeiden yleisvähittäiskauppa',
    descriptionEn: 'Retail trade of hardware and building materials',
  },
  {
    code: '47522',
    descriptionFi: 'Maailmien vähittäiskauppa',
    descriptionEn: 'Retail trade of paints',
  },
  {
    code: '47523',
    descriptionFi: 'Keittiö- ja saniteettitilojen kalusteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of kitchen and sanitary equipment',
  },
  {
    code: '47529',
    descriptionFi: 'Muu rauta- ja rakennusalan vähittäiskauppa',
    descriptionEn: 'Other retail trade of hardware and construction materials',
  },
  {
    code: '476',
    descriptionFi:
      'Kulttuuri- ja vapaa-ajan tuotteiden vähittäiskauppa erikoismyymälöissä',
    descriptionEn:
      'Retail trade of cultural and recreational products in specialized stores',
  },
  {
    code: '4761',
    descriptionFi: 'Kirjojen vähittäiskauppa',
    descriptionEn: 'Retail trade of books',
  },
  {
    code: '47610',
    descriptionFi: 'Kirjojen vähittäiskauppa',
    descriptionEn: 'Retail trade of books',
  },
  {
    code: '4762',
    descriptionFi: 'Sanomalehtien ja paperitavaran vähittäiskauppa',
    descriptionEn: 'Retail trade of newspapers and paper products',
  },
  {
    code: '47621',
    descriptionFi: 'Paperi- ja toimistotarvikkeiden vähittäiskauppa',
    descriptionEn: 'Retail trade of paper and office supplies',
  },
  {
    code: '47622',
    descriptionFi: 'Aikakausjulkaisujen ja lehtien vähittäiskauppa',
    descriptionEn: 'Retail trade of periodicals and magazines',
  },
  {
    code: '4763',
    descriptionFi: 'Musiikki- ja videotallenteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of music and video recordings',
  },
  {
    code: '47630',
    descriptionFi: 'Musiikki- ja videotallenteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of music and video recordings',
  },
  {
    code: '4764',
    descriptionFi: 'Urheiluvälineiden vähittäiskauppa',
    descriptionEn: 'Retail trade of sporting goods',
  },
  {
    code: '47641',
    descriptionFi: 'Urheiluvälineiden ja polkupyörien vähittäiskauppa',
    descriptionEn: 'Retail trade of sporting goods and bicycles',
  },
  {
    code: '47642',
    descriptionFi: 'Veneiden ja veneilytarvikkeiden vähittäiskauppa',
    descriptionEn: 'Retail trade of boats and boating equipment',
  },
  {
    code: '4765',
    descriptionFi: 'Pelien ja leikkikalujen vähittäiskauppa',
    descriptionEn: 'Retail trade of games and toys',
  },
  {
    code: '47650',
    descriptionFi: 'Pelien ja leikkikalujen vähittäiskauppa',
    descriptionEn: 'Retail trade of games and toys',
  },
  {
    code: '477',
    descriptionFi: 'Muiden tavaroiden vähittäiskauppa erikoismyymälöissä',
    descriptionEn: 'Retail trade of other goods in specialized stores',
  },
  {
    code: '4771',
    descriptionFi: 'Vaatteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of clothing',
  },
  {
    code: '47711',
    descriptionFi: 'Naisten vaatteiden vähittäiskauppa',
    descriptionEn: "Retail trade of women's clothing",
  },
  {
    code: '47712',
    descriptionFi: 'Miesten vaatteiden vähittäiskauppa',
    descriptionEn: "Retail trade of men's clothing",
  },
  {
    code: '47713',
    descriptionFi: 'Lastenvaatteiden vähittäiskauppa',
    descriptionEn: "Retail trade of children's clothing",
  },
  {
    code: '47714',
    descriptionFi: 'Turkisten ja nahkavaatteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of fur and leather garments',
  },
  {
    code: '47715',
    descriptionFi: 'Lakkien ja hattujen vähittäiskauppa',
    descriptionEn: 'Retail trade of hats and caps',
  },
  {
    code: '47719',
    descriptionFi: 'Vaatteiden yleisvähittäiskauppa',
    descriptionEn: 'General retail trade of clothing',
  },
  {
    code: '4772',
    descriptionFi: 'Jalkineiden ja nahkatavaroiden vähittäiskauppa',
    descriptionEn: 'Retail trade of footwear and leather goods',
  },
  {
    code: '47721',
    descriptionFi: 'Jalkineiden vähittäiskauppa',
    descriptionEn: 'Retail trade of footwear',
  },
  {
    code: '47722',
    descriptionFi: 'Laukkujen vähittäiskauppa',
    descriptionEn: 'Retail trade of bags',
  },
  {code: '4773', descriptionFi: 'Apteekit', descriptionEn: 'Pharmacies'},
  {code: '47730', descriptionFi: 'Apteekit', descriptionEn: 'Pharmacies'},
  {
    code: '4774',
    descriptionFi: 'Terveydenhoitotarvikkeiden vähittäiskauppa',
    descriptionEn: 'Retail trade of healthcare products',
  },
  {
    code: '47740',
    descriptionFi: 'Terveydenhoitotarvikkeiden vähittäiskauppa',
    descriptionEn: 'Retail trade of healthcare products',
  },
  {
    code: '4775',
    descriptionFi: 'Kosmetiikka- ja hygieniatuotteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of cosmetics and hygiene products',
  },
  {
    code: '47750',
    descriptionFi: 'Kosmetiikka- ja hygieniatuotteiden vähittäiskauppa',
    descriptionEn: 'Retail trade of cosmetics and hygiene products',
  },
  {
    code: '4776',
    descriptionFi:
      'Kukkien, kasvien, siementen, lannoitteiden, lemmikkieläinten ja niiden ruokien vähittäiskauppa',
    descriptionEn:
      'Retail trade of flowers, plants, seeds, fertilizers, pets, and pet food',
  },
  {
    code: '47761',
    descriptionFi: 'Kukkien vähittäiskauppa',
    descriptionEn: 'Retail trade of flowers',
  },
  {
    code: '47762',
    descriptionFi: 'Kukkakioskit',
    descriptionEn: 'Flower kiosks',
  },
  {
    code: '47763',
    descriptionFi: 'Puutarha-alan vähittäiskauppa',
    descriptionEn: 'Retail trade of gardening products',
  },
  {
    code: '47764',
    descriptionFi:
      'Lemmikkieläinten, niiden ruokien ja tarvikkeiden vähittäiskauppa',
    descriptionEn: 'Retail trade of pets, their food, and supplies',
  },
  {
    code: '4777',
    descriptionFi: 'Kultasepänteosten ja kellojen vähittäiskauppa',
    descriptionEn: 'Retail trade of jewelry and watches',
  },
  {
    code: '47770',
    descriptionFi: 'Kultasepänteosten ja kellojen vähittäiskauppa',
    descriptionEn: 'Retail trade of jewelry and watches',
  },
  {
    code: '478',
    descriptionFi: 'Tori- ja markkinakauppa',
    descriptionEn: 'Market and fair trade',
  },
  {
    code: '4781',
    descriptionFi:
      'Elintarvikkeiden, juomien ja tupakkatuotteiden vähittäiskauppa kojuista ja toreilla',
    descriptionEn:
      'Retail trade of food, drinks, and tobacco products at stalls and markets',
  },
  {
    code: '47810',
    descriptionFi:
      'Elintarvikkeiden, juomien ja tupakkatuotteiden vähittäiskauppa kojuista ja toreilla',
    descriptionEn:
      'Retail trade of food, drinks, and tobacco products at stalls and markets',
  },
  {
    code: '4782',
    descriptionFi:
      'Tekstiilien, vaatteiden ja jalkineiden vähittäiskauppa kojuista ja toreilla',
    descriptionEn:
      'Retail trade of textiles, clothing, and footwear at stalls and markets',
  },
  {
    code: '47820',
    descriptionFi:
      'Tekstiilien, vaatteiden ja jalkineiden vähittäiskauppa kojuista ja toreilla',
    descriptionEn:
      'Retail trade of textiles, clothing, and footwear at stalls and markets',
  },
  {
    code: '4789',
    descriptionFi: 'Muiden tavaroiden vähittäiskauppa kojuista ja toreilla',
    descriptionEn: 'Retail trade of other goods at stalls and markets',
  },
  {
    code: '47890',
    descriptionFi: 'Muiden tavaroiden vähittäiskauppa kojuista ja toreilla',
    descriptionEn: 'Retail trade of other goods at stalls and markets',
  },
  {
    code: '479',
    descriptionFi:
      'Vähittäiskauppa muualla kuin myymälöissä (pl. tori- ja markkinakauppa)',
    descriptionEn:
      'Retail trade outside of stores (excluding market and fair trade)',
  },
  {
    code: '4791',
    descriptionFi:
      'Vähittäiskauppa postimyyntiliikkeiden tai Internetin välityksellä',
    descriptionEn: 'Retail trade via mail order or the internet',
  },
  {
    code: '47911',
    descriptionFi:
      'Kirjojen, musiikki- ja videotallenteiden postimyynti ja verkkokauppa',
    descriptionEn:
      'Mail order and online sales of books, music, and video recordings',
  },
  {
    code: '47912',
    descriptionFi: 'Vaatteiden postimyynti ja verkkokauppa',
    descriptionEn: 'Mail order and online sales of clothing',
  },
  {
    code: '47913',
    descriptionFi: 'Laajan valikoiman postimyynti ja verkkokauppa',
    descriptionEn: 'Mail order and online sales of a wide range of products',
  },
  {
    code: '47919',
    descriptionFi: 'Muu postimyynti ja verkkokauppa',
    descriptionEn: 'Other mail order and online sales',
  },
  {
    code: '4799',
    descriptionFi: 'Muu vähittäiskauppa muualla kuin myymälöissä',
    descriptionEn: 'Other retail trade outside of stores',
  },
  {
    code: '47990',
    descriptionFi: 'Muu vähittäiskauppa muualla kuin myymälöissä',
    descriptionEn: 'Other retail trade outside of stores',
  },
  {
    code: '49',
    descriptionFi: 'Maaliikenne ja putkijohtokuljetus',
    descriptionEn: 'Land transport and pipeline transport',
  },
  {
    code: '491',
    descriptionFi: 'Rautateiden henkilöliikenne, kaukoliikenne',
    descriptionEn: 'Rail passenger transport, long-distance',
  },
  {
    code: '4910',
    descriptionFi: 'Rautateiden henkilöliikenne, kaukoliikenne',
    descriptionEn: 'Rail passenger transport, long-distance',
  },
  {
    code: '49100',
    descriptionFi: 'Rautateiden henkilöliikenne, kaukoliikenne',
    descriptionEn: 'Rail passenger transport, long-distance',
  },
  {
    code: '492',
    descriptionFi: 'Rautateiden tavaraliikenne',
    descriptionEn: 'Rail freight transport',
  },
  {
    code: '4920',
    descriptionFi: 'Rautateiden tavaraliikenne',
    descriptionEn: 'Rail freight transport',
  },
  {
    code: '49200',
    descriptionFi: 'Rautateiden tavaraliikenne',
    descriptionEn: 'Rail freight transport',
  },
  {
    code: '493',
    descriptionFi: 'Muu maaliikenteen henkilöliikenne',
    descriptionEn: 'Other land transport passenger services',
  },
  {
    code: '4931',
    descriptionFi: 'Paikallisliikenne',
    descriptionEn: 'Local passenger transport',
  },
  {
    code: '49310',
    descriptionFi: 'Paikallisliikenne',
    descriptionEn: 'Local passenger transport',
  },
  {
    code: '4932',
    descriptionFi: 'Taksiliikenne',
    descriptionEn: 'Taxi transport',
  },
  {
    code: '49320',
    descriptionFi: 'Taksiliikenne',
    descriptionEn: 'Taxi transport',
  },
  {
    code: '4939',
    descriptionFi: 'Muualla luokittelematon maaliikenteen henkilöliikenne',
    descriptionEn: 'Other unspecified land transport passenger services',
  },
  {
    code: '49391',
    descriptionFi: 'Säännöllinen linja-autojen kaukoliikenne',
    descriptionEn: 'Regular long-distance bus services',
  },
  {
    code: '49392',
    descriptionFi: 'Linja-autojen tilausliikenne',
    descriptionEn: 'Charter bus services',
  },
  {
    code: '49399',
    descriptionFi: 'Muualla luokittelematon muu maaliikenteen henkilöliikenne',
    descriptionEn: 'Other unspecified land transport passenger services',
  },
  {
    code: '494',
    descriptionFi: 'Tieliikenteen tavarankuljetus ja muuttopalvelut',
    descriptionEn: 'Road freight transport and moving services',
  },
  {
    code: '4941',
    descriptionFi: 'Tieliikenteen tavarankuljetus',
    descriptionEn: 'Road freight transport',
  },
  {
    code: '49410',
    descriptionFi: 'Tieliikenteen tavarankuljetus',
    descriptionEn: 'Road freight transport',
  },
  {
    code: '4942',
    descriptionFi: 'Muuttopalvelut',
    descriptionEn: 'Moving services',
  },
  {
    code: '49420',
    descriptionFi: 'Muuttopalvelut',
    descriptionEn: 'Moving services',
  },
  {
    code: '495',
    descriptionFi: 'Putkijohtokuljetus',
    descriptionEn: 'Pipeline transport',
  },
  {
    code: '4950',
    descriptionFi: 'Putkijohtokuljetus',
    descriptionEn: 'Pipeline transport',
  },
  {
    code: '49500',
    descriptionFi: 'Putkijohtokuljetus',
    descriptionEn: 'Pipeline transport',
  },

  {code: '50', descriptionFi: 'Vesiliikenne', descriptionEn: 'Water transport'},
  {
    code: '501',
    descriptionFi: 'Meri- ja rannikkovesiliikenteen henkilökuljetus',
    descriptionEn: 'Sea and coastal passenger water transport',
  },
  {
    code: '5010',
    descriptionFi: 'Meri- ja rannikkovesiliikenteen henkilökuljetus',
    descriptionEn: 'Sea and coastal passenger water transport',
  },
  {
    code: '50101',
    descriptionFi: 'Meriliikenteen henkilökuljetus',
    descriptionEn: 'Sea passenger transport',
  },
  {
    code: '50102',
    descriptionFi: 'Rannikkovesiliikenteen henkilökuljetus',
    descriptionEn: 'Coastal passenger transport',
  },
  {
    code: '502',
    descriptionFi: 'Meri- ja rannikkovesiliikenteen tavarankuljetus',
    descriptionEn: 'Sea and coastal freight water transport',
  },
  {
    code: '5020',
    descriptionFi: 'Meri- ja rannikkovesiliikenteen tavarankuljetus',
    descriptionEn: 'Sea and coastal freight water transport',
  },
  {
    code: '50201',
    descriptionFi: 'Meriliikenteen tavarankuljetus',
    descriptionEn: 'Sea freight transport',
  },
  {
    code: '50202',
    descriptionFi: 'Rannikkovesiliikenteen tavarankuljetus',
    descriptionEn: 'Coastal freight transport',
  },
  {
    code: '503',
    descriptionFi: 'Sisävesiliikenteen henkilökuljetus',
    descriptionEn: 'Inland passenger water transport',
  },
  {
    code: '5030',
    descriptionFi: 'Sisävesiliikenteen henkilökuljetus',
    descriptionEn: 'Inland passenger water transport',
  },
  {
    code: '50300',
    descriptionFi: 'Sisävesiliikenteen henkilökuljetus',
    descriptionEn: 'Inland passenger water transport',
  },
  {
    code: '504',
    descriptionFi: 'Sisävesiliikenteen tavarankuljetus',
    descriptionEn: 'Inland freight water transport',
  },
  {
    code: '5040',
    descriptionFi: 'Sisävesiliikenteen tavarankuljetus',
    descriptionEn: 'Inland freight water transport',
  },
  {
    code: '50400',
    descriptionFi: 'Sisävesiliikenteen tavarankuljetus',
    descriptionEn: 'Inland freight water transport',
  },
  {code: '51', descriptionFi: 'Ilmaliikenne', descriptionEn: 'Air transport'},
  {
    code: '511',
    descriptionFi: 'Matkustajalentoliikenne',
    descriptionEn: 'Passenger air transport',
  },
  {
    code: '5110',
    descriptionFi: 'Matkustajalentoliikenne',
    descriptionEn: 'Passenger air transport',
  },
  {
    code: '51101',
    descriptionFi: 'Säännöllinen lentoliikenne',
    descriptionEn: 'Scheduled air transport',
  },
  {
    code: '51102',
    descriptionFi: 'Tilauslentoliikenne',
    descriptionEn: 'Non-scheduled air transport',
  },
  {
    code: '512',
    descriptionFi: 'Lentoliikenteen tavarankuljetus ja avaruusliikenne',
    descriptionEn: 'Freight air transport and space transport',
  },
  {
    code: '5121',
    descriptionFi: 'Lentoliikenteen tavarankuljetus',
    descriptionEn: 'Freight air transport',
  },
  {
    code: '51210',
    descriptionFi: 'Lentoliikenteen tavarankuljetus',
    descriptionEn: 'Freight air transport',
  },
  {
    code: '5122',
    descriptionFi: 'Avaruusliikenne',
    descriptionEn: 'Space transport',
  },
  {
    code: '51220',
    descriptionFi: 'Avaruusliikenne',
    descriptionEn: 'Space transport',
  },
  {
    code: '52',
    descriptionFi: 'Varastointi ja liikennettä palveleva toiminta',
    descriptionEn: 'Warehousing and support activities for transportation',
  },
  {code: '521', descriptionFi: 'Varastointi', descriptionEn: 'Warehousing'},
  {code: '5210', descriptionFi: 'Varastointi', descriptionEn: 'Warehousing'},
  {code: '52100', descriptionFi: 'Varastointi', descriptionEn: 'Warehousing'},
  {
    code: '522',
    descriptionFi: 'Liikennettä palveleva toiminta',
    descriptionEn: 'Support activities for transportation',
  },
  {
    code: '5221',
    descriptionFi: 'Maaliikennettä palveleva toiminta',
    descriptionEn: 'Service activities incidental to land transportation',
  },
  {
    code: '52211',
    descriptionFi: 'Linja-autoasemat',
    descriptionEn: 'Bus stations',
  },
  {
    code: '52212',
    descriptionFi: 'Tieliikenteen terminaalitoiminta',
    descriptionEn: 'Road transport terminal activities',
  },
  {
    code: '52213',
    descriptionFi: 'Maksullinen pysäköinti',
    descriptionEn: 'Paid parking',
  },
  {
    code: '52219',
    descriptionFi: 'Muu maaliikennettä palveleva toiminta',
    descriptionEn: 'Other service activities incidental to land transportation',
  },
  {
    code: '5222',
    descriptionFi: 'Vesiliikennettä palveleva toiminta',
    descriptionEn: 'Service activities incidental to water transportation',
  },
  {code: '52221', descriptionFi: 'Satamat', descriptionEn: 'Ports'},
  {
    code: '52229',
    descriptionFi: 'Muu vesiliikennettä palveleva toiminta',
    descriptionEn:
      'Other service activities incidental to water transportation',
  },
  {
    code: '5223',
    descriptionFi: 'Ilmaliikennettä palveleva toiminta',
    descriptionEn: 'Service activities incidental to air transportation',
  },
  {
    code: '52230',
    descriptionFi: 'Ilmaliikennettä palveleva toiminta',
    descriptionEn: 'Service activities incidental to air transportation',
  },
  {
    code: '5224',
    descriptionFi: 'Lastinkäsittely',
    descriptionEn: 'Cargo handling',
  },
  {
    code: '52240',
    descriptionFi: 'Lastinkäsittely',
    descriptionEn: 'Cargo handling',
  },
  {
    code: '5229',
    descriptionFi: 'Muu liikennettä palveleva toiminta',
    descriptionEn: 'Other transportation support activities',
  },
  {
    code: '52291',
    descriptionFi: 'Huolinta ja rahtaus',
    descriptionEn: 'Forwarding and freight',
  },
  {
    code: '52299',
    descriptionFi: 'Muu kuljetusvälitys',
    descriptionEn: 'Other transportation support activities',
  },
  {
    code: '53',
    descriptionFi: 'Posti- ja kuriiritoiminta',
    descriptionEn: 'Postal and courier activities',
  },
  {
    code: '531',
    descriptionFi: 'Postin yleispalvelu',
    descriptionEn: 'Postal activities under universal service obligation',
  },
  {
    code: '5310',
    descriptionFi: 'Postin yleispalvelu',
    descriptionEn: 'Postal activities under universal service obligation',
  },
  {
    code: '53100',
    descriptionFi: 'Postin yleispalvelu',
    descriptionEn: 'Postal activities under universal service obligation',
  },
  {
    code: '532',
    descriptionFi: 'Muu posti-, jakelu- ja kuriiritoiminta',
    descriptionEn: 'Other postal and courier activities',
  },
  {
    code: '5320',
    descriptionFi: 'Muu posti-, jakelu- ja kuriiritoiminta',
    descriptionEn: 'Other postal and courier activities',
  },
  {
    code: '53200',
    descriptionFi: 'Muu posti-, jakelu- ja kuriiritoiminta',
    descriptionEn: 'Other postal and courier activities',
  },
  {code: '55', descriptionFi: 'Majoitus', descriptionEn: 'Accommodation'},
  {
    code: '551',
    descriptionFi: 'Hotellit ja vastaavat majoitusliikkeet',
    descriptionEn: 'Hotels and similar accommodation',
  },
  {
    code: '5510',
    descriptionFi: 'Hotellit ja vastaavat majoitusliikkeet',
    descriptionEn: 'Hotels and similar accommodation',
  },
  {code: '55101', descriptionFi: 'Hotellit', descriptionEn: 'Hotels'},
  {
    code: '55109',
    descriptionFi: 'Motellit, matkustajakodit ja vastaavat majoitusliikkeet',
    descriptionEn: 'Motels, inns and similar accommodation',
  },
  {
    code: '552',
    descriptionFi: 'Lomakylät, retkeilymajat yms. majoitus',
    descriptionEn: 'Holiday and other short-stay accommodation',
  },
  {
    code: '5520',
    descriptionFi: 'Lomakylät, retkeilymajat yms. majoitus',
    descriptionEn: 'Holiday and other short-stay accommodation',
  },
  {
    code: '55201',
    descriptionFi: 'Retkeilymajat',
    descriptionEn: 'Youth hostels',
  },
  {
    code: '55209',
    descriptionFi: 'Lomakylät yms. majoitus',
    descriptionEn: 'Other holiday and short-stay accommodation',
  },
  {
    code: '553',
    descriptionFi: 'Leirintäalueet, asuntovaunu- ja matkailuvaunualueet',
    descriptionEn:
      'Camping grounds, recreational vehicle parks and trailer parks',
  },
  {
    code: '5530',
    descriptionFi: 'Leirintäalueet, asuntovaunu- ja matkailuvaunualueet',
    descriptionEn:
      'Camping grounds, recreational vehicle parks and trailer parks',
  },
  {
    code: '55300',
    descriptionFi: 'Leirintäalueet, asuntovaunu- ja matkailuvaunualueet',
    descriptionEn:
      'Camping grounds, recreational vehicle parks and trailer parks',
  },
  {
    code: '559',
    descriptionFi: 'Muu majoitus',
    descriptionEn: 'Other accommodation',
  },
  {
    code: '5590',
    descriptionFi: 'Muu majoitus',
    descriptionEn: 'Other accommodation',
  },
  {
    code: '55901',
    descriptionFi: 'Asuntolat ja täysihoitolat yms.',
    descriptionEn: 'Dormitories and boarding houses',
  },
  {
    code: '55902',
    descriptionFi: 'Maatilamatkailu, bed & breakfast',
    descriptionEn: 'Farm tourism, bed & breakfast',
  },
  {
    code: '55903',
    descriptionFi: 'Lomamökkien vuokraus',
    descriptionEn: 'Holiday cottage rental',
  },
  {
    code: '55909',
    descriptionFi: 'Muualla luokittelematon majoitustoiminta',
    descriptionEn: 'Other accommodation n.e.c.',
  },
  {
    code: '56',
    descriptionFi: 'Ravitsemistoiminta',
    descriptionEn: 'Food and beverage service activities',
  },
  {
    code: '561',
    descriptionFi: 'Ravintolat ja vastaava ravitsemistoiminta',
    descriptionEn: 'Restaurants and mobile food service activities',
  },
  {
    code: '5610',
    descriptionFi: 'Ravintolat ja vastaava ravitsemistoiminta',
    descriptionEn: 'Restaurants and mobile food service activities',
  },
  {code: '56101', descriptionFi: 'Ravintolat', descriptionEn: 'Restaurants'},
  {
    code: '56102',
    descriptionFi: 'Kahvila-ravintolat',
    descriptionEn: 'Cafeterias',
  },
  {code: '56103', descriptionFi: 'Ruokakioskit', descriptionEn: 'Food kiosks'},
  {
    code: '562',
    descriptionFi: 'Ateriapalvelut ja muut ravitsemispalvelut',
    descriptionEn: 'Event catering and other food service activities',
  },
  {code: '5621', descriptionFi: 'Pitopalvelu', descriptionEn: 'Catering'},
  {code: '56210', descriptionFi: 'Pitopalvelu', descriptionEn: 'Catering'},
  {
    code: '5629',
    descriptionFi: 'Henkilöstö- ja laitosruokalat',
    descriptionEn: 'Other food service activities',
  },
  {
    code: '56290',
    descriptionFi: 'Henkilöstö- ja laitosruokalat',
    descriptionEn: 'Other food service activities',
  },
  {
    code: '563',
    descriptionFi: 'Baarit ja kahvilat',
    descriptionEn: 'Beverage serving activities',
  },
  {
    code: '5630',
    descriptionFi: 'Baarit ja kahvilat',
    descriptionEn: 'Beverage serving activities',
  },
  {
    code: '56301',
    descriptionFi: 'Olut- ja drinkkibaarit',
    descriptionEn: 'Beer and drink bars',
  },
  {
    code: '56302',
    descriptionFi: 'Kahvilat ja kahvibaarit',
    descriptionEn: 'Cafes and coffee bars',
  },
  {
    code: '58',
    descriptionFi: 'Kustannustoiminta',
    descriptionEn: 'Publishing activities',
  },
  {
    code: '581',
    descriptionFi: 'Kirjojen ja lehtien kustantaminen ja muu kustannustoiminta',
    descriptionEn:
      'Publishing of books, periodicals and other publishing activities',
  },
  {
    code: '5811',
    descriptionFi: 'Kirjojen kustantaminen',
    descriptionEn: 'Book publishing',
  },
  {
    code: '58110',
    descriptionFi: 'Kirjojen kustantaminen',
    descriptionEn: 'Book publishing',
  },
  {
    code: '5812',
    descriptionFi: 'Hakemistojen ja postituslistojen julkaiseminen',
    descriptionEn: 'Publishing of directories and mailing lists',
  },
  {
    code: '58120',
    descriptionFi: 'Hakemistojen ja postituslistojen julkaiseminen',
    descriptionEn: 'Publishing of directories and mailing lists',
  },
  {
    code: '5813',
    descriptionFi: 'Sanomalehtien kustantaminen',
    descriptionEn: 'Publishing of newspapers',
  },
  {
    code: '58130',
    descriptionFi: 'Sanomalehtien kustantaminen',
    descriptionEn: 'Publishing of newspapers',
  },
  {
    code: '5814',
    descriptionFi:
      'Aikakauslehtien ja harvemmin ilmestyvien sanomalehtien kustantaminen',
    descriptionEn: 'Publishing of journals and periodicals',
  },
  {
    code: '58141',
    descriptionFi:
      'Paikallislehtien ja harvemmin ilmestyvien sanomalehtien kustantaminen',
    descriptionEn:
      'Publishing of local and less frequently published newspapers',
  },
  {
    code: '58142',
    descriptionFi: 'Aikakauslehtien kustantaminen',
    descriptionEn: 'Publishing of periodicals',
  },
  {
    code: '5819',
    descriptionFi: 'Muu kustannustoiminta',
    descriptionEn: 'Other publishing activities',
  },
  {
    code: '58190',
    descriptionFi: 'Muu kustannustoiminta',
    descriptionEn: 'Other publishing activities',
  },
  {
    code: '582',
    descriptionFi: 'Ohjelmistojen kustantaminen',
    descriptionEn: 'Software publishing',
  },
  {
    code: '5821',
    descriptionFi: 'Tietokonepelien kustantaminen',
    descriptionEn: 'Publishing of computer games',
  },
  {
    code: '58210',
    descriptionFi: 'Tietokonepelien kustantaminen',
    descriptionEn: 'Publishing of computer games',
  },
  {
    code: '5829',
    descriptionFi: 'Muu ohjelmistojen kustantaminen',
    descriptionEn: 'Other software publishing',
  },
  {
    code: '58290',
    descriptionFi: 'Muu ohjelmistojen kustantaminen',
    descriptionEn: 'Other software publishing',
  },
  {
    code: '59',
    descriptionFi:
      'Elokuva-, video- ja televisio-ohjelmatuotanto, äänitteiden ja musiikin kustantaminen',
    descriptionEn:
      'Motion picture, video and television program production, sound recording and music publishing activities',
  },
  {
    code: '591',
    descriptionFi: 'Elokuva-, video- ja televisio-ohjelmatoiminta',
    descriptionEn: 'Motion picture, video and television program activities',
  },
  {
    code: '5911',
    descriptionFi: 'Elokuvien, videoiden ja televisio-ohjelmien tuotanto',
    descriptionEn:
      'Motion picture, video and television program production activities',
  },
  {
    code: '59110',
    descriptionFi: 'Elokuvien, videoiden ja televisio-ohjelmien tuotanto',
    descriptionEn:
      'Motion picture, video and television program production activities',
  },
  {
    code: '5912',
    descriptionFi: 'Elokuvien, video- ja televisio-ohjelmien jälkituotanto',
    descriptionEn:
      'Motion picture, video and television program post-production activities',
  },
  {
    code: '59120',
    descriptionFi: 'Elokuvien, video- ja televisio-ohjelmien jälkituotanto',
    descriptionEn:
      'Motion picture, video and television program post-production activities',
  },
  {
    code: '5913',
    descriptionFi: 'Elokuvien, videoiden ja televisio-ohjelmien levitys',
    descriptionEn:
      'Motion picture, video and television program distribution activities',
  },
  {
    code: '59130',
    descriptionFi: 'Elokuvien, videoiden ja televisio-ohjelmien levitys',
    descriptionEn:
      'Motion picture, video and television program distribution activities',
  },
  {
    code: '5914',
    descriptionFi: 'Elokuvien esittäminen',
    descriptionEn: 'Motion picture projection activities',
  },
  {
    code: '59140',
    descriptionFi: 'Elokuvien esittäminen',
    descriptionEn: 'Motion picture projection activities',
  },
  {
    code: '592',
    descriptionFi: 'Äänitysstudiot; äänitteiden ja musiikin kustantaminen',
    descriptionEn: 'Sound recording and music publishing activities',
  },
  {
    code: '5920',
    descriptionFi: 'Äänitysstudiot; äänitteiden ja musiikin kustantaminen',
    descriptionEn: 'Sound recording and music publishing activities',
  },
  {
    code: '59200',
    descriptionFi: 'Äänitysstudiot; äänitteiden ja musiikin kustantaminen',
    descriptionEn: 'Sound recording and music publishing activities',
  },
  {
    code: '60',
    descriptionFi: 'Radio- ja televisiotoiminta',
    descriptionEn: 'Broadcasting',
  },
  {
    code: '601',
    descriptionFi: 'Radio-ohjelmien tuottaminen ja lähettäminen',
    descriptionEn: 'Radio broadcasting',
  },
  {
    code: '6010',
    descriptionFi: 'Radio-ohjelmien tuottaminen ja lähettäminen',
    descriptionEn: 'Radio broadcasting',
  },
  {
    code: '60100',
    descriptionFi: 'Radio-ohjelmien tuottaminen ja lähettäminen',
    descriptionEn: 'Radio broadcasting',
  },
  {
    code: '602',
    descriptionFi: 'Televisio-ohjelmien tuottaminen ja lähettäminen',
    descriptionEn: 'Television programming and broadcasting activities',
  },
  {
    code: '6020',
    descriptionFi: 'Televisio-ohjelmien tuottaminen ja lähettäminen',
    descriptionEn: 'Television programming and broadcasting activities',
  },
  {
    code: '60201',
    descriptionFi:
      'Televisio-ohjelmien tuottaminen ja lähettäminen (pl. maksulliset tv-kanavat)',
    descriptionEn:
      'Television programming and broadcasting activities (excluding pay TV)',
  },
  {
    code: '60202',
    descriptionFi: 'Maksulliset tv-kanavat',
    descriptionEn: 'Pay TV',
  },
  {
    code: '61',
    descriptionFi: 'Televiestintä',
    descriptionEn: 'Telecommunications',
  },
  {
    code: '611',
    descriptionFi: 'Langallisen verkon hallinta ja palvelut',
    descriptionEn: 'Wired telecommunications activities',
  },
  {
    code: '6110',
    descriptionFi: 'Langallisen verkon hallinta ja palvelut',
    descriptionEn: 'Wired telecommunications activities',
  },
  {
    code: '61100',
    descriptionFi: 'Langallisen verkon hallinta ja palvelut',
    descriptionEn: 'Wired telecommunications activities',
  },
  {
    code: '612',
    descriptionFi: 'Langattoman verkon hallinta ja palvelut',
    descriptionEn: 'Wireless telecommunications activities',
  },
  {
    code: '6120',
    descriptionFi: 'Langattoman verkon hallinta ja palvelut',
    descriptionEn: 'Wireless telecommunications activities',
  },
  {
    code: '61200',
    descriptionFi: 'Langattoman verkon hallinta ja palvelut',
    descriptionEn: 'Wireless telecommunications activities',
  },
  {
    code: '613',
    descriptionFi: 'Satelliittiviestintä',
    descriptionEn: 'Satellite telecommunications activities',
  },
  {
    code: '6130',
    descriptionFi: 'Satelliittiviestintä',
    descriptionEn: 'Satellite telecommunications activities',
  },
  {
    code: '61300',
    descriptionFi: 'Satelliittiviestintä',
    descriptionEn: 'Satellite telecommunications activities',
  },
  {
    code: '619',
    descriptionFi: 'Muut televiestintäpalvelut',
    descriptionEn: 'Other telecommunications activities',
  },
  {
    code: '6190',
    descriptionFi: 'Muut televiestintäpalvelut',
    descriptionEn: 'Other telecommunications activities',
  },
  {
    code: '61900',
    descriptionFi: 'Muut televiestintäpalvelut',
    descriptionEn: 'Other telecommunications activities',
  },
  {
    code: '62',
    descriptionFi: 'Ohjelmistot, konsultointi ja siihen liittyvä toiminta',
    descriptionEn: 'Computer programming, consultancy and related activities',
  },
  {
    code: '620',
    descriptionFi: 'Ohjelmistot, konsultointi ja siihen liittyvä toiminta',
    descriptionEn: 'Computer programming, consultancy and related activities',
  },
  {
    code: '6201',
    descriptionFi: 'Ohjelmistojen suunnittelu ja valmistus',
    descriptionEn: 'Computer programming activities',
  },
  {
    code: '62010',
    descriptionFi: 'Ohjelmistojen suunnittelu ja valmistus',
    descriptionEn: 'Computer programming activities',
  },
  {
    code: '6202',
    descriptionFi: 'Atk-laitteisto- ja ohjelmistokonsultointi',
    descriptionEn: 'Computer consultancy activities',
  },
  {
    code: '62020',
    descriptionFi: 'Atk-laitteisto- ja ohjelmistokonsultointi',
    descriptionEn: 'Computer consultancy activities',
  },
  {
    code: '6203',
    descriptionFi:
      'Tietojenkäsittelyn ja laitteistojen käyttö- ja hallintapalvelut',
    descriptionEn: 'Computer facilities management activities',
  },
  {
    code: '62030',
    descriptionFi:
      'Tietojenkäsittelyn ja laitteistojen käyttö- ja hallintapalvelut',
    descriptionEn: 'Computer facilities management activities',
  },
  {
    code: '6209',
    descriptionFi: 'Muu laitteisto- ja tietotekninen palvelutoiminta',
    descriptionEn:
      'Other information technology and computer service activities',
  },
  {
    code: '62090',
    descriptionFi: 'Muu laitteisto- ja tietotekninen palvelutoiminta',
    descriptionEn:
      'Other information technology and computer service activities',
  },
  {
    code: '63',
    descriptionFi: 'Tietopalvelutoiminta',
    descriptionEn: 'Information service activities',
  },
  {
    code: '631',
    descriptionFi:
      'Tietojenkäsittely, palvelintilan vuokraus ja niihin liittyvät palvelut; verkkoportaalit',
    descriptionEn:
      'Data processing, hosting and related activities; web portals',
  },
  {
    code: '6311',
    descriptionFi:
      'Tietojenkäsittely, palvelintilan vuokraus ja niihin liittyvät palvelut',
    descriptionEn: 'Data processing, hosting and related activities',
  },
  {
    code: '63110',
    descriptionFi:
      'Tietojenkäsittely, palvelintilan vuokraus ja niihin liittyvät palvelut',
    descriptionEn: 'Data processing, hosting and related activities',
  },
  {
    code: '6312',
    descriptionFi: 'Verkkoportaalit',
    descriptionEn: 'Web portals',
  },
  {
    code: '63120',
    descriptionFi: 'Verkkoportaalit',
    descriptionEn: 'Web portals',
  },
  {
    code: '639',
    descriptionFi: 'Muu tietopalvelutoiminta',
    descriptionEn: 'Other information service activities',
  },
  {
    code: '6391',
    descriptionFi: 'Uutistoimistot',
    descriptionEn: 'News agency activities',
  },
  {
    code: '63910',
    descriptionFi: 'Uutistoimistot',
    descriptionEn: 'News agency activities',
  },
  {
    code: '6399',
    descriptionFi: 'Muualla luokittelematon tietopalvelutoiminta',
    descriptionEn: 'Other information service activities n.e.c.',
  },
  {
    code: '63990',
    descriptionFi: 'Muualla luokittelematon tietopalvelutoiminta',
    descriptionEn: 'Other information service activities n.e.c.',
  },
  {
    code: '64',
    descriptionFi: 'Rahoituspalvelut (pl. vakuutus- ja eläkevakuutustoiminta)',
    descriptionEn:
      'Financial service activities, except insurance and pension funding',
  },
  {
    code: '641',
    descriptionFi: 'Pankkitoiminta',
    descriptionEn: 'Monetary intermediation',
  },
  {
    code: '6411',
    descriptionFi: 'Keskuspankkitoiminta',
    descriptionEn: 'Central banking',
  },
  {
    code: '64110',
    descriptionFi: 'Keskuspankkitoiminta',
    descriptionEn: 'Central banking',
  },
  {
    code: '6419',
    descriptionFi: 'Muu pankkitoiminta',
    descriptionEn: 'Other monetary intermediation',
  },
  {
    code: '64190',
    descriptionFi: 'Muu pankkitoiminta',
    descriptionEn: 'Other monetary intermediation',
  },
  {
    code: '642',
    descriptionFi: 'Rahoitusalan holdingyhtiöiden toiminta',
    descriptionEn: 'Activities of holding companies',
  },
  {
    code: '6420',
    descriptionFi: 'Rahoitusalan holdingyhtiöiden toiminta',
    descriptionEn: 'Activities of holding companies',
  },
  {
    code: '64200',
    descriptionFi: 'Rahoitusalan holdingyhtiöiden toiminta',
    descriptionEn: 'Activities of holding companies',
  },
  {
    code: '643',
    descriptionFi: 'Rahastotoiminta',
    descriptionEn: 'Trusts, funds and similar financial entities',
  },
  {
    code: '6430',
    descriptionFi: 'Rahastotoiminta',
    descriptionEn: 'Trusts, funds and similar financial entities',
  },
  {
    code: '64300',
    descriptionFi: 'Rahastotoiminta',
    descriptionEn: 'Trusts, funds and similar financial entities',
  },
  {
    code: '649',
    descriptionFi:
      'Muut rahoituspalvelut (pl. vakuutus- ja eläkevakuutustoiminta)',
    descriptionEn:
      'Other financial service activities, except insurance and pension funding',
  },
  {
    code: '6491',
    descriptionFi: 'Rahoitusleasing',
    descriptionEn: 'Financial leasing',
  },
  {
    code: '64910',
    descriptionFi: 'Rahoitusleasing',
    descriptionEn: 'Financial leasing',
  },
  {
    code: '6492',
    descriptionFi: 'Muu luotonanto',
    descriptionEn: 'Other credit granting',
  },
  {
    code: '64920',
    descriptionFi: 'Muu luotonanto',
    descriptionEn: 'Other credit granting',
  },
  {
    code: '6499',
    descriptionFi:
      'Muualla luokittelemattomat rahoituspalvelut (pl. vakuutus- ja eläkevakuutustoiminta)',
    descriptionEn:
      'Other financial service activities, except insurance and pension funding n.e.c.',
  },
  {
    code: '64990',
    descriptionFi:
      'Muualla luokittelemattomat rahoituspalvelut (pl. vakuutus- ja eläkevakuutustoiminta)',
    descriptionEn:
      'Other financial service activities, except insurance and pension funding n.e.c.',
  },
  {
    code: '65',
    descriptionFi:
      'Vakuutus-, jälleenvakuutus- ja eläkevakuutustoiminta (pl. pakollinen sosiaalivakuutus)',
    descriptionEn:
      'Insurance, reinsurance and pension funding, except compulsory social security',
  },
  {code: '651', descriptionFi: 'Vakuutustoiminta', descriptionEn: 'Insurance'},
  {
    code: '6511',
    descriptionFi: 'Henkivakuutustoiminta',
    descriptionEn: 'Life insurance',
  },
  {
    code: '65110',
    descriptionFi: 'Henkivakuutustoiminta',
    descriptionEn: 'Life insurance',
  },
  {
    code: '6512',
    descriptionFi: 'Muu vakuutustoiminta',
    descriptionEn: 'Non-life insurance',
  },
  {
    code: '65121',
    descriptionFi: 'Vahinkovakuutusyhtiöt',
    descriptionEn: 'Non-life insurance companies',
  },
  {
    code: '65122',
    descriptionFi: 'Vakuutusyhdistykset',
    descriptionEn: 'Mutual insurance associations',
  },
  {
    code: '65129',
    descriptionFi: 'Muu vahinkovakuutus',
    descriptionEn: 'Other non-life insurance',
  },
  {
    code: '652',
    descriptionFi: 'Jälleenvakuutustoiminta',
    descriptionEn: 'Reinsurance',
  },
  {
    code: '6520',
    descriptionFi: 'Jälleenvakuutustoiminta',
    descriptionEn: 'Reinsurance',
  },
  {
    code: '65200',
    descriptionFi: 'Jälleenvakuutustoiminta',
    descriptionEn: 'Reinsurance',
  },
  {
    code: '653',
    descriptionFi: 'Eläkevakuutustoiminta',
    descriptionEn: 'Pension funding',
  },
  {
    code: '6530',
    descriptionFi: 'Eläkevakuutustoiminta',
    descriptionEn: 'Pension funding',
  },
  {
    code: '65300',
    descriptionFi: 'Eläkevakuutustoiminta',
    descriptionEn: 'Pension funding',
  },
  {
    code: '66',
    descriptionFi: 'Rahoitusta ja vakuuttamista palveleva toiminta',
    descriptionEn: 'Activities supporting finance and insurance',
  },
  {
    code: '661',
    descriptionFi:
      'Rahoitusta ja vakuuttamista palveleva toiminta (pl. vakuutus- ja eläkevakuutustoiminta)',
    descriptionEn:
      'Activities supporting finance and insurance (excluding insurance and pension insurance)',
  },
  {
    code: '6611',
    descriptionFi:
      'Pörssitoiminta ja rahoitusmarkkinoiden hallinnolliset tukipalvelut',
    descriptionEn:
      'Stock exchange activities and administrative support services for financial markets',
  },
  {
    code: '66110',
    descriptionFi:
      'Pörssitoiminta ja rahoitusmarkkinoiden hallinnolliset tukipalvelut',
    descriptionEn:
      'Stock exchange activities and administrative support services for financial markets',
  },
  {
    code: '6612',
    descriptionFi: 'Arvopaperien ja raaka-ainesopimusten välittäminen',
    descriptionEn: 'Securities and commodity contract brokering',
  },
  {
    code: '66120',
    descriptionFi: 'Arvopaperien ja raaka-ainesopimusten välittäminen',
    descriptionEn: 'Securities and commodity contract brokering',
  },
  {
    code: '6619',
    descriptionFi:
      'Muu rahoitusta palveleva toiminta (pl. vakuutus- ja eläkevakuutustoiminta)',
    descriptionEn:
      'Other financial support activities (excluding insurance and pension insurance)',
  },
  {
    code: '66190',
    descriptionFi:
      'Muu rahoitusta palveleva toiminta (pl. vakuutus- ja eläkevakuutustoiminta)',
    descriptionEn:
      'Other financial support activities (excluding insurance and pension insurance)',
  },
  {
    code: '662',
    descriptionFi: 'Vakuutus- ja eläkevakuutustoimintaa avustava toiminta',
    descriptionEn: 'Activities supporting insurance and pension insurance',
  },
  {
    code: '6621',
    descriptionFi: 'Riskin- ja vahingonarviointi',
    descriptionEn: 'Risk and damage assessment',
  },
  {
    code: '66210',
    descriptionFi: 'Riskin- ja vahingonarviointi',
    descriptionEn: 'Risk and damage assessment',
  },
  {
    code: '6622',
    descriptionFi: 'Vakuutusasiamiesten ja -välittäjien toiminta',
    descriptionEn: 'Insurance agents and brokers activities',
  },
  {
    code: '66220',
    descriptionFi: 'Vakuutusasiamiesten ja -välittäjien toiminta',
    descriptionEn: 'Insurance agents and brokers activities',
  },
  {
    code: '6629',
    descriptionFi: 'Muu vakuutus- ja eläkevakuutustoimintaa avustava toiminta',
    descriptionEn:
      'Other activities supporting insurance and pension insurance',
  },
  {
    code: '66290',
    descriptionFi: 'Muu vakuutus- ja eläkevakuutustoimintaa avustava toiminta',
    descriptionEn:
      'Other activities supporting insurance and pension insurance',
  },
  {
    code: '663',
    descriptionFi: 'Omaisuudenhoitotoiminta',
    descriptionEn: 'Asset management activities',
  },
  {
    code: '6630',
    descriptionFi: 'Omaisuudenhoitotoiminta',
    descriptionEn: 'Asset management activities',
  },
  {
    code: '66300',
    descriptionFi: 'Omaisuudenhoitotoiminta',
    descriptionEn: 'Asset management activities',
  },
  {
    code: '68',
    descriptionFi: 'Kiinteistöalan toiminta',
    descriptionEn: 'Real estate activities',
  },
  {
    code: '681',
    descriptionFi: 'Omien kiinteistöjen kauppa',
    descriptionEn: 'Trading of own real estate',
  },
  {
    code: '6810',
    descriptionFi: 'Omien kiinteistöjen kauppa',
    descriptionEn: 'Trading of own real estate',
  },
  {
    code: '68100',
    descriptionFi: 'Omien kiinteistöjen kauppa',
    descriptionEn: 'Trading of own real estate',
  },
  {
    code: '682',
    descriptionFi: 'Omien tai leasing-kiinteistöjen vuokraus ja hallinta',
    descriptionEn: 'Rental and management of own or leased real estate',
  },
  {
    code: '6820',
    descriptionFi: 'Omien tai leasing-kiinteistöjen vuokraus ja hallinta',
    descriptionEn: 'Rental and management of own or leased real estate',
  },
  {
    code: '68201',
    descriptionFi: 'Asuntojen vuokraus',
    descriptionEn: 'Rental of apartments',
  },
  {
    code: '68202',
    descriptionFi: 'Asuntojen ja asuinkiinteistöjen hallinta',
    descriptionEn: 'Management of apartments and residential properties',
  },
  {
    code: '68209',
    descriptionFi: 'Muiden kiinteistöjen vuokraus ja hallinta',
    descriptionEn: 'Rental and management of other real estate',
  },
  {
    code: '683',
    descriptionFi: 'Kiinteistöalan toiminta palkkio- tai sopimusperusteisesti',
    descriptionEn: 'Real estate activities on a fee or contract basis',
  },
  {
    code: '6831',
    descriptionFi: 'Kiinteistönvälitys',
    descriptionEn: 'Real estate brokerage',
  },
  {
    code: '68310',
    descriptionFi: 'Kiinteistönvälitys',
    descriptionEn: 'Real estate brokerage',
  },
  {
    code: '6832',
    descriptionFi: 'Kiinteistöjen isännöinti',
    descriptionEn: 'Property management',
  },
  {
    code: '68320',
    descriptionFi: 'Kiinteistöjen isännöinti',
    descriptionEn: 'Property management',
  },
  {
    code: '69',
    descriptionFi: 'Lakiasiain- ja laskentatoimen palvelut',
    descriptionEn: 'Legal and accounting services',
  },
  {
    code: '691',
    descriptionFi: 'Lakiasiainpalvelut',
    descriptionEn: 'Legal services',
  },
  {
    code: '6910',
    descriptionFi: 'Lakiasiainpalvelut',
    descriptionEn: 'Legal services',
  },
  {
    code: '69101',
    descriptionFi: 'Asianajotoimistot',
    descriptionEn: 'Law firms',
  },
  {
    code: '69102',
    descriptionFi: 'Lakiasiaintoimistot',
    descriptionEn: 'Legal advisory offices',
  },
  {
    code: '69103',
    descriptionFi: 'Patenttitoimistot',
    descriptionEn: 'Patent offices',
  },
  {
    code: '69109',
    descriptionFi: 'Muu lakiasiain palvelu',
    descriptionEn: 'Other legal services',
  },
  {
    code: '692',
    descriptionFi: 'Laskentatoimi, kirjanpito ja tilintarkastus; veroneuvonta',
    descriptionEn: 'Accounting, bookkeeping, auditing, and tax consultancy',
  },
  {
    code: '6920',
    descriptionFi: 'Laskentatoimi, kirjanpito ja tilintarkastus; veroneuvonta',
    descriptionEn: 'Accounting, bookkeeping, auditing, and tax consultancy',
  },
  {
    code: '69201',
    descriptionFi: 'Kirjanpito- ja tilinpäätöspalvelu',
    descriptionEn: 'Bookkeeping and financial statement services',
  },
  {
    code: '69202',
    descriptionFi: 'Tilintarkastuspalvelu',
    descriptionEn: 'Auditing services',
  },
  {
    code: '69209',
    descriptionFi: 'Muu laskentatoimen palvelu',
    descriptionEn: 'Other accounting services',
  },
  {
    code: '70',
    descriptionFi: 'Pääkonttorien toiminta; liikkeenjohdon konsultointi',
    descriptionEn: 'Head office activities; management consultancy',
  },
  {
    code: '701',
    descriptionFi: 'Pääkonttorien toiminta',
    descriptionEn: 'Head office activities',
  },
  {
    code: '7010',
    descriptionFi: 'Pääkonttorien toiminta',
    descriptionEn: 'Head office activities',
  },
  {
    code: '70100',
    descriptionFi: 'Pääkonttorien toiminta',
    descriptionEn: 'Head office activities',
  },
  {
    code: '702',
    descriptionFi: 'Liikkeenjohdon konsultointi',
    descriptionEn: 'Management consultancy',
  },
  {
    code: '7021',
    descriptionFi: 'Suhdetoiminta ja viestintä',
    descriptionEn: 'Public relations and communication',
  },
  {
    code: '70210',
    descriptionFi: 'Suhdetoiminta ja viestintä',
    descriptionEn: 'Public relations and communication',
  },
  {
    code: '7022',
    descriptionFi: 'Muu liikkeenjohdon konsultointi',
    descriptionEn: 'Other management consultancy',
  },
  {
    code: '70220',
    descriptionFi: 'Muu liikkeenjohdon konsultointi',
    descriptionEn: 'Other management consultancy',
  },
  {
    code: '71',
    descriptionFi:
      'Arkkitehti- ja insinööripalvelut; tekninen testaus ja analysointi',
    descriptionEn:
      'Architectural and engineering services; technical testing and analysis',
  },
  {
    code: '711',
    descriptionFi:
      'Arkkitehti- ja insinööripalvelut ja niihin liittyvä tekninen konsultointi',
    descriptionEn:
      'Architectural and engineering services and related technical consultancy',
  },
  {
    code: '7111',
    descriptionFi: 'Arkkitehtipalvelut',
    descriptionEn: 'Architectural services',
  },
  {
    code: '71110',
    descriptionFi: 'Arkkitehtipalvelut',
    descriptionEn: 'Architectural services',
  },
  {
    code: '7112',
    descriptionFi: 'Insinööripalvelut ja niihin liittyvä tekninen konsultointi',
    descriptionEn: 'Engineering services and related technical consultancy',
  },
  {
    code: '71121',
    descriptionFi: 'Yhdyskuntasuunnittelu',
    descriptionEn: 'Urban planning',
  },
  {
    code: '71122',
    descriptionFi: 'Maa- ja vesirakentamisen tekninen palvelu',
    descriptionEn: 'Civil and hydraulic engineering technical services',
  },
  {
    code: '71123',
    descriptionFi: 'Rakennetekninen palvelu',
    descriptionEn: 'Structural engineering services',
  },
  {
    code: '71124',
    descriptionFi: 'LVI-tekninen suunnittelu',
    descriptionEn: 'HVAC design',
  },
  {
    code: '71125',
    descriptionFi: 'Sähkötekninen suunnittelu',
    descriptionEn: 'Electrical design',
  },
  {
    code: '71126',
    descriptionFi: 'Muu rakennustekninen palvelu',
    descriptionEn: 'Other construction engineering services',
  },
  {
    code: '71127',
    descriptionFi: 'Kone- ja prosessisuunnittelu',
    descriptionEn: 'Mechanical and process design',
  },
  {
    code: '71129',
    descriptionFi: 'Muu tekninen palvelu',
    descriptionEn: 'Other technical services',
  },
  {
    code: '712',
    descriptionFi: 'Tekninen testaus ja analysointi',
    descriptionEn: 'Technical testing and analysis',
  },
  {
    code: '7120',
    descriptionFi: 'Tekninen testaus ja analysointi',
    descriptionEn: 'Technical testing and analysis',
  },
  {
    code: '71201',
    descriptionFi: 'Autokatsastus',
    descriptionEn: 'Vehicle inspection',
  },
  {
    code: '71202',
    descriptionFi: 'Muu tekninen testaus ja analysointi',
    descriptionEn: 'Other technical testing and analysis',
  },
  {
    code: '72',
    descriptionFi: 'Tieteellinen tutkimus ja kehittäminen',
    descriptionEn: 'Scientific research and development',
  },
  {
    code: '721',
    descriptionFi: 'Luonnontieteen ja tekniikan tutkimus ja kehittäminen',
    descriptionEn: 'Natural sciences and engineering research and development',
  },
  {
    code: '7211',
    descriptionFi: 'Biotekninen tutkimus ja kehittäminen',
    descriptionEn: 'Biotechnological research and development',
  },
  {
    code: '72110',
    descriptionFi: 'Biotekninen tutkimus ja kehittäminen',
    descriptionEn: 'Biotechnological research and development',
  },
  {
    code: '7219',
    descriptionFi:
      'Muu luonnontieteellinen ja tekninen tutkimus ja kehittäminen',
    descriptionEn:
      'Other natural sciences and engineering research and development',
  },
  {
    code: '72191',
    descriptionFi: 'Lääketieteellinen tutkimus ja kehittäminen',
    descriptionEn: 'Medical research and development',
  },
  {
    code: '72192',
    descriptionFi: 'Muu luonnontieteellinen tutkimus ja kehittäminen',
    descriptionEn: 'Other natural sciences research and development',
  },
  {
    code: '72193',
    descriptionFi: 'Tekniikan tutkimus ja kehittäminen',
    descriptionEn: 'Engineering research and development',
  },
  {
    code: '722',
    descriptionFi:
      'Yhteiskuntatieteellinen ja humanistinen tutkimus ja kehittäminen',
    descriptionEn: 'Social sciences and humanities research and development',
  },
  {
    code: '7220',
    descriptionFi:
      'Yhteiskuntatieteellinen ja humanistinen tutkimus ja kehittäminen',
    descriptionEn: 'Social sciences and humanities research and development',
  },
  {
    code: '72200',
    descriptionFi:
      'Yhteiskuntatieteellinen ja humanistinen tutkimus ja kehittäminen',
    descriptionEn: 'Social sciences and humanities research and development',
  },
  {
    code: '73',
    descriptionFi: 'Mainostoiminta ja markkinatutkimus',
    descriptionEn: 'Advertising and market research',
  },
  {code: '731', descriptionFi: 'Mainostoiminta', descriptionEn: 'Advertising'},
  {
    code: '7311',
    descriptionFi: 'Mainostoimistot ja mainospalvelu',
    descriptionEn: 'Advertising agencies and advertising services',
  },
  {
    code: '73111',
    descriptionFi: 'Mainostoimistot',
    descriptionEn: 'Advertising agencies',
  },
  {
    code: '73112',
    descriptionFi: 'Suora- ja ulkomainonta',
    descriptionEn: 'Direct and outdoor advertising',
  },
  {
    code: '73119',
    descriptionFi: 'Muu mainospalvelu',
    descriptionEn: 'Other advertising services',
  },
  {
    code: '7312',
    descriptionFi: 'Mainostilan vuokraus ja myynti',
    descriptionEn: 'Advertising space rental and sales',
  },
  {
    code: '73120',
    descriptionFi: 'Mainostilan vuokraus ja myynti',
    descriptionEn: 'Advertising space rental and sales',
  },
  {
    code: '732',
    descriptionFi: 'Markkina- ja mielipidetutkimukset',
    descriptionEn: 'Market and opinion research',
  },
  {
    code: '7320',
    descriptionFi: 'Markkina- ja mielipidetutkimukset',
    descriptionEn: 'Market and opinion research',
  },
  {
    code: '73200',
    descriptionFi: 'Markkina- ja mielipidetutkimukset',
    descriptionEn: 'Market and opinion research',
  },
  {
    code: '74',
    descriptionFi: 'Muut erikoistuneet palvelut liike-elämälle',
    descriptionEn: 'Other specialized services for businesses',
  },
  {
    code: '741',
    descriptionFi: 'Taideteollinen muotoilu ja suunnittelu',
    descriptionEn: 'Industrial design and planning',
  },
  {
    code: '7410',
    descriptionFi: 'Taideteollinen muotoilu ja suunnittelu',
    descriptionEn: 'Industrial design and planning',
  },
  {
    code: '74101',
    descriptionFi: 'Graafinen muotoilu',
    descriptionEn: 'Graphic design',
  },
  {
    code: '74102',
    descriptionFi: 'Sisustussuunnittelu',
    descriptionEn: 'Interior design',
  },
  {
    code: '74109',
    descriptionFi: 'Teollinen muotoilu ym.',
    descriptionEn: 'Industrial design and others',
  },
  {
    code: '742',
    descriptionFi: 'Valokuvaustoiminta',
    descriptionEn: 'Photography services',
  },
  {
    code: '7420',
    descriptionFi: 'Valokuvaustoiminta',
    descriptionEn: 'Photography services',
  },
  {
    code: '74201',
    descriptionFi: 'Valokuvaamot ja muu kuvaustoiminta',
    descriptionEn: 'Photo studios and other photography services',
  },
  {
    code: '74202',
    descriptionFi: 'Valokuvien kehittäminen',
    descriptionEn: 'Photo development',
  },
  {
    code: '743',
    descriptionFi: 'Kääntäminen ja tulkkaus',
    descriptionEn: 'Translation and interpretation',
  },
  {
    code: '7430',
    descriptionFi: 'Kääntäminen ja tulkkaus',
    descriptionEn: 'Translation and interpretation',
  },
  {
    code: '74300',
    descriptionFi: 'Kääntäminen ja tulkkaus',
    descriptionEn: 'Translation and interpretation',
  },
  {
    code: '749',
    descriptionFi:
      'Muualla luokittelemattomat erikoistuneet palvelut liike-elämälle',
    descriptionEn: 'Other unclassified specialized services for businesses',
  },
  {
    code: '7490',
    descriptionFi:
      'Muualla luokittelemattomat erikoistuneet palvelut liike-elämälle',
    descriptionEn: 'Other unclassified specialized services for businesses',
  },
  {
    code: '74901',
    descriptionFi: 'Ohjelmatoimistot ja manageripalvelut',
    descriptionEn: 'Event agencies and management services',
  },
  {
    code: '74909',
    descriptionFi: 'Muu ammatillinen, tieteellinen ja tekninen toiminta',
    descriptionEn: 'Other professional, scientific, and technical activities',
  },
  {
    code: '75',
    descriptionFi: 'Eläinlääkintäpalvelut',
    descriptionEn: 'Veterinary services',
  },
  {
    code: '750',
    descriptionFi: 'Eläinlääkintäpalvelut',
    descriptionEn: 'Veterinary services',
  },
  {
    code: '7500',
    descriptionFi: 'Eläinlääkintäpalvelut',
    descriptionEn: 'Veterinary services',
  },
  {
    code: '75000',
    descriptionFi: 'Eläinlääkintäpalvelut',
    descriptionEn: 'Veterinary services',
  },
  {
    code: '77',
    descriptionFi: 'Vuokraus- ja leasingtoiminta',
    descriptionEn: 'Rental and leasing activities',
  },
  {
    code: '771',
    descriptionFi: 'Moottoriajoneuvojen vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of motor vehicles',
  },
  {
    code: '7711',
    descriptionFi:
      'Autojen ja kevyiden moottoriajoneuvojen vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of cars and light motor vehicles',
  },
  {
    code: '77110',
    descriptionFi:
      'Autojen ja kevyiden moottoriajoneuvojen vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of cars and light motor vehicles',
  },
  {
    code: '7712',
    descriptionFi:
      'Kuorma-autojen ja muiden raskaiden ajoneuvojen vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of trucks and other heavy vehicles',
  },
  {
    code: '77120',
    descriptionFi:
      'Kuorma-autojen ja muiden raskaiden ajoneuvojen vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of trucks and other heavy vehicles',
  },
  {
    code: '772',
    descriptionFi:
      'Henkilökohtaisten ja kotitaloustavaroiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of personal and household goods',
  },
  {
    code: '7721',
    descriptionFi: 'Vapaa-ajan ja urheiluvälineiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of recreational and sports equipment',
  },
  {
    code: '77210',
    descriptionFi: 'Vapaa-ajan ja urheiluvälineiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of recreational and sports equipment',
  },
  {
    code: '7722',
    descriptionFi: 'Videofilmien vuokraus',
    descriptionEn: 'Rental of video films',
  },
  {
    code: '77220',
    descriptionFi: 'Videofilmien vuokraus',
    descriptionEn: 'Rental of video films',
  },
  {
    code: '7729',
    descriptionFi:
      'Muiden henkilökohtaisten ja kotitaloustavaroiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of other personal and household goods',
  },
  {
    code: '77290',
    descriptionFi:
      'Muiden henkilökohtaisten ja kotitaloustavaroiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of other personal and household goods',
  },
  {
    code: '773',
    descriptionFi: 'Koneiden ja laitteiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of machinery and equipment',
  },
  {
    code: '7731',
    descriptionFi: 'Maatalouskoneiden ja -laitteiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of agricultural machinery and equipment',
  },
  {
    code: '77310',
    descriptionFi: 'Maatalouskoneiden ja -laitteiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of agricultural machinery and equipment',
  },
  {
    code: '7732',
    descriptionFi: 'Rakennuskoneiden ja -laitteiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of construction machinery and equipment',
  },
  {
    code: '77320',
    descriptionFi: 'Rakennuskoneiden ja -laitteiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of construction machinery and equipment',
  },
  {
    code: '7733',
    descriptionFi:
      'Toimistokoneiden ja -laitteiden sekä tietokoneiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of office equipment and computers',
  },
  {
    code: '77330',
    descriptionFi:
      'Toimistokoneiden ja -laitteiden sekä tietokoneiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of office equipment and computers',
  },
  {
    code: '7734',
    descriptionFi: 'Vesiliikennevälineiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of watercraft',
  },
  {
    code: '77340',
    descriptionFi: 'Vesiliikennevälineiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of watercraft',
  },
  {
    code: '7735',
    descriptionFi: 'Ilmaliikennevälineiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of air transport vehicles',
  },
  {
    code: '77350',
    descriptionFi: 'Ilmaliikennevälineiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of air transport vehicles',
  },
  {
    code: '7739',
    descriptionFi: 'Muiden koneiden ja laitteiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of other machinery and equipment',
  },
  {
    code: '77390',
    descriptionFi: 'Muiden koneiden ja laitteiden vuokraus ja leasing',
    descriptionEn: 'Rental and leasing of other machinery and equipment',
  },
  {
    code: '774',
    descriptionFi:
      'Henkisen omaisuuden ja vastaavien tuotteiden leasing (pl. tekijänoikeuden suojaamat teokset)',
    descriptionEn:
      'Leasing of intellectual property and similar products (excluding copyright-protected works)',
  },
  {
    code: '7740',
    descriptionFi:
      'Henkisen omaisuuden ja vastaavien tuotteiden leasing (pl. tekijänoikeuden suojaamat teokset)',
    descriptionEn:
      'Leasing of intellectual property and similar products (excluding copyright-protected works)',
  },
  {
    code: '77400',
    descriptionFi:
      'Henkisen omaisuuden ja vastaavien tuotteiden leasing (pl. tekijänoikeuden suojaamat teokset)',
    descriptionEn:
      'Leasing of intellectual property and similar products (excluding copyright-protected works)',
  },
  {
    code: '78',
    descriptionFi: 'Työllistämistoiminta',
    descriptionEn: 'Employment activities',
  },
  {
    code: '781',
    descriptionFi: 'Työnvälitystoiminta',
    descriptionEn: 'Employment agency activities',
  },
  {
    code: '7810',
    descriptionFi: 'Työnvälitystoiminta',
    descriptionEn: 'Employment agency activities',
  },
  {
    code: '78100',
    descriptionFi: 'Työnvälitystoiminta',
    descriptionEn: 'Employment agency activities',
  },
  {
    code: '782',
    descriptionFi: 'Työvoiman vuokraus',
    descriptionEn: 'Labor force leasing',
  },
  {
    code: '7820',
    descriptionFi: 'Työvoiman vuokraus',
    descriptionEn: 'Labor force leasing',
  },
  {
    code: '78200',
    descriptionFi: 'Työvoiman vuokraus',
    descriptionEn: 'Labor force leasing',
  },
  {
    code: '783',
    descriptionFi: 'Muut henkilöstön hankintapalvelut',
    descriptionEn: 'Other personnel acquisition services',
  },
  {
    code: '7830',
    descriptionFi: 'Muut henkilöstön hankintapalvelut',
    descriptionEn: 'Other personnel acquisition services',
  },
  {
    code: '78300',
    descriptionFi: 'Muut henkilöstön hankintapalvelut',
    descriptionEn: 'Other personnel acquisition services',
  },
  {
    code: '79',
    descriptionFi:
      'Matkatoimistojen ja matkanjärjestäjien toiminta; varauspalvelut',
    descriptionEn:
      'Travel agency and tour operator activities; reservation services',
  },
  {
    code: '791',
    descriptionFi: 'Matkatoimistojen ja matkanjärjestäjien toiminta',
    descriptionEn: 'Travel agency and tour operator activities',
  },
  {
    code: '7911',
    descriptionFi: 'Matkatoimistojen toiminta',
    descriptionEn: 'Travel agency activities',
  },
  {
    code: '79110',
    descriptionFi: 'Matkatoimistojen toiminta',
    descriptionEn: 'Travel agency activities',
  },
  {
    code: '7912',
    descriptionFi: 'Matkanjärjestäjien toiminta',
    descriptionEn: 'Tour operator activities',
  },
  {
    code: '79120',
    descriptionFi: 'Matkanjärjestäjien toiminta',
    descriptionEn: 'Tour operator activities',
  },
  {
    code: '799',
    descriptionFi: 'Varauspalvelut, matkaoppaiden palvelut ym.',
    descriptionEn: 'Reservation services, tour guide services, etc.',
  },
  {
    code: '7990',
    descriptionFi: 'Varauspalvelut, matkaoppaiden palvelut ym.',
    descriptionEn: 'Reservation services, tour guide services, etc.',
  },
  {
    code: '79900',
    descriptionFi: 'Varauspalvelut, matkaoppaiden palvelut ym.',
    descriptionEn: 'Reservation services, tour guide services, etc.',
  },
  {
    code: '80',
    descriptionFi: 'Turvallisuus-, vartiointi- ja etsiväpalvelut',
    descriptionEn: 'Security and investigation activities',
  },
  {
    code: '801',
    descriptionFi: 'Yksityiset turvallisuuspalvelut',
    descriptionEn: 'Private security activities',
  },
  {
    code: '8010',
    descriptionFi: 'Yksityiset turvallisuuspalvelut',
    descriptionEn: 'Private security activities',
  },
  {
    code: '80100',
    descriptionFi: 'Yksityiset turvallisuuspalvelut',
    descriptionEn: 'Private security activities',
  },
  {
    code: '802',
    descriptionFi: 'Turvallisuusjärjestelmät',
    descriptionEn: 'Security systems service activities',
  },
  {
    code: '8020',
    descriptionFi: 'Turvallisuusjärjestelmät',
    descriptionEn: 'Security systems service activities',
  },
  {
    code: '80200',
    descriptionFi: 'Turvallisuusjärjestelmät',
    descriptionEn: 'Security systems service activities',
  },
  {
    code: '803',
    descriptionFi: 'Etsivätoiminta',
    descriptionEn: 'Investigation activities',
  },
  {
    code: '8030',
    descriptionFi: 'Etsivätoiminta',
    descriptionEn: 'Investigation activities',
  },
  {
    code: '80300',
    descriptionFi: 'Etsivätoiminta',
    descriptionEn: 'Investigation activities',
  },
  {
    code: '81',
    descriptionFi: 'Kiinteistön- ja maisemanhoito',
    descriptionEn: 'Services to buildings and landscape activities',
  },
  {
    code: '811',
    descriptionFi: 'Kiinteistönhoito',
    descriptionEn: 'Building services',
  },
  {
    code: '8110',
    descriptionFi: 'Kiinteistönhoito',
    descriptionEn: 'Building services',
  },
  {
    code: '81100',
    descriptionFi: 'Kiinteistönhoito',
    descriptionEn: 'Building services',
  },
  {
    code: '812',
    descriptionFi: 'Siivouspalvelut',
    descriptionEn: 'Cleaning activities',
  },
  {
    code: '8121',
    descriptionFi: 'Kiinteistöjen siivous',
    descriptionEn: 'General cleaning of buildings',
  },
  {
    code: '81210',
    descriptionFi: 'Kiinteistöjen siivous',
    descriptionEn: 'General cleaning of buildings',
  },
  {
    code: '8122',
    descriptionFi: 'Muu rakennus- ja teollisuussiivous',
    descriptionEn: 'Other building and industrial cleaning activities',
  },
  {
    code: '81220',
    descriptionFi: 'Muu rakennus- ja teollisuussiivous',
    descriptionEn: 'Other building and industrial cleaning activities',
  },
  {
    code: '8129',
    descriptionFi: 'Muu siivoustoiminta',
    descriptionEn: 'Other cleaning activities',
  },
  {
    code: '81291',
    descriptionFi: 'Katujen ja teiden puhtaanapito',
    descriptionEn: 'Cleaning of streets and roads',
  },
  {
    code: '81299',
    descriptionFi: 'Muualla luokittelemattomat siivouspalvelut',
    descriptionEn: 'Other cleaning activities n.e.c.',
  },
  {
    code: '813',
    descriptionFi: 'Maisemanhoitopalvelut',
    descriptionEn: 'Landscape care and maintenance service activities',
  },
  {
    code: '8130',
    descriptionFi: 'Maisemanhoitopalvelut',
    descriptionEn: 'Landscape care and maintenance service activities',
  },
  {
    code: '81300',
    descriptionFi: 'Maisemanhoitopalvelut',
    descriptionEn: 'Landscape care and maintenance service activities',
  },
  {
    code: '82',
    descriptionFi: 'Hallinto- ja tukipalvelut liike-elämälle',
    descriptionEn:
      'Office administrative, office support and other business support activities',
  },
  {
    code: '821',
    descriptionFi: 'Hallinto- ja toimistopalvelut',
    descriptionEn: 'Office administrative and support activities',
  },
  {
    code: '8211',
    descriptionFi: 'Yhdistetyt toimistopalvelut',
    descriptionEn: 'Combined office administrative service activities',
  },
  {
    code: '82110',
    descriptionFi: 'Yhdistetyt toimistopalvelut',
    descriptionEn: 'Combined office administrative service activities',
  },
  {
    code: '8219',
    descriptionFi: 'Sihteeri-, toimisto- ja postituspalvelut',
    descriptionEn:
      'Photocopying, document preparation and other specialized office support activities',
  },
  {
    code: '82191',
    descriptionFi: 'Sihteeri- ja muu toimistopalvelu',
    descriptionEn: 'Secretarial and other office support activities',
  },
  {
    code: '82192',
    descriptionFi: 'Postituspalvelut',
    descriptionEn: 'Mailing activities',
  },
  {
    code: '822',
    descriptionFi: 'Puhelinpalvelukeskusten toiminta',
    descriptionEn: 'Activities of call centers',
  },
  {
    code: '8220',
    descriptionFi: 'Puhelinpalvelukeskusten toiminta',
    descriptionEn: 'Activities of call centers',
  },
  {
    code: '82200',
    descriptionFi: 'Puhelinpalvelukeskusten toiminta',
    descriptionEn: 'Activities of call centers',
  },
  {
    code: '823',
    descriptionFi: 'Messujen ja kongressien järjestäminen',
    descriptionEn: 'Organization of conventions and trade shows',
  },
  {
    code: '8230',
    descriptionFi: 'Messujen ja kongressien järjestäminen',
    descriptionEn: 'Organization of conventions and trade shows',
  },
  {
    code: '82300',
    descriptionFi: 'Messujen ja kongressien järjestäminen',
    descriptionEn: 'Organization of conventions and trade shows',
  },
  {
    code: '829',
    descriptionFi: 'Muu liike-elämää palveleva toiminta',
    descriptionEn: 'Other business support service activities n.e.c.',
  },
  {
    code: '8291',
    descriptionFi: 'Perintä- ja luottotietopalvelut',
    descriptionEn: 'Activities of collection agencies and credit bureaus',
  },
  {
    code: '82910',
    descriptionFi: 'Perintä- ja luottotietopalvelut',
    descriptionEn: 'Activities of collection agencies and credit bureaus',
  },
  {
    code: '8292',
    descriptionFi: 'Pakkauspalvelut',
    descriptionEn: 'Packaging activities',
  },
  {
    code: '82920',
    descriptionFi: 'Pakkauspalvelut',
    descriptionEn: 'Packaging activities',
  },
  {
    code: '8299',
    descriptionFi: 'Muut palvelut liike-elämälle',
    descriptionEn: 'Other business support service activities n.e.c.',
  },
  {
    code: '82990',
    descriptionFi: 'Muut palvelut liike-elämälle',
    descriptionEn: 'Other business support service activities n.e.c.',
  },
  {
    code: '84',
    descriptionFi:
      'Julkinen hallinto ja maanpuolustus; pakollinen sosiaalivakuutus',
    descriptionEn:
      'Public administration and defense; compulsory social security',
  },
  {
    code: '841',
    descriptionFi: 'Julkinen hallinto',
    descriptionEn: 'Public administration',
  },
  {
    code: '8411',
    descriptionFi: 'Julkinen yleishallinto',
    descriptionEn: 'General public administration activities',
  },
  {
    code: '84110',
    descriptionFi: 'Julkinen yleishallinto',
    descriptionEn: 'General public administration activities',
  },
  {
    code: '8412',
    descriptionFi:
      'Terveydenhuollon, opetuksen, kulttuurin ja muiden yhteiskuntapalvelujen hallinto',
    descriptionEn:
      'Regulation of the activities of providing health care, education, cultural services and other social services, excluding social security',
  },
  {
    code: '84121',
    descriptionFi: 'Opetuksen ja kulttuuriasiain hallinto',
    descriptionEn:
      'Regulation of the activities of providing education and cultural services',
  },
  {
    code: '84122',
    descriptionFi: 'Terveydenhuollon ja sosiaaliturvan hallinto',
    descriptionEn:
      'Regulation of the activities of providing health care, education, cultural services and other social services, excluding social security',
  },
  {
    code: '8413',
    descriptionFi: 'Työvoima- ja elinkeinoasiain hallinto',
    descriptionEn:
      'Regulation of and contribution to more efficient operation of businesses',
  },
  {
    code: '84130',
    descriptionFi: 'Työvoima- ja elinkeinoasiain hallinto',
    descriptionEn:
      'Regulation of and contribution to more efficient operation of businesses',
  },
  {
    code: '842',
    descriptionFi: 'Ulkoasiain hallinto, maanpuolustus ja järjestystoimi',
    descriptionEn: 'Provision of services to the community as a whole',
  },
  {
    code: '8421',
    descriptionFi: 'Ulkoasiainhallinto',
    descriptionEn: 'Foreign affairs',
  },
  {
    code: '84210',
    descriptionFi: 'Ulkoasiainhallinto',
    descriptionEn: 'Foreign affairs',
  },
  {
    code: '8422',
    descriptionFi: 'Maanpuolustus',
    descriptionEn: 'Defense activities',
  },
  {
    code: '84220',
    descriptionFi: 'Maanpuolustus',
    descriptionEn: 'Defense activities',
  },
  {
    code: '8423',
    descriptionFi: 'Oikeustoimi',
    descriptionEn: 'Public order and safety activities',
  },
  {
    code: '84231',
    descriptionFi: 'Oikeudenhoito',
    descriptionEn: 'Justice and judicial activities',
  },
  {
    code: '84232',
    descriptionFi: 'Vankeinhoito',
    descriptionEn: 'Prison administration',
  },
  {
    code: '8424',
    descriptionFi: 'Poliisitoimi ja rajojen vartiointi',
    descriptionEn: 'Public order and safety activities',
  },
  {
    code: '84241',
    descriptionFi: 'Poliisitoimi',
    descriptionEn: 'Police services',
  },
  {
    code: '84242',
    descriptionFi: 'Rajojen vartiointi ja väestönsuojelu',
    descriptionEn: 'Border control and civil defense',
  },
  {
    code: '8425',
    descriptionFi: 'Palo- ja pelastustoimi',
    descriptionEn: 'Fire service activities',
  },
  {
    code: '84250',
    descriptionFi: 'Palo- ja pelastustoimi',
    descriptionEn: 'Fire service activities',
  },
  {
    code: '843',
    descriptionFi: 'Pakollinen sosiaalivakuutustoiminta',
    descriptionEn: 'Compulsory social security activities',
  },
  {
    code: '8430',
    descriptionFi: 'Pakollinen sosiaalivakuutustoiminta',
    descriptionEn: 'Compulsory social security activities',
  },
  {
    code: '84301',
    descriptionFi: 'Kansaneläkelaitoksen vakuutustoiminta',
    descriptionEn: 'Activities of the Social Insurance Institution',
  },
  {
    code: '84302',
    descriptionFi: 'Lakisääteinen työeläkevakuutus',
    descriptionEn: 'Statutory earnings-related pension insurance',
  },
  {
    code: '84309',
    descriptionFi: 'Muu pakollinen sosiaalivakuutustoiminta',
    descriptionEn: 'Other compulsory social security activities',
  },
  {code: '85', descriptionFi: 'Koulutus', descriptionEn: 'Education'},
  {
    code: '851',
    descriptionFi: 'Esiasteen koulutus',
    descriptionEn: 'Pre-primary education',
  },
  {
    code: '8510',
    descriptionFi: 'Esiasteen koulutus',
    descriptionEn: 'Pre-primary education',
  },
  {
    code: '85100',
    descriptionFi: 'Esiasteen koulutus',
    descriptionEn: 'Pre-primary education',
  },
  {
    code: '852',
    descriptionFi: 'Alemman perusasteen koulutus',
    descriptionEn: 'Primary education',
  },
  {
    code: '8520',
    descriptionFi: 'Alemman perusasteen koulutus',
    descriptionEn: 'Primary education',
  },
  {
    code: '85200',
    descriptionFi: 'Alemman perusasteen koulutus',
    descriptionEn: 'Primary education',
  },
  {
    code: '853',
    descriptionFi: 'Ylemmän perusasteen ja keskiasteen koulutus',
    descriptionEn: 'Secondary education',
  },
  {
    code: '8531',
    descriptionFi: 'Ylemmän perusasteen koulutus ja lukiokoulutus',
    descriptionEn: 'General secondary education',
  },
  {
    code: '85311',
    descriptionFi: 'Ylemmän perusasteen koulutus',
    descriptionEn: 'Lower secondary education',
  },
  {
    code: '85312',
    descriptionFi: 'Lukiokoulutus',
    descriptionEn: 'Upper secondary education',
  },
  {
    code: '8532',
    descriptionFi: 'Keskiasteen ammatillinen koulutus',
    descriptionEn: 'Technical and vocational secondary education',
  },
  {
    code: '85320',
    descriptionFi: 'Keskiasteen ammatillinen koulutus',
    descriptionEn: 'Technical and vocational secondary education',
  },
  {
    code: '854',
    descriptionFi: 'Korkea-asteen koulutus',
    descriptionEn: 'Higher education',
  },
  {
    code: '8541',
    descriptionFi:
      'Korkea-asteen koulutus (pl. yliopistot ja ammattikorkeakoulut)',
    descriptionEn: 'Post-secondary non-tertiary education',
  },
  {
    code: '85410',
    descriptionFi:
      'Korkea-asteen koulutus (pl. yliopistot ja ammattikorkeakoulut)',
    descriptionEn: 'Post-secondary non-tertiary education',
  },
  {
    code: '8542',
    descriptionFi:
      'Korkea-asteen koulutus yliopistoissa ja ammattikorkeakouluissa',
    descriptionEn: 'Tertiary education',
  },
  {
    code: '85420',
    descriptionFi:
      'Korkea-asteen koulutus yliopistoissa ja ammattikorkeakouluissa',
    descriptionEn: 'Tertiary education',
  },
  {
    code: '855',
    descriptionFi: 'Muu koulutus',
    descriptionEn: 'Other education',
  },
  {
    code: '8551',
    descriptionFi: 'Urheilu- ja liikuntakoulutus',
    descriptionEn: 'Sports and recreation education',
  },
  {
    code: '85510',
    descriptionFi: 'Urheilu- ja liikuntakoulutus',
    descriptionEn: 'Sports and recreation education',
  },
  {
    code: '8552',
    descriptionFi: 'Taiteen ja musiikin koulutus',
    descriptionEn: 'Cultural education',
  },
  {
    code: '85520',
    descriptionFi: 'Taiteen ja musiikin koulutus',
    descriptionEn: 'Cultural education',
  },
  {
    code: '8553',
    descriptionFi: 'Kuljettajakoulutus',
    descriptionEn: 'Driving school activities',
  },
  {
    code: '85530',
    descriptionFi: 'Kuljettajakoulutus',
    descriptionEn: 'Driving school activities',
  },
  {
    code: '8559',
    descriptionFi: 'Muualla luokittelematon koulutus',
    descriptionEn: 'Other education n.e.c.',
  },
  {
    code: '85591',
    descriptionFi: 'Kansanopistot, kansalaisopistot, työväenopistot yms.',
    descriptionEn:
      "Folk high schools, adult education centers, workers' institutes, etc.",
  },
  {
    code: '85592',
    descriptionFi: 'Koulutuskeskukset',
    descriptionEn: 'Training centers',
  },
  {
    code: '85593',
    descriptionFi: 'Kielikoulut ja -opistot',
    descriptionEn: 'Language schools and institutes',
  },
  {
    code: '85599',
    descriptionFi: 'Muut koulutusta antavat yksiköt',
    descriptionEn: 'Other education n.e.c.',
  },
  {
    code: '856',
    descriptionFi: 'Koulutusta palveleva toiminta',
    descriptionEn: 'Educational support activities',
  },
  {
    code: '8560',
    descriptionFi: 'Koulutusta palveleva toiminta',
    descriptionEn: 'Educational support activities',
  },
  {
    code: '85600',
    descriptionFi: 'Koulutusta palveleva toiminta',
    descriptionEn: 'Educational support activities',
  },
  {
    code: '86',
    descriptionFi: 'Terveyspalvelut',
    descriptionEn: 'Human health activities',
  },
  {
    code: '861',
    descriptionFi: 'Terveydenhuollon laitospalvelut',
    descriptionEn: 'Hospital activities',
  },
  {
    code: '8610',
    descriptionFi: 'Terveydenhuollon laitospalvelut',
    descriptionEn: 'Hospital activities',
  },
  {
    code: '86101',
    descriptionFi: 'Varsinaiset sairaalapalvelut',
    descriptionEn: 'General hospital activities',
  },
  {
    code: '86102',
    descriptionFi: 'Kuntoutuslaitokset ja sairaskodit',
    descriptionEn: 'Rehabilitation centers and nursing homes',
  },
  {
    code: '862',
    descriptionFi: 'Lääkäri- ja hammaslääkäripalvelut',
    descriptionEn: 'Medical and dental practice activities',
  },
  {
    code: '8621',
    descriptionFi: 'Terveyskeskus- ja vastaavat yleislääkäripalvelut',
    descriptionEn: 'General medical practice activities',
  },
  {
    code: '86210',
    descriptionFi: 'Terveyskeskus- ja vastaavat yleislääkäripalvelut',
    descriptionEn: 'General medical practice activities',
  },
  {
    code: '8622',
    descriptionFi:
      'Lääkäriasemat, yksityislääkärit ja vastaavat erikoislääkäripalvelut',
    descriptionEn: 'Specialist medical practice activities',
  },
  {
    code: '86220',
    descriptionFi:
      'Lääkäriasemat, yksityislääkärit ja vastaavat erikoislääkäripalvelut',
    descriptionEn: 'Specialist medical practice activities',
  },
  {
    code: '8623',
    descriptionFi: 'Hammaslääkäripalvelut',
    descriptionEn: 'Dental practice activities',
  },
  {
    code: '86230',
    descriptionFi: 'Hammaslääkäripalvelut',
    descriptionEn: 'Dental practice activities',
  },
  {
    code: '869',
    descriptionFi: 'Muut terveydenhuoltopalvelut',
    descriptionEn: 'Other human health activities',
  },
  {
    code: '8690',
    descriptionFi: 'Muut terveydenhuoltopalvelut',
    descriptionEn: 'Other human health activities',
  },
  {
    code: '86901',
    descriptionFi: 'Fysioterapia',
    descriptionEn: 'Physiotherapy',
  },
  {
    code: '86902',
    descriptionFi: 'Laboratoriotutkimukset',
    descriptionEn: 'Laboratory testing',
  },
  {
    code: '86903',
    descriptionFi: 'Kuvantamistutkimukset',
    descriptionEn: 'Imaging services',
  },
  {
    code: '86904',
    descriptionFi: 'Sairaankuljetuspalvelut',
    descriptionEn: 'Ambulance services',
  },
  {
    code: '86909',
    descriptionFi: 'Muu terveyspalvelu',
    descriptionEn: 'Other human health activities n.e.c.',
  },
  {
    code: '87',
    descriptionFi: 'Sosiaalihuollon laitospalvelut',
    descriptionEn: 'Residential care activities',
  },
  {
    code: '871',
    descriptionFi: 'Sosiaalihuollon hoitolaitokset',
    descriptionEn: 'Residential nursing care facilities',
  },
  {
    code: '8710',
    descriptionFi: 'Sosiaalihuollon hoitolaitokset',
    descriptionEn: 'Residential nursing care facilities',
  },
  {
    code: '87101',
    descriptionFi: 'Ikääntyneiden hoitolaitokset',
    descriptionEn: 'Nursing care facilities for the elderly',
  },
  {
    code: '87102',
    descriptionFi:
      'Vammaisten hoitolaitokset (pl. kehitysvammaisten laitospalvelut)',
    descriptionEn:
      'Nursing care facilities for the disabled (excluding services for the developmentally disabled)',
  },
  {
    code: '872',
    descriptionFi:
      'Kehitysvammaisten sekä mielenterveys- ja päihdeongelmaisten asumispalvelut',
    descriptionEn:
      'Residential care activities for mental retardation, mental health and substance abuse',
  },
  {
    code: '8720',
    descriptionFi:
      'Kehitysvammaisten sekä mielenterveys- ja päihdeongelmaisten asumispalvelut',
    descriptionEn:
      'Residential care activities for mental retardation, mental health and substance abuse',
  },
  {
    code: '87201',
    descriptionFi: 'Kehitysvammaisten laitokset ja asumispalvelut',
    descriptionEn:
      'Residential care activities for the developmentally disabled',
  },
  {
    code: '87202',
    descriptionFi: 'Mielenterveysongelmaisten asumispalvelut',
    descriptionEn: 'Residential care activities for mental health',
  },
  {
    code: '87203',
    descriptionFi: 'Päihdeongelmaisten laitokset',
    descriptionEn: 'Residential care activities for substance abuse',
  },
  {
    code: '87204',
    descriptionFi: 'Päihdeongelmaisten asumispalvelut',
    descriptionEn: 'Residential care activities for substance abuse',
  },
  {
    code: '873',
    descriptionFi: 'Vanhusten ja vammaisten asumispalvelut',
    descriptionEn: 'Residential care activities for the elderly and disabled',
  },
  {
    code: '8730',
    descriptionFi: 'Vanhusten ja vammaisten asumispalvelut',
    descriptionEn: 'Residential care activities for the elderly and disabled',
  },
  {
    code: '87301',
    descriptionFi: 'Ikääntyneiden palveluasuminen',
    descriptionEn: 'Residential care activities for the elderly',
  },
  {
    code: '87302',
    descriptionFi:
      'Vammaisten palveluasuminen (pl. kehitysvammaisten palveluasuminen)',
    descriptionEn:
      'Residential care activities for the disabled (excluding services for the developmentally disabled)',
  },
  {
    code: '879',
    descriptionFi: 'Muut sosiaalihuollon laitospalvelut',
    descriptionEn: 'Other residential care activities',
  },
  {
    code: '8790',
    descriptionFi: 'Muut sosiaalihuollon laitospalvelut',
    descriptionEn: 'Other residential care activities',
  },
  {
    code: '87901',
    descriptionFi: 'Lasten ja nuorten laitokset ja ammatillinen perhehoito',
    descriptionEn:
      'Residential care activities for children and young people and professional foster care',
  },
  {
    code: '87902',
    descriptionFi: 'Ensi- ja turvakodit',
    descriptionEn: 'Crisis and emergency shelters',
  },
  {
    code: '87909',
    descriptionFi: 'Muut laitokset ja asumispalvelut',
    descriptionEn: 'Other residential care activities n.e.c.',
  },
  {
    code: '88',
    descriptionFi: 'Sosiaalihuollon avopalvelut',
    descriptionEn: 'Social work activities without accommodation',
  },
  {
    code: '881',
    descriptionFi: 'Vanhusten ja vammaisten sosiaalihuollon avopalvelut',
    descriptionEn:
      'Social work activities without accommodation for the elderly and disabled',
  },
  {
    code: '8810',
    descriptionFi: 'Vanhusten ja vammaisten sosiaalihuollon avopalvelut',
    descriptionEn:
      'Social work activities without accommodation for the elderly and disabled',
  },
  {
    code: '88101',
    descriptionFi: 'Kotipalvelut ikääntyneille ja vammaisille',
    descriptionEn: 'Home care services for the elderly and disabled',
  },
  {
    code: '88102',
    descriptionFi: 'Ikääntyneiden päivätoiminta',
    descriptionEn: 'Day care activities for the elderly',
  },
  {
    code: '88103',
    descriptionFi: 'Vammaisten päivä- ja työtoiminta',
    descriptionEn: 'Day and work activities for the disabled',
  },
  {
    code: '88109',
    descriptionFi: 'Muut vanhusten ja vammaisten avopalvelut',
    descriptionEn:
      'Other social work activities without accommodation for the elderly and disabled',
  },
  {
    code: '889',
    descriptionFi: 'Muut sosiaalihuollon avopalvelut',
    descriptionEn: 'Other social work activities without accommodation',
  },
  {
    code: '8891',
    descriptionFi: 'Lasten päivähoitopalvelut',
    descriptionEn: 'Child day-care activities',
  },
  {
    code: '88911',
    descriptionFi: 'Lasten päiväkodit',
    descriptionEn: 'Day-care centers for children',
  },
  {
    code: '88919',
    descriptionFi: 'Muu lasten päivähoito',
    descriptionEn: 'Other child day-care activities',
  },
  {
    code: '8899',
    descriptionFi: 'Muualla luokittelemattomat sosiaalihuollon avopalvelut',
    descriptionEn: 'Other social work activities without accommodation n.e.c.',
  },
  {
    code: '88991',
    descriptionFi: 'Kotipalvelut muille kuin ikääntyneille ja vammaisille',
    descriptionEn: 'Home care services for other than the elderly and disabled',
  },
  {
    code: '88992',
    descriptionFi:
      'Päivä- ja työtoiminta muille kuin ikääntyneille ja vammaisille',
    descriptionEn:
      'Day and work activities for other than the elderly and disabled',
  },
  {
    code: '88993',
    descriptionFi: 'Avomuotoinen päihdekuntoutus',
    descriptionEn: 'Outpatient rehabilitation for substance abuse',
  },
  {
    code: '88999',
    descriptionFi:
      'Muut muualla luokittelemattomat sosiaalihuollon avopalvelut',
    descriptionEn: 'Other social work activities without accommodation n.e.c.',
  },
  {
    code: '90',
    descriptionFi: 'Kulttuuri- ja viihdetoiminta',
    descriptionEn: 'Creative, arts and entertainment activities',
  },
  {
    code: '900',
    descriptionFi: 'Kulttuuri- ja viihdetoiminta',
    descriptionEn: 'Creative, arts and entertainment activities',
  },
  {
    code: '9001',
    descriptionFi: 'Esittävät taiteet',
    descriptionEn: 'Performing arts',
  },
  {
    code: '90010',
    descriptionFi: 'Esittävät taiteet',
    descriptionEn: 'Performing arts',
  },
  {
    code: '9002',
    descriptionFi: 'Esittäviä taiteita palveleva toiminta',
    descriptionEn: 'Support activities to performing arts',
  },
  {
    code: '90020',
    descriptionFi: 'Esittäviä taiteita palveleva toiminta',
    descriptionEn: 'Support activities to performing arts',
  },
  {
    code: '9003',
    descriptionFi: 'Taiteellinen luominen',
    descriptionEn: 'Artistic creation',
  },
  {
    code: '90030',
    descriptionFi: 'Taiteellinen luominen',
    descriptionEn: 'Artistic creation',
  },
  {
    code: '9004',
    descriptionFi: 'Taidelaitosten toiminta',
    descriptionEn: 'Operation of arts facilities',
  },
  {
    code: '90040',
    descriptionFi: 'Taidelaitosten toiminta',
    descriptionEn: 'Operation of arts facilities',
  },
  {
    code: '91',
    descriptionFi:
      'Kirjastojen, arkistojen, museoiden ja muiden kulttuurilaitosten toiminta',
    descriptionEn: 'Libraries, archives, museums and other cultural activities',
  },
  {
    code: '910',
    descriptionFi:
      'Kirjastojen, arkistojen, museoiden ja muiden kulttuurilaitosten toiminta',
    descriptionEn: 'Libraries, archives, museums and other cultural activities',
  },
  {
    code: '9101',
    descriptionFi: 'Kirjastojen ja arkistojen toiminta',
    descriptionEn: 'Library and archives activities',
  },
  {
    code: '91010',
    descriptionFi: 'Kirjastojen ja arkistojen toiminta',
    descriptionEn: 'Library and archives activities',
  },
  {
    code: '9102',
    descriptionFi: 'Museoiden toiminta',
    descriptionEn: 'Museums activities',
  },
  {
    code: '91020',
    descriptionFi: 'Museoiden toiminta',
    descriptionEn: 'Museums activities',
  },
  {
    code: '9103',
    descriptionFi:
      'Historiallisten nähtävyyksien, rakennusten ja vastaavien kohteiden toiminta',
    descriptionEn:
      'Operation of historical sites and buildings and similar visitor attractions',
  },
  {
    code: '91030',
    descriptionFi:
      'Historiallisten nähtävyyksien, rakennusten ja vastaavien kohteiden toiminta',
    descriptionEn:
      'Operation of historical sites and buildings and similar visitor attractions',
  },
  {
    code: '9104',
    descriptionFi:
      'Kasvitieteellisten puutarhojen, eläintarhojen ja luonnonpuistojen toiminta',
    descriptionEn:
      'Botanical and zoological gardens and nature reserves activities',
  },
  {
    code: '91040',
    descriptionFi:
      'Kasvitieteellisten puutarhojen, eläintarhojen ja luonnonpuistojen toiminta',
    descriptionEn:
      'Botanical and zoological gardens and nature reserves activities',
  },
  {
    code: '92',
    descriptionFi: 'Rahapeli- ja vedonlyöntipalvelut',
    descriptionEn: 'Gambling and betting activities',
  },
  {
    code: '920',
    descriptionFi: 'Rahapeli- ja vedonlyöntipalvelut',
    descriptionEn: 'Gambling and betting activities',
  },
  {
    code: '9200',
    descriptionFi: 'Rahapeli- ja vedonlyöntipalvelut',
    descriptionEn: 'Gambling and betting activities',
  },
  {
    code: '92000',
    descriptionFi: 'Rahapeli- ja vedonlyöntipalvelut',
    descriptionEn: 'Gambling and betting activities',
  },
  {
    code: '93',
    descriptionFi: 'Urheilutoiminta sekä huvi- ja virkistyspalvelut',
    descriptionEn: 'Sports activities and amusement and recreation activities',
  },
  {
    code: '931',
    descriptionFi: 'Urheilutoiminta',
    descriptionEn: 'Sports activities',
  },
  {
    code: '9311',
    descriptionFi: 'Urheilulaitosten toiminta',
    descriptionEn: 'Operation of sports facilities',
  },
  {
    code: '93110',
    descriptionFi: 'Urheilulaitosten toiminta',
    descriptionEn: 'Operation of sports facilities',
  },
  {
    code: '9312',
    descriptionFi: 'Urheiluseurojen toiminta',
    descriptionEn: 'Activities of sports clubs',
  },
  {
    code: '93120',
    descriptionFi: 'Urheiluseurojen toiminta',
    descriptionEn: 'Activities of sports clubs',
  },
  {
    code: '9313',
    descriptionFi: 'Kuntokeskukset',
    descriptionEn: 'Fitness facilities',
  },
  {
    code: '93130',
    descriptionFi: 'Kuntokeskukset',
    descriptionEn: 'Fitness facilities',
  },
  {
    code: '9319',
    descriptionFi: 'Muu urheilutoiminta',
    descriptionEn: 'Other sports activities',
  },
  {
    code: '93190',
    descriptionFi: 'Muu urheilutoiminta',
    descriptionEn: 'Other sports activities',
  },
  {
    code: '932',
    descriptionFi: 'Huvi- ja virkistystoiminta',
    descriptionEn: 'Amusement and recreation activities',
  },
  {
    code: '9321',
    descriptionFi: 'Huvi- ja teemapuistojen toiminta',
    descriptionEn: 'Activities of amusement parks and theme parks',
  },
  {
    code: '93210',
    descriptionFi: 'Huvi- ja teemapuistojen toiminta',
    descriptionEn: 'Activities of amusement parks and theme parks',
  },
  {
    code: '9329',
    descriptionFi: 'Muu huvi- ja virkistystoiminta',
    descriptionEn: 'Other amusement and recreation activities',
  },
  {
    code: '93291',
    descriptionFi: 'Hiihto- ja laskettelukeskukset',
    descriptionEn: 'Skiing and snowboarding centers',
  },
  {
    code: '93299',
    descriptionFi: 'Muualla luokittelematon huvi- ja virkistystoiminta',
    descriptionEn: 'Other amusement and recreation activities n.e.c.',
  },
  {
    code: '94',
    descriptionFi: 'Järjestöjen toiminta',
    descriptionEn: 'Activities of membership organizations',
  },
  {
    code: '941',
    descriptionFi:
      'Elinkeinoelämän, työnantaja- ja ammattialajärjestöjen toiminta',
    descriptionEn:
      'Activities of business, employers and professional membership organizations',
  },
  {
    code: '9411',
    descriptionFi: 'Elinkeinoelämän ja työnantajajärjestöjen toiminta',
    descriptionEn: 'Activities of business and employers organizations',
  },
  {
    code: '94110',
    descriptionFi: 'Elinkeinoelämän ja työnantajajärjestöjen toiminta',
    descriptionEn: 'Activities of business and employers organizations',
  },
  {
    code: '9412',
    descriptionFi: 'Ammattialajärjestöjen toiminta',
    descriptionEn: 'Activities of professional membership organizations',
  },
  {
    code: '94120',
    descriptionFi: 'Ammattialajärjestöjen toiminta',
    descriptionEn: 'Activities of professional membership organizations',
  },
  {
    code: '942',
    descriptionFi: 'Ammattiyhdistysten toiminta',
    descriptionEn: 'Activities of trade unions',
  },
  {
    code: '9420',
    descriptionFi: 'Ammattiyhdistysten toiminta',
    descriptionEn: 'Activities of trade unions',
  },
  {
    code: '94200',
    descriptionFi: 'Ammattiyhdistysten toiminta',
    descriptionEn: 'Activities of trade unions',
  },
  {
    code: '949',
    descriptionFi: 'Muiden järjestöjen toiminta',
    descriptionEn: 'Activities of other membership organizations',
  },
  {
    code: '9491',
    descriptionFi: 'Seurakunnat ja uskonnolliset järjestöt',
    descriptionEn: 'Activities of religious organizations',
  },
  {
    code: '94910',
    descriptionFi: 'Seurakunnat ja uskonnolliset järjestöt',
    descriptionEn: 'Activities of religious organizations',
  },
  {
    code: '9492',
    descriptionFi: 'Poliittiset järjestöt',
    descriptionEn: 'Activities of political organizations',
  },
  {
    code: '94920',
    descriptionFi: 'Poliittiset järjestöt',
    descriptionEn: 'Activities of political organizations',
  },
  {
    code: '9499',
    descriptionFi: 'Muut järjestöt',
    descriptionEn: 'Activities of other membership organizations n.e.c.',
  },
  {
    code: '94991',
    descriptionFi: 'Tutkimusta ja kulttuuria palvelevat järjestöt',
    descriptionEn: 'Organizations serving research and culture',
  },
  {
    code: '94999',
    descriptionFi: 'Muualla luokittelemattomat muut järjestöt',
    descriptionEn: 'Other membership organizations n.e.c.',
  },
  {
    code: '95',
    descriptionFi:
      'Tietokoneiden, henkilökohtaisten ja kotitaloustavaroiden korjaus',
    descriptionEn: 'Repair of computers and personal and household goods',
  },
  {
    code: '951',
    descriptionFi: 'Tietokoneiden ja viestintälaitteiden korjaus',
    descriptionEn: 'Repair of computers and communication equipment',
  },
  {
    code: '9511',
    descriptionFi: 'Tietokoneiden ja niiden oheislaitteiden korjaus',
    descriptionEn: 'Repair of computers and peripheral equipment',
  },
  {
    code: '95110',
    descriptionFi: 'Tietokoneiden ja niiden oheislaitteiden korjaus',
    descriptionEn: 'Repair of computers and peripheral equipment',
  },
  {
    code: '9512',
    descriptionFi: 'Viestintälaitteiden korjaus',
    descriptionEn: 'Repair of communication equipment',
  },
  {
    code: '95120',
    descriptionFi: 'Viestintälaitteiden korjaus',
    descriptionEn: 'Repair of communication equipment',
  },
  {
    code: '952',
    descriptionFi: 'Henkilökohtaisten ja kotitaloustavaroiden korjaus',
    descriptionEn: 'Repair of personal and household goods',
  },
  {
    code: '9521',
    descriptionFi: 'Viihde-elektroniikan korjaus',
    descriptionEn: 'Repair of consumer electronics',
  },
  {
    code: '95210',
    descriptionFi: 'Viihde-elektroniikan korjaus',
    descriptionEn: 'Repair of consumer electronics',
  },
  {
    code: '9522',
    descriptionFi:
      'Kotitalouskoneiden sekä kodin ja puutarhan laitteiden korjaus',
    descriptionEn:
      'Repair of household appliances and home and garden equipment',
  },
  {
    code: '95220',
    descriptionFi:
      'Kotitalouskoneiden sekä kodin ja puutarhan laitteiden korjaus',
    descriptionEn:
      'Repair of household appliances and home and garden equipment',
  },
  {
    code: '9523',
    descriptionFi: 'Jalkineiden ja nahkatavaroiden korjaus',
    descriptionEn: 'Repair of footwear and leather goods',
  },
  {
    code: '95230',
    descriptionFi: 'Jalkineiden ja nahkatavaroiden korjaus',
    descriptionEn: 'Repair of footwear and leather goods',
  },
  {
    code: '9524',
    descriptionFi: 'Huonekalujen ja kodin kalusteiden korjaus',
    descriptionEn: 'Repair of furniture and home furnishings',
  },
  {
    code: '95240',
    descriptionFi: 'Huonekalujen ja kodin kalusteiden korjaus',
    descriptionEn: 'Repair of furniture and home furnishings',
  },
  {
    code: '9525',
    descriptionFi: 'Kellojen ja korujen korjaus',
    descriptionEn: 'Repair of watches, clocks and jewelry',
  },
  {
    code: '95250',
    descriptionFi: 'Kellojen ja korujen korjaus',
    descriptionEn: 'Repair of watches, clocks and jewelry',
  },
  {
    code: '9529',
    descriptionFi: 'Muiden henkilökohtaisten ja kotitaloustavaroiden korjaus',
    descriptionEn: 'Repair of other personal and household goods',
  },
  {
    code: '95290',
    descriptionFi: 'Muiden henkilökohtaisten ja kotitaloustavaroiden korjaus',
    descriptionEn: 'Repair of other personal and household goods',
  },
  {
    code: '96',
    descriptionFi: 'Muut henkilökohtaiset palvelut',
    descriptionEn: 'Other personal service activities',
  },
  {
    code: '960',
    descriptionFi: 'Muut henkilökohtaiset palvelut',
    descriptionEn: 'Other personal service activities',
  },
  {
    code: '9601',
    descriptionFi: 'Pesulapalvelut',
    descriptionEn: 'Washing and (dry-)cleaning of textile and fur products',
  },
  {
    code: '96011',
    descriptionFi: 'Pesulapalvelut yrityksille',
    descriptionEn:
      'Washing and (dry-)cleaning of textile and fur products for businesses',
  },
  {
    code: '96012',
    descriptionFi: 'Pesulapalvelut kotitalouksille',
    descriptionEn:
      'Washing and (dry-)cleaning of textile and fur products for households',
  },
  {
    code: '9602',
    descriptionFi: 'Kampaamo- ja kauneudenhoitopalvelut',
    descriptionEn: 'Hairdressing and other beauty treatment',
  },
  {
    code: '96021',
    descriptionFi: 'Parturit ja kampaamot',
    descriptionEn: 'Hairdressing',
  },
  {
    code: '96022',
    descriptionFi: 'Kauneudenhoitopalvelut',
    descriptionEn: 'Beauty treatment',
  },
  {
    code: '9603',
    descriptionFi: 'Hautaustoimistojen palvelut',
    descriptionEn: 'Funeral and related activities',
  },
  {
    code: '96030',
    descriptionFi: 'Hautaustoimistojen palvelut',
    descriptionEn: 'Funeral and related activities',
  },
  {
    code: '9604',
    descriptionFi: 'Kylpylaitokset, saunat, solariumit yms. palvelut',
    descriptionEn: 'Physical well-being activities',
  },
  {
    code: '96040',
    descriptionFi: 'Kylpylaitokset, saunat, solariumit yms. palvelut',
    descriptionEn: 'Physical well-being activities',
  },
  {
    code: '9609',
    descriptionFi: 'Muualla luokittelemattomat henkilökohtaiset palvelut',
    descriptionEn: 'Other personal service activities n.e.c.',
  },
  {
    code: '96090',
    descriptionFi: 'Muualla luokittelemattomat henkilökohtaiset palvelut',
    descriptionEn: 'Other personal service activities n.e.c.',
  },
  {
    code: '97',
    descriptionFi:
      'Kotitalouksien toiminta kotitaloustyöntekijöiden työnantajina',
    descriptionEn:
      'Activities of households as employers of domestic personnel',
  },
  {
    code: '970',
    descriptionFi:
      'Kotitalouksien toiminta kotitaloustyöntekijöiden työnantajina',
    descriptionEn:
      'Activities of households as employers of domestic personnel',
  },
  {
    code: '9700',
    descriptionFi:
      'Kotitalouksien toiminta kotitaloustyöntekijöiden työnantajina',
    descriptionEn:
      'Activities of households as employers of domestic personnel',
  },
  {
    code: '97000',
    descriptionFi:
      'Kotitalouksien toiminta kotitaloustyöntekijöiden työnantajina',
    descriptionEn:
      'Activities of households as employers of domestic personnel',
  },
  {
    code: '98',
    descriptionFi:
      'Kotitalouksien eriyttämätön toiminta tavaroiden ja palvelujen tuottamiseksi omaan käyttöön',
    descriptionEn:
      'Undifferentiated goods- and services-producing activities of private households for own use',
  },
  {
    code: '981',
    descriptionFi:
      'Kotitalouksien eriyttämätön toiminta tavaroiden tuottamiseksi omaan käyttöön',
    descriptionEn:
      'Undifferentiated goods-producing activities of private households for own use',
  },
  {
    code: '9810',
    descriptionFi:
      'Kotitalouksien eriyttämätön toiminta tavaroiden tuottamiseksi omaan käyttöön',
    descriptionEn:
      'Undifferentiated goods-producing activities of private households for own use',
  },
  {
    code: '98100',
    descriptionFi:
      'Kotitalouksien eriyttämätön toiminta tavaroiden tuottamiseksi omaan käyttöön',
    descriptionEn:
      'Undifferentiated goods-producing activities of private households for own use',
  },
  {
    code: '982',
    descriptionFi:
      'Kotitalouksien eriyttämätön toiminta palvelujen tuottamiseksi omaan käyttöön',
    descriptionEn:
      'Undifferentiated services-producing activities of private households for own use',
  },
  {
    code: '9820',
    descriptionFi:
      'Kotitalouksien eriyttämätön toiminta palvelujen tuottamiseksi omaan käyttöön',
    descriptionEn:
      'Undifferentiated services-producing activities of private households for own use',
  },
  {
    code: '98200',
    descriptionFi:
      'Kotitalouksien eriyttämätön toiminta palvelujen tuottamiseksi omaan käyttöön',
    descriptionEn:
      'Undifferentiated services-producing activities of private households for own use',
  },
  {
    code: '99',
    descriptionFi: 'Kansainvälisten organisaatioiden ja toimielinten toiminta',
    descriptionEn: 'Activities of extraterritorial organizations and bodies',
  },
  {
    code: '990',
    descriptionFi: 'Kansainvälisten organisaatioiden ja toimielinten toiminta',
    descriptionEn: 'Activities of extraterritorial organizations and bodies',
  },
  {
    code: '9900',
    descriptionFi: 'Kansainvälisten organisaatioiden ja toimielinten toiminta',
    descriptionEn: 'Activities of extraterritorial organizations and bodies',
  },
  {
    code: '99000',
    descriptionFi: 'Kansainvälisten organisaatioiden ja toimielinten toiminta',
    descriptionEn: 'Activities of extraterritorial organizations and bodies',
  },
];
