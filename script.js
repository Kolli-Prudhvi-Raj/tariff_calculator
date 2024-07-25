// Data for India Post EMS
const emsData = {
    "Afghanistan": {first_250: 1390, next_250: 100},
"Argentina": {first_250: 1345, next_250: 295},
"Australia": {first_250: 1125, next_250: 230},
"Austria": {first_250: 1430, next_250: 95},
"Bahrain": {first_250: 1415, next_250: 50},
"Bangladesh": {first_250: 765, next_250: 50},
"Barbados": {first_250: 1330, next_250: 270},
"Belarus": {first_250: 1450, next_250: 100},
"Belgium": {first_250: 1430, next_250: 110},
"Bermuda": {first_250: 1050, next_250: 215},
"Bhutan": {first_250: 910, next_250: 70},
"Bosnia and Herzegovina": {first_250: 1205, next_250: 150},
"Botswana": {first_250: 1500, next_250: 130},
"Brazil": {first_250: 1595, next_250: 230},
"Brunei Darussalam": {first_250: 750, next_250: 120},
"Bulgaria": {first_250: 1200, next_250: 85},
"Cambodia": {first_250: 730, next_250: 65},
"Canada": {first_250: 1180, next_250: 180},
"Cape Verde": {first_250: 1345, next_250: 230},
"Cayman Islands": {first_250: 1360, next_250: 235},
"China": {first_250: 680, next_250: 115},
"Cuba": {first_250: 1340, next_250: 225},
"Cyprus": {first_250: 1310, next_250: 110},
"Democratic Republic of Congo": {first_250: 1490, next_250: 160},
"Denmark": {first_250: 2190, next_250: 100},
"Ecuador": {first_250: 1370, next_250: 290},
"Egypt": {first_250: 1190, next_250: 75},
"El Salvador": {first_250: 1810, next_250: 315},
"Eritrea": {first_250: 1440, next_250: 110},
"Estonia": {first_250: 1280, next_250: 130},
"Ethiopia": {first_250: 1570, next_250: 100},
"Fiji": {first_250: 980, next_250: 240},
"Finland": {first_250: 1615, next_250: 90},
"France - for French Antilles (Guadeloupe, Martinique), Reunion, Corsica, New Caledonia, Mayotte, French Polynesia, Saint Pierre et Miquelon": {first_250: 4140, next_250: 340},
"France – Rest of France": {first_250: 1275, next_250: 105},
"Georgia": {first_250: 1425, next_250: 120},
"Germany": {first_250: 1860, next_250: 80},
"Ghana": {first_250: 1760, next_250: 140},
"Great Britain": {first_250: 1965, next_250: 90},
"Greece": {first_250: 1450, next_250: 85},
"Guyana": {first_250: 1810, next_250: 280},
"Hong Kong": {first_250: 1230, next_250: 90},
"Hungary": {first_250: 1455, next_250: 90},
"Iceland": {first_250: 2350, next_250: 125},
"Indonesia": {first_250: 1200, next_250: 90},
"Iran (Islamic Republic)": {first_250: 1445, next_250: 80},
"Iraq": {first_250: 920, next_250: 80},
"Ireland": {first_250: 1610, next_250: 120},
"Israel": {first_250: 1690, next_250: 80},
"Italy": {first_250: 1530, next_250: 105},
"Japan": {first_250: 700, next_250: 80},
"Jordan": {first_250: 1435, next_250: 70},
"Kazakhstan": {first_250: 1650, next_250: 110},
"Kenya": {first_250: 1455, next_250: 90},
"Korea (Republic)": {first_250: 1685, next_250: 70},
"Kuwait": {first_250: 1040, next_250: 50},
"Latvia": {first_250: 1075, next_250: 130},
"Lithuania": {first_250: 1200, next_250: 150},
"Luxembourg": {first_250: 1150, next_250: 105},
"Macau": {first_250: 1430, next_250: 90},
"Malawi": {first_250: 1175, next_250: 190},
"Malaysia": {first_250: 1610, next_250: 60},
"Maldives": {first_250: 1165, next_250: 50},
"Mauritius": {first_250: 1210, next_250: 110},
"Mexico": {first_250: 1605, next_250: 235},
"Mongolia": {first_250: 1170, next_250: 110},
"Morocco": {first_250: 1480, next_250: 180},
"Namibia": {first_250: 1000, next_250: 140},
"Nauru": {first_250: 1025, next_250: 165},
"Nepal": {first_250: 670, next_250: 40},
"Netherlands": {first_250: 1375, next_250: 105},
"New Zealand": {first_250: 1040, next_250: 270},
"Niger": {first_250: 1180, next_250: 195},
"Nigeria": {first_250: 1310, next_250: 140},
"North Macedonia": {first_250: 1265, next_250: 150},
"Norway": {first_250: 2250, next_250: 100},
"Oman": {first_250: 1395, next_250: 40},
"Pakistan": {first_250: 885, next_250: 70},
"Panama (Republic)": {first_250: 1610, next_250: 245},
"Papua New Guinea": {first_250: 1585, next_250: 220},
"Philippines": {first_250: 1180, next_250: 70},
"Poland": {first_250: 1205, next_250: 90},
"Portugal": {first_250: 1115, next_250: 130},
"Qatar": {first_250: 1340, next_250: 100},
"Romania": {first_250: 1250, next_250: 80},
"Russian Federation": {first_250: 1040, next_250: 120},
"Rwanda": {first_250: 1340, next_250: 100},
"Saudi Arabia": {first_250: 1535, next_250: 60},
"Senegal": {first_250: 1270, next_250: 160},
"Singapore": {first_250: 1175, next_250: 65},
"South Africa": {first_250: 1310, next_250: 195},
"Spain – Canary Island": {first_250: 2180, next_250: 120},
"Spain – Rest of Spain": {first_250: 1425, next_250: 120},
"Sri Lanka": {first_250: 790, next_250: 55},
"Sudan": {first_250: 1450, next_250: 120},
"Sweden": {first_250: 2220, next_250: 95},
"Switzerland": {first_250: 1910, next_250: 105},
"Taiwan": {first_250: 810, next_250: 80},
"Tanzania": {first_250: 1590, next_250: 100},
"Thailand": {first_250: 1095, next_250: 60},
"Tunisia": {first_250: 1345, next_250: 120},
"Turkey": {first_250: 1030, next_250: 85},
"Uganda": {first_250: 1460, next_250: 95},
"Ukraine": {first_250: 1695, next_250: 130},
"United Arab Emirates": {first_250: 1400, next_250: 40},
"United States of America": {first_250: 1820, next_250: 150},
"Vietnam": {first_250: 800, next_250: 70},
"Yemen": {first_250: 800, next_250: 110},
};

