// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "What is the chemical symbol for water?",
    answer: "H2O",
    options: [
      "O2",
      "H2O",
      "CO2",
      "NaCl"
    ]
  },
  {
    numb: 2,
    question: "What is the main gas found in the air we breathe?",
    answer: "Nitrogen",
    options: [
      "Nitrogen",
      "Oxygen",
      "Carbon dioxide",
      "Helium"
    ]
  },
  {
    numb: 3,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    options: [
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn"
    ]
  },
  {
    numb: 4,
    question: "What vitamin is produced when a person is exposed to sunlight?",
    answer: "Vitamin D",
    options: [
      "Vitamin A",
      "Vitamin B",
      "Vitamin C",
      "Vitamin D"
    ]
  },
  {
    numb: 5,
    question: "What is the boiling point of water in Celsius?",
    answer: "100°C",
    options: [
      "50°C",
      "75°C",
      "100°C",
      "150°C"
    ]
  },
  {
    numb: 6,
    question: "What part of the plant conducts photosynthesis?",
    answer: "Leaf",
    options: [
      "Root",
      "Leaf",
      "Stem",
      "Flower"
    ]
  },
  {
    numb: 7,
    question: "What is the hardest natural substance on Earth?",
    answer: "Diamond",
    options: [
      "Gold",
      "Silver",
      "Iron",
      "Diamond"
    ]
  },
  {
    numb: 8,
    question: "Which gas is essential for human respiration?",
    answer: "Oxygen",
    options: [
      "Nitrogen",
      "Oxygen",
      "Carbon monoxide",
      "Hydrogen"
    ]
  },
  {
    numb: 9,
    question: "What is the process by which plants make their own food?",
    answer: "Photosynthesis",
    options: [
      "Respiration",
      "Digestion",
      "Photosynthesis",
      "Fermentation"
    ]
  },
  {
    numb: 10,
    question: "What force pulls objects toward the center of the Earth?",
    answer: "Gravity",
    options: [
      "Magnetism",
      "Gravity",
      "Electricity",
      "Friction"
    ]
  },
  {
    numb: 11,
    question: "Which element is the most abundant in the Earth's crust?",
    answer: "Oxygen",
    options: [
      "Carbon",
      "Oxygen",
      "Hydrogen",
      "Iron"
    ]
  },
  {
    numb: 12,
    question: "What is the main organ involved in pumping blood throughout the human body?",
    answer: "Heart",
    options: [
      "Heart",
      "Brain",
      "Lungs",
      "Kidney"
    ]
  },
  {
    numb: 13,
    question: "What is the largest planet in our Solar System?",
    answer: "Jupiter",
    options: [
      "Earth",
      "Venus",
      "Jupiter",
      "Neptune"
    ]
  },
  {
    numb: 14,
    question: "What part of the cell contains the genetic material?",
    answer: "Nucleus",
    options: [
      "Cytoplasm",
      "Mitochondria",
      "Cell membrane",
      "Nucleus"
    ]
  },
  {
    numb: 15,
    question: "What is the chemical symbol for table salt?",
    answer: "NaCl",
    options: [
      "NaCl",
      "KCl",
      "NaCO3",
      "MgCl2"
    ]
  },
  {
    numb: 16,
    question: "What is the name of the galaxy that contains our Solar System?",
    answer: "Milky Way",
    options: [
      "Andromeda",
      "Triangulum",
      "Milky Way",
      "Whirlpool"
    ]
  },
  {
    numb: 17,
    question: "Which part of the human body is primarily responsible for detoxifying chemicals?",
    answer: "Liver",
    options: [
      "Heart",
      "Liver",
      "Kidneys",
      "Lungs"
    ]
  },
  {
    numb: 18,
    question: "What is the most common type of star in the universe?",
    answer: "Red dwarf%",
    options: [
      "Red supergiant%",
      "Red dwarf%",
      "Blue giant%",
      "Neutron star%"
    ]
  },
  {
    numb: 19,
    question: "Which organ in the human body is responsible for oxygen exchange?",
    answer: "Lungs",
    options: [
      "Lungs",
      "Heart",
      "Brain",
      "Stomach"
    ]
  },
  {
    numb: 20,
    question: "Which type of energy is stored in a battery?",
    answer: "Chemical",
    options: [
      "Kinetic",
      "Thermal",
      "Chemical",
      "Nuclear"
    ]
  },
  {
    numb: 21,
    question: "What is the smallest unit of life?",
    answer: "Cell",
    options: [
      "Molecule",
      "Cell",
      "Atom",
      "Tissue"
    ]
  },
  {
    numb: 22,
    question: "What is the primary function of red blood cells?",
    answer: "Carry oxygen",
    options: [
      "Fight infection",
      "Carry nutrients",
      "Carry oxygen",
      "Remove waste"
    ]
  },
  {
    numb: 23,
    question: "What substance makes up the majority of the Earth's atmosphere?",
    answer: "Nitrogen",
    options: [
      "Nitrogen",
      "Oxygen",
      "Carbon dioxide",
      "Argon"
    ]
  },
  {
    numb: 24,
    question: "What is the powerhouse of the cell?",
    answer: "Mitochondria",
    options: [
      "Nucleus",
      "Ribosome",
      "Mitochondria",
      "Golgi apparatus"
    ]
  },
  {
    numb: 25,
    question: "What is the freezing point of water in Fahrenheit?",
    answer: "32°F",
    options: [
      "0°F",
      "32°F",
      "100°F",
      "212°F"
    ]
  },
  {
    numb: 26,
    question: "What is the term for an animal that eats only plants?",
    answer: "Herbivore",
    options: [
      "Carnivore",
      "Herbivore",
      "Omnivore",
      "Insectivore"
    ]
  },
  {
    numb: 27,
    question: "Which of the following is a renewable source of energy?",
    answer: "Solar energy",
    options: [
      "Natural gas",
      "Coal",
      "Natural gas",
      "Nuclear energy"
    ]
  },
  {
    numb: 28,
    question: "What is the term for water vapor turning into liquid water?",
    answer: "Rami",
    options: [
      "Tawaf",
      "Evaporation",
      "Sa'i",
      "Tahajjud"
    ]
  },
  {
    numb: 29,
    question: "What is the term for water vapor turning into liquid water?",
    answer: "It is the day of standing in prayer at the plain of Arafah",
    options: [
      "O2",
      "Oz",
      "on",
      "ox"
    ]
  },
  {
    numb: 30,
    question: "What causes tides in the Earth's oceans?",
    answer: "Moon's gravitational pull",
    options: [
      "Sun's heat",
      "Wind",
      "Earth's rotation",
      "Moon's gravitational pull"
    ]
  },
];
