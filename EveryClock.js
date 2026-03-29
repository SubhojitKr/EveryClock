document.addEventListener('DOMContentLoaded', function() {

    const timezones = {
        "Africa": [
            { city: "Algiers", country: "Algeria", timezone: "Africa/Algiers" }, { city: "Luanda", country: "Angola", timezone: "Africa/Luanda" },
            { city: "Porto-Novo", country: "Benin", timezone: "Africa/Porto-Novo" }, { city: "Gaborone", country: "Botswana", timezone: "Africa/Gaborone" },
            { city: "Ouagadougou", country: "Burkina Faso", timezone: "Africa/Ouagadougou" }, { city: "Bujumbura", country: "Burundi", timezone: "Africa/Bujumbura" },
            { city: "Praia", country: "Cabo Verde", timezone: "Atlantic/Cape_Verde" }, { city: "Yaounde", country: "Cameroon", timezone: "Africa/Douala" },
            { city: "Bangui", country: "Central African Republic", timezone: "Africa/Bangui" }, { city: "N'Djamena", country: "Chad", timezone: "Africa/Ndjamena" },
            { city: "Moroni", country: "Comoros", timezone: "Indian/Comoro" }, { city: "Brazzaville", country: "Congo", timezone: "Africa/Brazzaville" },
            { city: "Kinshasa", country: "DR Congo", timezone: "Africa/Kinshasa" }, { city: "Yamoussoukro", country: "Côte d'Ivoire", timezone: "Africa/Abidjan" },
            { city: "Djibouti", country: "Djibouti", timezone: "Africa/Djibouti" }, { city: "Cairo", country: "Egypt", timezone: "Africa/Cairo" },
            { city: "Malabo", country: "Equatorial Guinea", timezone: "Africa/Malabo" }, { city: "Asmara", country: "Eritrea", timezone: "Africa/Asmara" },
            { city: "Mbabane", country: "Eswatini", timezone: "Africa/Mbabane" }, { city: "Addis Ababa", country: "Ethiopia", timezone: "Africa/Addis_Ababa" },
            { city: "Libreville", country: "Gabon", timezone: "Africa/Libreville" }, { city: "Banjul", country: "Gambia", timezone: "Africa/Banjul" },
            { city: "Accra", country: "Ghana", timezone: "Africa/Accra" }, { city: "Conakry", country: "Guinea", timezone: "Africa/Conakry" },
            { city: "Bissau", country: "Guinea-Bissau", timezone: "Africa/Bissau" }, { city: "Nairobi", country: "Kenya", timezone: "Africa/Nairobi" },
            { city: "Maseru", country: "Lesotho", timezone: "Africa/Maseru" }, { city: "Monrovia", country: "Liberia", timezone: "Africa/Monrovia" },
            { city: "Tripoli", country: "Libya", timezone: "Africa/Tripoli" }, { city: "Antananarivo", country: "Madagascar", timezone: "Indian/Antananarivo" },
            { city: "Lilongwe", country: "Malawi", timezone: "Africa/Blantyre" }, { city: "Bamako", country: "Mali", timezone: "Africa/Bamako" },
            { city: "Nouakchott", country: "Mauritania", timezone: "Africa/Nouakchott" }, { city: "Port Louis", country: "Mauritius", timezone: "Indian/Mauritius" },
            { city: "Rabat", country: "Morocco", timezone: "Africa/Casablanca" }, { city: "Maputo", country: "Mozambique", timezone: "Africa/Maputo" },
            { city: "Windhoek", country: "Namibia", timezone: "Africa/Windhoek" }, { city: "Niamey", country: "Niger", timezone: "Africa/Niamey" },
            { city: "Abuja", country: "Nigeria", timezone: "Africa/Lagos" }, { city: "Kigali", country: "Rwanda", timezone: "Africa/Kigali" },
            { city: "Sao Tome", country: "Sao Tome & Principe", timezone: "Africa/Sao_Tome" }, { city: "Dakar", country: "Senegal", timezone: "Africa/Dakar" },
            { city: "Victoria", country: "Seychelles", timezone: "Indian/Mahe" }, { city: "Freetown", country: "Sierra Leone", timezone: "Africa/Freetown" },
            { city: "Mogadishu", country: "Somalia", timezone: "Africa/Mogadishu" }, { city: "Pretoria", country: "South Africa", timezone: "Africa/Johannesburg" },
            { city: "Juba", country: "South Sudan", timezone: "Africa/Juba" }, { city: "Khartoum", country: "Sudan", timezone: "Africa/Khartoum" },
            { city: "Dodoma", country: "Tanzania", timezone: "Africa/Dar_es_Salaam" }, { city: "Lome", country: "Togo", timezone: "Africa/Lome" },
            { city: "Tunis", country: "Tunisia", timezone: "Africa/Tunis" }, { city: "Kampala", country: "Uganda", timezone: "Africa/Kampala" },
            { city: "Lusaka", country: "Zambia", timezone: "Africa/Lusaka" }, { city: "Harare", country: "Zimbabwe", timezone: "Africa/Harare" }
        ],
        "Antarctica": [
            { city: "Casey Station", country: "Casey (Australia)", timezone: "Antarctica/Casey" },
            { city: "Davis Station", country: "Davis (Australia)", timezone: "Antarctica/Davis" },
            { city: "Mawson Station", country: "Mawson (Australia)", timezone: "Antarctica/Mawson" },
            { city: "McMurdo Station", country: "McMurdo (NZ)", timezone: "Antarctica/McMurdo" },
            { city: "Palmer Station", country: "Palmer (Chile)", timezone: "Antarctica/Palmer" },
            { city: "Rothera Station", country: "Rothera (UK)", timezone: "Antarctica/Rothera" },
            { city: "Syowa Station", country: "Syowa (Japan)", timezone: "Antarctica/Syowa" },
            { city: "Troll Station", country: "Troll (Norway)", timezone: "Antarctica/Troll" },
            { city: "Vostok Station", country: "Vostok (Russia)", timezone: "Antarctica/Vostok" }
        ],
        "Asia": [
            { city: "Kabul", country: "Afghanistan", timezone: "Asia/Kabul" }, { city: "Yerevan", country: "Armenia", timezone: "Asia/Yerevan" },
            { city: "Baku", country: "Azerbaijan", timezone: "Asia/Baku" }, { city: "Manama", country: "Bahrain", timezone: "Asia/Bahrain" },
            { city: "Dhaka", country: "Bangladesh", timezone: "Asia/Dhaka" }, { city: "Thimphu", country: "Bhutan", timezone: "Asia/Thimphu" },
            { city: "Bandar Seri Begawan", country: "Brunei", timezone: "Asia/Brunei" }, { city: "Phnom Penh", country: "Cambodia", timezone: "Asia/Phnom_Penh" },
            { city: "Beijing", country: "China", timezone: "Asia/Shanghai" }, { city: "Nicosia", country: "Cyprus", timezone: "Asia/Nicosia" },
            { city: "Tbilisi", country: "Georgia", timezone: "Asia/Tbilisi" }, { city: "New Delhi", country: "India", timezone: "Asia/Kolkata" },
            { city: "Jakarta", country: "Indonesia", timezone: "Asia/Jakarta" }, { city: "Tehran", country: "Iran", timezone: "Asia/Tehran" },
            { city: "Baghdad", country: "Iraq", timezone: "Asia/Baghdad" }, { city: "Jerusalem", country: "Israel", timezone: "Asia/Jerusalem" },
            { city: "Tokyo", country: "Japan", timezone: "Asia/Tokyo" }, { city: "Amman", country: "Jordan", timezone: "Asia/Amman" },
            { city: "Nur-Sultan", country: "Kazakhstan", timezone: "Asia/Almaty" }, { city: "Kuwait City", country: "Kuwait", timezone: "Asia/Kuwait" },
            { city: "Bishkek", country: "Kyrgyzstan", timezone: "Asia/Bishkek" }, { city: "Vientiane", country: "Laos", timezone: "Asia/Vientiane" },
            { city: "Beirut", country: "Lebanon", timezone: "Asia/Beirut" }, { city: "Kuala Lumpur", country: "Malaysia", timezone: "Asia/Kuala_Lumpur" },
            { city: "Male", country: "Maldives", timezone: "Indian/Maldives" }, { city: "Ulaanbaatar", country: "Mongolia", timezone: "Asia/Ulaanbaatar" },
            { city: "Naypyidaw", country: "Myanmar", timezone: "Asia/Yangon" }, { city: "Kathmandu", country: "Nepal", timezone: "Asia/Kathmandu" },
            { city: "Pyongyang", country: "North Korea", timezone: "Asia/Pyongyang" }, { city: "Muscat", country: "Oman", timezone: "Asia/Muscat" },
            { city: "Islamabad", country: "Pakistan", timezone: "Asia/Karachi" }, { city: "Manila", country: "Philippines", timezone: "Asia/Manila" },
            { city: "Doha", country: "Qatar", timezone: "Asia/Qatar" },
            { city: "Riyadh", country: "Saudi Arabia", timezone: "Asia/Riyadh" }, { city: "Singapore", country: "Singapore", timezone: "Asia/Singapore" },
            { city: "Seoul", country: "South Korea", timezone: "Asia/Seoul" }, { city: "Colombo", country: "Sri Lanka", timezone: "Asia/Colombo" },
            { city: "Damascus", country: "Syria", timezone: "Asia/Damascus" }, { city: "Taipei", country: "Taiwan", timezone: "Asia/Taipei" },
            { city: "Dushanbe", country: "Tajikistan", timezone: "Asia/Dushanbe" }, { city: "Bangkok", country: "Thailand", timezone: "Asia/Bangkok" },
            { city: "Dili", country: "Timor-Leste", timezone: "Asia/Dili" }, { city: "Ankara", country: "Turkey", timezone: "Europe/Istanbul" },
            { city: "Ashgabat", country: "Turkmenistan", timezone: "Asia/Ashgabat" }, { city: "Abu Dhabi", country: "UAE", timezone: "Asia/Dubai" },
            { city: "Tashkent", country: "Uzbekistan", timezone: "Asia/Tashkent" }, { city: "Hanoi", country: "Vietnam", timezone: "Asia/Ho_Chi_Minh" },
            { city: "Sana'a", country: "Yemen", timezone: "Asia/Aden" }
        ],
        "Australia": [
            { city: "Canberra", country: "Australia", timezone: "Australia/Sydney" }, { city: "Suva", country: "Fiji", timezone: "Pacific/Fiji" },
            { city: "South Tarawa", country: "Kiribati", timezone: "Pacific/Tarawa" }, { city: "Majuro", country: "Marshall Islands", timezone: "Pacific/Majuro" },
            { city: "Palikir", country: "Micronesia", timezone: "Pacific/Pohnpei" }, { city: "Yaren", country: "Nauru", timezone: "Pacific/Nauru" },
            { city: "Wellington", country: "New Zealand", timezone: "Pacific/Auckland" }, { city: "Ngerulmud", country: "Palau", timezone: "Pacific/Palau" },
            { city: "Port Moresby", country: "Papua New Guinea", timezone: "Pacific/Port_Moresby" }, { city: "Apia", country: "Samoa", timezone: "Pacific/Apia" },
            { city: "Honiara", country: "Solomon Islands", timezone: "Pacific/Guadalcanal" }, { city: "Nuku'alofa", country: "Tonga", timezone: "Pacific/Tongatapu" },
            { city: "Funafuti", country: "Tuvalu", timezone: "Pacific/Funafuti" }, { city: "Port Vila", country: "Vanuatu", timezone: "Pacific/Efate" }
        ],
        "Europe": [
            { city: "Tirana", country: "Albania", timezone: "Europe/Tirane" }, { city: "Andorra la Vella", country: "Andorra", timezone: "Europe/Andorra" },
            { city: "Vienna", country: "Austria", timezone: "Europe/Vienna" }, { city: "Minsk", country: "Belarus", timezone: "Europe/Minsk" },
            { city: "Brussels", country: "Belgium", timezone: "Europe/Brussels" }, { city: "Sarajevo", country: "Bosnia & Herzegovina", timezone: "Europe/Sarajevo" },
            { city: "Sofia", country: "Bulgaria", timezone: "Europe/Sofia" }, { city: "Zagreb", country: "Croatia", timezone: "Europe/Zagreb" },
            { city: "Prague", country: "Czech Republic", timezone: "Europe/Prague" }, { city: "Copenhagen", country: "Denmark", timezone: "Europe/Copenhagen" },
            { city: "Tallinn", country: "Estonia", timezone: "Europe/Tallinn" }, { city: "Helsinki", country: "Finland", timezone: "Europe/Helsinki" },
            { city: "Paris", country: "France", timezone: "Europe/Paris" }, { city: "Berlin", country: "Germany", timezone: "Europe/Berlin" },
            { city: "Athens", country: "Greece", timezone: "Europe/Athens" }, { city: "Budapest", country: "Hungary", timezone: "Europe/Budapest" },
            { city: "Reykjavik", country: "Iceland", timezone: "Atlantic/Reykjavik" }, { city: "Dublin", country: "Ireland", timezone: "Europe/Dublin" },
            { city: "Rome", country: "Italy", timezone: "Europe/Rome" }, { city: "Pristina", country: "Kosovo", timezone: "Europe/Belgrade" },
            { city: "Riga", country: "Latvia", timezone: "Europe/Riga" }, { city: "Vaduz", country: "Liechtenstein", timezone: "Europe/Vaduz" },
            { city: "Vilnius", country: "Lithuania", timezone: "Europe/Vilnius" }, { city: "Luxembourg", country: "Luxembourg", timezone: "Europe/Luxembourg" },
            { city: "Valletta", country: "Malta", timezone: "Europe/Malta" }, { city: "Chisinau", country: "Moldova", timezone: "Europe/Chisinau" },
            { city: "Monaco", country: "Monaco", timezone: "Europe/Monaco" }, { city: "Podgorica", country: "Montenegro", timezone: "Europe/Podgorica" },
            { city: "Amsterdam", country: "Netherlands", timezone: "Europe/Amsterdam" }, { city: "Skopje", country: "North Macedonia", timezone: "Europe/Skopje" },
            { city: "Oslo", country: "Norway", timezone: "Europe/Oslo" }, { city: "Warsaw", country: "Poland", timezone: "Europe/Warsaw" },
            { city: "Lisbon", country: "Portugal", timezone: "Europe/Lisbon" }, { city: "Bucharest", country: "Romania", timezone: "Europe/Bucharest" },
            { city: "Moscow", country: "Russia", timezone: "Europe/Moscow" }, { city: "San Marino", country: "San Marino", timezone: "Europe/San_Marino" },
            { city: "Belgrade", country: "Serbia", timezone: "Europe/Belgrade" }, { city: "Bratislava", country: "Slovakia", timezone: "Europe/Bratislava" },
            { city: "Ljubljana", country: "Slovenia", timezone: "Europe/Ljubljana" }, { city: "Madrid", country: "Spain", timezone: "Europe/Madrid" },
            { city: "Stockholm", country: "Sweden", timezone: "Europe/Stockholm" }, { city: "Bern", country: "Switzerland", timezone: "Europe/Zurich" },
            { city: "Kyiv", country: "Ukraine", timezone: "Europe/Kyiv" }, { city: "London", country: "United Kingdom", timezone: "Europe/London" },
            { city: "Vatican City", country: "Vatican City", timezone: "Europe/Vatican" }
        ],
        "North America": [
            { city: "St. John's", country: "Antigua & Barbuda", timezone: "America/Antigua" }, { city: "Nassau", country: "Bahamas", timezone: "America/Nassau" },
            { city: "Bridgetown", country: "Barbados", timezone: "America/Barbados" }, { city: "Belmopan", country: "Belize", timezone: "America/Belize" },
            { city: "Ottawa", country: "Canada", timezone: "America/Toronto" }, { city: "San Jose", country: "Costa Rica", timezone: "America/Costa_Rica" },
            { city: "Havana", country: "Cuba", timezone: "America/Havana" }, { city: "Roseau", country: "Dominica", timezone: "America/Dominica" },
            { city: "Santo Domingo", country: "Dominican Republic", timezone: "America/Santo_Domingo" }, { city: "San Salvador", country: "El Salvador", timezone: "America/El_Salvador" },
            { city: "St. George's", country: "Grenada", timezone: "America/Grenada" }, { city: "Guatemala City", country: "Guatemala", timezone: "America/Guatemala" },
            { city: "Port-au-Prince", country: "Haiti", timezone: "America/Port-au-Prince" }, { city: "Tegucigalpa", country: "Honduras", timezone: "America/Tegucigalpa" },
            { city: "Kingston", country: "Jamaica", timezone: "America/Jamaica" }, { city: "Mexico City", country: "Mexico", timezone: "America/Mexico_City" },
            { city: "Managua", country: "Nicaragua", timezone: "America/Managua" }, { city: "Panama City", country: "Panama", timezone: "America/Panama" },
            { city: "Basseterre", country: "St. Kitts & Nevis", timezone: "America/St_Kitts" }, { city: "Castries", country: "St. Lucia", timezone: "America/St_Lucia" },
            { city: "Kingstown", country: "St. Vincent & Grenadines", timezone: "America/St_Vincent" }, { city: "Port of Spain", country: "Trinidad & Tobago", timezone: "America/Port_of_Spain" },
            { city: "Washington D.C.", country: "USA", timezone: "America/New_York" }
        ],
        "South America": [
            { city: "Buenos Aires", country: "Argentina", timezone: "America/Argentina/Buenos_Aires" }, { city: "Sucre", country: "Bolivia", timezone: "America/La_Paz" },
            { city: "Brasilia", country: "Brazil", timezone: "America/Sao_Paulo" }, { city: "Santiago", country: "Chile", timezone: "America/Santiago" },
            { city: "Bogota", country: "Colombia", timezone: "America/Bogota" }, { city: "Quito", country: "Ecuador", timezone: "America/Guayaquil" },
            { city: "Georgetown", country: "Guyana", timezone: "America/Guyana" }, { city: "Asuncion", country: "Paraguay", timezone: "America/Asuncion" },
            { city: "Lima", country: "Peru", timezone: "America/Lima" }, { city: "Paramaribo", country: "Suriname", timezone: "America/Paramaribo" },
            { city: "Montevideo", country: "Uruguay", timezone: "America/Montevideo" }, { city: "Caracas", country: "Venezuela", timezone: "America/Caracas" }
        ]
    };

    // Element Selections
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const closeMenuBtn = document.getElementById('closeMenuBtn');

    const settingsOverlay = document.getElementById('settingsOverlay');
    const displaySettingsBtns = document.querySelectorAll('.display-settings-btn');
    const closeSettingsBtn = document.getElementById('closeSettingsBtn');

    const cardGrid = document.getElementById('card-grid');
    const countryCountEl = document.getElementById('country-count');
    const previewCard = document.getElementById('preview-card');

    const showSecondsToggle = document.getElementById('showSeconds');
    const showDateToggle = document.getElementById('showDate');
    const meridiemToggle = document.getElementById('meridiem');

    const searchBarDesktop = document.getElementById('search-bar-desktop');
    const clearSearchBtnDesktop = document.getElementById('clear-search-btn-desktop');
    const searchBarMobile = document.getElementById('search-bar-mobile');
    const clearSearchBtnMobile = document.getElementById('clear-search-btn-mobile');

    let displaySettings = {
        showSeconds: showSecondsToggle.checked,
        showDate: showDateToggle.checked,
        is12Hour: meridiemToggle.checked
    };

    let clockInterval = null;
    let cardObserver = null;
    let userCountry = '';

    // Mobile Menu Logic
    const openMobileMenu = () => mobileMenuOverlay.classList.add('visible');
    const closeMobileMenu = () => mobileMenuOverlay.classList.remove('visible');
    menuBtn.addEventListener('click', openMobileMenu);
    closeMenuBtn.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            closeMobileMenu();
        }
    });

    // Settings Overlay Logic
    const openSettings = () => {
        closeMobileMenu();
        settingsOverlay.classList.add('visible');
    };
    const closeSettings = () => settingsOverlay.classList.remove('visible');
    displaySettingsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openSettings();
        });
    });
    closeSettingsBtn.addEventListener('click', closeSettings);
    settingsOverlay.addEventListener('click', (e) => {
        if (e.target === settingsOverlay) {
            closeSettings();
        }
    });

    // Continent Tab Logic
    const continentTabs = document.querySelectorAll('.continent-tabs a');
    const dropdown = document.querySelector('.continent-dropdown');
    const selectedContinentEl = document.querySelector('.selected-continent');
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

    function selectContinent(continentName) {
        continentTabs.forEach(tab => {
            tab.classList.toggle('active', tab.textContent === continentName);
        });

        selectedContinentEl.textContent = continentName;
        dropdownLinks.forEach(link => {
            link.classList.toggle('active', link.textContent === continentName);
        });

        renderTimeCards(continentName);
        searchBarDesktop.value = '';
        searchBarMobile.value = '';
        clearSearchBtnDesktop.style.display = 'none';
        clearSearchBtnMobile.style.display = 'none';
    }

    continentTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            selectContinent(tab.textContent);
        });
    });
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            selectContinent(this.textContent);
        });
    });

    window.addEventListener('click', () => {
        if (dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
        }
    });

    function calculateTimeDifference(targetTimezone) {
        try {
            const now = new Date();
            const localOffset = -now.getTimezoneOffset();
            const targetOffset = getTimezoneOffset(targetTimezone, now);

            const diffMinutes = targetOffset - localOffset;

            if (Math.abs(diffMinutes) < 1) return "Your Timezone";

            const diffHours = Math.trunc(diffMinutes / 60);
            const remainingMinutes = Math.abs(diffMinutes % 60);
            const aheadOrBehind = diffMinutes < 0 ? 'behind' : 'ahead';

            let finalString = `${Math.abs(diffHours)}h`;
            if (remainingMinutes > 0) finalString += ` ${remainingMinutes}m`;

            return `${finalString} ${aheadOrBehind}`;
        } catch (error) {
            console.error("Could not calculate time difference for:", targetTimezone, error);
            return "";
        }
    }

    function getTimezoneOffset(timezone, date) {
        try {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                timeZoneName: 'longOffset'
            });

            const parts = formatter.formatToParts(date);
            const offsetString = parts.find(part => part.type === 'timeZoneName').value;

            const offsetMatch = offsetString.match(/GMT([+-])(\d+)(?::(\d+))?/);
            if (!offsetMatch) return 0;

            const sign = offsetMatch[1] === '+' ? 1 : -1;
            const hours = parseInt(offsetMatch[2]) || 0;
            const minutes = parseInt(offsetMatch[3]) || 0;

            return sign * (hours * 60 + minutes);
        } catch (e) {
            return 0;
        }
    }

    function renderTimeCards(continentName) {
        cardGrid.innerHTML = '';
        if (clockInterval) clearInterval(clockInterval);
        if (cardObserver) cardObserver.disconnect();

        const cities = timezones[continentName] || [];
        countryCountEl.textContent = `${cities.length} locations`;

        cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    cardObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        cities.forEach(cityData => {
            const card = createTimeCardElement(cityData);
            cardGrid.appendChild(card);
            cardObserver.observe(card);
        });

        updateAllClocks();
        clockInterval = setInterval(updateAllClocks, 1000);
    }

    function createTimeCardElement(cityData) {
        const cardElement = document.createElement('div');
        cardElement.dataset.timezone = cityData.timezone;

        let cardClasses = 'time_card';
        if (cityData.country === userCountry) {
            cardClasses += ' user-location';
        }
        cardElement.className = cardClasses;

        const timeDiffString = calculateTimeDifference(cityData.timezone);
        let differenceHTML = '';
        if (timeDiffString.includes('ahead')) {
            const parts = timeDiffString.split(' ');
            const status = parts.pop();
            const timeValue = parts.join(' ');
            differenceHTML = `${timeValue} <span class="ahead">${status}</span>`;
        } else if (timeDiffString.includes('behind')) {
            const parts = timeDiffString.split(' ');
            const status = parts.pop();
            const timeValue = parts.join(' ');
            differenceHTML = `${timeValue} <span class="behind">${status}</span>`;
        } else {
            differenceHTML = `<span>${timeDiffString}</span>`;
        }

        cardElement.innerHTML = `
                <div class="card_top">
                    <div class="time_container">
                        <div class="time">--:--</div>
                        <div class="meridiem_time"></div>
                    </div>
                    <div class="date"></div>
                    <div class="difference">${differenceHTML}</div>
                </div>
                <div class="card_bottom">
                    <div class="location">${cityData.country}</div>
                </div>
            `;
        return cardElement;
    }

    function updateAllClocks() {
        const now = new Date();

        const allCards = document.querySelectorAll('#card-grid .time_card');
        allCards.forEach(card => {
            const timezone = card.dataset.timezone;
            if (timezone) {
                updateCardTime(card, timezone, now);
            }
        });
        updateCardTime(previewCard, Intl.DateTimeFormat().resolvedOptions().timeZone, now);
    }


    function updateCardTime(card, timezone, now) {
        try {
            const timeOptions = {
                hour: '2-digit',
                minute: '2-digit',
                second: displaySettings.showSeconds ? '2-digit' : undefined,
                hour12: displaySettings.is12Hour,
                timeZone: timezone
            };

            const dateOptions = {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                timeZone: timezone
            };

            let timeString = now.toLocaleTimeString('en-US', timeOptions);
            let meridiemString = '';

            if (displaySettings.is12Hour) {
                const parts = timeString.split(' ');
                timeString = parts[0];
                meridiemString = parts[1] || '';
            }

            const timeEl = card.querySelector('.time');
            const meridiemEl = card.querySelector('.meridiem_time');
            const dateEl = card.querySelector('.date');

            if (timeEl) timeEl.textContent = timeString;
            if (meridiemEl) meridiemEl.textContent = meridiemString;

            if (dateEl) {
                dateEl.textContent = now.toLocaleDateString('en-GB', dateOptions);
                dateEl.style.display = displaySettings.showDate ? 'block' : 'none';
            }
        } catch (error) {
            const timeEl = card.querySelector('.time');
            if (timeEl) timeEl.textContent = "Error";
            console.error(`Failed to update time for timezone: ${timezone}`, error);
        }
    }

    // Handle Settings Changed
    function handleSettingsChange() {
        displaySettings = {
            showSeconds: showSecondsToggle.checked,
            showDate: showDateToggle.checked,
            is12Hour: meridiemToggle.checked
        };
        updateAllClocks();
    }

    showSecondsToggle.addEventListener('change', handleSettingsChange);
    showDateToggle.addEventListener('change', handleSettingsChange);
    meridiemToggle.addEventListener('change', handleSettingsChange);


    // Search Bar
    function handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        const isDesktop = event.target.id === 'search-bar-desktop';
        const clearBtn = isDesktop ? clearSearchBtnDesktop : clearSearchBtnMobile;

        clearBtn.style.display = searchTerm.length > 0 ? 'block' : 'none';

        const allCards = document.querySelectorAll('#card-grid .time_card');
        allCards.forEach(card => {
            const locationName = card.querySelector('.location').textContent.toLowerCase();
            if (locationName.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function clearSearch() {
        searchBarDesktop.value = '';
        searchBarMobile.value = '';
        searchBarDesktop.dispatchEvent(new Event('input'));
        searchBarMobile.dispatchEvent(new Event('input'));
    }

    searchBarDesktop.addEventListener('input', handleSearch);
    searchBarMobile.addEventListener('input', handleSearch);
    clearSearchBtnDesktop.addEventListener('click', clearSearch);
    clearSearchBtnMobile.addEventListener('click', clearSearch);


    // Global Handlers
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSettings();
            closeMobileMenu();
        }
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });


    function findContinentForTimezone(timezoneToFind) {
        for (const continent in timezones) {
            const hasTimezone = timezones[continent].some(city => city.timezone === timezoneToFind);
            if (hasTimezone) {
                return continent;
            }
        }
        return null;
    }

    function findUserLocationData(userTzName) {
        let foundCity = null;

        for (const continent in timezones) {
            const city = timezones[continent].find(c => c.timezone === userTzName);
            if (city) {
                foundCity = city;
                break;
            }
        }

        if (foundCity) {
            return foundCity;
        }

        try {
            const referenceDate = new Date();
            const referenceOptions = { timeZone: userTzName, era: 'short', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            const referenceString = referenceDate.toLocaleString('en-US', referenceOptions);

            for (const continent in timezones) {
                const city = timezones[continent].find(c => {
                    try {
                        const cityOptions = { ...referenceOptions, timeZone: c.timezone };
                        const cityString = referenceDate.toLocaleString('en-US', cityOptions);
                        return cityString === referenceString;
                    } catch (e) {
                        return false;
                    }
                });
                if (city) {
                    foundCity = city;
                    break;
                }
            }
        } catch (e) {
            console.error("Could not perform timezone equivalency check.", e);
            return null;
        }

        return foundCity;
    }


    function initialize() {
        const userTimezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const userLocationData = findUserLocationData(userTimezoneName);

        let userContinent = 'Asia'; // Default continent

        if (userLocationData) {
            userCountry = userLocationData.country;
            userContinent = findContinentForTimezone(userLocationData.timezone) || 'Asia';
        }

        selectContinent(userContinent);
    }

    initialize();

});