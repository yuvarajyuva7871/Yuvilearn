// ════════════════════════════════════════════════════════
// YUVILEARN DOUBT DATABASE — BATCH 1: SOCIAL STUDIES
// History, Geography, Civics — Class 1 to 10
// ════════════════════════════════════════════════════════

const socialStudiesDB = {

  // ── CLASS 1 ──────────────────────────────────────────
  "1": [
    { id:"ss1q1", chapter:"My Family & Home",
      q:"What is a family?",
      keywords:["family","members","father","mother","home"],
      answer:`<p>A <strong>family</strong> is a group of people who live together, love each other and take care of each other.</p>
      <ul class="answer-steps">
        <li><span class="step-num">👨</span><span><strong>Father</strong> — earns for the family, protects everyone</span></li>
        <li><span class="step-num">👩</span><span><strong>Mother</strong> — takes care of the home and children</span></li>
        <li><span class="step-num">👧</span><span><strong>Children</strong> — sons and daughters</span></li>
        <li><span class="step-num">👴</span><span><strong>Grandparents</strong> — grandfather and grandmother</span></li>
      </ul>
      <div class="key-box">💡 A family with parents + children = <strong>Nuclear Family</strong><br/>A family with grandparents too = <strong>Joint Family</strong></div>`,
      related:["ss1q2","ss1q3"] },

    { id:"ss1q2", chapter:"My Family & Home",
      q:"What is the difference between nuclear family and joint family?",
      keywords:["nuclear family","joint family","difference","types family"],
      answer:`<div class="key-box green">🏠 <strong>Nuclear Family</strong> — Only parents and their children living together. Small family.</div>
      <div class="key-box yellow">🏡 <strong>Joint Family</strong> — Grandparents, parents, children, uncles, aunts all living together. Large family.</div>
      <div class="example-box"><strong>Nuclear:</strong> Ram, his wife and 2 children<br/><strong>Joint:</strong> Ram's parents + Ram + his wife + children all in one house</div>`,
      related:["ss1q1"] },

    { id:"ss1q3", chapter:"My Neighbourhood",
      q:"What are community helpers? Give examples.",
      keywords:["community helpers","helpers","doctor","teacher","police","firefighter"],
      answer:`<p><strong>Community helpers</strong> are people who work to help others in the community.</p>
      <ul class="answer-steps">
        <li><span class="step-num">👨‍⚕️</span><span><strong>Doctor</strong> — treats sick people</span></li>
        <li><span class="step-num">👮</span><span><strong>Police</strong> — keeps law and order, protects people</span></li>
        <li><span class="step-num">👩‍🏫</span><span><strong>Teacher</strong> — educates children</span></li>
        <li><span class="step-num">🚒</span><span><strong>Firefighter</strong> — puts out fires, saves lives</span></li>
        <li><span class="step-num">🚜</span><span><strong>Farmer</strong> — grows food for everyone</span></li>
        <li><span class="step-num">🏗️</span><span><strong>Engineer</strong> — builds roads, bridges, buildings</span></li>
      </ul>`,
      related:["ss1q2"] },

    { id:"ss1q4", chapter:"Our Country India",
      q:"What is the national flag of India?",
      keywords:["national flag","india flag","tricolour","saffron white green","ashoka chakra"],
      answer:`<p>India's national flag is called the <strong>Tiranga (Tricolour)</strong> because it has three colours.</p>
      <ul class="answer-steps">
        <li><span class="step-num">🟠</span><span><strong>Saffron (top)</strong> — represents courage and sacrifice</span></li>
        <li><span class="step-num">⚪</span><span><strong>White (middle)</strong> — represents peace and truth. Has the Ashoka Chakra (24 spokes)</span></li>
        <li><span class="step-num">🟢</span><span><strong>Green (bottom)</strong> — represents prosperity and nature</span></li>
      </ul>
      <div class="key-box">🇮🇳 The flag was adopted on <strong>22nd July 1947</strong><br/>Designed by <strong>Pingali Venkayya</strong></div>`,
      related:["ss1q5","ss1q6"] },

    { id:"ss1q5", chapter:"Our Country India",
      q:"What is India's national anthem?",
      keywords:["national anthem","jana gana mana","rabindranath tagore","anthem"],
      answer:`<p>India's national anthem is <strong>Jana Gana Mana</strong>.</p>
      <div class="key-box">✍️ Written and composed by <strong>Rabindranath Tagore</strong><br/>📅 Adopted on <strong>24th January 1950</strong><br/>⏱️ Duration: <strong>52 seconds</strong></div>
      <p>It was first sung at the Calcutta session of the Indian National Congress on <strong>27th December 1911</strong>.</p>`,
      related:["ss1q4","ss1q6"] },

    { id:"ss1q6", chapter:"Our Country India",
      q:"What is India's national animal, bird and flower?",
      keywords:["national animal","national bird","national flower","tiger","peacock","lotus"],
      answer:`<ul class="answer-steps">
        <li><span class="step-num">🐯</span><span><strong>National Animal</strong> — Bengal Tiger (Royal Tiger)</span></li>
        <li><span class="step-num">🦚</span><span><strong>National Bird</strong> — Indian Peacock</span></li>
        <li><span class="step-num">🪷</span><span><strong>National Flower</strong> — Lotus</span></li>
        <li><span class="step-num">🌳</span><span><strong>National Tree</strong> — Banyan Tree</span></li>
        <li><span class="step-num">🏏</span><span><strong>National Sport</strong> — Field Hockey (traditionally)</span></li>
        <li><span class="step-num">🐬</span><span><strong>National Aquatic Animal</strong> — River Dolphin</span></li>
      </ul>`,
      related:["ss1q4","ss1q5"] }
  ],

  // ── CLASS 2 ──────────────────────────────────────────
  "2": [
    { id:"ss2q1", chapter:"Maps & Directions",
      q:"What are the four cardinal directions?",
      keywords:["directions","north south east west","cardinal","compass"],
      answer:`<p>The four <strong>cardinal directions</strong> help us find our way.</p>
      <ul class="answer-steps">
        <li><span class="step-num">⬆️</span><span><strong>North (N)</strong> — towards the North Pole</span></li>
        <li><span class="step-num">⬇️</span><span><strong>South (S)</strong> — towards the South Pole</span></li>
        <li><span class="step-num">➡️</span><span><strong>East (E)</strong> — direction of sunrise</span></li>
        <li><span class="step-num">⬅️</span><span><strong>West (W)</strong> — direction of sunset</span></li>
      </ul>
      <div class="key-box">💡 Memory trick: <strong>Never Eat Stale Wheat</strong> = North, East, South, West (clockwise)</div>`,
      related:["ss2q2"] },

    { id:"ss2q2", chapter:"Maps & Directions",
      q:"What is a map? What are its uses?",
      keywords:["map","uses of map","types map","atlas","globe"],
      answer:`<p>A <strong>map</strong> is a flat drawing that shows the Earth or part of it from above.</p>
      <ul class="answer-steps">
        <li><span class="step-num">🗺️</span><span>Shows the location of places</span></li>
        <li><span class="step-num">🛣️</span><span>Shows roads, rivers and mountains</span></li>
        <li><span class="step-num">📏</span><span>Shows distances between places</span></li>
      </ul>
      <div class="key-box">Types of maps: <strong>Political map</strong> (shows countries/states) · <strong>Physical map</strong> (shows mountains, rivers) · <strong>Road map</strong> (shows roads and routes)</div>`,
      related:["ss2q1"] },

    { id:"ss2q3", chapter:"Transport & Communication",
      q:"What are the different modes of transport?",
      keywords:["transport","modes transport","land water air","road rail"],
      answer:`<p>Transport means moving people or goods from one place to another.</p>
      <ul class="answer-steps">
        <li><span class="step-num">🚗</span><span><strong>Land transport</strong> — Car, Bus, Train, Bicycle, Truck</span></li>
        <li><span class="step-num">🚢</span><span><strong>Water transport</strong> — Ship, Boat, Ferry, Submarine</span></li>
        <li><span class="step-num">✈️</span><span><strong>Air transport</strong> — Aeroplane, Helicopter, Rocket</span></li>
      </ul>
      <div class="key-box green">💡 Fastest = Air · Cheapest = Land · Heaviest goods = Water</div>`,
      related:["ss2q4"] },

    { id:"ss2q4", chapter:"Transport & Communication",
      q:"How has communication changed over time?",
      keywords:["communication","telephone","internet","letter","evolution communication"],
      answer:`<ul class="answer-steps">
        <li><span class="step-num">📜</span><span><strong>Ancient times</strong> — Letters, messengers, drums, smoke signals</span></li>
        <li><span class="step-num">📮</span><span><strong>Past</strong> — Postal letters, telegrams, landline phones</span></li>
        <li><span class="step-num">📱</span><span><strong>Present</strong> — Mobile phones, internet, email, video calls, social media</span></li>
      </ul>
      <div class="key-box">📡 Internet has made communication <strong>instant and global</strong> — we can talk to anyone anywhere in seconds!</div>`,
      related:["ss2q3"] }
  ],

  // ── CLASS 3 ──────────────────────────────────────────
  "3": [
    { id:"ss3q1", chapter:"Our Earth",
      q:"What are the seven continents?",
      keywords:["seven continents","continents","asia africa europe","world"],
      answer:`<p>The Earth has <strong>7 continents</strong> (large land masses):</p>
      <ul class="answer-steps">
        <li><span class="step-num">1</span><span><strong>Asia</strong> — largest continent, where India is located</span></li>
        <li><span class="step-num">2</span><span><strong>Africa</strong> — second largest, has the Sahara Desert</span></li>
        <li><span class="step-num">3</span><span><strong>North America</strong> — has USA and Canada</span></li>
        <li><span class="step-num">4</span><span><strong>South America</strong> — has the Amazon rainforest</span></li>
        <li><span class="step-num">5</span><span><strong>Europe</strong> — smallest but most powerful historically</span></li>
        <li><span class="step-num">6</span><span><strong>Australia</strong> — smallest continent, also a country</span></li>
        <li><span class="step-num">7</span><span><strong>Antarctica</strong> — coldest, covered in ice, no permanent residents</span></li>
      </ul>
      <div class="key-box">💡 Trick: <strong>A AANE SA</strong> = Asia, Africa, Antarctica, North America, Europe, South America, Australia</div>`,
      related:["ss3q2","ss3q3"] },

    { id:"ss3q2", chapter:"Our Earth",
      q:"What are the five oceans?",
      keywords:["five oceans","ocean","pacific atlantic indian","arctic southern"],
      answer:`<p>Earth has <strong>5 oceans</strong> covering about 71% of its surface:</p>
      <ul class="answer-steps">
        <li><span class="step-num">1</span><span><strong>Pacific Ocean</strong> — largest and deepest ocean</span></li>
        <li><span class="step-num">2</span><span><strong>Atlantic Ocean</strong> — second largest, S-shaped</span></li>
        <li><span class="step-num">3</span><span><strong>Indian Ocean</strong> — surrounds India, warmest ocean</span></li>
        <li><span class="step-num">4</span><span><strong>Arctic Ocean</strong> — around North Pole, mostly frozen</span></li>
        <li><span class="step-num">5</span><span><strong>Southern Ocean</strong> — around Antarctica</span></li>
      </ul>`,
      related:["ss3q1"] },

    { id:"ss3q3", chapter:"India — Our Country",
      q:"What are the neighbouring countries of India?",
      keywords:["neighbouring countries","india neighbours","pakistan bangladesh nepal","border countries"],
      answer:`<p>India shares its borders with <strong>7 countries</strong>:</p>
      <ul class="answer-steps">
        <li><span class="step-num">🇵🇰</span><span><strong>Pakistan</strong> — northwest border</span></li>
        <li><span class="step-num">🇦🇫</span><span><strong>Afghanistan</strong> — far northwest (via PoK)</span></li>
        <li><span class="step-num">🇨🇳</span><span><strong>China</strong> — north and northeast border</span></li>
        <li><span class="step-num">🇳🇵</span><span><strong>Nepal</strong> — north border</span></li>
        <li><span class="step-num">🇧🇹</span><span><strong>Bhutan</strong> — northeast border</span></li>
        <li><span class="step-num">🇧🇩</span><span><strong>Bangladesh</strong> — east border</span></li>
        <li><span class="step-num">🇲🇲</span><span><strong>Myanmar</strong> — far east border</span></li>
      </ul>
      <div class="key-box">🌊 Sri Lanka and Maldives are island neighbours separated by sea.</div>`,
      related:["ss3q4"] },

    { id:"ss3q4", chapter:"India — Our Country",
      q:"What are the states and union territories of India?",
      keywords:["states","union territories","india states","how many states"],
      answer:`<div class="key-box">India has <strong>28 States</strong> and <strong>8 Union Territories</strong></div>
      <p>States are governed by their own elected government. Union Territories are directly governed by the Central Government.</p>
      <div class="example-box">
        <strong>Large States:</strong> Rajasthan (largest area), Uttar Pradesh (largest population), Maharashtra, Tamil Nadu<br/>
        <strong>Union Territories:</strong> Delhi, Jammu & Kashmir, Ladakh, Puducherry, Chandigarh, Lakshadweep, Andaman & Nicobar, Dadra & Nagar Haveli
      </div>`,
      related:["ss3q3"] }
  ],

  // ── CLASS 4 ──────────────────────────────────────────
  "4": [
    { id:"ss4q1", chapter:"Mountains & Rivers of India",
      q:"What are the major mountain ranges of India?",
      keywords:["mountain ranges","himalayas","western ghats","vindhyas","aravalli"],
      answer:`<ul class="answer-steps">
        <li><span class="step-num">🏔️</span><span><strong>Himalayas</strong> — highest mountains, northern border, source of major rivers</span></li>
        <li><span class="step-num">⛰️</span><span><strong>Western Ghats</strong> — western coast, biodiversity hotspot</span></li>
        <li><span class="step-num">⛰️</span><span><strong>Eastern Ghats</strong> — eastern coast, discontinuous range</span></li>
        <li><span class="step-num">⛰️</span><span><strong>Vindhya Range</strong> — central India, separates north and south</span></li>
        <li><span class="step-num">⛰️</span><span><strong>Aravalli Range</strong> — oldest mountain range in India (Rajasthan)</span></li>
        <li><span class="step-num">⛰️</span><span><strong>Satpura Range</strong> — central India, parallel to Vindhyas</span></li>
      </ul>
      <div class="key-box">🏔️ <strong>Mount Everest</strong> (8,849m) is the highest peak in the world, in the Himalayas</div>`,
      related:["ss4q2"] },

    { id:"ss4q2", chapter:"Mountains & Rivers of India",
      q:"What are the major rivers of India?",
      keywords:["rivers india","ganga yamuna","indus brahmaputra","major rivers"],
      answer:`<ul class="answer-steps">
        <li><span class="step-num">🌊</span><span><strong>Ganga</strong> — longest river in India, sacred, flows east</span></li>
        <li><span class="step-num">🌊</span><span><strong>Brahmaputra</strong> — originates in Tibet, flows through Assam</span></li>
        <li><span class="step-num">🌊</span><span><strong>Yamuna</strong> — tributary of Ganga, flows through Delhi and Agra</span></li>
        <li><span class="step-num">🌊</span><span><strong>Indus</strong> — originates in Tibet, mostly flows through Pakistan</span></li>
        <li><span class="step-num">🌊</span><span><strong>Godavari</strong> — longest river in peninsular India</span></li>
        <li><span class="step-num">🌊</span><span><strong>Krishna & Cauvery</strong> — important rivers of south India</span></li>
      </ul>`,
      related:["ss4q1","ss4q3"] },

    { id:"ss4q3", chapter:"Climate of India",
      q:"What are the seasons in India?",
      keywords:["seasons india","summer winter monsoon","climate","four seasons"],
      answer:`<p>India mainly has <strong>4 seasons</strong>:</p>
      <ul class="answer-steps">
        <li><span class="step-num">☀️</span><span><strong>Summer</strong> (March–June) — very hot, temperatures up to 45°C in some areas</span></li>
        <li><span class="step-num">🌧️</span><span><strong>Monsoon/Rainy</strong> (July–September) — heavy rainfall, farmers depend on this</span></li>
        <li><span class="step-num">🍂</span><span><strong>Autumn</strong> (October–November) — pleasant, retreating monsoon</span></li>
        <li><span class="step-num">❄️</span><span><strong>Winter</strong> (December–February) — cold, especially in north India</span></li>
      </ul>
      <div class="key-box">🌧️ India gets most of its rain from the <strong>Southwest Monsoon</strong> which comes from the Arabian Sea</div>`,
      related:["ss4q2"] }
  ],

  // ── CLASS 5 ──────────────────────────────────────────
  "5": [
    { id:"ss5q1", chapter:"Indian History — Ancient",
      q:"What was the Indus Valley Civilisation?",
      keywords:["indus valley","civilisation","harappa","mohenjo daro","ancient india"],
      answer:`<p>The <strong>Indus Valley Civilisation</strong> (also called Harappan Civilisation) was one of the world's oldest and most advanced civilisations.</p>
      <div class="key-box">📅 Period: approximately <strong>3300 BCE to 1300 BCE</strong></div>
      <ul class="answer-steps">
        <li><span class="step-num">🏙️</span><span>Had well-planned cities with straight roads, drains and brick houses</span></li>
        <li><span class="step-num">💧</span><span>Had advanced drainage and water supply systems</span></li>
        <li><span class="step-num">🛒</span><span>Traded with Mesopotamia (modern Iraq)</span></li>
        <li><span class="step-num">📍</span><span>Major cities: Harappa (Punjab), Mohenjo-daro (Sindh), Lothal (Gujarat)</span></li>
      </ul>`,
      related:["ss5q2"] },

    { id:"ss5q2", chapter:"Indian History — Ancient",
      q:"Who were the Maurya rulers? Who was Ashoka?",
      keywords:["maurya empire","ashoka","chandragupta","maurya dynasty"],
      answer:`<p>The <strong>Maurya Empire</strong> was the first great empire of India.</p>
      <ul class="answer-steps">
        <li><span class="step-num">👑</span><span><strong>Chandragupta Maurya</strong> — founded the empire (321 BCE), with help of Chanakya</span></li>
        <li><span class="step-num">👑</span><span><strong>Bindusara</strong> — expanded the empire southward</span></li>
        <li><span class="step-num">☮️</span><span><strong>Ashoka the Great</strong> — greatest Maurya king, fought Kalinga War (261 BCE), then embraced Buddhism and spread peace</span></li>
      </ul>
      <div class="key-box">🛞 Ashoka's <strong>Dhamma Chakra</strong> (Wheel of Law) is on our national flag!<br/>🦁 The <strong>Lion Capital</strong> from Sarnath is our National Emblem</div>`,
      related:["ss5q1","ss5q3"] },

    { id:"ss5q3", chapter:"Indian Freedom Struggle",
      q:"What was the Indian Independence Movement? Who were the key leaders?",
      keywords:["freedom struggle","independence","gandhi","nehru","independence movement"],
      answer:`<p>India fought for independence from British rule for nearly 200 years.</p>
      <ul class="answer-steps">
        <li><span class="step-num">🕊️</span><span><strong>Mahatma Gandhi</strong> — led non-violent (Ahimsa) movements: Non-Cooperation, Civil Disobedience, Quit India</span></li>
        <li><span class="step-num">⚔️</span><span><strong>Subhash Chandra Bose</strong> — formed Indian National Army (INA), "Give me blood, I will give you freedom"</span></li>
        <li><span class="step-num">🌹</span><span><strong>Jawaharlal Nehru</strong> — first Prime Minister, "Tryst with Destiny" speech</span></li>
        <li><span class="step-num">⚖️</span><span><strong>B.R. Ambedkar</strong> — father of Indian Constitution</span></li>
        <li><span class="step-num">🔥</span><span><strong>Bhagat Singh</strong> — revolutionary freedom fighter</span></li>
      </ul>
      <div class="key-box">🇮🇳 India gained independence on <strong>15th August 1947</strong></div>`,
      related:["ss5q2","ss5q4"] },

    { id:"ss5q4", chapter:"Indian Freedom Struggle",
      q:"What was the Salt March (Dandi March)?",
      keywords:["salt march","dandi march","gandhi","salt satyagraha","civil disobedience"],
      answer:`<p>The <strong>Dandi March</strong> was a famous non-violent protest led by Mahatma Gandhi against British salt tax.</p>
      <ul class="answer-steps">
        <li><span class="step-num">📅</span><span>Started on <strong>12th March 1930</strong></span></li>
        <li><span class="step-num">🚶</span><span>Gandhi walked <strong>241 miles (388 km)</strong> from Sabarmati Ashram to Dandi (Gujarat)</span></li>
        <li><span class="step-num">🧂</span><span>On <strong>6th April 1930</strong>, he picked up salt from the sea, breaking British salt laws</span></li>
        <li><span class="step-num">🌍</span><span>Inspired millions of Indians to join the Civil Disobedience Movement</span></li>
      </ul>`,
      related:["ss5q3"] }
  ],

  // ── CLASS 6 ──────────────────────────────────────────
  "6": [
    { id:"ss6q1", chapter:"Ancient World History",
      q:"What were the ancient civilisations of the world?",
      keywords:["ancient civilisations","mesopotamia","egypt","greece","rome","china"],
      answer:`<p>Four great <strong>ancient river civilisations</strong> shaped human history:</p>
      <ul class="answer-steps">
        <li><span class="step-num">🌊</span><span><strong>Mesopotamia</strong> — Tigris & Euphrates rivers (modern Iraq). First writing (cuneiform), first laws (Hammurabi Code)</span></li>
        <li><span class="step-num">🏛️</span><span><strong>Egypt</strong> — Nile River. Pyramids, pharaohs, hieroglyphics, mummification</span></li>
        <li><span class="step-num">🏺</span><span><strong>Indus Valley</strong> — Indus River (India/Pakistan). Advanced drainage, planned cities</span></li>
        <li><span class="step-num">🐲</span><span><strong>China</strong> — Huang He (Yellow River). Silk, paper, gunpowder invented here</span></li>
      </ul>`,
      related:["ss6q2"] },

    { id:"ss6q2", chapter:"Indian Constitution",
      q:"What is the Indian Constitution? When was it adopted?",
      keywords:["constitution","indian constitution","dr ambedkar","fundamental rights","adopted"],
      answer:`<p>The <strong>Constitution of India</strong> is the supreme law of the country that defines the rights and duties of citizens and the structure of government.</p>
      <div class="key-box">📅 Adopted on <strong>26th November 1949</strong><br/>📅 Came into effect on <strong>26th January 1950</strong> (celebrated as Republic Day)<br/>✍️ Chief architect: <strong>Dr B.R. Ambedkar</strong></div>
      <p>It is the <strong>longest written constitution</strong> in the world. Originally had 395 articles, 22 parts and 8 schedules.</p>`,
      related:["ss6q3","ss6q4"] },

    { id:"ss6q3", chapter:"Indian Constitution",
      q:"What are the Fundamental Rights of Indian citizens?",
      keywords:["fundamental rights","right to equality","freedom","constitution rights"],
      answer:`<p>Fundamental Rights are basic rights given to every Indian citizen by the Constitution.</p>
      <ul class="answer-steps">
        <li><span class="step-num">⚖️</span><span><strong>Right to Equality</strong> (Art 14-18) — No discrimination based on religion, race, caste, sex</span></li>
        <li><span class="step-num">🗣️</span><span><strong>Right to Freedom</strong> (Art 19-22) — Freedom of speech, movement, profession</span></li>
        <li><span class="step-num">⛓️</span><span><strong>Right against Exploitation</strong> (Art 23-24) — No forced labour, no child labour</span></li>
        <li><span class="step-num">🕌</span><span><strong>Right to Freedom of Religion</strong> (Art 25-28)</span></li>
        <li><span class="step-num">📚</span><span><strong>Cultural & Educational Rights</strong> (Art 29-30)</span></li>
        <li><span class="step-num">🏛️</span><span><strong>Right to Constitutional Remedies</strong> (Art 32) — Can approach Supreme Court if rights violated</span></li>
      </ul>`,
      related:["ss6q2","ss6q4"] },

    { id:"ss6q4", chapter:"Indian Constitution",
      q:"What are the Fundamental Duties of Indian citizens?",
      keywords:["fundamental duties","duties citizens","42nd amendment","11 duties"],
      answer:`<p>Fundamental Duties were added to the Constitution by the <strong>42nd Amendment in 1976</strong>. There are <strong>11 Fundamental Duties</strong>.</p>
      <ul class="answer-steps">
        <li><span class="step-num">🇮🇳</span><span>Abide by the Constitution and respect national symbols</span></li>
        <li><span class="step-num">🕊️</span><span>Cherish the noble ideals of the freedom struggle</span></li>
        <li><span class="step-num">🌍</span><span>Protect the sovereignty and integrity of India</span></li>
        <li><span class="step-num">🌿</span><span>Protect the natural environment</span></li>
        <li><span class="step-num">🧠</span><span>Develop scientific temper and spirit of inquiry</span></li>
        <li><span class="step-num">📚</span><span>Provide education to children aged 6-14 years</span></li>
      </ul>`,
      related:["ss6q2","ss6q3"] }
  ],

  // ── CLASS 7 ──────────────────────────────────────────
  "7": [
    { id:"ss7q1", chapter:"Medieval India",
      q:"Who were the Delhi Sultans? What was the Delhi Sultanate?",
      keywords:["delhi sultanate","delhi sultans","qutub minar","iltutmish","alauddin khilji"],
      answer:`<p>The <strong>Delhi Sultanate</strong> was a Muslim kingdom that ruled much of India from 1206 to 1526 CE.</p>
      <ul class="answer-steps">
        <li><span class="step-num">👑</span><span><strong>Slave Dynasty (1206-1290)</strong> — Qutb-ud-din Aibak (founded), Iltutmish, Razia Sultan (first woman ruler)</span></li>
        <li><span class="step-num">👑</span><span><strong>Khilji Dynasty (1290-1320)</strong> — Alauddin Khilji (expanded empire, market reforms)</span></li>
        <li><span class="step-num">👑</span><span><strong>Tughlaq Dynasty (1320-1414)</strong> — Muhammad bin Tughlaq (moved capital to Daulatabad)</span></li>
        <li><span class="step-num">👑</span><span><strong>Lodi Dynasty (1451-1526)</strong> — Ibrahim Lodi (defeated by Babur)</span></li>
      </ul>
      <div class="key-box">🕌 <strong>Qutub Minar</strong> (Delhi) was built during this period — tallest brick minaret in world!</div>`,
      related:["ss7q2"] },

    { id:"ss7q2", chapter:"Mughal Empire",
      q:"Who were the Mughal emperors? Who was Akbar?",
      keywords:["mughal","akbar","babur","shahjahan","aurangzeb","mughal empire"],
      answer:`<p>The <strong>Mughal Empire</strong> ruled India from 1526 to 1857 CE.</p>
      <ul class="answer-steps">
        <li><span class="step-num">⚔️</span><span><strong>Babur</strong> — founded empire, won First Battle of Panipat (1526)</span></li>
        <li><span class="step-num">📚</span><span><strong>Humayun</strong> — Babur's son, lost and regained empire</span></li>
        <li><span class="step-num">🌟</span><span><strong>Akbar the Great</strong> — greatest Mughal, known for religious tolerance (Din-i-Ilahi), Navratnas at court</span></li>
        <li><span class="step-num">🌹</span><span><strong>Jahangir</strong> — known for love of art and nature</span></li>
        <li><span class="step-num">🕌</span><span><strong>Shah Jahan</strong> — built Taj Mahal, Red Fort, Jama Masjid</span></li>
        <li><span class="step-num">⚔️</span><span><strong>Aurangzeb</strong> — last great Mughal, very large empire but strict policies led to decline</span></li>
      </ul>`,
      related:["ss7q1","ss7q3"] },

    { id:"ss7q3", chapter:"Mughal Empire",
      q:"Why was the Taj Mahal built? What is its significance?",
      keywords:["taj mahal","shah jahan","mumtaz mahal","taj mahal built why","agra"],
      answer:`<p>The <strong>Taj Mahal</strong> is a white marble mausoleum in Agra, Uttar Pradesh.</p>
      <div class="key-box">💝 Built by <strong>Shah Jahan</strong> in memory of his beloved wife <strong>Mumtaz Mahal</strong> who died in 1631</div>
      <ul class="answer-steps">
        <li><span class="step-num">📅</span><span>Construction: 1632–1653 CE (took 22 years)</span></li>
        <li><span class="step-num">👷</span><span>About 20,000 workers involved in construction</span></li>
        <li><span class="step-num">💎</span><span>Made of pure white marble, decorated with precious stones</span></li>
        <li><span class="step-num">🌍</span><span>One of the <strong>Seven Wonders of the World</strong></span></li>
      </ul>`,
      related:["ss7q2"] }
  ],

  // ── CLASS 8 ──────────────────────────────────────────
  "8": [
    { id:"ss8q1", chapter:"British Rule in India",
      q:"How did the British come to India? What was the East India Company?",
      keywords:["british india","east india company","colonial rule","british came india"],
      answer:`<p>The British came to India initially for <strong>trade</strong> and slowly took political control.</p>
      <ul class="answer-steps">
        <li><span class="step-num">1600</span><span>British <strong>East India Company</strong> formed for trade with Asia</span></li>
        <li><span class="step-num">1608</span><span>First British ship arrived at Surat (Gujarat)</span></li>
        <li><span class="step-num">1757</span><span><strong>Battle of Plassey</strong> — Robert Clive defeated Siraj-ud-Daulah, British gained Bengal</span></li>
        <li><span class="step-num">1858</span><span>After 1857 revolt, British Crown took over from East India Company</span></li>
        <li><span class="step-num">1947</span><span>India gained independence after 200 years of British rule</span></li>
      </ul>`,
      related:["ss8q2","ss8q3"] },

    { id:"ss8q2", chapter:"1857 Revolt",
      q:"What was the 1857 Revolt? Why is it called the First War of Independence?",
      keywords:["1857 revolt","first war independence","sepoy mutiny","1857"],
      answer:`<p>The <strong>Revolt of 1857</strong> was the first large-scale armed uprising against British rule in India.</p>
      <div class="key-box">📅 Started on <strong>10th May 1857</strong> at Meerut cantonment</div>
      <ul class="answer-steps">
        <li><span class="step-num">⚔️</span><span><strong>Cause:</strong> New Enfield rifles used animal fat (pigs and cows) — hurt religious sentiments of Hindu and Muslim soldiers</span></li>
        <li><span class="step-num">🌟</span><span><strong>Key leaders:</strong> Mangal Pandey, Rani Laxmibai of Jhansi, Nana Sahib, Bahadur Shah Zafar</span></li>
        <li><span class="step-num">😞</span><span><strong>Result:</strong> British suppressed the revolt. Mughal emperor Bahadur Shah Zafar was exiled</span></li>
      </ul>
      <div class="key-box green">🦁 Called First War of Independence because it was the first organised national uprising against British rule!</div>`,
      related:["ss8q1","ss8q3"] },

    { id:"ss8q3", chapter:"Indian National Congress",
      q:"When was the Indian National Congress formed? What was its role?",
      keywords:["indian national congress","INC","congress founded","freedom movement","1885"],
      answer:`<div class="key-box">📅 Indian National Congress founded in <strong>1885</strong> by <strong>A.O. Hume</strong> (a British officer)</div>
      <ul class="answer-steps">
        <li><span class="step-num">🌱</span><span>First session held in <strong>Bombay (Mumbai)</strong> on 28 December 1885</span></li>
        <li><span class="step-num">📢</span><span>Initially demanded more representation for Indians in British government</span></li>
        <li><span class="step-num">🔥</span><span>Under Gandhi's leadership became a mass movement for independence</span></li>
        <li><span class="step-num">🏆</span><span>Led India to independence in 1947</span></li>
      </ul>`,
      related:["ss8q1","ss8q2"] }
  ],

  // ── CLASS 9 ──────────────────────────────────────────
  "9": [
    { id:"ss9q1", chapter:"French Revolution",
      q:"What was the French Revolution? What caused it?",
      keywords:["french revolution","1789","liberty equality fraternity","bastille","causes"],
      answer:`<p>The <strong>French Revolution</strong> (1789–1799) was a period of radical political and social transformation in France.</p>
      <div class="key-box">📅 Started with storming of <strong>Bastille Prison</strong> on <strong>14th July 1789</strong><br/>Slogan: <strong>Liberté, Égalité, Fraternité</strong> (Liberty, Equality, Fraternity)</div>
      <ul class="answer-steps">
        <li><span class="step-num">💰</span><span><strong>Financial crisis</strong> — France was bankrupt after wars and American Revolution</span></li>
        <li><span class="step-num">🌾</span><span><strong>Food shortage</strong> — bad harvests led to starvation of common people</span></li>
        <li><span class="step-num">⚖️</span><span><strong>Inequality</strong> — clergy and nobility had privileges, common people paid all taxes</span></li>
        <li><span class="step-num">💡</span><span><strong>Enlightenment ideas</strong> — philosophers like Rousseau, Voltaire inspired people to demand rights</span></li>
      </ul>`,
      related:["ss9q2"] },

    { id:"ss9q2", chapter:"World War I",
      q:"What were the causes of World War I?",
      keywords:["world war 1","causes WWI","1914","assassination","archduke franz ferdinand"],
      answer:`<p><strong>World War I</strong> (1914–1918) was the first global war, fought mainly in Europe.</p>
      <div class="key-box">💥 Immediate cause: Assassination of <strong>Archduke Franz Ferdinand</strong> of Austria-Hungary on 28 June 1914</div>
      <p>Long-term causes (MAIN):</p>
      <ul class="answer-steps">
        <li><span class="step-num">M</span><span><strong>Militarism</strong> — countries built up huge armies and navies</span></li>
        <li><span class="step-num">A</span><span><strong>Alliances</strong> — Europe divided into two armed camps (Triple Alliance vs Triple Entente)</span></li>
        <li><span class="step-num">I</span><span><strong>Imperialism</strong> — competition for colonies in Africa and Asia</span></li>
        <li><span class="step-num">N</span><span><strong>Nationalism</strong> — ethnic groups wanted their own nations</span></li>
      </ul>`,
      related:["ss9q3"] },

    { id:"ss9q3", chapter:"World War II",
      q:"What were the causes and effects of World War II?",
      keywords:["world war 2","WWII","causes","hitler","nazi","1939","effects"],
      answer:`<p><strong>World War II</strong> (1939–1945) was the deadliest conflict in human history, killing over 70 million people.</p>
      <div class="key-box">💥 Started when Germany invaded Poland on <strong>1st September 1939</strong></div>
      <p><strong>Main causes:</strong></p>
      <ul class="answer-steps">
        <li><span class="step-num">1</span><span>Rise of Hitler and Nazi Germany — extreme nationalism and antisemitism</span></li>
        <li><span class="step-num">2</span><span>Failure of Treaty of Versailles — humiliated Germany after WWI</span></li>
        <li><span class="step-num">3</span><span>Western policy of appeasement</span></li>
      </ul>
      <p><strong>Effects:</strong></p>
      <ul class="answer-steps">
        <li><span class="step-num">🌐</span><span>Formation of United Nations (UN) in 1945</span></li>
        <li><span class="step-num">💣</span><span>Cold War between USA and USSR</span></li>
        <li><span class="step-num">🌏</span><span>Decolonisation — many Asian and African nations gained independence</span></li>
      </ul>`,
      related:["ss9q2"] }
  ],

  // ── CLASS 10 ─────────────────────────────────────────
  "10": [
    { id:"ss10q1", chapter:"Nationalism in India",
      q:"What was the Non-Cooperation Movement?",
      keywords:["non cooperation movement","gandhi","1920","non cooperation","boycott"],
      answer:`<p>The <strong>Non-Cooperation Movement</strong> was launched by <strong>Mahatma Gandhi</strong> in 1920.</p>
      <div class="key-box">📅 Launched: <strong>1st August 1920</strong><br/>Goal: Achieve Swaraj (self-rule) by non-violent non-cooperation with British</div>
      <ul class="answer-steps">
        <li><span class="step-num">📚</span><span>Students left British schools and colleges</span></li>
        <li><span class="step-num">⚖️</span><span>Lawyers boycotted British courts</span></li>
        <li><span class="step-num">🏅</span><span>People returned British titles and honours</span></li>
        <li><span class="step-num">🧵</span><span>Boycott of British goods — spinning khadi promoted</span></li>
        <li><span class="step-num">⛔</span><span>Suspended after <strong>Chauri Chaura incident</strong> (1922) where a mob burned a police station</span></li>
      </ul>`,
      related:["ss10q2","ss10q3"] },

    { id:"ss10q2", chapter:"Nationalism in India",
      q:"What was the Civil Disobedience Movement?",
      keywords:["civil disobedience","salt march","dandi","1930","gandhi"],
      answer:`<p>The <strong>Civil Disobedience Movement</strong> was launched by Gandhi in 1930 with the famous <strong>Dandi March</strong>.</p>
      <div class="key-box">📅 Salt March: <strong>12 March 1930</strong> — Gandhi walked 241 miles to Dandi to make salt illegally</div>
      <ul class="answer-steps">
        <li><span class="step-num">🧂</span><span>Breaking salt laws was the starting point</span></li>
        <li><span class="step-num">🚫</span><span>Boycott of British goods, liquor shops, foreign cloth</span></li>
        <li><span class="step-num">📋</span><span>Refusal to pay taxes</span></li>
        <li><span class="step-num">🌍</span><span>Spread internationally — got global attention</span></li>
      </ul>`,
      related:["ss10q1","ss10q3"] },

    { id:"ss10q3", chapter:"Democracy & Elections",
      q:"What is democracy? What are its types?",
      keywords:["democracy","types democracy","direct indirect","parliamentary democracy"],
      answer:`<p><strong>Democracy</strong> is a system of government where the people hold power, directly or through elected representatives.</p>
      <div class="key-box">💡 Abraham Lincoln defined it as: "Government of the people, by the people, for the people"</div>
      <ul class="answer-steps">
        <li><span class="step-num">1</span><span><strong>Direct Democracy</strong> — people vote directly on every issue. Example: Ancient Athens, Switzerland (referendums)</span></li>
        <li><span class="step-num">2</span><span><strong>Representative/Indirect Democracy</strong> — people elect representatives who make decisions. Example: India, USA, UK</span></li>
      </ul>
      <div class="key-box green">🇮🇳 India is the world's <strong>largest democracy</strong> with over 900 million eligible voters!</div>`,
      related:["ss10q4"] },

    { id:"ss10q4", chapter:"Democracy & Elections",
      q:"What is the Parliament of India? What are its parts?",
      keywords:["parliament","lok sabha","rajya sabha","parliament india","upper lower house"],
      answer:`<p>The <strong>Parliament of India</strong> is the supreme legislative body that makes laws for the country.</p>
      <div class="key-box">🏛️ Parliament has <strong>3 parts</strong>: President + Lok Sabha + Rajya Sabha</div>
      <ul class="answer-steps">
        <li><span class="step-num">🏛️</span><span><strong>Lok Sabha (Lower House)</strong> — 543 elected members, 5-year term, represents the people directly</span></li>
        <li><span class="step-num">🏛️</span><span><strong>Rajya Sabha (Upper House)</strong> — 245 members, represents the states, permanent body</span></li>
        <li><span class="step-num">👤</span><span><strong>President</strong> — head of state, signs bills into law</span></li>
      </ul>
      <div class="key-box green">💡 <strong>Prime Minister</strong> is head of government, leads Lok Sabha majority party</div>`,
      related:["ss10q3"] }
  ]
};

