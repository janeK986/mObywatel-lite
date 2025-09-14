// assets/load-data.js
import { userData, userProfiles, currentProfile } from './user-data.js';

// Funkcja do załadowania danych
function loadUserData() {
    // Wybierz dane - domyślne lub z profilu
    const data = userProfiles[currentProfile] || userData;
    
    // Wypełnij podstawowe dane
    updateElement('name', data.name);
    updateElement('surname', data.surname);
    updateElement('nationality', data.nationality);
    updateElement('birthday', data.birthday);
    updateElement('pesel', data.pesel);
    
    // Wypełnij dane dowodu
    updateElement('seriesAndNumber', data.seriesAndNumber);
    updateElement('expiryDate', data.expiryDate);
    updateElement('givenDate', data.givenDate);
    
    // Wypełnij dane rodziców
    updateElement('fathersName', data.fathersName);
    updateElement('mothersName', data.mothersName);
    
    // Wypełnij dodatkowe dane
    updateElement('familyName', data.familyName);
    updateElement('sex', data.sex === 'M' ? 'Mężczyzna' : 'Kobieta');
    updateElement('fathersFamilyName', data.fathersFamilyName);
    updateElement('mothersFamilyName', data.mothersFamilyName);
    updateElement('birthPlace', data.birthPlace);
    updateElement('countryOfBirth', data.countryOfBirth);
    updateElement('adress', data.adress);
    
    // Data zameldowania
    updateElements('home_date', data.homeDate);
    
    // Aktualizuj czas i datę ostatniej aktualizacji
    updateDateTime();
    
    console.log(`✅ Załadowano dane dla profilu: ${currentProfile}`);
}

// Pomocnicza funkcja do aktualizacji elementu
function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value || '';
    } else {
        console.warn(`Element o ID "${id}" nie został znaleziony`);
    }
}

// Pomocnicza funkcja do aktualizacji elementów po klasie
function updateElements(className, value) {
    const elements = document.getElementsByClassName(className);
    for (let element of elements) {
        element.textContent = value || '';
    }
}

// Aktualizuj czas i datę
function updateDateTime() {
    const now = new Date();
    
    // Aktualizuj czas
    const timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('pl-PL', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
    
    // Aktualizuj datę (ukrytą)
    const dateElement = document.getElementById('date');
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('pl-PL');
    }
    
    // Aktualizuj datę ostatniej aktualizacji
    const updateElement = document.querySelector('.bottom_update_value');
    if (updateElement) {
        updateElement.textContent = now.toLocaleDateString('pl-PL') + ' ' + 
                                   now.toLocaleTimeString('pl-PL');
    }
}

// Funkcja do przełączania profili
window.switchProfile = function(profileName) {
    if (userProfiles[profileName]) {
        // Można dynamicznie zmieniać profil
        console.log(`Przełączam na profil: ${profileName}`);
        // Tu można dodać logikę zmiany profilu
    }
};

// Załaduj dane po załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
    
    // Aktualizuj czas co minutę
    setInterval(updateDateTime, 60000);
});

// Przycisk "Aktualizuj" - przeładowuje dane
document.addEventListener('DOMContentLoaded', function() {
    const updateButton = document.querySelector('.update');
    if (updateButton) {
        updateButton.addEventListener('click', function() {
            loadUserData();
            alert('Dane zostały zaktualizowane!');
        });
    }
});

// Funkcja do debugowania - pokaż wszystkie dostępne profile
window.showProfiles = function() {
    console.log('Dostępne profile:', Object.keys(userProfiles));
    console.log('Aktualny profil:', currentProfile);
    console.log('Dane aktualnego profilu:', userProfiles[currentProfile] || userData);
};

// Eksportuj funkcje do użycia w innych plikach
export { loadUserData, updateElement, updateDateTime };