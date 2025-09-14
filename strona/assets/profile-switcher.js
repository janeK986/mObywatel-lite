// assets/profile-switcher.js
import { userProfiles } from './user-data.js';
import { loadUserData } from './load-data.js';

// Dodaj przycisk do przełączania profili
function createProfileSwitcher() {
    const switcher = document.createElement('div');
    switcher.style.cssText = `
        position: fixed;
        top: 50px;
        right: 10px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    `;
    
    switcher.innerHTML = `
        <h4>Zmień profil:</h4>
        ${Object.keys(userProfiles).map(profile => 
            `<button onclick="switchToProfile('${profile}')" style="display: block; margin: 5px 0; padding: 5px 10px;">
                ${userProfiles[profile].name} ${userProfiles[profile].surname}
            </button>`
        ).join('')}
        <button onclick="closeSwitcher()" style="background: #f44336; color: white; border: none; padding: 5px 10px;">
            Zamknij
        </button>
    `;
    
    switcher.id = 'profileSwitcher';
    document.body.appendChild(switcher);
}

// Przełącz na profil
window.switchToProfile = function(profileName) {
    // Możesz zmienić aktualny profil dynamicznie
    console.log(`Przełączono na profil: ${profileName}`);
    // Tutaj można dodać logikę zmiany profilu w user-data.js
    // lub załadować dane bezpośrednio
    closeSwitcher();
};

window.closeSwitcher = function() {
    const switcher = document.getElementById('profileSwitcher');
    if (switcher) {
        switcher.remove();
    }
};

// Skrót Ctrl+P do otwierania switcher'a
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        if (!document.getElementById('profileSwitcher')) {
            createProfileSwitcher();
        }
    }
});