// Data for India Post Parcel
const parcelData = {
    "Australia": {first_250: 1005, next_250: 170},
"Canada": {first_250: 1125, next_250: 165},
"China": {first_250: 860, next_250: 85},
"France": {first_250: 1170, next_250: 80},
"Germany": {first_250: 1520, next_250: 85},
"Great Britain": {first_250: 1470, next_250: 125},
"Israel": {first_250: 925, next_250: 80},
"Italy": {first_250: 990, next_250: 80},
"Japan": {first_250: 905, next_250: 95},
"Korea (Republic)": {first_250: 985, next_250: 80},
"Malaysia": {first_250: 835, next_250: 70},
"New Zealand": {first_250: 1130, next_250: 195},
"Russian Federation": {first_250: 1455, next_250: 120},
"Saudi Arabia": {first_250: 655, next_250: 60},
"Singapore": {first_250: 825, next_250: 70},
"Spain": {first_250: 1080, next_250: 90},
"Sri Lanka": {first_250: 610, next_250: 45},
"Switzerland": {first_250: 880, next_250: 115},
"United Arab Emirates": {first_250: 660, next_250: 50},
"United States of America": {first_250: 955, next_250: 175},
"Afghanistan": {first_250: 1030, next_250: 100},
"Albania": {first_250: 935, next_250: 130},
"Algeria": {first_250: 855, next_250: 125},
"Angola": {first_250: 885, next_250: 130},
"Antigua and Barbuda": {first_250: 800, next_250: 290},
"Aruba": {first_250: 865, next_250: 230},
"Argentina": {first_250: 1100, next_250: 255},
"Armenia": {first_250: 1205, next_250: 155},
"Austria": {first_250: 1090, next_250: 100},
"Azerbaijan": {first_250: 1075, next_250: 160},
"Bahamas": {first_250: 840, next_250: 245},
"Bahrain": {first_250: 735, next_250: 60},
"Bangladesh": {first_250: 600, next_250: 50},
"Barbados": {first_250: 810, next_250: 270},
"Belarus": {first_250: 1275, next_250: 175},
"Belgium": {first_250: 1510, next_250: 120},
"Belize": {first_250: 1150, next_250: 260},
"Benin": {first_250: 800, next_250: 170},
"Bhutan": {first_250: 870, next_250: 50},
"Bolivia": {first_250: 1230, next_250: 320},
"Bosnia and Herzegovina": {first_250: 920, next_250: 130},
"Botswana": {first_250: 1260, next_250: 155},
"Brazil": {first_250: 1135, next_250: 250},
"Brunei Darussalam": {first_250: 625, next_250: 120},
"Bulgaria (Republic)": {first_250: 815, next_250: 95},
"Burkina Faso": {first_250: 1005, next_250: 165},
"Burundi": {first_250: 1235, next_250: 180},
"Cambodia": {first_250: 645, next_250: 70},
"Cameroon": {first_250: 990, next_250: 160},
"Cape Verde": {first_250: 1040, next_250: 175},
"Central African Republic": {first_250: 1055, next_250: 150},
"Chad": {first_250: 850, next_250: 150},
"Chile Easter": {first_250: 1020, next_250: 420},
"Chile": {first_250: 1210, next_250: 325},
"Hong Kong": {first_250: 1225, next_250: 90},
"Macau": {first_250: 1190, next_250: 105},
"Colombia": {first_250: 1095, next_250: 290},
"Comoros": {first_250: 835, next_250: 190},
"Congo (Republic)": {first_250: 880, next_250: 200},
"Costa Rica": {first_250: 1220, next_250: 330},
"Cote d'Ivoire Republic": {first_250: 1110, next_250: 230},
"Croatia": {first_250: 740, next_250: 105},
"Cuba": {first_250: 930, next_250: 255},
"Cyprus": {first_250: 910, next_250: 110},
"Czech Republic": {first_250: 845, next_250: 115},
"Democratic, People Republic of Korea": {first_250: 995, next_250: 115},
"Democratic Republic of the Congo": {first_250: 1105, next_250: 185},
"Denmark": {first_250: 1140, next_250: 115},
"Djibouti": {first_250: 970, next_250: 205},
"Dominica": {first_250: 840, next_250: 245},
"Dominican Republic": {first_250: 720, next_250: 270},
"Ecuador": {first_250: 1005, next_250: 280},
"Egypt": {first_250: 930, next_250: 110},
"El Salvador": {first_250: 810, next_250: 260},
"Equatorial Guinea": {first_250: 595, next_250: 135},
"Eritrea": {first_250: 870, next_250: 110},
"Ethiopia": {first_250: 625, next_250: 115},
"Fiji": {first_250: 975, next_250: 260},
"Finland": {first_250: 1365, next_250: 110},
"French Guiana": {first_250: 1410, next_250: 235},
"French Polynesia": {first_250: 1480, next_250: 365},
"Guadeloupe": {first_250: 1405, next_250: 225},
"Martinique": {first_250: 1405, next_250: 260},
"New Caledonia": {first_250: 1640, next_250: 385},
"Re-union": {first_250: 1440, next_250: 265},
"Saint Pierre and Miquelon": {first_250: 1375, next_250: 190},
"Wallis and Futuna": {first_250: 1215, next_250: 370},
"Gabon": {first_250: 965, next_250: 175},
"Gambia": {first_250: 1065, next_250: 170},
"Georgia": {first_250: 1185, next_250: 105},
"Ghana": {first_250: 1210, next_250: 170},
"Anguilla": {first_250: 810, next_250: 260},
"Ascension": {first_250: 800, next_250: 225},
"Bermuda": {first_250: 1130, next_250: 270},
"Cayman Island": {first_250: 1035, next_250: 285},
"Falkland Island (Malvinas)": {first_250: 1045, next_250: 320},
"Gibraltar": {first_250: 790, next_250: 160},
"Montserrat": {first_250: 865, next_250: 225},
"Pitcairn Island": {first_250: 1460, next_250: 425},
"St. Helena": {first_250: 900, next_250: 260},
"Tristan da Cuhna": {first_250: 825, next_250: 275},
"Turks and Caicos Island": {first_250: 780, next_250: 225},
"British Virgin Island": {first_250: 815, next_250: 260},
"Greece": {first_250: 880, next_250: 110},
"Grenada": {first_250: 905, next_250: 235},
"Guatemala": {first_250: 870, next_250: 295},
"Guinea": {first_250: 940, next_250: 185},
"Guinea-Bissau": {first_250: 1230, next_250: 170},
"Guyana": {first_250: 960, next_250: 280},
"Haiti": {first_250: 850, next_250: 235},
"Honduras Republic": {first_250: 920, next_250: 285},
"Hungary": {first_250: 1100, next_250: 120},
"Iceland": {first_250: 1535, next_250: 160},
"Indonesia": {first_250: 920, next_250: 135},
"Iran (Islamic Republic)": {first_250: 1190, next_250: 80},
"Iraq": {first_250: 645, next_250: 80},
"Ireland": {first_250: 930, next_250: 135},
"Jamaica": {first_250: 920, next_250: 280},
"Jordan": {first_250: 665, next_250: 85},
"Kazakhstan": {first_250: 1185, next_250: 115},
"Kenya": {first_250: 815, next_250: 115},
"Kiribati": {first_250: 935, next_250: 285},
"Kuwait": {first_250: 750, next_250: 65},
"Kyrgyzstan": {first_250: 855, next_250: 145},
"Lao People's Democratic Republic": {first_250: 840, next_250: 130},
"Latvia": {first_250: 745, next_250: 130},
"Lebanon": {first_250: 820, next_250: 85},
"Lesotho": {first_250: 980, next_250: 160},
"Liberia": {first_250: 820, next_250: 190},
"State of Libya": {first_250: 815, next_250: 150},
"Lithuania": {first_250: 1035, next_250: 130},
"Luxembourg": {first_250: 1000, next_250: 115},
"Madagascar": {first_250: 1260, next_250: 190},
"Malawi": {first_250: 1080, next_250: 190},
"Maldives": {first_250: 760, next_250: 65},
"Mali": {first_250: 1000, next_250: 200},
"Malta": {first_250: 945, next_250: 125},
"Mauritania": {first_250: 1115, next_250: 195},
"Mauritius": {first_250: 790, next_250: 115},
"Mexico": {first_250: 840, next_250: 255},
"Moldova": {first_250: 1010, next_250: 115},
"Mongolia": {first_250: 960, next_250: 110},
"Montenegro": {first_250: 1045, next_250: 130},
"Morocco": {first_250: 980, next_250: 170},
"Mozambique": {first_250: 1265, next_250: 185},
"Myanmar": {first_250: 655, next_250: 55},
"Namibia": {first_250: 930, next_250: 165},
"Nauru": {first_250: 840, next_250: 250},
"Nepal": {first_250: 550, next_250: 40},
"Netherlands": {first_250: 1020, next_250: 125},
"Nicaragua": {first_250: 960, next_250: 295},
"Niger": {first_250: 810, next_250: 170},
"Nigeria": {first_250: 1125, next_250: 165},
"Norway": {first_250: 1570, next_250: 130},
"Oman": {first_250: 805, next_250: 55},
"Pakistan": {first_250: 680, next_250: 70},
"Panama (Republic)": {first_250: 745, next_250: 260},
"Papua New Guinea": {first_250: 1560, next_250: 330},
"Paraguay": {first_250: 800, next_250: 280},
"Peru": {first_250: 1135, next_250: 315},
"Philippines": {first_250: 630, next_250: 105},
"Poland": {first_250: 1085, next_250: 120},
"Portugal": {first_250: 1275, next_250: 155},
"Qatar": {first_250: 690, next_250: 60},
"Romania": {first_250: 1310, next_250: 120},
"Rwanda": {first_250: 965, next_250: 200},
"Saint. Christopher and Nevis": {first_250: 875, next_250: 240},
"Saint. Lucia": {first_250: 875, next_250: 235},
"Saint. Vincent and the Grenadines": {first_250: 965, next_250: 245},
"Samoa": {first_250: 925, next_250: 290},
"Sao Tome and Principe": {first_250: 790, next_250: 160},
"Senegal": {first_250: 800, next_250: 170},
"Serbia": {first_250: 1080, next_250: 150},
"Seychelles": {first_250: 840, next_250: 215},
"Sierra Leone": {first_250: 890, next_250: 185},
"Slovakia": {first_250: 800, next_250: 105},
"Slovenia": {first_250: 835, next_250: 110},
"Solomon Islands": {first_250: 865, next_250: 235},
"Somalia": {first_250: 550, next_250: 110},
"South Africa": {first_250: 995, next_250: 160},
"Sudan": {first_250: 1045, next_250: 190},
"Suriname": {first_250: 760, next_250: 235},
"Eswatini": {first_250: 840, next_250: 165},
"Sweden": {first_250: 1300, next_250: 115},
"Syrian Arab Republic": {first_250: 690, next_250: 110},
"Tajikistan": {first_250: 905, next_250: 155},
"Tanzania (United Republic)": {first_250: 945, next_250: 205},
"Taiwan": {first_250: 1070, next_250: 100},
"Thailand": {first_250: 790, next_250: 75},
"North Macedonia": {first_250: 855, next_250: 130},
"Timor Leste (Democratic Republic)": {first_250: 720, next_250: 120},
"Togo": {first_250: 875, next_250: 150},
"Tonga (including Niuafo'ou)": {first_250: 885, next_250: 250},
"Trinidad and Tobago": {first_250: 765, next_250: 280},
"Tunisia": {first_250: 1065, next_250: 150},
"Turkey": {first_250: 1200, next_250: 125},
"Turkmenistan": {first_250: 815, next_250: 150},
"Tuvalu": {first_250: 830, next_250: 260},
"Uganda": {first_250: 935, next_250: 190},
"Ukraine": {first_250: 1440, next_250: 130},
"Uruguay": {first_250: 1310, next_250: 280},
"Uzbekistan": {first_250: 1585, next_250: 170},
"Vanuatu": {first_250: 830, next_250: 250},
"Vatican": {first_250: 905, next_250: 120},
"Venezuela": {first_250: 830, next_250: 250},
"VietNam": {first_250: 695, next_250: 90},
"Yemen": {first_250: 655, next_250: 110},
"Zambia": {first_250: 915, next_250: 205},
"Zimbabwe": {first_250: 1140, next_250: 220},
"Curacao": {first_250: 1030, next_250: 225},
"Estonia": {first_250: 940, next_250: 130},
"Liechtenstein": {first_250: 1240, next_250: 370},
"Bonaire, Sint Eustatius and Saba": {first_250: 1000, next_250: 220},
"Cook Island": {first_250: 1285, next_250: 270},
"Palestine": {first_250: 705, next_250: 70},
"Sint Maarten": {first_250: 815, next_250: 190},
"South Sudan": {first_250: 780, next_250: 205},
"Jersey": {first_250: 1395, next_250: 135},
"Mayotte": {first_250: 1400, next_250: 220},
};

