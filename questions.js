// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "What is the main purpose of fasting in Islam?",
    answer: "To cleanse the soul and practice self-discipline",
    options: [
      "To lose weight",
      "To empathize with the poor and hungry",
      "To cleanse the soul and practice self-discipline",
      "To save money on food"
    ]
  },
  {
    numb: 2,
    question: "During which month do Muslims fast from dawn to sunset?",
    answer: "Ramadan",
    options: [
      "Muharram",
      "Ramadan",
      "Shawwal",
      "Dhul-Hijjah"
    ]
  },
  {
    numb: 3,
    question: "What is the pre-dawn meal before fasting called?",
    answer: "Suhoor",
    options: [
      "Iftar",
      "Suhoor",
      "Fajr",
      "Sehri"
    ]
  },
  {
    numb: 4,
    question: "What is the meal called that breaks the fast at sunset?",
    answer: "Iftar",
    options: [
      "Fajr",
      "Suhoor",
      "Iftar",
      "Zakat"
    ]
  },
  {
    numb: 5,
    question: "Which of the following invalidates a fast?",
    answer: "Eating or drinking intentionally",
    options: [
      "Eating or drinking intentionally",
      "Forgetfully eating",
      "Sleeping during the day",
      "Taking a shower"
    ]
  },
  {
    numb: 6,
    question: "What is the special prayer performed during the nights of Ramadan called?",
    answer: "Taraweeh",
    options: [
      "Fajr",
      "Taraweeh",
      "Eid Salah",
      "Tahajjud"
    ]
  },
  {
    numb: 7,
    question: "Fasting during Ramadan becomes obligatory at what age in Islam?",
    answer: "At puberty",
    options: [
      "At birth",
      "Age 7",
      "Age 10",
      "At puberty"
    ]
  },
  {
    numb: 8,
    question: "Who are exempted from fasting in Ramadan?",
    answer: "A.O.T",
    options: [
      "Children and the elderly",
      "Travelers and pregnant women",
      "Sick individuals and nursing mothers",
      "A.O.T"
    ]
  },
  {
    numb: 9,
    question: "How many obligatory prayers are there in a day for a Muslim?",
    answer: "5",
    options: [
      "2",
      "3",
      "5",
      "6"
    ]
  },
  {
    numb: 10,
    question: "What is the Arabic term for the Friday congregational prayer?",
    answer: "Jumu'ah",
    options: [
      "Fajr",
      "Dhuhr",
      "Jumu'ah",
      "Maghrib"
    ]
  },
  {
    numb: 11,
    question: "Which of the following prayers is performed at dawn?",
    answer: "Fajr",
    options: [
      "Fajr",
      "Dhuhr",
      "Asr",
      "Isha"
    ]
  },
  {
    numb: 12,
    question: "What is the term for the direction Muslims face during prayer?",
    answer: "Qibla",
    options: [
      "Minbar",
      "Kaaba",
      "Qibla",
      "Mihrab"
    ]
  },
  {
    numb: 13,
    question: "How many Rak'ahs (units) are there in the Fajr prayer?",
    answer: "4",
    options: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    numb: 14,
    question: "What is the prayer performed at night, which is not obligatory, called?",
    answer: "Tahajjud",
    options: [
      "Taraweeh",
      "Tahajjud",
      "Maghrib",
      "Jumu'ah"
    ]
  },
  {
    numb: 15,
    question: "Which prayer is performed right after sunset?",
    answer: "Maghrib",
    options: [
      "Fajr",
      "Dhuhr",
      "Maghrib",
      "Isha"
    ]
  },
  {
    numb: 16,
    question: "Which Surah is recited in every unit of the prayer?",
    answer: "Surah Al-Fatiha",
    options: [
      "Surah Al-Baqarah",
      "Surah Al-Fil",
      "Surah Al-Fatiha",
      "Surah Al-Nas"
    ]
  },
  {
    numb: 17,
    question: "What is the literal meaning of Zakat?",
    answer: "Purification",
    options: [
      "Prayer",
      "Purification",
      "Fasting",
      "Pilgrimage"
    ]
  },
  {
    numb: 18,
    question: "What percentage of one's savings is typically given as Zakat?",
    answer: "2.5%",
    options: [
      "1%",
      "2.5%",
      "5%",
      "10%"
    ]
  },
  {
    numb: 19,
    question: "Who are the primary recipients of Zakat?",
    answer: "Orphans and the poor",
    options: [
      "The wealthy",
      "Travelers",
      "Orphans and the poor",
      "The government"
    ]
  },
  {
    numb: 20,
    question: "What is the minimum amount of wealth one must have before they are required to pay Zakat?",
    answer: "Nisab",
    options: [
      "Nisab",
      "Sadaqah",
      "Fitrah",
      "Tawaf"
    ]
  },
  {
    numb: 21,
    question: "Zakat is obligatory on which types of wealth?",
    answer: "A.O.T",
    options: [
      "Gold and silver",
      "Livestock",
      "Agricultural produce",
      "A.O.T"
    ]
  },
  {
    numb: 22,
    question: "When is Zakat al-Fitr given?",
    answer: "At the end of Ramadan",
    options: [
      "During Hajj",
      "At the end of Ramadan",
      "During Eid al-Adha",
      "At the beginning of Ramadan"
    ]
  },
  {
    numb: 23,
    question: "What is the difference between Zakat and Sadaqah?",
    answer: "Zakat is obligatory, while Sadaqah is voluntary",
    options: [
      "Zakat is obligatory, while Sadaqah is voluntary",
      "Zakat is only for the poor, while Sadaqah is for everyone",
      "Sadaqah is obligatory, while Zakat is voluntary",
      "Both are obligatory"
    ]
  },
  {
    numb: 24,
    question: "How often is a Muslim required to perform Hajj if they are able?",
    answer: "Once in a lifetime",
    options: [
      "Once a year",
      "Once in a lifetime",
      "Every five years",
      "Every ten years"
    ]
  },
  {
    numb: 25,
    question: "In which Islamic month does Hajj take place?",
    answer: "Dhul-Hijjah",
    options: [
      "Muharram",
      "Ramadan",
      "Shawwal",
      "Dhul-Hijjah"
    ]
  },
  {
    numb: 26,
    question: "What is the name of the ritual of walking between the hills of Safa and Marwah?",
    answer: "Sa'i",
    options: [
      "Tawaf",
      "Sa'i",
      "Rami",
      "Eid"
    ]
  },
  {
    numb: 27,
    question: "What is the first step in the Hajj pilgrimage?",
    answer: "Ihram",
    options: [
      "Tawaf",
      "Ihram",
      "Sa'i",
      "Rami"
    ]
  },
  {
    numb: 28,
    question: "What is the act of throwing stones at the pillars in Mina during Hajj called?",
    answer: "Rami",
    options: [
      "Tawaf",
      "Rami",
      "Sa'i",
      "Tahajjud"
    ]
  },
  {
    numb: 29,
    question: "What is the significance of the Day of Arafah during Hajj?",
    answer: "It is the day of standing in prayer at the plain of Arafah",
    options: [
      "It is the day for Eid al-Fitr",
      "It is the day when the Quran was revealed",
      "It is the day of standing in prayer at the plain of Arafah",
      "It marks the end of Hajj"
    ]
  },
  {
    numb: 30,
    question: "What is the name of the final rite of Hajj where pilgrims shave their heads or cut a portion of their hair?",
    answer: "Halq or Taqsir",
    options: [
      "Tawaf",
      "Sa'i",
      "Rami",
      "Halq or Taqsir"
    ]
  },
];
