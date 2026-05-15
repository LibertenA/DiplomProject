export const mockProducts = [
  // --- 1. СМАРТФОНЫ И СКЛАДНЫЕ ГАДЖЕТЫ ---
  {
    id: 101,
    title: "Samsung Galaxy Z Fold 8 Ultra (AI Edition, 2026)",
    price: 199990,
    discount: 15000,
    count: 0,
    color: [
      { id: 'v1', color: 'Титановый серый', colorCode: '#7D7D7D' },
      { id: 'v2', color: 'Фантомный черный', colorCode: '#1A1A1A' }
    ],
    memory: [{ id: 'm1', memory: 512 }, { id: 'm2', memory: 1024 }],
    display: "7.6\" Dynamic AMOLED 3X",
    cpu: "Snapdragon 8 Gen 5",
    features: "Складной экран, ИИ функции",
    images: ["/products/product101.png", "/products/product101(2).png", "/products/product101(3).png"]
  },
  {
    id: 102,
    title: "iPhone 17 Pro Max (2025), Natural Titanium",
    price: 174990,
    discount: 5000,
    count: 0,
    memory: [{ id: 'm1', memory: 512 }, { id: 'm2', memory: 1024 }],
    display: "6.9\" Super Retina XDR",
    cpu: "A19 Pro",
    features: "Камера 48+48+48 Мп, iOS 19",
    images: ["/products/product102.png", "/products/product102(2).png"]
  },
  {
    id: 103,
    title: "Google Pixel 10 Pro (2026) Obsidian",
    price: 105000,
    discount: 10000,
    count: 0,
    memory: [{ id: 'm1', memory: 256 }, { id: 'm2', memory: 512 }],
    display: "6.7\" LTPO OLED",
    cpu: "Google Tensor G5",
    features: "Gemini Nano, Magic Editor 2.0",
    images: ["/products/product103.png", "/products/product103(2).png"]
  },
  {
    id: 104,
    title: "Huawei Mate XT (Triple Foldable)",
    price: 260000,
    discount: 0,
    count: 0,
    memory: [{ id: 'm1', memory: 1024 }],
    display: "10.2\" Triple OLED",
    cpu: "Kirin 9010",
    features: "Тройное сложение Z-fold",
    images: ["/products/product104.png"]
  },
  {
    id: 105,
    title: "Nothing Phone (3) Transparent Black",
    price: 68000,
    discount: 4000,
    count: 0,
    memory: [{ id: 'm1', memory: 256 }, { id: 'm2', memory: 512 }],
    display: "6.7\" Flexible OLED",
    cpu: "Snapdragon 8 Gen 4",
    features: "Интерфейс Glyph Gen 3, 12ГБ ОЗУ",
    images: ["/products/product105.png", "/products/product105(2).png"]
  },

  // --- 2. НОУТБУКИ И УЛЬТРАБУКИ ---
  { 
    id: 201,
    title: "Apple MacBook Neo 13 (A18 Pro, 2026)",
    price: 79990,
    discount: 5000,
    count: 0,
    color: [
      { id: 'v1', color: 'Индиго синий', colorCode: '#5976B3' },
      { id: 'v2', color: 'Серый', colorCode: '#CCCCCC' },
      { id: 'v3', color: 'Жёлтый', colorCode: '#F0D54D'},
      { id: 'v4', color: 'Розовый', colorCode: '#E385DD'}
    ],
    memory: [{ id: 'm1', memory: 256 }, { id: 'm2', memory: 512 }],
    display: "13.6\" Liquid Retina",
    cpu: "Apple M4 (10-core)",
    system: "macOS",
    features: "8ГБ ОЗУ, вес 1.24кг",
    images: ["/products/product201.png", "/products/product201(2).png", "/products/product201(3).png", "/products/product201(4).png"]
  },
  {
    id: 202,
    title: "ASUS Zenbook Duo (2025) UX8406",
    price: 185000,
    discount: 12000,
    count: 0,
    memory: [{ id: 'm1', memory: 1024 }, { id: 'm2', memory: 2048 }],
    display: "Двойной 14\" OLED",
    cpu: "Intel Core Ultra 9",
    system: "Windows 11",
    features: "32ГБ ОЗУ, два экрана",
    images: ["/products/product202.png", "/products/product202(2).png"]
  },
  {
    id: 203,
    title: "Razer Blade 16 (RTX 5080 Edition)",
    price: 395000,
    discount: 25000,
    count: 0,
    memory: [{ id: 'm1', memory: 2048 }],
    display: "16\" OLED 240Гц",
    cpu: "Intel Core i9-15900HX",
    system: "Windows 11",
    features: "NVIDIA RTX 5080, Игровой",
    images: ["/products/product203.png"]
  },
  {
    id: 204,
    title: "Microsoft Surface Laptop 7",
    price: 138000,
    discount: 7000,
    count: 0,
    memory: [{ id: 'm1', memory: 512 }, { id: 'm2', memory: 1024 }],
    display: "13.8\" Touch PixelSense",
    cpu: "Snapdragon X Elite",
    system: "Windows 11",
    features: "NPU 45 TOPS, до 22ч работы",
    images: ["/products/product204.png", "/products/product204(2).png"]
  },
  {
    id: 205,
    title: "Lenovo Yoga Slim 7i Aura Edition",
    price: 115000,
    discount: 5000,
    count: 0,
    memory: [{ id: 'm1', memory: 1024 }],
    display: "14.5\" PureSight OLED",
    cpu: "Intel Core Ultra 7",
    system: "Windows 11",
    features: "Магниевый сплав, вес 1.25кг",
    images: ["/products/product205.png"]
  },

  // --- 3. КУХОННАЯ ТЕХНИКА ---
  {
    id: 301,
    title: "Кофемашина De'Longhi Maestosa",
    price: 215000,
    discount: 10000,
    count: 0,
    features: "Давление 19 бар, система LatteCrema",
    images: ["/products/product301.png", "/products/product301(2).png"]
  },
  {
    id: 302,
    title: "Умный холодильник Samsung Bespoke",
    price: 299000,
    discount: 20000,
    count: 0,
    features: "Экран 32\", ИИ-камеры распознавания еды",
    images: ["/products/product302.png"]
  },
  {
    id: 303,
    title: "Мультиварка Ninja Foodi 15-in-1",
    price: 42000,
    discount: 3500,
    count: 0,
    features: "15 режимов, приготовление под давлением",
    images: ["/products/product303.png"]
  },
  {
    id: 304,
    title: "Чайник Bork K810 (Glass Tea Maker)",
    price: 32000,
    discount: 2000,
    count: 0,
    features: "Таймер заваривания, стекло Schott Duran",
    images: ["/products/product304.png"]
  },
  {
    id: 305,
    title: "Духовой шкаф Bosch Serie 8 AI",
    price: 145000,
    discount: 8000,
    count: 0,
    features: "ИИ-сенсор выпечки, функция пара",
    images: ["/products/product305.png"]
  },

  // --- 4. ТЕЛЕВИЗОРЫ И ПАНЕЛИ ---
  {
    id: 401,
    title: "LG OLED EVO G6 (2026) Wireless 77\"",
    price: 480000,
    discount: 40000,
    count: 0,
    display: "77\" OLED EVO",
    features: "Беспроводное подключение Zero Connect",
    images: ["/products/product401.png", "/products/product401(2).png"]
  },
  {
    id: 402,
    title: "Sony BRAVIA A95M QD-OLED",
    price: 360000,
    discount: 15000,
    count: 0,
    display: "65\" QD-OLED",
    features: "Процессор Cognitive XR, звук Surface Audio+",
    images: ["/products/product402.png"]
  },
  {
    id: 403,
    title: "Samsung Neo QLED QN900D 8K",
    price: 550000,
    discount: 0,
    count: 0,
    display: "85\" 8K UHD",
    features: "Частота 144Гц, ИИ-масштабирование",
    images: ["/products/product403.png", "/products/product403(2).png"]
  },
  {
    id: 404,
    title: "Xiaomi TV Master Mini LED 82\"",
    price: 195000,
    discount: 12000,
    count: 0,
    display: "82\" Mini LED",
    features: "Яркость 2000 нит, 1024 зоны затемнения",
    images: ["/products/product404.png"]
  },
  {
    id: 405,
    title: "Проектор Samsung The Freestyle Gen 2",
    price: 74000,
    discount: 6000,
    count: 0,
    display: "Проекция до 100\"",
    features: "Автокоррекция, поддержка батарейного блока",
    images: ["/products/product405.png"]
  },

  // --- 5. УМНЫЙ ДОМ И КЛИМАТ ---
  {
    id: 501,
    title: "Робот-пылесос Roborock S9 MaxV Ultra",
    price: 135000,
    discount: 10000,
    count: 0,
    features: "Мощность 12000 Па, мойка горячей водой 60°C",
    images: ["/products/product501.png", "/products/product501(2).png"]
  },
  {
    id: 502,
    title: "Очиститель воздуха Dyson Purifier Big+Quiet",
    price: 98000,
    discount: 5000,
    count: 0,
    features: "Радиус 10 метров, шум 56 дБ",
    images: ["/products/product502.png"]
  },
  {
    id: 503,
    title: "Яндекс Станция Дуо Макс (с экраном)",
    price: 42990,
    discount: 2000,
    count: 0,
    display: "10.1\" поворотный экран",
    features: "Алиса с YandexGPT 3",
    images: ["/products/product503.png", "/products/product503(2).png"]
  },
  {
    id: 504,
    title: "Умный замок Aqara U200 (Matter)",
    price: 29000,
    discount: 1500,
    count: 0,
    features: "Протокол Matter, поддержка Apple HomeKey",
    images: ["/products/product504.png"]
  },
  {
    id: 505,
    title: "Кондиционер Daikin Ururu Sarara 2025",
    price: 240000,
    discount: 0,
    count: 0,
    features: "Класс A+++, увлажнение и самоочистка",
    images: ["/products/product505.png"]
  },

  // --- 6. ГЕЙМИНГ (GAMING) ---
  {
    id: 601,
    title: "Sony PlayStation 5 Pro (2TB)",
    price: 82000,
    discount: 0,
    count: 0,
    memory: [{ id: 'm1', memory: 2048 }],
    features: "PSSR масштабирование, Игровая консоль",
    images: ["/products/product601.png", "/products/product601(2).png"]
  },
  {
    id: 602,
    title: "Steam Deck OLED 1TB",
    price: 89000,
    discount: 4000,
    count: 0,
    memory: [{ id: 'm1', memory: 1024 }],
    display: "8\" 90Гц OLED",
    cpu: "AMD Custom Zen 5",
    features: "Портативная консоль",
    images: ["/products/product602.png"]
  },
  {
    id: 603,
    title: "Nintendo Switch 2 (Pro Edition)",
    price: 52000,
    discount: 0,
    count: 0,
    memory: [{ id: 'm1', memory: 256 }, { id: 'm2', memory: 512 }],
    cpu: "NVIDIA T239 (DLSS 3.5)",
    features: "Обратная совместимость",
    images: ["/products/product603.png"]
  },
  {
    id: 604,
    title: "Монитор Samsung Odyssey Neo G9 (57\")",
    price: 210000,
    discount: 15000,
    count: 0,
    display: "57\" Dual UHD",
    features: "Изогнутость 1000R, 240Гц",
    images: ["/products/product604.png", "/products/product604(2).png"]
  },
  {
    id: 605,
    title: "Гарнитура Apple Vision Pro (256GB)",
    price: 380000,
    discount: 30000,
    count: 0,
    memory: [{ id: 'm1', memory: 256 }, { id: 'm2', memory: 512 }],
    system: "visionOS 3.0",
    features: "Пространственное аудио, AR/VR",
    images: ["/products/product605.png"]
  },

  // --- 7. ПЕРСОНАЛЬНЫЙ УХОД (BEAUTY) ---
  {
    id: 701,
    title: "Фен Dyson Supersonic Nural (2025)",
    price: 54000,
    discount: 3000,
    count: 0,
    features: "Защита кожи головы, 5 насадок",
    images: ["/products/product701.png", "/products/product701(2).png"]
  },
  {
    id: 702,
    title: "Стайлер Shark FlexStyle Air",
    price: 36000,
    discount: 4000,
    count: 0,
    features: "Фен и стайлер 2-в-1, 3 режима нагрева",
    images: ["/products/product702.png"]
  },
  {
    id: 703,
    title: "Электробритва Philips S9000 Prestige",
    price: 45000,
    discount: 5000,
    count: 0,
    features: "Беспроводная зарядка Qi, лезвия NanoTech",
    images: ["/products/product703.png", "/products/product703(2).png"]
  },
  {
    id: 704,
    title: "Зубная щетка Oral-B iO Series 10",
    price: 38000,
    discount: 2000,
    count: 0,
    features: "ИИ-коучинг, магнитная зарядка iOSense",
    images: ["/products/product704.png"]
  },
  {
    id: 705,
    title: "Массажер Theragun PRO Gen 6",
    price: 65000,
    discount: 5000,
    count: 0,
    features: "Амплитуда 16мм, Bluetooth приложение",
    images: ["/products/product705.png"]
  },

  // --- 8. АУДИО И ЗВУК ---
  {
    id: 801,
    title: "Наушники Sony WH-1000XM6 (2025)",
    price: 46000,
    discount: 2000,
    count: 0,
    features: "ИИ-шумоподавление, 45ч работы",
    images: ["/products/product801.png", "/products/product801(2).png"]
  },
  {
    id: 802,
    title: "Sonos Arc 2 Soundbar (2026)",
    price: 115000,
    discount: 10000,
    count: 0,
    features: "Поддержка Dolby Atmos 7.1.4, HDMI eARC",
    images: ["/products/product802.png"]
  },
  {
    id: 803,
    title: "Bose QuietComfort Ultra Earbuds",
    price: 32000,
    discount: 1500,
    count: 0,
    features: "Режим погружения, Bluetooth 5.3 LE",
    images: ["/products/product803.png", "/products/product803(2).png"]
  },
  {
    id: 804,
    title: "Devialet Phantom I 108dB Gold",
    price: 420000,
    discount: 0,
    count: 0,
    features: "Мощность 1100 Вт RMS, диапазон 14Гц-27кГц",
    images: ["/products/product804.png"]
  },
  {
    id: 805,
    title: "Marshall Stanmore III Bluetooth",
    price: 38000,
    discount: 3000,
    count: 0,
    features: "Винтажный дизайн, входы RCA/3.5мм",
    images: ["/products/product805.png"]
  },

  // --- 9. ФОТО И ВИДЕО ---
  {
    id: 901,
    title: "Sony A7R VI (2026) 61MP",
    price: 399000,
    discount: 0,
    count: 0,
    features: "61 Мп Full-frame, ИИ-автофокус",
    images: ["/products/product901.png", "/products/product901(2).png"]
  },
  {
    id: 902,
    title: "DJI Mavic 4 Pro (2025)",
    price: 215000,
    discount: 15000,
    count: 0,
    features: "Камера Hasselblad, 50 мин полета",
    images: ["/products/product902.png"]
  },
  {
    id: 903,
    title: "GoPro Hero 14 Black",
    price: 54000,
    discount: 4000,
    count: 0,
    features: "Видео 6K 60fps, стабилизация HyperSmooth 7.0",
    images: ["/products/product903.png", "/products/product903(2).png"]
  },
  {
    id: 904,
    title: "Fujifilm X100VI Digital Camera",
    price: 185000,
    discount: 0,
    count: 0,
    features: "Матрица 40.2Мп, стаб IBIS 6 стопов",
    images: ["/products/product904.png"]
  },
  {
    id: 905,
    title: "Insta360 X4 8K Edition",
    price: 62000,
    discount: 5000,
    count: 0,
    features: "Панорамное видео 8K, батарея 2290 мАч",
    images: ["/products/product905.png"]
  },

  // --- 10. КРУПНАЯ ТЕХНИКА ---
  {
    id: 1001,
    title: "Стиральная машина LG AI DD V9",
    price: 85000,
    discount: 7000,
    count: 0,
    features: "Загрузка 10.5 кг, ИИ-определение ткани",
    images: ["/products/product1001.png", "/products/product1001(2).png"]
  },
  {
    id: 1002,
    title: "Посудомойка Miele G 7975 SCVi",
    price: 220000,
    discount: 10000,
    count: 0,
    features: "Система PowerDisk, управление по WiFi",
    images: ["/products/product1002.png"]
  },
  {
    id: 1003,
    title: "Духовой шкаф Gaggenau EB 333",
    price: 580000,
    discount: 0,
    count: 0,
    features: "Ширина 90 см, ручная работа",
    images: ["/products/product1003.png", "/products/product1003(2).png"]
  },
  {
    id: 1004,
    title: "Холодильник Haier Multi-Door CUBE",
    price: 155000,
    discount: 12000,
    count: 0,
    features: "Защита ABT Pro, 3 зоны свежести",
    images: ["/products/product1004.png"]
  },
  {
    id: 1005,
    title: "Сушильная машина Bosch Home Professional",
    price: 108000,
    discount: 9000,
    count: 0,
    features: "Тепловой насос, самоочистка",
    images: ["/products/product1005.png"]
  }
];