// Data for ITPS
const itpsData = {
  "Aruba": {first_50: 340, next_50: 60},
"Australia": {first_50: 425, next_50: 45},
"Belarus": {first_50: 325, next_50: 40},
"Bhutan": {first_50: 350, next_50: 20},
"Canada": {first_50: 400, next_50: 35},
"Cambodia": {first_50: 355, next_50: 20},
"Chile": {first_50: 350, next_50: 65},
"China": {first_50: 305, next_50: 20},
"Curacao": {first_50: 340, next_50: 55},
"Dominican Republic": {first_50: 340, next_50: 55},
"Egypt": {first_50: 310, next_50: 25},
"Estonia": {first_50: 340, next_50: 30},
"France": {first_50: 335, next_50: 30},
"Georgia": {first_50: 305, next_50: 20},
"Germany": {first_50: 290, next_50: 25},
"Gibraltar": {first_50: 325, next_50: 40},
"Great Britain": {first_50: 360, next_50: 25},
"HongKong": {first_50: 290, next_50: 25},
"Indonesia": {first_50: 360, next_50: 25},
"Japan": {first_50: 360, next_50: 30},
"Jersey": {first_50: 335, next_50: 35},
"Korea (Republic)": {first_50: 360, next_50: 25},
"Lithuania": {first_50: 310, next_50: 25},
"Malaysia": {first_50: 355, next_50: 25},
"Mongolia": {first_50: 375, next_50: 35},
"Morocco": {first_50: 325, next_50: 40},
"Myanmar": {first_50: 305, next_50: 20},
"Netherlands": {first_50: 330, next_50: 30},
"New Zealand": {first_50: 430, next_50: 55},
"Oman": {first_50: 315, next_50: 15},
"Philippines": {first_50: 360, next_50: 25},
"Singapore": {first_50: 355, next_50: 25},
"Solomon Island": {first_50: 340, next_50: 55},
"Sri Lanka": {first_50: 350, next_50: 20},
"Svalbard and Jan Mayen": {first_50: 320, next_50: 35},
"Thailand": {first_50: 355, next_50: 20},
"Tuvalu": {first_50: 345, next_50: 60},
"Ukraine": {first_50: 315, next_50: 25},
"United Arab Emirates": {first_50: 300, next_50: 15},
"United States of America": {first_50: 550, next_50: 45},
"Vietnam": {first_50: 355, next_50: 25},

};

