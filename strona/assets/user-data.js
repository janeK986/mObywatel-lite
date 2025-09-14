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
        surname: 'Kowalski',
        nationality: 'polskie',
        birthday: '15.03.1985',
        pesel: '85031512345',
        seriesAndNumber: 'ABC123456',
        expiryDate: '15.03.2030',
        givenDate: '15.03.2020',
        fathersName: 'Andrzej',
        mothersName: 'Anna',
        familyName: 'Kowalski',
        sex: 'M',
        fathersFamilyName: 'Kowalski',
        mothersFamilyName: 'Nowak',
        birthPlace: 'Warszawa',
        countryOfBirth: 'Polska',
        adress: 'ul. Przykładowa 123, 00-001 Warszawa',
        homeDate: '01.01.2010'
    },
    
    anna: {
        name: 'Anna',
        surname: 'Nowak',
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
};

// Aktualnie wybrany profil (możesz zmienić)
export const currentProfile = 'jan'; // lub 'anna'