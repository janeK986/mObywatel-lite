// assets/form-saver.js
import { supabase } from '/supabase-config.js';

// Pobierz Discord ID z localStorage lub URL
function getDiscordId() {
  return localStorage.getItem('discord_id') || 'anonymous_' + Date.now();
}

// Zapisz dane formularza do Supabase
export async function saveFormDataToSupabase() {
  try {
    console.log('💾 Zapisuję dane formularza...');
    
    const discordId = getDiscordId();
    
    // Zbierz wszystkie dane z formularza
    const formData = {
      discord_id: discordId,
      hwid: discordId, // Użyj discord_id jako hwid
      
      // Dane osobowe
      name: document.getElementById('name').value,
      surname: document.getElementById('surname').value,
      sex: document.querySelector('.selected_text').textContent,
      birth_day: parseInt(document.querySelectorAll('.date_input')[0].value),
      birth_month: parseInt(document.querySelectorAll('.date_input')[1].value),
      birth_year: parseInt(document.querySelectorAll('.date_input')[2].value),
      nationality: document.getElementById('nationality').value,
      family_name: document.getElementById('familyName').value,
      fathers_family_name: document.getElementById('fathersFamilyName').value,
      mothers_family_name: document.getElementById('mothersFamilyName').value,
      
      // Miejsce
      birth_place: document.getElementById('birthPlace').value,
      country_of_birth: document.getElementById('countryOfBirth').value,
      address1: document.getElementById('adress1').value,
      address2: document.getElementById('adress2').value,
      city: document.getElementById('city').value,
      
      // Rodzice
      mothers_name: document.getElementById('mothersName').value,
      fathers_name: document.getElementById('fathersName').value,
      
      // Dane dowodu
      given_date: document.getElementById('givenDate').value,
      expiry_date: document.getElementById('expiryDate').value,
      series_and_number: document.getElementById('seriesAndNumber').value,
      image_url: document.getElementById('image').value,
      
      updated_at: new Date().toISOString()
    };

    // Sprawdź czy użytkownik już ma dane w bazie
    const { data: existingData, error: checkError } = await supabase
      .from('user_form_data')
      .select('*')
      .eq('discord_id', discordId)
      .single();

    if (existingData) {
      // Aktualizuj istniejące dane
      const { error } = await supabase
        .from('user_form_data')
        .update(formData)
        .eq('discord_id', discordId);

      if (error) throw error;
      console.log('✅ Dane zaktualizowane w bazie!');
    } else {
      // Dodaj nowe dane
      const { error } = await supabase
        .from('user_form_data')
        .insert([formData]);

      if (error) throw error;
      console.log('✅ Dane zapisane do bazy!');
    }

    return true;

  } catch (error) {
    console.error('❌ Błąd zapisu do bazy:', error);
    return false;
  }
}

// Załaduj dane z Supabase do formularza
export async function loadFormDataFromSupabase() {
  try {
    console.log('📥 Ładuję dane z bazy...');
    
    const discordId = getDiscordId();
    
    const { data, error } = await supabase
      .from('user_form_data')
      .select('*')
      .eq('discord_id', discordId)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 = nie znaleziono
      throw error;
    }

    if (!data) {
      console.log('ℹ️ Brak zapisanych danych dla tego użytkownika');
      return false;
    }

    // Wypełnij formularz
    fillFormWithData(data);
    console.log('✅ Dane załadowane z bazy!');
    return true;

  } catch (error) {
    console.error('❌ Błąd ładowania z bazy:', error);
    return false;
  }
}

// Wypełnij formularz danymi
function fillFormWithData(data) {
  // Dane osobowe
  if (data.name) document.getElementById('name').value = data.name;
  if (data.surname) document.getElementById('surname').value = data.surname;
  if (data.nationality) document.getElementById('nationality').value = data.nationality;
  if (data.family_name) document.getElementById('familyName').value = data.family_name;
  if (data.fathers_family_name) document.getElementById('fathersFamilyName').value = data.fathers_family_name;
  if (data.mothers_family_name) document.getElementById('mothersFamilyName').value = data.mothers_family_name;

  // Płeć
  if (data.sex) {
    document.querySelector('.selected_text').textContent = data.sex;
  }

  // Data urodzenia
  if (data.birth_day && data.birth_month && data.birth_year) {
    document.querySelectorAll('.date_input')[0].value = data.birth_day;
    document.querySelectorAll('.date_input')[1].value = data.birth_month;
    document.querySelectorAll('.date_input')[2].value = data.birth_year;
  }

  // Miejsce
  if (data.birth_place) document.getElementById('birthPlace').value = data.birth_place;
  if (data.country_of_birth) document.getElementById('countryOfBirth').value = data.country_of_birth;
  if (data.address1) document.getElementById('adress1').value = data.address1;
  if (data.address2) document.getElementById('adress2').value = data.address2;
  if (data.city) document.getElementById('city').value = data.city;

  // Rodzice
  if (data.mothers_name) document.getElementById('mothersName').value = data.mothers_name;
  if (data.fathers_name) document.getElementById('fathersName').value = data.fathers_name;

  // Dane dowodu
  if (data.given_date) document.getElementById('givenDate').value = data.given_date;
  if (data.expiry_date) document.getElementById('expiryDate').value = data.expiry_date;
  if (data.series_and_number) document.getElementById('seriesAndNumber').value = data.series_and_number;
  if (data.image_url) document.getElementById('image').value = data.image_url;

  // Aktualizuj placeholder'y
  updatePlaceholders();
}

// Aktualizuj placeholder'y (przenieś tekst w górę jeśli pole ma wartość)
function updatePlaceholders() {
  document.querySelectorAll('.input').forEach(input => {
    const placeholder = input.nextElementSibling;
    if (input.value && placeholder && placeholder.classList.contains('placeholder')) {
      placeholder.classList.add('active');
    }
  });
}

// Wyczyść dane z bazy
export async function clearFormDataFromSupabase() {
  try {
    const discordId = getDiscordId();
    
    const { error } = await supabase
      .from('user_form_data')
      .delete()
      .eq('discord_id', discordId);

    if (error) throw error;
    
    console.log('✅ Dane wyczyszczone z bazy!');
    return true;
  } catch (error) {
    console.error('❌ Błąd czyszczenia bazy:', error);
    return false;
  }
}

// Funkcje globalne
window.saveFormDataToSupabase = saveFormDataToSupabase;
window.loadFormDataFromSupabase = loadFormDataFromSupabase;
window.clearFormDataFromSupabase = clearFormDataFromSupabase;