// Function to populate dropdown
function populateDropdown(dropdownId, items) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.innerHTML = '<option value="">Select a nation</option>';
    items.forEach(item => {
        const option = document.createElement('option');
        option.textContent = item;
        option.value = item;
        dropdown.appendChild(option);
    });
}

// Function to update text boxes
function updateTextBoxes(nation) {
    const emsFirst250 = document.getElementById('emsFirst250');
    const emsNext250 = document.getElementById('emsNext250');
    const parcelFirst250 = document.getElementById('parcelFirst250');
    const parcelNext250 = document.getElementById('parcelNext250');
    const itpsFirst50 = document.getElementById('itpsFirst50');
    const itpsNext50 = document.getElementById('itpsNext50');
    const emsCalculatedValue = document.getElementById('emsCalculatedValue');
    const parcelCalculatedValue = document.getElementById('parcelCalculatedValue');
    const itpsCalculatedValue = document.getElementById('itpsCalculatedValue');
    const weightInput = document.getElementById('weight');

    if (emsData[nation]) {
        emsFirst250.textContent = emsData[nation].first_250;
        emsNext250.textContent = emsData[nation].next_250;
    } else {
        emsFirst250.textContent = '';
        emsNext250.textContent = '';
    }

    if (parcelData[nation]) {
        parcelFirst250.textContent = parcelData[nation].first_250;
        parcelNext250.textContent = parcelData[nation].next_250;
    } else {
        parcelFirst250.textContent = '';
        parcelNext250.textContent = '';
    }

    if (itpsData[nation]) {
        itpsFirst50.textContent = itpsData[nation].first_50;
        itpsNext50.textContent = itpsData[nation].next_50;
    } else {
        itpsFirst50.textContent = '';
        itpsNext50.textContent = '';
    }

    weightInput.value = '';
    emsCalculatedValue.textContent = '';
    parcelCalculatedValue.textContent = '';
    itpsCalculatedValue.textContent = '';
}