// ════════════════════════════════════════════════════════
// CAREER GUIDANCE DOUBTS
// ════════════════════════════════════════════════════════

const careerDB = [
  { id:"car1", chapter:"After Class 10",
    q:"What are the different streams after Class 10?",
    keywords:["streams after 10","science commerce arts","which stream choose","after 10th"],
    answer:`<p>After Class 10, you can choose from <strong>3 main streams</strong>:</p>
    <ul class="answer-steps">
      <li><span class="step-num">🔬</span><span><strong>Science Stream</strong> — Physics, Chemistry, Biology/Math. Leads to: Doctor, Engineer, Scientist, Pilot, Researcher</span></li>
      <li><span class="step-num">💰</span><span><strong>Commerce Stream</strong> — Accountancy, Business Studies, Economics. Leads to: CA, MBA, Banker, Entrepreneur, Economist</span></li>
      <li><span class="step-num">🎨</span><span><strong>Arts/Humanities Stream</strong> — History, Political Science, Psychology, Sociology. Leads to: Lawyer, Journalist, Teacher, Civil Services (IAS/IPS), Designer</span></li>
    </ul>
    <div class="key-box">💡 Choose based on your <strong>interest and strengths</strong>, not peer pressure! All streams have excellent career options.</div>`,
    related:["car2","car3"] },

  { id:"car2", chapter:"After Class 10",
    q:"What is the difference between PCM and PCB?",
    keywords:["PCM","PCB","physics chemistry math biology","science stream difference"],
    answer:`<div class="key-box">
      🔢 <strong>PCM</strong> = Physics + Chemistry + Mathematics<br/>
      🔬 <strong>PCB</strong> = Physics + Chemistry + Biology<br/>
      📚 <strong>PCMB</strong> = All four subjects (both options kept open)
    </div>
    <ul class="answer-steps">
      <li><span class="step-num">PCM</span><span>For: Engineering (JEE), Architecture, Pilot, Defence, Computer Science</span></li>
      <li><span class="step-num">PCB</span><span>For: Medicine (NEET), Dentistry, Nursing, Pharmacy, Biotechnology</span></li>
      <li><span class="step-num">PCMB</span><span>For: Keep options open, slightly heavier workload</span></li>
    </ul>
    <div class="key-box green">💡 If you love maths → PCM. If you love living organisms → PCB. If you love both → PCMB!</div>`,
    related:["car1","car3"] },

  { id:"car3", chapter:"Competitive Exams",
    q:"What is JEE? How to prepare for it?",
    keywords:["JEE","joint entrance exam","IIT","engineering entrance","JEE preparation"],
    answer:`<p><strong>JEE (Joint Entrance Examination)</strong> is the entrance exam for engineering colleges in India.</p>
    <ul class="answer-steps">
      <li><span class="step-num">📝</span><span><strong>JEE Main</strong> — for admission to NITs, IIITs and other engineering colleges</span></li>
      <li><span class="step-num">🌟</span><span><strong>JEE Advanced</strong> — for admission to <strong>IITs</strong> (Indian Institutes of Technology) — top 2.5 lakh JEE Main qualifiers can appear</span></li>
    </ul>
    <div class="key-box"><strong>Subjects:</strong> Physics, Chemistry, Mathematics (Class 11 & 12 syllabus)</div>
    <p><strong>Preparation tips:</strong></p>
    <ul class="answer-steps">
      <li><span class="step-num">1</span><span>Start early — Class 9-10 build strong foundation in PCM</span></li>
      <li><span class="step-num">2</span><span>Practice NCERT thoroughly first, then reference books</span></li>
      <li><span class="step-num">3</span><span>Solve previous year papers regularly</span></li>
      <li><span class="step-num">4</span><span>Join a coaching institute or use online resources (PW, Unacademy)</span></li>
    </ul>`,
    related:["car4","car2"] },

  { id:"car4", chapter:"Competitive Exams",
    q:"What is NEET? How to prepare for it?",
    keywords:["NEET","medical entrance","MBBS","doctor entrance","NEET preparation"],
    answer:`<p><strong>NEET (National Eligibility cum Entrance Test)</strong> is the entrance exam for medical colleges in India.</p>
    <div class="key-box">🏥 Required for: MBBS, BDS (Dentistry), BAMS (Ayurveda), Nursing and all medical courses</div>
    <ul class="answer-steps">
      <li><span class="step-num">📚</span><span><strong>Subjects:</strong> Physics (45Q), Chemistry (45Q), Biology — Botany + Zoology (90Q)</span></li>
      <li><span class="step-num">🎯</span><span><strong>Total marks:</strong> 720 marks, MCQ format</span></li>
      <li><span class="step-num">⏱️</span><span><strong>Duration:</strong> 3 hours 20 minutes</span></li>
    </ul>
    <p><strong>Preparation tips:</strong></p>
    <ul class="answer-steps">
      <li><span class="step-num">1</span><span>NCERT Biology (Class 11 & 12) is the MOST important — read it thoroughly</span></li>
      <li><span class="step-num">2</span><span>Focus equally on Physics and Chemistry</span></li>
      <li><span class="step-num">3</span><span>Practice 100+ MCQs daily</span></li>
    </ul>`,
    related:["car3","car5"] },

  { id:"car5", chapter:"Competitive Exams",
    q:"What is UPSC? How to become an IAS officer?",
    keywords:["UPSC","IAS","civil services","collector","IPS","IFS","civil servant"],
    answer:`<p><strong>UPSC (Union Public Service Commission)</strong> conducts the Civil Services Examination to select IAS, IPS, IFS and other officers.</p>
    <div class="key-box">🏛️ <strong>IAS</strong> (Indian Administrative Service) = Collector/District Magistrate<br/>👮 <strong>IPS</strong> (Indian Police Service) = SP/Commissioner<br/>🌐 <strong>IFS</strong> (Indian Foreign Service) = Diplomat/Ambassador</div>
    <ul class="answer-steps">
      <li><span class="step-num">1</span><span><strong>Prelims</strong> — 2 papers, objective type (General Studies + CSAT)</span></li>
      <li><span class="step-num">2</span><span><strong>Mains</strong> — 9 papers, written descriptive exam</span></li>
      <li><span class="step-num">3</span><span><strong>Interview</strong> — Personality test (275 marks)</span></li>
    </ul>
    <div class="key-box green">💡 Eligibility: Any graduate, age 21-32 years. Any stream can apply — Arts students often do very well!</div>`,
    related:["car4","car6"] },

  { id:"car6", chapter:"Career Options",
    q:"What careers can I pursue if I like computers and technology?",
    keywords:["computer career","software engineer","IT career","coding","computer science jobs"],
    answer:`<p>Technology is one of the fastest growing fields with excellent career opportunities!</p>
    <ul class="answer-steps">
      <li><span class="step-num">💻</span><span><strong>Software Engineer</strong> — builds apps, websites, software. Avg salary: ₹6-30 LPA</span></li>
      <li><span class="step-num">🤖</span><span><strong>AI/ML Engineer</strong> — builds artificial intelligence systems</span></li>
      <li><span class="step-num">🔐</span><span><strong>Cybersecurity Expert</strong> — protects systems from hackers</span></li>
      <li><span class="step-num">📊</span><span><strong>Data Scientist</strong> — analyses large amounts of data</span></li>
      <li><span class="step-num">☁️</span><span><strong>Cloud Engineer</strong> — manages cloud infrastructure (AWS, Google Cloud)</span></li>
      <li><span class="step-num">🎮</span><span><strong>Game Developer</strong> — creates video games</span></li>
    </ul>
    <div class="key-box">📚 Path: Class 11-12 PCM → B.Tech/BCA/BSc CS → Get internships → Build projects → Job!</div>`,
    related:["car7"] },

  { id:"car7", chapter:"Career Options",
    q:"What careers can I pursue if I like art and creativity?",
    keywords:["creative career","art career","design","fashion","film","creative jobs"],
    answer:`<p>Creative careers are highly rewarding and in growing demand!</p>
    <ul class="answer-steps">
      <li><span class="step-num">🎨</span><span><strong>Graphic Designer</strong> — creates visual content for brands and media</span></li>
      <li><span class="step-num">🏗️</span><span><strong>Architect</strong> — designs buildings and spaces</span></li>
      <li><span class="step-num">👗</span><span><strong>Fashion Designer</strong> — designs clothing and accessories</span></li>
      <li><span class="step-num">🎬</span><span><strong>Film Director/Editor</strong> — creates movies and videos</span></li>
      <li><span class="step-num">📸</span><span><strong>Photographer/Videographer</strong> — captures professional images and videos</span></li>
      <li><span class="step-num">🎭</span><span><strong>Actor/Performer</strong> — theatre, TV, films</span></li>
      <li><span class="step-num">📝</span><span><strong>Content Creator/Writer</strong> — blogs, YouTube, journalism</span></li>
    </ul>`,
    related:["car6","car8"] },

  { id:"car8", chapter:"Study Skills",
    q:"How can I improve my concentration while studying?",
    keywords:["concentration","focus studying","improve focus","study tips","distraction"],
    answer:`<p>Here are proven techniques to improve your focus while studying:</p>
    <ul class="answer-steps">
      <li><span class="step-num">📱</span><span><strong>Remove distractions</strong> — keep phone in another room or use app blockers</span></li>
      <li><span class="step-num">🍅</span><span><strong>Pomodoro Technique</strong> — study 25 minutes → 5 minute break → repeat. After 4 rounds, take 30 min break</span></li>
      <li><span class="step-num">🌿</span><span><strong>Study environment</strong> — clean, quiet, well-lit space. Same spot every day builds habit</span></li>
      <li><span class="step-num">💧</span><span><strong>Stay hydrated</strong> — drink water regularly. Dehydration reduces brain function by 10%</span></li>
      <li><span class="step-num">😴</span><span><strong>Sleep well</strong> — 8 hours for students. Sleep consolidates memory!</span></li>
      <li><span class="step-num">🏃</span><span><strong>Exercise daily</strong> — even 20 minutes of walking increases concentration significantly</span></li>
    </ul>`,
    related:["car9","car10"] },

  { id:"car9", chapter:"Study Skills",
    q:"What is the best way to prepare for board exams?",
    keywords:["board exam preparation","class 10 board","class 12 board","exam tips","score marks"],
    answer:`<p>Here's a complete strategy for board exam success:</p>
    <ul class="answer-steps">
      <li><span class="step-num">📅</span><span><strong>Start 3 months early</strong> — make a timetable covering all subjects</span></li>
      <li><span class="step-num">📖</span><span><strong>NCERT first</strong> — 80% of board questions come directly from NCERT. Master it completely</span></li>
      <li><span class="step-num">📝</span><span><strong>Write practice answers</strong> — don't just read, write. Board exams are written!</span></li>
      <li><span class="step-num">📋</span><span><strong>Previous year papers</strong> — solve last 5-10 years papers. Patterns repeat!</span></li>
      <li><span class="step-num">🗺️</span><span><strong>Mind maps</strong> — create visual summaries of chapters for quick revision</span></li>
      <li><span class="step-num">🔁</span><span><strong>Revise 3 times</strong> — first reading, second revision, third day-before-exam glance</span></li>
    </ul>
    <div class="key-box green">💡 Day before exam: Light revision only, early dinner, 8 hours sleep. NO new topics!</div>`,
    related:["car8","car10"] },

  { id:"car10", chapter:"Study Skills",
    q:"How to manage stress and anxiety during exams?",
    keywords:["exam stress","anxiety exams","stress management","exam fear","nervousness"],
    answer:`<p>Exam stress is normal — but here's how to manage it:</p>
    <ul class="answer-steps">
      <li><span class="step-num">🧘</span><span><strong>Deep breathing</strong> — breathe in for 4 counts, hold 4, breathe out 4. Do this 5 times when anxious</span></li>
      <li><span class="step-num">💭</span><span><strong>Positive self-talk</strong> — "I have prepared well. I can do this." Replace negative thoughts</span></li>
      <li><span class="step-num">🎯</span><span><strong>Focus on preparation not results</strong> — control what you can control</span></li>
      <li><span class="step-num">🛌</span><span><strong>Don't sacrifice sleep</strong> — sleep deprivation worsens anxiety and reduces performance</span></li>
      <li><span class="step-num">🗣️</span><span><strong>Talk to someone</strong> — share your feelings with parents, teachers or friends</span></li>
      <li><span class="step-num">🏃</span><span><strong>Exercise</strong> — releases endorphins that naturally reduce stress</span></li>
    </ul>
    <div class="key-box">💡 Remember: Exams test what you know, not your worth as a person. Your health is more important than marks!</div>`,
    related:["car8","car9"] }
];
