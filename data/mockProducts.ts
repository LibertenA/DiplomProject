export const mockProducts = [
  // --- 1. СМАРТФОНЫ И СКЛАДНЫЕ ГАДЖЕТЫ ---
  {
    id: 101,
    title: "Samsung Galaxy Z Fold 8 Ultra (AI Edition, 2026)",
    price: 199990,
    discount: 15000,
    count: 1,
    color: [
      { id: 'v1', color: 'Titanium Gray', colorCode: '#7D7D7D' },
      { id: 'v2', color: 'Phantom Black', colorCode: '#1A1A1A' }
    ],
    display: "7.6\" Dynamic AMOLED 3X",
    cpu: "Snapdragon 8 Gen 5",
    images: ["/products/product101.png", "/products/product101(2).png", "/products/product101(3).png"]
  },
  {
    id: 102,
    title: "iPhone 17 Pro Max (2025), 512 ГБ, Natural Titanium",
    price: 174990,
    discount: 5000,
    count: 0,
    memory: [{ id: 'm1', memory: 512 }, { id: 'm2', memory: 1024 }],
    camera: "48+48+48 MP",
    ios: '19',
    images: ["/products/product102.png", "/products/product102(2).png"]
  },
  {
    id: 103,
    title: "Google Pixel 10 Pro (2026) Obsidian",
    price: 105000,
    discount: 10000,
    count: 0,
    cpu: "Google Tensor G5",
    ai_features: "Magic Editor 2.0, Gemini Nano integration",
    images: ["/products/product103.png", "/products/product103(2).png"]
  },
  {
    id: 104,
    title: "Huawei Mate XT (Triple Foldable)",
    price: 260000,
    discount: 0,
    count: 0,
    folding_type: "Z-fold",
    expanded_display: "10.2 inch",
    images: ["/products/product104.png"]
  },
  {
    id: 105,
    title: "Nothing Phone (3) Transparent Black",
    price: 68000,
    discount: 4000,
    count: 0,
    lights: "Glyph Interface Gen 3",
    ram: 12,
    images: ["/products/product105.png", "/products/product105(2).png"]
  },

  // --- 2. НОУТБУКИ И УЛЬТРАБУКИ ---
  { 
    id: 201,
    title: "Apple MacBook Neo 13 (A18 Pro, 6C СPU/5С GPU, 2026), 8 ГБ, 256 ГБ SSD, индиго синий",
    price: 79990,
    color: [
      { id: 'v1', color: 'индиго синий', colorCode: '#5976B3' },
      { id: 'v2', color: 'серый', colorCode: '#CCCCCC' },
      { id: 'v3', color: 'жёлтый', colorCode: '#F0D54D'},
      { id: 'v4', color: 'розовый', colorCode: '#E385DD'}
    ],     
    memory: [ { id: 'm1', memory: 256}, { id: 'm2', memory: 512} ],
    ram: 8,
    discount: 5000,
    count: 0,
    cpu: "Apple M4 10-core (4 + 6)",
    system: "macOS",
    display: 13.6,
    resolution: "2560x1664",
    weight: 1.24,
    language: "английская/русская",
    images: [
      "/products/product201.png",
      "/products/product201(2).png",
      "/products/product201(3).png",
      "/products/product201(4).png",
    ],
  },
  {
    id: 202,
    title: "ASUS Zenbook Duo (2025) UX8406",
    price: 185000,
    discount: 12000,
    count: 0,
    feature: "Dual 14-inch OLED screens",
    ram: 32,
    images: ["/products/product202.png", "/products/product202(2).png"]
  },
  {
    id: 203,
    title: "Razer Blade 16 (RTX 5080 Edition)",
    price: 395000,
    discount: 25000,
    count: 0,
    gpu: "NVIDIA RTX 5080",
    refresh_rate: "240Hz",
    images: ["/products/product203.png"]
  },
  {
    id: 204,
    title: "Microsoft Surface Laptop 7 (Snapdragon X Elite)",
    price: 138000,
    discount: 7000,
    count: 0,
    battery: "Up to 22h",
    npu: "45 TOPS",
    images: ["/products/product204.png", "/products/product204(2).png"]
  },
  {
    id: 205,
    title: "Lenovo Yoga Slim 7i Aura Edition",
    price: 115000,
    discount: 5000,
    count: 0,
    weight: 1.25,
    material: "Magnesium Alloy",
    images: ["/products/product205.png"]
  },

  // --- 3. КУХОННАЯ ТЕХНИКА ---
  {
    id: 301,
    title: "Кофемашина De'Longhi Maestosa",
    price: 215000,
    discount: 10000,
    count: 0,
    pressure: 19,
    milk_system: "Automatic LatteCrema",
    images: ["/products/product301.png", "/products/product301(2).png"]
  },
  {
    id: 302,
    title: "Умный холодильник Samsung Bespoke Family Hub",
    price: 299000,
    discount: 20000,
    count: 0,
    screen: "32 inch Portrait",
    ai_vision: "Food recognition cameras",
    images: ["/products/product302.png"]
  },
  {
    id: 303,
    title: "Мультиварка Ninja Foodi SmartLid 15-in-1",
    price: 42000,
    discount: 3500,
    count: 0,
    modes: 15,
    pressure_cook: true,
    images: ["/products/product303.png"]
  },
  {
    id: 304,
    title: "Чайник Bork K810 (Glass Tea Maker)",
    price: 32000,
    discount: 2000,
    count: 0,
    steeping_timer: true,
    material: "Schott Duran Glass",
    images: ["/products/product304.png"]
  },
  {
    id: 305,
    title: "Духовой шкаф Bosch Serie 8 AI",
    price: 145000,
    discount: 8000,
    count: 0,
    ai_camera: "Baking sensor recognition",
    steam: true,
    images: ["/products/product305.png"]
  },

  // --- 4. ТЕЛЕВИЗОРЫ И ПАНЕЛИ ---
  {
    id: 401,
    title: "LG OLED EVO G6 (2026) Wireless 77\"",
    price: 480000,
    discount: 40000,
    count: 0,
    diagonal: 77,
    connection: "Zero Connect Box",
    images: ["/products/product401.png", "/products/product401(2).png"]
  },
  {
    id: 402,
    title: "Sony BRAVIA A95M QD-OLED",
    price: 360000,
    discount: 15000,
    count: 0,
    cpu: "Cognitive Processor XR",
    audio: "Acoustic Surface Audio+",
    images: ["/products/product402.png"]
  },
  {
    id: 403,
    title: "Samsung Neo QLED QN900D 8K",
    price: 550000,
    discount: 0,
    count: 0,
    resolution: "8K UHD",
    refresh: "144Hz",
    images: ["/products/product403.png", "/products/product403(2).png"]
  },
  {
    id: 404,
    title: "Xiaomi TV Master Mini LED 82\"",
    price: 195000,
    discount: 12000,
    count: 0,
    peak_brightness: "2000 nits",
    local_dimming: "1024 zones",
    images: ["/products/product404.png"]
  },
  {
    id: 405,
    title: "Проектор Samsung The Freestyle Gen 2",
    price: 74000,
    discount: 6000,
    count: 0,
    portability: "Battery Base Support",
    auto_keystone: true,
    images: ["/products/product405.png"]
  },

  // --- 5. УМНЫЙ ДОМ И КЛИМАТ ---
  {
    id: 501,
    title: "Робот-пылесос Roborock S9 MaxV Ultra",
    price: 135000,
    discount: 10000,
    count: 0,
    suction: "12000 Pa",
    mop_washing: "Hot water 60°C",
    images: ["/products/product501.png", "/products/product501(2).png"]
  },
  {
    id: 502,
    title: "Очиститель воздуха Dyson Purifier Big+Quiet",
    price: 98000,
    discount: 5000,
    count: 0,
    airflow: "10 meters range",
    noise: "56 dB",
    images: ["/products/product502.png"]
  },
  {
    id: 503,
    title: "Яндекс Станция Дуо Макс (с экраном)",
    price: 42990,
    discount: 2000,
    count: 0,
    screen_size: "10.1\"",
    assistant: "Alice with YandexGPT 3",
    images: ["/products/product503.png", "/products/product503(2).png"]
  },
  {
    id: 504,
    title: "Умный замок Aqara U200 (Matter)",
    price: 29000,
    discount: 1500,
    count: 0,
    protocol: "Matter over Thread",
    unlock: "Apple HomeKey support",
    images: ["/products/product504.png"]
  },
  {
    id: 505,
    title: "Кондиционер Daikin Ururu Sarara 2025",
    price: 240000,
    discount: 0,
    count: 0,
    features: ["Humidifying", "Self-cleaning"],
    efficiency: "A+++",
    images: ["/products/product505.png"]
  },

  // --- 6. ГЕЙМИНГ (GAMING) ---
  {
    id: 601,
    title: "Sony PlayStation 5 Pro (2TB)",
    price: 82000,
    discount: 0,
    count: 0,
    gpu_tech: "PSSR Upscaling",
    memory: [{ id: 'm1', memory: 2048 }],
    images: ["/products/product601.png", "/products/product601(2).png"]
  },
  {
    id: 602,
    title: "Steam Deck OLED 1TB",
    price: 89000,
    discount: 4000,
    count: 0,
    display: "8-inch 90Hz OLED",
    cpu: "AMD Custom Zen 5",
    images: ["/products/product602.png"]
  },
  {
    id: 603,
    title: "Nintendo Switch 2 (Pro Edition)",
    price: 52000,
    discount: 0,
    count: 0,
    backward_compatible: true,
    chip: "NVIDIA T239 (DLSS 3.5)",
    images: ["/products/product603.png"]
  },
  {
    id: 604,
    title: "Монитор Samsung Odyssey Neo G9 (57\")",
    price: 210000,
    discount: 15000,
    count: 0,
    resolution: "Dual UHD",
    curve: "1000R",
    images: ["/products/product604.png", "/products/product604(2).png"]
  },
  {
    id: 605,
    title: "Гарнитура Apple Vision Pro (256GB)",
    price: 380000,
    discount: 30000,
    count: 0,
    os: "visionOS 3.0",
    spatial_audio: true,
    images: ["/products/product605.png"]
  },

  // --- 7. ПЕРСОНАЛЬНЫЙ УХОД (BEAUTY) ---
  {
    id: 701,
    title: "Фен Dyson Supersonic Nural (2025)",
    price: 54000,
    discount: 3000,
    count: 0,
    sensor: "Scalp Protect Mode",
    attachments: 5,
    images: ["/products/product701.png", "/products/product701(2).png"]
  },
  {
    id: 702,
    title: "Стайлер Shark FlexStyle Air",
    price: 36000,
    discount: 4000,
    count: 0,
    versatility: "Hair Dryer & Multi-Styler",
    heat_modes: 3,
    images: ["/products/product702.png"]
  },
  {
    id: 703,
    title: "Электробритва Philips S9000 Prestige",
    price: 45000,
    discount: 5000,
    count: 0,
    charging: "Qi Wireless Pad",
    blades: "NanoTech Precision",
    images: ["/products/product703.png", "/products/product703(2).png"]
  },
  {
    id: 704,
    title: "Зубная щетка Oral-B iO Series 10",
    price: 38000,
    discount: 2000,
    count: 0,
    feedback: "Live AI Coaching",
    base: "iOSense Magnetic Charger",
    images: ["/products/product704.png"]
  },
  {
    id: 705,
    title: "Массажер Theragun PRO Gen 6",
    price: 65000,
    discount: 5000,
    count: 0,
    amplitude: "16mm",
    bt_app: true,
    images: ["/products/product705.png"]
  },

  // --- 8. АУДИО И ЗВУК ---
  {
    id: 801,
    title: "Наушники Sony WH-1000XM6 (2025)",
    price: 46000,
    discount: 2000,
    count: 0,
    anc: "Auto AI Noise Cancelling",
    battery: "45h",
    images: ["/products/product801.png", "/products/product801(2).png"]
  },
  {
    id: 802,
    title: "Sonos Arc 2 Soundbar (2026)",
    price: 115000,
    discount: 10000,
    count: 0,
    dolby_atmos: "7.1.4 Support",
    hdmi: "eARC 2.1",
    images: ["/products/product802.png"]
  },
  {
    id: 803,
    title: "Bose QuietComfort Ultra Earbuds",
    price: 32000,
    discount: 1500,
    count: 0,
    immersion_mode: true,
    bt: "5.3 LE",
    images: ["/products/product803.png", "/products/product803(2).png"]
  },
  {
    id: 804,
    title: "Devialet Phantom I 108dB Gold",
    price: 420000,
    discount: 0,
    count: 0,
    power: "1100 Watts RMS",
    freq_range: "14Hz - 27kHz",
    images: ["/products/product804.png"]
  },
  {
    id: 805,
    title: "Marshall Stanmore III Bluetooth",
    price: 38000,
    discount: 3000,
    count: 0,
    design: "Vintage Rock",
    wired_inputs: "RCA, 3.5mm",
    images: ["/products/product805.png"]
  },

  // --- 9. ФОТО И ВИДЕО ---
  {
    id: 901,
    title: "Sony A7R VI (2026) 61MP",
    price: 399000,
    discount: 0,
    count: 0,
    resolution: "61 MP Full-frame",
    af: "AI Real-time Tracking",
    images: ["/products/product901.png", "/products/product901(2).png"]
  },
  {
    id: 902,
    title: "DJI Mavic 4 Pro (2025)",
    price: 215000,
    discount: 15000,
    count: 0,
    camera: "Hasselblad Dual Optical",
    flight_time: "50 min",
    images: ["/products/product902.png"]
  },
  {
    id: 903,
    title: "GoPro Hero 14 Black",
    price: 54000,
    discount: 4000,
    count: 0,
    video: "6K 60fps",
    hypersmooth: "7.0",
    images: ["/products/product903.png", "/products/product903(2).png"]
  },
  {
    id: 904,
    title: "Fujifilm X100VI Digital Camera",
    price: 185000,
    discount: 0,
    count: 0,
    sensor: "40.2MP X-Trans 5",
    ibis: "6 stops",
    images: ["/products/product904.png"]
  },
  {
    id: 905,
    title: "Insta360 X4 8K Edition",
    price: 62000,
    discount: 5000,
    count: 0,
    video_360: "8K 30fps",
    battery: "2290 mAh",
    images: ["/products/product905.png"]
  },

  // --- 10. КРУПНАЯ ТЕХНИКА ---
  {
    id: 1001,
    title: "Стиральная машина LG AI DD V9",
    price: 85000,
    discount: 7000,
    count: 0,
    capacity: "10.5 kg",
    ai_sensing: "Fabric recognition",
    images: ["/products/product1001.png", "/products/product1001(2).png"]
  },
  {
    id: 1002,
    title: "Посудомойка Miele G 7975 SCVi",
    price: 220000,
    discount: 10000,
    count: 0,
    auto_dos: "PowerDisk system",
    wifi: true,
    images: ["/products/product1002.png"]
  },
  {
    id: 1003,
    title: "Духовой шкаф Gaggenau EB 333",
    price: 580000,
    discount: 0,
    count: 0,
    width: "90 cm",
    handmade: true,
    images: ["/products/product1003.png", "/products/product1003(2).png"]
  },
  {
    id: 1004,
    title: "Haier Multi-Door Fridge (CUBE)",
    price: 155000,
    discount: 12000,
    count: 0,
    antimicrobial: "ABT Pro",
    fresher_zones: 3,
    images: ["/products/product1004.png"]
  },
  {
    id: 1005,
    title: "Сушильная машина Bosch Home Professional",
    price: 108000,
    discount: 9000,
    count: 0,
    heat_pump: true,
    self_cleaning: true,
    images: ["/products/product1005.png"]
  }
];