// Function to calculate the tariff
function calculateTariff(firstRate, nextRate, weight, unit) {
    let tariff;
    if (weight <= unit) {
        tariff = Number(firstRate);
    } else {
        let remainder = (weight - unit) % unit;
        let quotient = Math.floor((weight - unit) / unit);
        if (remainder === 0) {
            tariff = (quotient * Number(nextRate)) + Number(firstRate);
        } else {
            tariff = ((quotient + 1) * Number(nextRate)) + Number(firstRate);
        }
    }
    return tariff;
}

// Function to update the calculated value
function updateCalculatedValue() {
    const emsFirst250 = document.getElementById('emsFirst250').textContent;
    const emsNext250 = document.getElementById('emsNext250').textContent;
    const parcelFirst250 = document.getElementById('parcelFirst250').textContent;
    const parcelNext250 = document.getElementById('parcelNext250').textContent;
    const itpsFirst50 = document.getElementById('itpsFirst50').textContent;
    const itpsNext50 = document.getElementById('itpsNext50').textContent;
    const weightInput = document.getElementById('weight').value;
    const emsCalculatedValue = document.getElementById('emsCalculatedValue');
    const parcelCalculatedValue = document.getElementById('parcelCalculatedValue');
    const itpsCalculatedValue = document.getElementById('itpsCalculatedValue');

    if (emsFirst250 && emsNext250 && weightInput) {
        const emsTariff = calculateTariff(emsFirst250, emsNext250, Number(weightInput), 250);
        emsCalculatedValue.textContent = emsTariff;
    } else {
        emsCalculatedValue.textContent = '';
    }

    if (parcelFirst250 && parcelNext250 && weightInput) {
        const parcelTariff = calculateTariff(parcelFirst250, parcelNext250, Number(weightInput), 250);
        parcelCalculatedValue.textContent = parcelTariff;
    } else {
        parcelCalculatedValue.textContent = '';
    }

    if (itpsFirst50 && itpsNext50 && weightInput) {
        if (Number(weightInput) > 2000) {
            itpsCalculatedValue.textContent = 'Maximum weight is 2000 grams';
        } else {
            const itpsTariff = calculateTariff(itpsFirst50, itpsNext50, Number(weightInput), 50);
            itpsCalculatedValue.textContent = itpsTariff;
        }
    } else {
        itpsCalculatedValue.textContent = '';
    }
}

// Initialize the dropdown on page load
document.addEventListener('DOMContentLoaded', () => {
    const nations = Object.keys(emsData);
    populateDropdown('nationDropdown', nations);

    // Add event listener to update text boxes on dropdown change
    const nationDropdown = document.getElementById('nationDropdown');
    nationDropdown.addEventListener('change', (event) => {
        updateTextBoxes(event.target.value);
    });

    // Add event listener to calculate value when input changes
    const weightInput = document.getElementById('weight');
    weightInput.addEventListener('input', updateCalculatedValue);
});
