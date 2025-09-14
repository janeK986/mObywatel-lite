// assets/profile-loader.js

// Sprawdź czy użytkownik ma zapisany profil
function loadUserProfile() {
  const userKey = localStorage.getItem('userKey');
  const discordId = localStorage.getItem('discord_id');
  
  if (!discordId && !userKey) {
    console.log('❌ Brak danych logowania');
    return;
  }

  // Symulacja pobierania profilu z bazy (tu można dodać prawdziwe API)
  fetchUserProfile(discordId);
}

// Symulacja pobierania profilu użytkownika z bazy
async function fetchUserProfile(discordId) {
  try {
    // Tu będzie prawdziwe API call do bazy Supabase
    // Na razie używamy localStorage jako fallback
    
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      loadProfileToPage(profile);
      return;
    }

    console.log('🔍 Brak profilu w localStorage');
    
  } catch (error) {
    console.error('❌ Błąd pobierania profilu:', error);
  }
}

// Załaduj profil na stronę
function loadProfileToPage(profile) {
  console.log('📄 Ładuję profil:', profile);

  // Podstawowe dane
  updateElement('name', profile.name?.toUpperCase());
  updateElement('surname', profile.surname?.toUpperCase());
  updateElement('nationality', profile.nationality?.toUpperCase());
  
  // Data urodzenia
  if (profile.birthday) {
    const birthdaySplit = profile.birthday.split(".");
    const day = parseInt(birthdaySplit[0]);
    const month = parseInt(birthdaySplit[1]);
    const year = parseInt(birthdaySplit[2]);
    const birthdayDate = new Date(year, month - 1, day);
    const options = { year: 'numeric', month: 'numeric', day: '2-digit' };
    const birthdayFormatted = birthdayDate.toLocaleDateString("pl-PL", options);
    updateElement('birthday', birthdayFormatted);
  }

  // Dane dowodu
  updateElement('seriesAndNumber', profile.series_and_number);
  updateElement('expiryDate', profile.expiry_date);
  updateElement('givenDate', profile.given_date);
  updateElement('pesel', profile.pesel);

  // Rodzice
  updateElement('fathersName', profile.fathers_name);
  updateElement('mothersName', profile.mothers_name);

  // Dodatkowe dane
  updateElement('familyName', profile.family_name);
  updateElement('sex', profile.sex === 'M' ? 'Mężczyzna' : 'Kobieta');
  updateElement('fathersFamilyName', profile.fathers_family_name);
  updateElement('mothersFamilyName', profile.mothers_family_name);
  updateElement('birthPlace', profile.birth_place);
  updateElement('countryOfBirth', profile.country_of_birth);
  updateElement('adress', profile.address);

  // Zdjęcie
  if (profile.image_url) {
    const imageElement = document.querySelector('.id_own_image');
    if (imageElement) {
      imageElement.style.backgroundImage = `url(${profile.image_url})`;
      imageElement.style.backgroundSize = 'cover';
      imageElement.style.backgroundPosition = 'center';
    }
  }

  // Zapisz do IndexedDB dla kompatybilności z istniejącym kodem
  const indexedDBData = {
    id: 1,
    name: profile.name,
    surname: profile.surname,
    nationality: profile.nationality,
    birthDate: profile.birthday, // Uwaga: card.js używa birthDate
    familyName: profile.family_name,
    sex: profile.sex === 'M' ? 'Mężczyzna' : 'Kobieta',
    fathersFamilyName: profile.fathers_family_name,
    mothersFamilyName: profile.mothers_family_name,
    birthPlace: profile.birth_place,
    countryOfBirth: profile.country_of_birth,
    adress1: profile.address.split(',')[0] || profile.address,
    adress2: profile.address.split(',')[1] || '',
    city: profile.address.split(',')[2] || profile.birth_place,
    mothersName: profile.mothers_name,
    fathersName: profile.fathers_name,
    givenDate: profile.given_date,
    expiryDate: profile.expiry_date,
    seriesAndNumber: profile.series_and_number,
    image: profile.image_url
  };

  if (typeof saveToIndexedDB === 'function') {
    saveToIndexedDB(indexedDBData);
  }

  console.log('✅ Profil załadowany pomyślnie!');
}

// Pomocnicza funkcja
function updateElement(id, value) {
  const element = document.getElementById(id);
  if (element && value) {
    element.textContent = value;
  }
}

// Test profile dla debugowania
window.testProfile = function() {
  const testProfile = {
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
        familyName: 'Pawlata',
        sex: 'M',
        fathersFamilyName: 'Pawlata',
        mothersFamilyName: 'Ledzion',
        birthPlace: 'Łowicz',
        countryOfBirth: 'Polska',
        adress: 'ul. Ikara 2 , 99-400 Łowicz',
        homeDate: '01.01.2010',
        image_url: 'https://i.imgur.com/placeholder1.jpg'
  };
  
  localStorage.setItem('userProfile', JSON.stringify(testProfile));
  loadProfileToPage(testProfile);
};

// Uruchom przy ładowaniu strony
document.addEventListener('DOMContentLoaded', loadUserProfile);
