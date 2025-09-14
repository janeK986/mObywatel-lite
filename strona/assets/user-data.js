// assets/user-data.js
export const userData = {
    // Podstawowe dane
    name: 'Jan',
    surname: 'Kowalski', 
    nationality: 'polskie',
    birthday: '15.03.1985',
    pesel: '85031512345',
    
    // Dane dowodu
    seriesAndNumber: 'ABC123456',
    expiryDate: '15.03.2030',
    givenDate: '15.03.2020',
    
    // Rodzice
    fathersName: 'Andrzej',
    mothersName: 'Anna',
    fathersFamilyName: 'Kowalski',
    mothersFamilyName: 'Nowak',
    
    // Dodatkowe dane
    familyName: 'Kowalski',
    sex: 'M', // M lub K
    birthPlace: 'Warszawa',
    countryOfBirth: 'Polska',
    adress: 'ul. Przykładowa 123, 00-001 Warszawa',
    
    // Data zameldowania
    homeDate: '01.01.2010'
};

// Możesz też dodać różne profile użytkowników
export const userProfiles = {
    jan: {
        name: 'Jan',
        surname: 'Pawlata',
        nationality: 'polskie',
        birthday: '09.08.2007',
        pesel: '07280902957',
        seriesAndNumber: 'ZZC 216937',
        expiryDate: '15.03.2034',
        givenDate: '15.03.2024',
        fathersName: 'Artur',
        mothersName: 'Renata',
        familyName: 'Kowalski',
        sex: 'M',
        fathersFamilyName: 'Pawlata',
        mothersFamilyName: 'Ledzion',
        birthPlace: 'Łowicz',
        countryOfBirth: 'Polska',
        adress: 'ul. Ikara 2 , 99-400 Łowicz',
        homeDate: '01.01.2010'
    },
    
    anna: {
        name: 'Maja',
        surname: 'Kosiorek',
        nationality: 'polskie', 
        birthday: '22.07.1990',
        pesel: '90072212345',
        seriesAndNumber: 'DEF789012',
        expiryDate: '22.07.2035',
        givenDate: '22.07.2025',
        fathersName: 'Piotr',
        mothersName: 'Maria',
        familyName: 'Nowak',
        sex: 'K',
        fathersFamilyName: 'Nowak',
        mothersFamilyName: 'Wiśniewska',
        birthPlace: 'Kraków',
        countryOfBirth: 'Polska',
        adress: 'ul. Testowa 456, 30-001 Kraków',
        homeDate: '15.05.2015'
    }
},

 filip: {
        name: 'Filip',
        surname: 'Żaczek',
        nationality: 'polskie', 
        birthday: '20.07.2007',
        pesel: '07272002957',
        seriesAndNumber: 'DEF789012',
        expiryDate: '22.07.2035',
        givenDate: '22.07.2025',
        fathersName: 'Mariusz',
        mothersName: 'Magdalena',
        familyName: 'Żaczek',
        sex: 'M',
        fathersFamilyName: 'Żaczek',
        mothersFamilyName: 'Słoma',
        birthPlace: 'Skierniewice',
        countryOfBirth: 'Polska',
        adress: 'ul. Ikara 2, 99-400 Łowicz',
        homeDate: '15.05.2017'
    }
};

// Aktualnie wybrany profil (możesz zmienić)

export const currentProfile = 'jan'; // lub 'anna'
