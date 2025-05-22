import { CategoryFilter } from './model';

export const CategoryData: CategoryFilter[] = [
  {
    label: 'Elektronika',
    value: 'electron',
    items: [
      {
        label: 'Smartfonlar va telefonlar',
        value: 'phones',
        items: [
          { label: 'Smartfonlar', value: 'smartphones' },
          { label: 'Uy telefonlari', value: 'landline-phones' },
          { label: 'Telefon qutilari', value: 'phone-cases' },
          { label: 'Zaryadlovchi kabellar', value: 'charging-cables' },
          { label: 'Ekran himoyachilari', value: 'screen-protectors' },
        ],
      },
      {
        label: 'Noutbuklar va kompyuterlar',
        value: 'laptops',
        items: [
          { label: 'Noutbuklar', value: 'notebooks' },
          { label: 'Stol kompyuterlari', value: 'desktops' },
          { label: 'Monitorlar', value: 'monitors' },
          { label: 'Klaviaturalar', value: 'keyboards' },
          { label: 'Noutbuk sumkalari', value: 'laptop-bags' },
        ],
      },
      {
        label: 'Televizorlar va aksessuarlar',
        value: 'tv-accessories',
        items: [
          { label: 'LED televizorlar', value: 'led-tvs' },
          { label: 'TV tyunerlar', value: 'tv-tuners' },
          { label: 'Pultlar', value: 'remotes' },
          { label: 'HDMI kabellar', value: 'hdmi-cables' },
          { label: "Devorga o'rnatgichlar", value: 'wall-mounts' },
        ],
      },
      {
        label: 'Planshetlar',
        value: 'tablets',
        items: [
          { label: 'Android planshetlar', value: 'android-tablets' },
          { label: 'Planshet qutilari', value: 'tablet-cases' },
          { label: 'Stilus qalamlar', value: 'stylus-pens' },
          { label: 'Planshet zaryadlovchilar', value: 'tablet-chargers' },
          { label: 'Ekran himoyachilari', value: 'tablet-screen-protectors' },
        ],
      },
      {
        label: 'Aqlli soatlar',
        value: 'smartwatches',
        items: [
          { label: 'Fitnes soatlar', value: 'fitness-watches' },
          { label: 'Soat kamarlari', value: 'watch-bands' },
          { label: 'Zaryadlovchi stendlar', value: 'charging-stands' },
          { label: 'Ekran himoyachilari', value: 'watch-screen-protectors' },
          { label: 'Soat aksessuarlari', value: 'watch-accessories' },
        ],
      },
    ],
  },
  {
    label: 'Maishiy texnika',
    value: 'home-appliances',
    items: [
      {
        label: 'Kir yuvish mashinalari',
        value: 'washing-machines',
        items: [
          { label: 'Avtomatik mashinalar', value: 'automatic-washers' },
          {
            label: 'Yarim avtomatik mashinalar',
            value: 'semi-automatic-washers',
          },
          { label: 'Quritgichlar', value: 'dryers' },
          { label: 'Yuvish vositalari', value: 'detergents' },
          { label: 'Mashina stendlar', value: 'washer-stands' },
        ],
      },
      {
        label: 'Sovutgichlar',
        value: 'refrigerators',
        items: [
          { label: 'Ikki eshikli sovutgichlar', value: 'double-door-fridges' },
          { label: 'Mini sovutgichlar', value: 'mini-fridges' },
          { label: 'Muzlatgichlar', value: 'freezers' },
          { label: 'Sovutgich javonlari', value: 'fridge-shelves' },
          { label: 'Sovutgich organizatorlari', value: 'fridge-organizers' },
        ],
      },
      {
        label: "Mikroto'lqinli pechlar",
        value: 'microwaves',
        items: [
          { label: "Solo mikroto'lqinlar", value: 'solo-microwaves' },
          { label: "Grilli mikroto'lqinlar", value: 'grill-microwaves' },
          { label: "Mikroto'lqin idishlari", value: 'microwave-dishes' },
          { label: 'Qopqoqlar', value: 'microwave-covers' },
          { label: "Mikroto'lqin stendlar", value: 'microwave-stands' },
        ],
      },
      {
        label: 'Gaz plitalari',
        value: 'gas-stoves',
        items: [
          { label: "4 o'choqli plitalar", value: 'four-burner-stoves' },
          { label: "2 o'choqli plitalar", value: 'two-burner-stoves' },
          { label: 'Pechni tozalash vositalari', value: 'stove-cleaners' },
          { label: "O'choq qopqoqlari", value: 'burner-covers' },
          { label: 'Pechni tutqichlar', value: 'stove-knobs' },
        ],
      },
      {
        label: 'Changyutgichlar',
        value: 'vacuum-cleaners',
        items: [
          { label: 'Sumkali changyutgichlar', value: 'bagged-vacuums' },
          { label: 'Robot changyutgichlar', value: 'robot-vacuums' },
          { label: 'Filtrlar', value: 'vacuum-filters' },
          { label: 'Nasadkalar', value: 'vacuum-attachments' },
          { label: 'Changyutgich sumkalari', value: 'vacuum-bags' },
        ],
      },
    ],
  },
  {
    label: 'Kiyim-kechak',
    value: 'clothing',
    items: [
      {
        label: 'Ayollar kiyimi',
        value: 'womens-clothing',
        items: [
          { label: "Ko'ylaklar", value: 'dresses' },
          { label: 'Yubkalar', value: 'skirts' },
          { label: 'Shimlar', value: 'pants' },
          { label: 'Bluzkalar', value: 'blouses' },
          { label: 'Kurtkalar', value: 'jackets' },
        ],
      },
      {
        label: 'Erkaklar kiyimi',
        value: 'mens-clothing',
        items: [
          { label: 'Kostyumlar', value: 'suits' },
          { label: 'Shimlar', value: 'mens-pants' },
          { label: "Ko'ylaklar", value: 'shirts' },
          { label: 'Futbolkalar', value: 't-shirts' },
          { label: 'Kurtkalar', value: 'mens-jackets' },
        ],
      },
      {
        label: 'Bolalar kiyimi',
        value: 'kids-clothing',
        items: [
          { label: 'Kostyumlar', value: 'kids-suits' },
          { label: "Ko'ylaklar", value: 'kids-shirts' },
          { label: 'Shimlar', value: 'kids-pants' },
          { label: 'Yubkalar', value: 'kids-skirts' },
          { label: 'Futbolkalar', value: 'kids-t-shirts' },
        ],
      },
      {
        label: 'Sport kiyimlari',
        value: 'sportswear',
        items: [
          { label: 'Sport kostyumlari', value: 'sports-suits' },
          { label: 'Sport shimlari', value: 'sports-pants' },
          { label: 'Sport futbolkalari', value: 'sports-t-shirts' },
          { label: 'Sport poyabzallari', value: 'sports-shoes' },
          { label: 'Sport aksessuarlari', value: 'sports-accessories' },
        ],
      },
      {
        label: 'Poyabzallar',
        value: 'shoes',
        items: [
          { label: 'Ayollar poyabzallari', value: 'womens-shoes' },
          { label: 'Erkaklar poyabzallari', value: 'mens-shoes' },
          { label: 'Bolalar poyabzallari', value: 'kids-shoes' },
          { label: 'Krossovkalar', value: 'sneakers' },
          { label: 'Botinkalar', value: 'boots' },
        ],
      },
    ],
  },
  {
    label: 'Oziq-ovqat mahsulotlari',
    value: 'food-products',
    items: [
      {
        label: 'Sabzavot va mevalar',
        value: 'fruits-vegetables',
        items: [
          { label: 'Yashil sabzavotlar', value: 'green-vegetables' },
          { label: 'Mevalar', value: 'fruits' },
          { label: 'Ildiz sabzavotlar', value: 'root-vegetables' },
          { label: 'Quritilgan mevalar', value: 'dried-fruits' },
          { label: 'Organik mahsulotlar', value: 'organic-produce' },
        ],
      },
      {
        label: "Go'sht va baliq",
        value: 'meat-fish',
        items: [
          { label: "Mol go'shti", value: 'beef' },
          { label: "Tovuq go'shti", value: 'chicken' },
          { label: 'Baliq', value: 'fish' },
          { label: "Konservalangan go'sht", value: 'canned-meat' },
          { label: 'Dengiz mahsulotlari', value: 'seafood' },
        ],
      },
      {
        label: 'Sut va sut mahsulotlari',
        value: 'dairy',
        items: [
          { label: 'Sut', value: 'milk' },
          { label: "Yog'urt", value: 'yogurt' },
          { label: 'Pishloq', value: 'cheese' },
          { label: "Sariyog'", value: 'butter' },
          { label: 'Smetana', value: 'sour-cream' },
        ],
      },
      {
        label: 'Non va non mahsulotlari',
        value: 'bread',
        items: [
          { label: "O'zbek noni", value: 'uzbek-bread' },
          { label: 'Toster noni', value: 'toast-bread' },
          { label: 'Kruassanlar', value: 'croissants' },
          { label: 'Bulochkalar', value: 'buns' },
          { label: 'Glutensiz non', value: 'gluten-free-bread' },
        ],
      },
      {
        label: 'Shirinliklar',
        value: 'sweets',
        items: [
          { label: 'Shokoladlar', value: 'chocolates' },
          { label: 'Konfetlar', value: 'candies' },
          { label: 'Pechenelar', value: 'cookies' },
          { label: 'Tortlar', value: 'cakes' },
          { label: 'Halva', value: 'halva' },
        ],
      },
    ],
  },
  {
    label: 'Bolalar tovarlari',
    value: 'kids-products',
    items: [
      {
        label: "O'yinchoqlar",
        value: 'toys',
        items: [
          { label: 'Konstruktorlar', value: 'building-sets' },
          { label: 'Kuklalar', value: 'dolls' },
          { label: 'Mashinalar', value: 'toy-cars' },
          { label: "Plyush o'yinchoqlar", value: 'plush-toys' },
          { label: "O'quv o'yinchoqlar", value: 'educational-toys' },
        ],
      },
      {
        label: 'Bolalar kiyimi',
        value: 'kids-clothes',
        items: [
          { label: 'Kostyumlar', value: 'kids-suits' },
          { label: "Ko'ylaklar", value: 'kids-shirts' },
          { label: 'Shimlar', value: 'kids-pants' },
          { label: 'Futbolkalar', value: 'kids-t-shirts' },
          { label: 'Poyabzallar', value: 'kids-shoes' },
        ],
      },
      {
        label: 'Aravachalar',
        value: 'strollers',
        items: [
          { label: 'Yengil aravachalar', value: 'lightweight-strollers' },
          { label: 'Aravacha qopqoqlari', value: 'stroller-covers' },
          { label: 'Aravacha sumkalari', value: 'stroller-bags' },
          { label: "Aravacha o'yinchoqlari", value: 'stroller-toys' },
          { label: 'Aravacha yostiqchalari', value: 'stroller-pads' },
        ],
      },
      {
        label: "Bolalar o'rindiqlari",
        value: 'car-seats',
        items: [
          { label: "Yosh bolalar o'rindiqlari", value: 'infant-car-seats' },
          { label: "Booster o'rindiqlari", value: 'booster-seats' },
          { label: "O'rindiq qopqoqlari", value: 'car-seat-covers' },
          { label: "O'rindiq yostiqchalari", value: 'car-seat-pads' },
          { label: "O'rindiq aksessuarlari", value: 'car-seat-accessories' },
        ],
      },
      {
        label: 'Bolalar gigiyena vositalari',
        value: 'baby-hygiene',
        items: [
          { label: 'Tagliklar', value: 'diapers' },
          { label: 'Nam salfetkalar', value: 'wet-wipes' },
          { label: 'Bolalar sovuni', value: 'baby-soap' },
          { label: 'Bolalar shampuni', value: 'baby-shampoo' },
          { label: 'Bolalar kremi', value: 'baby-cream' },
        ],
      },
    ],
  },
  {
    label: 'Avtotovarlar',
    value: 'auto-products',
    items: [
      {
        label: 'Avto ehtiyot qismlar',
        value: 'auto-parts',
        items: [
          { label: 'Dvigatel qismlari', value: 'engine-parts' },
          { label: 'Tormoz tizimlari', value: 'brake-systems' },
          { label: 'Filtrlar', value: 'filters' },
          { label: 'Kuzov qismlari', value: 'body-parts' },
          { label: 'Akkumulyatorlar', value: 'batteries' },
        ],
      },
      {
        label: 'Avto aksessuarlar',
        value: 'auto-accessories',
        items: [
          { label: 'Avto gilamchalari', value: 'car-mats' },
          { label: "O'rindiq qopqoqlari", value: 'seat-covers' },
          { label: 'Rul qopqoqlari', value: 'steering-covers' },
          { label: 'Avto havo tozalagichlari', value: 'car-air-fresheners' },
          { label: 'Avto ushlagichlari', value: 'car-holders' },
        ],
      },
      {
        label: 'Shinalar',
        value: 'tires',
        items: [
          { label: 'Yozgi shinalar', value: 'summer-tires' },
          { label: 'Qishki shinalar', value: 'winter-tires' },
          { label: 'Shina nasoslari', value: 'tire-pumps' },
          { label: "Shina ta'mirlash to'plamlari", value: 'tire-repair-kits' },
          { label: 'Shina qopqoqlari', value: 'tire-covers' },
        ],
      },
      {
        label: 'Avto moylar',
        value: 'car-oils',
        items: [
          { label: 'Dvigatel moylari', value: 'engine-oils' },
          { label: 'Transmissiya moylari', value: 'transmission-oils' },
          { label: 'Moy filtrlari', value: 'oil-filters' },
          { label: 'Moy idishlari', value: 'oil-containers' },
          { label: 'Moy tozalagichlari', value: 'oil-cleaners' },
        ],
      },
      {
        label: 'Avto yuvish vositalari',
        value: 'car-wash-products',
        items: [
          { label: 'Avto shampunlari', value: 'car-shampoos' },
          { label: 'Avto mumlar', value: 'car-waxes' },
          { label: 'Tozalash salfetkalari', value: 'cleaning-wipes' },
          { label: "Avto cho'tkalari", value: 'car-brushes' },
          { label: 'Oyna tozalagichlari', value: 'glass-cleaners' },
        ],
      },
    ],
  },
  {
    label: 'Maishiy kimyoviy moddalar',
    value: 'household-chemicals',
    items: [
      {
        label: 'Tozalash vositalari',
        value: 'cleaners',
        items: [
          { label: 'Oyna tozalagichlar', value: 'glass-cleaners' },
          { label: 'Pol tozalagichlar', value: 'floor-cleaners' },
          { label: 'Hammom tozalagichlar', value: 'bathroom-cleaners' },
          { label: 'Oshxona tozalagichlar', value: 'kitchen-cleaners' },
          { label: 'Tozalash spreylari', value: 'cleaning-sprays' },
        ],
      },
      {
        label: 'Kir yuvish kukunlari',
        value: 'detergents',
        items: [
          { label: 'Avtomatik kukunlar', value: 'automatic-detergents' },
          { label: 'Suyuq kukunlar', value: 'liquid-detergents' },
          { label: 'Yumshatgichlar', value: 'fabric-softeners' },
          { label: "Dog' tozalagichlar", value: 'stain-removers' },
          { label: 'Kukun idishlari', value: 'detergent-containers' },
        ],
      },
      {
        label: 'Idish yuvish vositalari',
        value: 'dish-soaps',
        items: [
          { label: 'Suyuq sovunlar', value: 'liquid-dish-soaps' },
          { label: 'Idish yuvish jellari', value: 'dish-gels' },
          { label: 'Idish yuvish gubkalari', value: 'dish-sponges' },
          { label: "Idish yuvish cho'tkalari", value: 'dish-brushes' },
          { label: 'Organik sovunlar', value: 'organic-dish-soaps' },
        ],
      },
      {
        label: 'Havo tozalagichlar',
        value: 'air-fresheners',
        items: [
          { label: 'Sprey tozalagichlar', value: 'spray-fresheners' },
          { label: 'Jel tozalagichlar', value: 'gel-fresheners' },
          { label: 'Elektr tozalagichlar', value: 'electric-fresheners' },
          { label: 'Havo tozalagich idishlari', value: 'freshener-containers' },
          { label: 'Organik tozalagichlar', value: 'organic-fresheners' },
        ],
      },
      {
        label: 'Poyabzal parvarishi',
        value: 'shoe-care',
        items: [
          { label: 'Poyabzal kremlari', value: 'shoe-creams' },
          { label: 'Poyabzal tozalagichlar', value: 'shoe-cleaners' },
          { label: "Poyabzal cho'tkalari", value: 'shoe-brushes' },
          { label: 'Poyabzal tagliklari', value: 'shoe-insoles' },
          { label: 'Poyabzal himoyachilari', value: 'shoe-protectors' },
        ],
      },
    ],
  },
  {
    label: "Dacha, bog' va tomorqa",
    value: 'garden',
    items: [
      {
        label: "Bog' asboblari",
        value: 'garden-tools',
        items: [
          { label: 'Belkuraklar', value: 'shovels' },
          { label: 'Ketmonlar', value: 'hoes' },
          { label: 'Tirmiklar', value: 'rakes' },
          { label: 'Arra', value: 'saws' },
          { label: "Bog' qaychi", value: 'garden-shears' },
        ],
      },
      {
        label: "O'simlik urug'lari",
        value: 'seeds',
        items: [
          { label: "Gul urug'lari", value: 'flower-seeds' },
          { label: "Sabzavot urug'lari", value: 'vegetable-seeds' },
          { label: "Meva urug'lari", value: 'fruit-seeds' },
          { label: "Urug' qadoqlari", value: 'seed-packets' },
          { label: "Organik urug'lar", value: 'organic-seeds' },
        ],
      },
      {
        label: "Sug'orish tizimlari",
        value: 'irrigation',
        items: [
          { label: 'Shlanglar', value: 'hoses' },
          { label: "Sug'orish purkagichlari", value: 'sprinklers' },
          { label: 'Suv idishlari', value: 'watering-cans' },
          { label: 'Drip tizimlari', value: 'drip-systems' },
          { label: "Sug'orish aksessuarlari", value: 'irrigation-accessories' },
        ],
      },
      {
        label: "O'g'itlar",
        value: 'fertilizers',
        items: [
          { label: "Organik o'g'itlar", value: 'organic-fertilizers' },
          { label: "Kimyoviy o'g'itlar", value: 'chemical-fertilizers' },
          { label: "Suyuq o'g'itlar", value: 'liquid-fertilizers' },
          { label: "O'g'it idishlari", value: 'fertilizer-containers' },
          { label: "O'g'it to'plamlari", value: 'fertilizer-kits' },
        ],
      },
      {
        label: "Bog' mebellari",
        value: 'garden-furniture',
        items: [
          { label: "Bog' stullari", value: 'garden-chairs' },
          { label: "Bog' stollari", value: 'garden-tables' },
          { label: "Bog' divanlari", value: 'garden-sofas' },
          { label: "Bog' qopqoqlari", value: 'furniture-covers' },
          { label: "Bog' yostiqchalari", value: 'garden-cushions' },
        ],
      },
    ],
  },
  {
    label: 'Salomatlik',
    value: 'health',
    items: [
      {
        label: "Vitaminlar va qo'shimchalar",
        value: 'vitamins',
        items: [
          { label: 'Multivitaminlar', value: 'multivitamins' },
          { label: 'Omega-3', value: 'omega-3' },
          { label: "Kalsiy qo'shimchalari", value: 'calcium-supplements' },
          { label: 'Vitamin D', value: 'vitamin-d' },
          { label: 'Probiotiklar', value: 'probiotics' },
        ],
      },
      {
        label: 'Tibbiy jihozlar',
        value: 'medical-devices',
        items: [
          { label: 'Tonometrlari', value: 'blood-pressure-monitors' },
          { label: 'Termometrlari', value: 'thermometers' },
          { label: 'Ingalyatorlar', value: 'inhalers' },
          { label: 'Tibbiy bandajlar', value: 'medical-bandages' },
          { label: "Qon shakar o'lchagichlar", value: 'glucose-meters' },
        ],
      },
      {
        label: 'Birinchi yordam vositalari',
        value: 'first-aid',
        items: [
          { label: "Birinchi yordam to'plamlari", value: 'first-aid-kits' },
          { label: 'Bandajlar', value: 'bandages' },
          { label: 'Antiseptiklar', value: 'antiseptics' },
          { label: 'Plastirlar', value: 'plasters' },
          { label: 'Yara tozalagichlar', value: 'wound-cleaners' },
        ],
      },
      {
        label: 'Ortopedik mahsulotlar',
        value: 'orthopedic',
        items: [
          { label: 'Ortopedik yostiqlar', value: 'orthopedic-pillows' },
          { label: 'Ortopedik matraslar', value: 'orthopedic-mattresses' },
          { label: 'Ortopedik tagliklar', value: 'orthopedic-insoles' },
          { label: 'Ortopedik korsetlar', value: 'orthopedic-braces' },
          { label: 'Ortopedik stullar', value: 'orthopedic-chairs' },
        ],
      },
      {
        label: "Sog'lom ovqatlanish mahsulotlari",
        value: 'health-food',
        items: [
          { label: 'Glutensiz mahsulotlar', value: 'gluten-free-foods' },
          { label: 'Organik mahsulotlar', value: 'organic-foods' },
          { label: 'Saxarsiz mahsulotlar', value: 'sugar-free-foods' },
          { label: 'Protein barlar', value: 'protein-bars' },
          { label: "Dietik qo'shimchalar", value: 'dietary-supplements' },
        ],
      },
    ],
  },
  {
    label: 'Hayvonlar uchun tovarlar',
    value: 'pet-products',
    items: [
      {
        label: 'Oziq-ovqat',
        value: 'pet-food',
        items: [
          { label: 'Mushuk ovqatlari', value: 'cat-food' },
          { label: 'It ovqatlari', value: 'dog-food' },
          { label: 'Qush ovqatlari', value: 'bird-food' },
          { label: 'Baliq ovqatlari', value: 'fish-food' },
          { label: 'Organik ovqatlar', value: 'organic-pet-food' },
        ],
      },
      {
        label: 'Aksessuarlar',
        value: 'pet-accessories',
        items: [
          { label: "Bo'yinbog'lar", value: 'collars' },
          { label: 'Tasma', value: 'leashes' },
          { label: "O'yinchoqlar", value: 'pet-toys' },
          { label: 'Ovqat idishlari', value: 'food-bowls' },
          { label: 'Uxlash joylari', value: 'pet-beds' },
        ],
      },
      {
        label: 'Gigiyena vositalari',
        value: 'pet-hygiene',
        items: [
          { label: 'Shampunlar', value: 'pet-shampoos' },
          { label: "Cho'tkalar", value: 'pet-brushes' },
          { label: 'Tish parvarishi', value: 'pet-dental-care' },
          { label: 'Nam salfetkalar', value: 'pet-wipes' },
          { label: "Gigiyena to'plamlari", value: 'pet-hygiene-kits' },
        ],
      },
      {
        label: 'Uylar va qafaslar',
        value: 'pet-housing',
        items: [
          { label: 'Mushuk uylari', value: 'cat-houses' },
          { label: 'It uylari', value: 'dog-houses' },
          { label: 'Qush qafaslari', value: 'bird-cages' },
          { label: 'Akvariumlar', value: 'aquariums' },
          { label: 'Uylarni bezash', value: 'housing-decor' },
        ],
      },
      {
        label: 'Tashish vositalari',
        value: 'pet-transport',
        items: [
          { label: 'Tashish sumkalari', value: 'pet-carriers' },
          { label: 'Tashish qutilari', value: 'pet-crates' },
          { label: "Avto o'rindiqlari", value: 'pet-car-seats' },
          { label: 'Tashish aksessuarlari', value: 'transport-accessories' },
          { label: 'Tashish yostiqchalari', value: 'transport-pads' },
        ],
      },
    ],
  },
  {
    label: 'Kanselyariya tovarlari',
    value: 'stationery',
    items: [
      {
        label: 'Qalamlar',
        value: 'pens',
        items: [
          { label: 'Sharchali qalamlar', value: 'ballpoint-pens' },
          { label: 'Gel qalamlar', value: 'gel-pens' },
          { label: 'Markerlar', value: 'markers' },
          { label: 'Flomasterlar', value: 'highlighters' },
          { label: 'Qalam qutilari', value: 'pen-cases' },
        ],
      },
      {
        label: 'Daftarchalar',
        value: 'notebooks',
        items: [
          { label: 'A4 daftarchalar', value: 'a4-notebooks' },
          { label: 'A5 daftarchalar', value: 'a5-notebooks' },
          { label: 'Chizma daftarchalar', value: 'sketchbooks' },
          { label: 'Daftar qopqoqlari', value: 'notebook-covers' },
          { label: 'Daftar stikerlari', value: 'notebook-stickers' },
        ],
      },
      {
        label: 'Ofis aksessuarlari',
        value: 'office-supplies',
        items: [
          { label: 'Staplerlar', value: 'staplers' },
          { label: 'Qaychi', value: 'scissors' },
          { label: 'Yelimlar', value: 'glues' },
          { label: 'Skotchlar', value: 'tapes' },
          { label: 'Tashkilotchilar', value: 'organizers' },
        ],
      },
      {
        label: "Qog'oz mahsulotlari",
        value: 'paper-products',
        items: [
          { label: "A4 qog'ozlar", value: 'a4-papers' },
          { label: "Rangli qog'ozlar", value: 'colored-papers' },
          { label: "Foto qog'ozlar", value: 'photo-papers' },
          { label: "Qog'oz jildlar", value: 'paper-folders' },
          { label: "Qog'oz qadoqlari", value: 'paper-packs' },
        ],
      },
      {
        label: 'Yozuv taxtalari',
        value: 'whiteboards',
        items: [
          { label: 'Kichik taxtalar', value: 'small-whiteboards' },
          { label: 'Katta taxtalar', value: 'large-whiteboards' },
          { label: 'Markerlar', value: 'whiteboard-markers' },
          { label: 'Taxta tozalagichlar', value: 'whiteboard-cleaners' },
          { label: 'Taxta aksessuarlari', value: 'whiteboard-accessories' },
        ],
      },
    ],
  },
  {
    label: 'Kitoblar',
    value: 'books',
    items: [
      {
        label: 'Badiiy adabiyot',
        value: 'fiction',
        items: [
          { label: 'Romanlar', value: 'novels' },
          { label: 'Hikoyalar', value: 'short-stories' },
          { label: 'Detektivlar', value: 'detective-books' },
          { label: 'Fantastika', value: 'fantasy-books' },
          { label: 'Romantik kitoblar', value: 'romance-books' },
        ],
      },
      {
        label: 'Ilmiy adabiyot',
        value: 'science',
        items: [
          { label: 'Fizika kitoblari', value: 'physics-books' },
          { label: 'Kimyo kitoblari', value: 'chemistry-books' },
          { label: 'Biologiya kitoblari', value: 'biology-books' },
          { label: 'Matematika kitoblari', value: 'math-books' },
          { label: 'Texnologiya kitoblari', value: 'tech-books' },
        ],
      },
      {
        label: 'Bolalar uchun kitoblar',
        value: 'kids-books',
        items: [
          { label: 'Ertaklar', value: 'fairy-tales' },
          { label: 'Rangli kitoblar', value: 'coloring-books' },
          { label: "O'quv kitoblar", value: 'educational-books' },
          { label: "She'rlar", value: 'poetry-books' },
          { label: 'Interaktiv kitoblar', value: 'interactive-books' },
        ],
      },
      {
        label: "O'quv adabiyotlari",
        value: 'educational-books',
        items: [
          { label: 'Darsliklar', value: 'textbooks' },
          { label: "Lug'atlar", value: 'dictionaries' },
          { label: 'Qollanmalar', value: 'guides' },
          { label: 'Test kitoblari', value: 'test-prep-books' },
          { label: "O'quv jurnallar", value: 'educational-magazines' },
        ],
      },
      {
        label: 'Audio kitoblar',
        value: 'audiobooks',
        items: [
          { label: 'Badiiy audiokitoblar', value: 'fiction-audiobooks' },
          { label: 'Ilmiy audiokitoblar', value: 'science-audiobooks' },
          { label: 'Bolalar audiokitoblari', value: 'kids-audiobooks' },
          {
            label: 'Motivatsion audiokitoblar',
            value: 'motivational-audiobooks',
          },
          { label: 'Audio kitob pleerlar', value: 'audiobook-players' },
        ],
      },
    ],
  },
  {
    label: "Go'zallik va parvarish",
    value: 'beauty-care',
    items: [
      {
        label: 'Kosmetika',
        value: 'cosmetics',
        items: [
          { label: "Yuz bo'yanishlari", value: 'face-makeup' },
          { label: "Ko'z bo'yanishlari", value: 'eye-makeup' },
          { label: "Lab bo'yanishlari", value: 'lip-makeup' },
          { label: "Bo'yanish cho'tkalari", value: 'makeup-brushes' },
          { label: "Bo'yanish to'plamlari", value: 'makeup-kits' },
        ],
      },
      {
        label: 'Soch parvarishi',
        value: 'hair-care',
        items: [
          { label: 'Shampunlar', value: 'shampoos' },
          { label: 'Konditsionerlar', value: 'conditioners' },
          { label: 'Soch maskalari', value: 'hair-masks' },
          { label: "Soch bo'yoqlari", value: 'hair-dyes' },
          { label: 'Soch aksessuarlari', value: 'hair-accessories' },
        ],
      },
      {
        label: 'Teri parvarishi',
        value: 'skin-care',
        items: [
          { label: 'Yuz kremlari', value: 'face-creams' },
          { label: 'Teri tozalagichlar', value: 'cleansers' },
          { label: 'Tonerlar', value: 'toners' },
          { label: 'Maskalar', value: 'face-masks' },
          { label: 'Skrablar', value: 'scrubs' },
        ],
      },
      {
        label: 'Parfyumeriya',
        value: 'perfumes',
        items: [
          { label: 'Ayollar atirlari', value: 'womens-perfumes' },
          { label: 'Erkaklar atirlari', value: 'mens-perfumes' },
          { label: 'Uniseks atirlari', value: 'unisex-perfumes' },
          { label: 'Atir qadoqlari', value: 'perfume-packaging' },
          { label: 'Mini atirlar', value: 'mini-perfumes' },
        ],
      },
      {
        label: 'Gigiyena vositalari',
        value: 'hygiene-products',
        items: [
          { label: 'Tish pastalari', value: 'toothpastes' },
          { label: "Tish cho'tkalari", value: 'toothbrushes' },
          { label: "Og'iz yuvish vositalari", value: 'mouthwashes' },
          { label: 'Deodorantlar', value: 'deodorants' },
          { label: 'Sovunlar', value: 'soaps' },
        ],
      },
    ],
  },
  {
    label: 'Sport va hordiq',
    value: 'sports',
    items: [
      {
        label: 'Sport anjomlari',
        value: 'sports-equipment',
        items: [
          { label: 'Fitnes jihozlari', value: 'fitness-equipment' },
          { label: 'Yoga gilamchalari', value: 'yoga-mats' },
          { label: 'Gantellar', value: 'dumbbells' },
          { label: "Sport to'plari", value: 'sports-balls' },
          { label: 'Sport aksessuarlari', value: 'sports-accessories' },
        ],
      },
      {
        label: 'Sport kiyimlari',
        value: 'sportswear',
        items: [
          { label: 'Sport kostyumlari', value: 'sports-suits' },
          { label: 'Sport poyabzallari', value: 'sports-shoes' },
          { label: 'Sport futbolkalari', value: 'sports-t-shirts' },
          { label: 'Sport shimlari', value: 'sports-pants' },
          { label: 'Sport shlyapalari', value: 'sports-caps' },
        ],
      },
      {
        label: 'Velosipedlar',
        value: 'bicycles',
        items: [
          { label: "Tog' velosipedlari", value: 'mountain-bikes' },
          { label: 'Shahar velosipedlari', value: 'city-bikes' },
          { label: 'Velosiped shinalari', value: 'bike-tires' },
          { label: 'Velosiped aksessuarlari', value: 'bike-accessories' },
          { label: "Velosiped dubulg'alari", value: 'bike-helmets' },
        ],
      },
      {
        label: 'Kemping jihozlari',
        value: 'camping-equipment',
        items: [
          { label: 'Chodirler', value: 'tents' },
          { label: 'Uxlash xaltalari', value: 'sleeping-bags' },
          { label: 'Kemping stullari', value: 'camping-chairs' },
          { label: 'Kemping lampalari', value: 'camping-lights' },
          { label: 'Kemping aksessuarlari', value: 'camping-accessories' },
        ],
      },
      {
        label: 'Sport oziqlantirish',
        value: 'sports-nutrition',
        items: [
          { label: 'Protein kukunlari', value: 'protein-powders' },
          { label: 'Energiya barlari', value: 'energy-bars' },
          { label: 'Sport ichimliklari', value: 'sports-drinks' },
          { label: "Vitamin qo'shimchalari", value: 'sports-vitamins' },
          { label: "Oziqlantirish to'plamlari", value: 'nutrition-kits' },
        ],
      },
    ],
  },
  {
    label: "Qurilish va ta'mirlash",
    value: 'construction',
    items: [
      {
        label: 'Qurilish materiallari',
        value: 'building-materials',
        items: [
          { label: 'Sement', value: 'cement' },
          { label: "G'ishtlar", value: 'bricks' },
          { label: 'Qum', value: 'sand' },
          { label: "Bo'yoqlar", value: 'paints' },
          { label: 'Gipsokarton', value: 'drywall' },
        ],
      },
      {
        label: 'Asbob-uskunalar',
        value: 'tools',
        items: [
          { label: 'Drellar', value: 'drills' },
          { label: 'Arra', value: 'saws' },
          { label: "Bolg'alar", value: 'hammers' },
          { label: 'Tornavidalar', value: 'screwdrivers' },
          { label: "O'lchov asboblari", value: 'measuring-tools' },
        ],
      },
      {
        label: 'Elektr jihozlari',
        value: 'electrical-equipment',
        items: [
          { label: 'Kabellar', value: 'cables' },
          { label: 'Rozetkalar', value: 'sockets' },
          { label: 'Chiroqlar', value: 'lights' },
          { label: 'Uzatgichlar', value: 'extension-cords' },
          { label: 'Elektr aksessuarlari', value: 'electrical-accessories' },
        ],
      },
      {
        label: 'Santexnika',
        value: 'plumbing',
        items: [
          { label: 'Quvurlar', value: 'pipes' },
          { label: 'Kranlar', value: 'faucets' },
          { label: 'Suv nasoslari', value: 'water-pumps' },
          { label: "Santexnika to'plamlari", value: 'plumbing-kits' },
          { label: 'Santexnika aksessuarlari', value: 'plumbing-accessories' },
        ],
      },
      {
        label: "Ta'mirlash vositalari",
        value: 'repair-tools',
        items: [
          { label: 'Yelimlar', value: 'glues' },
          { label: "Montaj ko'piklari", value: 'mounting-foams' },
          { label: "Ta'mirlash to'plamlari", value: 'repair-kits' },
          { label: 'Sızdırmazlık materiallari', value: 'sealants' },
          { label: "Ta'mirlash aksessuarlari", value: 'repair-accessories' },
        ],
      },
    ],
  },
  {
    label: "Uy-ro'zg'or buyumlari",
    value: 'home-goods',
    items: [
      {
        label: 'Mebel',
        value: 'furniture',
        items: [
          { label: 'Divanlar', value: 'sofas' },
          { label: 'Stollar', value: 'tables' },
          { label: 'Stullar', value: 'chairs' },
          { label: 'Shkaflar', value: 'wardrobes' },
          { label: 'Karavotlar', value: 'beds' },
        ],
      },
      {
        label: 'Ichki bezak',
        value: 'decor',
        items: [
          { label: 'Pardalar', value: 'curtains' },
          { label: 'Rasmlar', value: 'paintings' },
          { label: 'Yostiqlar', value: 'pillows' },
          { label: 'Gilamlar', value: 'rugs' },
          { label: 'Bezak aksessuarlari', value: 'decor-accessories' },
        ],
      },
      {
        label: 'Oshxona buyumlari',
        value: 'kitchenware',
        items: [
          { label: 'Idish-tovoqlar', value: 'cookware' },
          { label: 'Pichoqlar', value: 'knives' },
          { label: 'Stakanlar', value: 'glasses' },
          { label: "Tarelka to'plamlari", value: 'plate-sets' },
          { label: 'Oshxona aksessuarlari', value: 'kitchen-accessories' },
        ],
      },
      {
        label: "Yorug'lik",
        value: 'lighting',
        items: [
          { label: 'Shift chiroqlari', value: 'ceiling-lights' },
          { label: 'Stol lampalari', value: 'table-lamps' },
          { label: 'Devor chiroqlari', value: 'wall-lights' },
          { label: 'LED chiroqlar', value: 'led-lights' },
          { label: "Yorug'lik aksessuarlari", value: 'lighting-accessories' },
        ],
      },
      {
        label: 'Saqlash tizimlari',
        value: 'storage',
        items: [
          { label: 'Javonlar', value: 'shelves' },
          { label: 'Qutilar', value: 'boxes' },
          { label: 'Savatchalar', value: 'baskets' },
          { label: "Saqlash to'plamlari", value: 'storage-kits' },
          { label: 'Tashkilotchilar', value: 'organizers' },
        ],
      },
    ],
  },
  {
    label: 'Xobbi va ijod',
    value: 'hobby',
    items: [
      {
        label: 'Rassomchilik vositalari',
        value: 'art-supplies',
        items: [
          { label: "Bo'yoqlar", value: 'paints' },
          { label: "Cho'tkalar", value: 'brushes' },
          { label: 'Kartonlar', value: 'canvases' },
          { label: 'Rangli qalamlar', value: 'colored-pencils' },
          { label: "Rassomchilik to'plamlari", value: 'art-kits' },
        ],
      },
      {
        label: 'DIY materiallar',
        value: 'diy-materials',
        items: [
          { label: 'Yelimlar', value: 'glues' },
          { label: "Qog'oz materiallari", value: 'craft-papers' },
          { label: 'Matolar', value: 'fabrics' },
          { label: "DIY to'plamlari", value: 'diy-kits' },
          { label: 'Bezak materiallari', value: 'decorative-materials' },
        ],
      },
      {
        label: 'Tikuvchilik',
        value: 'sewing',
        items: [
          { label: 'Iplar', value: 'threads' },
          { label: 'Ignallar', value: 'needles' },
          { label: 'Tikuv mashinalari', value: 'sewing-machines' },
          { label: 'Tikuv aksessuarlari', value: 'sewing-accessories' },
          { label: "Tikuv to'plamlari", value: 'sewing-kits' },
        ],
      },
      {
        label: 'Musiqa asboblari',
        value: 'musical-instruments',
        items: [
          { label: 'Gitara', value: 'guitars' },
          { label: 'Pianino', value: 'pianos' },
          { label: 'Barabanlar', value: 'drums' },
          { label: 'Musiqa aksessuarlari', value: 'music-accessories' },
          { label: 'Notalar', value: 'sheet-music' },
        ],
      },
      {
        label: 'Modelchilik',
        value: 'modeling',
        items: [
          { label: "Model to'plamlari", value: 'model-kits' },
          { label: "Model bo'yoqlari", value: 'model-paints' },
          { label: 'Model asboblari', value: 'model-tools' },
          { label: 'Model aksessuarlari', value: 'model-accessories' },
          { label: 'Model qadoqlari', value: 'model-packaging' },
        ],
      },
    ],
  },
  {
    label: 'Elektronika aksessuarlari',
    value: 'electron-accessories',
    items: [
      {
        label: 'Naushniklar',
        value: 'headphones',
        items: [
          { label: 'Simsiz naushniklar', value: 'wireless-headphones' },
          { label: 'Simli naushniklar', value: 'wired-headphones' },
          { label: 'Naushnik qutilari', value: 'headphone-cases' },
          { label: 'Naushnik ushlagichlari', value: 'headphone-holders' },
          { label: 'Naushnik aksessuarlari', value: 'headphone-accessories' },
        ],
      },
      {
        label: 'Zaryadlovchilar',
        value: 'chargers',
        items: [
          { label: 'Telefon zaryadlovchilari', value: 'phone-chargers' },
          { label: 'Noutbuk zaryadlovchilari', value: 'laptop-chargers' },
          { label: 'USB kabellar', value: 'usb-cables' },
          { label: 'Zaryadlovchi stendlar', value: 'charging-stands' },
          { label: 'Portativ zaryadlovchilar', value: 'power-banks' },
        ],
      },
      {
        label: 'Klaviaturalar',
        value: 'keyboards',
        items: [
          { label: 'Simsiz klaviaturalar', value: 'wireless-keyboards' },
          { label: 'Mexanik klaviaturalar', value: 'mechanical-keyboards' },
          { label: 'Klaviatura qopqoqlari', value: 'keyboard-covers' },
          { label: 'Klaviatura yostiqchalari', value: 'keyboard-pads' },
          { label: 'Klaviatura aksessuarlari', value: 'keyboard-accessories' },
        ],
      },
      {
        label: 'Sichqonlar',
        value: 'mice',
        items: [
          { label: 'Simsiz sichqonlar', value: 'wireless-mice' },
          { label: "O'yin sichqonlari", value: 'gaming-mice' },
          { label: 'Sichqon gilamchalari', value: 'mouse-pads' },
          { label: 'Sichqon aksessuarlari', value: 'mouse-accessories' },
          { label: 'Sichqon ushlagichlari', value: 'mouse-holders' },
        ],
      },
      {
        label: 'USB xablar',
        value: 'usb-hubs',
        items: [
          { label: 'USB-C xablar', value: 'usb-c-hubs' },
          { label: 'USB-A xablar', value: 'usb-a-hubs' },
          { label: 'Portativ xablar', value: 'portable-hubs' },
          { label: 'Xab kabellari', value: 'hub-cables' },
          { label: 'Xab aksessuarlari', value: 'hub-accessories' },
        ],
      },
    ],
  },
  {
    label: "O'yin-kulgi",
    value: 'entertainment',
    items: [
      {
        label: "Video o'yinlar",
        value: 'video-games',
        items: [
          { label: "Aksion o'yinlar", value: 'action-games' },
          { label: "Strategik o'yinlar", value: 'strategy-games' },
          { label: "Sport o'yinlari", value: 'sports-games' },
          { label: "Sarguzasht o'yinlari", value: 'adventure-games' },
          { label: "O'yin disklar", value: 'game-discs' },
        ],
      },
      {
        label: 'Konsollar',
        value: 'consoles',
        items: [
          { label: 'PlayStation konsollari', value: 'playstation' },
          { label: 'Xbox konsollari', value: 'xbox' },
          { label: 'Nintendo konsollari', value: 'nintendo' },
          { label: 'Joystiklar', value: 'controllers' },
          { label: 'Konsol aksessuarlari', value: 'console-accessories' },
        ],
      },
      {
        label: 'VR jihozlari',
        value: 'vr-equipment',
        items: [
          { label: "VR ko'zoynaklari", value: 'vr-headsets' },
          { label: 'VR joystiklari', value: 'vr-controllers' },
          { label: 'VR aksessuarlari', value: 'vr-accessories' },
          { label: 'VR stendlar', value: 'vr-stands' },
          { label: 'VR qadoqlari', value: 'vr-packaging' },
        ],
      },
      {
        label: "O'yin aksessuarlari",
        value: 'gaming-accessories',
        items: [
          { label: "O'yin stullari", value: 'gaming-chairs' },
          { label: "O'yin garnituralari", value: 'gaming-headsets' },
          { label: "O'yin klaviaturalari", value: 'gaming-keyboards' },
          { label: "O'yin sichqonlari", value: 'gaming-mice' },
          { label: "O'yin gilamchalari", value: 'gaming-mats' },
        ],
      },
      {
        label: 'Media pleerlar',
        value: 'media-players',
        items: [
          { label: 'Striming pleerlar', value: 'streaming-players' },
          { label: 'DVD pleerlar', value: 'dvd-players' },
          { label: 'Media pleer kabellari', value: 'player-cables' },
          { label: 'Pultlar', value: 'player-remotes' },
          { label: 'Media pleer aksessuarlari', value: 'player-accessories' },
        ],
      },
    ],
  },
  {
    label: 'Ofis mebellari',
    value: 'office-furniture',
    items: [
      {
        label: 'Stullar',
        value: 'chairs',
        items: [
          { label: 'Ergonomik stullar', value: 'ergonomic-chairs' },
          { label: 'Ofis stullari', value: 'office-chairs' },
          { label: 'Stul qopqoqlari', value: 'chair-covers' },
          { label: 'Stul yostiqchalari', value: 'chair-cushions' },
          { label: 'Stul aksessuarlari', value: 'chair-accessories' },
        ],
      },
      {
        label: 'Stollar',
        value: 'tables',
        items: [
          { label: 'Ish stollari', value: 'work-desks' },
          { label: 'Katlanadigan stollar', value: 'foldable-desks' },
          { label: 'Stol tashkilotchilari', value: 'desk-organizers' },
          { label: 'Stol gilamchalari', value: 'desk-mats' },
          { label: 'Stol aksessuarlari', value: 'desk-accessories' },
        ],
      },
      {
        label: 'Javonlar',
        value: 'shelves',
        items: [
          { label: 'Kitob javonlari', value: 'bookshelves' },
          { label: 'Ofis javonlari', value: 'office-shelves' },
          { label: 'Javon tashkilotchilari', value: 'shelf-organizers' },
          { label: 'Javon qadoqlari', value: 'shelf-packaging' },
          { label: 'Javon aksessuarlari', value: 'shelf-accessories' },
        ],
      },
      {
        label: 'Shkaflar',
        value: 'cabinets',
        items: [
          { label: 'Hujjat shkaflari', value: 'file-cabinets' },
          { label: 'Saqlash shkaflari', value: 'storage-cabinets' },
          { label: 'Shkaf tashkilotchilari', value: 'cabinet-organizers' },
          { label: 'Shkaf qulflari', value: 'cabinet-locks' },
          { label: 'Shkaf aksessuarlari', value: 'cabinet-accessories' },
        ],
      },
      {
        label: 'Ofis aksessuarlari',
        value: 'office-accessories',
        items: [
          { label: 'Stol lampalari', value: 'desk-lamps' },
          { label: 'Ofis tashkilotchilari', value: 'office-organizers' },
          { label: 'Ofis gilamchalari', value: 'office-mats' },
          { label: 'Ofis yostiqchalari', value: 'office-cushions' },
          { label: 'Ofis bezaklari', value: 'office-decor' },
        ],
      },
    ],
  },
];
