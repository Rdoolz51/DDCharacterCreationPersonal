var CharacterAttributes = {
    name: '',
    class: '',
    race: '',
    alignment: '',
    sex: '',
    proficiencies: [],
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
    equipment: [],
    spells: [],
    hitpoints: '',
    speed: '',
    traits: [],
};
var PageAttributes = {
    characterPage: '',
    statsPage: '',
    equipPage: '',
    spellPage: '',
};

var checkIfAttStored = JSON.parse(localStorage.getItem('pageState'));
if (!checkIfAttStored) {
    localStorage.setItem('pageState', JSON.stringify(PageAttributes));
}

load();
displayStats();
function load () {
    var pState = localStorage.getItem('pageState');
    PageAttributes = JSON.parse(pState);
}
var ccCardEl = $('#ccCard');
var statCardEl = $('#statCard');
var equipCardEl = $('#equipCard');
var spellCardEl = $('#spellCard');
var charSheetEl = $('#vcs');
charCreate();
statCreate();
equipCreate();
spellCreate();

$(document).ready(function () {
    $('.modal').modal();
});

$('#burger').on('click', hamburgerMenu);
//transforms hamburger menu the hard way :)
function hamburgerMenu () {
    if ($('.c-pan').hasClass('zero')) {
        $('.c-pan').css('transform', 'translateX(-1000px)');
        $('.c-pan').removeClass('zero');
    } else {
        $('.c-pan').css('transform', 'translateX(0)');
        $('.c-pan').addClass('zero');
    }
}
//each of the following functions hides its respective card on the index.html page until the previous page(s) has been marked completed
function charCreate () {
    if (PageAttributes.characterPage === 'complete') {
        $('#ccCard').css('background-image', 'url(./assets/images/player2bggrey.jpg)');
        $('#ccCard').css('background-size', 'cover');
        $('#ccCard').css('color', 'gray');
        $('#ccCard').css('border', '10px solid #3a3c40');
        $('#ccCard').on('click', function () {
            $('#ccCardAnchor').attr('href', '#');
        });
    } else {
        $('#ccCardAnchor').attr('href', './character.html');
        $('#statCardAnchor').attr('href', '#');
        $('#statCard').css('filter', 'grayscale()');
        $('#equipCardAnchor').attr('href', '#');
        $('#equipCard').css('filter', 'grayscale()');
        $('#spellCardAnchor').attr('href', '#');
        $('#spellCard').css('filter', 'grayscale()');
        PageAttributes.characterPage = '';
    }
}
function statCreate () {
    if (PageAttributes.statsPage == 'complete') {
        $('#statCard').css('background-image', 'url(./assets/images/stats2bggrey.jpg)');
        $('#statCard').css('background-size', 'cover');
        $('#statCard').css('color', 'gray');
        $('#statCard').css('border', '10px solid #3a3c40');
        $('#statCard').on('click', function () {

            $('#statCardAnchor').attr('href', '#');
        });
    } else {
        if (PageAttributes.characterPage == 'complete') {
            $('#statCardAnchor').attr('href', './stats.html');
            $('#equipCardAnchor').attr('href', '#');
            $('#equipCard').css('filter', 'grayscale()');
            $('#spellCardAnchor').attr('href', '#');
            $('#spellCard').css('filter', 'grayscale()');
            PageAttributes.statsPage = '';
        }
    }
}
function equipCreate () {
    if (PageAttributes.equipPage == 'complete') {
        $('#equipCard').css('background-image', 'url(./assets/images/equip2bggrey.jpg)');
        $('#equipCard').css('background-size', 'cover');
        $('#equipCard').css('background-position', '0px -45px');
        $('#equipCard').css('color', 'gray');
        $('#equipCard').css('border', '10px solid #3a3c40');
        $('#equipCard').on('click', function () {
            $('#equipCardAnchor').attr('href', '#');
        });
    } else {
        if (PageAttributes.statsPage == 'complete') {
            $('#equipCardAnchor').attr('href', './equipment.html');
            $('#spellCardAnchor').attr('href', '#');
            $('#spellCard').css('filter', 'grayscale()');
            PageAttributes.equipPage = '';
        }
    }
}
function spellCreate () {
    if (PageAttributes.spellPage == 'complete') {
        $('#spellCard').css('background-image', 'url(./assets/images/spells2bggrey.jpg)');
        $('#spellCard').css('background-size', 'cover');
        $('#spellCard').css('background-position', 'left');
        $('#spellCard').css('color', 'gray');
        $('#spellCard').css('border', '10px solid #3a3c40');
        $('#spellCard').on('click', function () {
            $('#spellCardAnchor').attr('href', '#');
        });
    } else {
        if (PageAttributes.equipPage == 'complete') {
            $('#spellCardAnchor').attr('href', './spells.html');
            PageAttributes.spellPage = '';
        }
    }
}

//reset button on index. Empties strings/arrays in localStorage so that the user can make a new character if they want
$('#resetCharacter').on('click', function () {
    console.log('clicked');
    PageAttributes.characterPage = '';
    PageAttributes.statsPage = '';
    PageAttributes.equipPage = '';
    PageAttributes.spellPage = '';
    localStorage.setItem('pageState', JSON.stringify(PageAttributes));
    localStorage.setItem('character', JSON.stringify(CharacterAttributes));
    location.reload();
});

// either displays stats or new player message
function displayStats () {
    CharacterAttributes = JSON.parse(localStorage.getItem('character', PageAttributes));
    if (PageAttributes.spellPage != 'complete') {
        var NewUser = `<h5 class="white-text">You have not created a character yet! To begin your journey please click the character picture!</h5>`;
        $('#character-stats').append(NewUser);
    } else {
        var finishedUser = `<h5 class="center highlight white-text">Character Sheet</h5>`;
        $('#character-stats').append(finishedUser);
        var playerName = CharacterAttributes.name;
        var playerClass = CharacterAttributes.class;
        var playerRace = CharacterAttributes.race;
        var playerAlignment = CharacterAttributes.alignment;
        var playerSex = CharacterAttributes.sex;
        var playerProficiencies = CharacterAttributes.proficiencies;
        var playerStrength = CharacterAttributes.strength;
        var playerDexterity = CharacterAttributes.dexterity;
        var playerConstitution = CharacterAttributes.constitution;
        var playerIntelligence = CharacterAttributes.intelligence;
        var playerWisdom = CharacterAttributes.wisdom;
        var playerCharisma = CharacterAttributes.charisma;
        var playerEquipment = CharacterAttributes.equipment;
        var playerSpells = CharacterAttributes.spells;
        var playerHp = CharacterAttributes.hitpoints;
        var playerSpeed = CharacterAttributes.speed;
        var playerTraits = CharacterAttributes.traits;
        var dispName = `<p class="stats varPrintText"> Your character's Name is :  <span class="varPrinter">${playerName}</span></p>`;
        var dispClass = `<p class="stats varPrintText"> Your character's Class is :  <span class="varPrinter"> ${playerClass}</span></p>`;
        var dispRace = `<p class="stats varPrintText"> Your character's Race is :  <span class="varPrinter"> ${playerRace}</span></p>`;
        var dispAlign = `<p class="stats varPrintText"> Your character's alignment is :  <span class="varPrinter"> ${playerAlignment}</span></p>`;
        var dispSex = `<p class="stats varPrintText"> Your character's sex is :  <span class="varPrinter"> ${playerSex}</span></p>`;
        var playerProf = playerProficiencies.join(' , ');
        var dispProf = `<p class="stats varPrintText"> Your character's proficiencies are :  <span class="varPrinter"> ${playerProf}</span></p>`;
        var dispStr = `<p class="stats varPrintText"> Your character's Strength is :  <span class="varPrinter"> ${playerStrength}</span></p>`;
        var dispDex = `<p class="stats varPrintText"> Your character's Dexterity is :  <span class="varPrinter"> ${playerDexterity}</span></p>`;
        var dispCon = `<p class="stats varPrintText"> Your character's Constitution is : <span class="varPrinter"> ${playerConstitution}</span></p>`;
        var dispInt = `<p class="stats varPrintText"> Your character's Intelligence is :  <span class="varPrinter"> ${playerIntelligence}</span></p>`;
        var dispWis = `<p class="stats varPrintText"> Your character's Wisdom is :  <span class="varPrinter"> ${playerWisdom}</span></p>`;
        var dispChar = `<p class="stats varPrintText"> Your character's Charisma is :  <span class="varPrinter"> ${playerCharisma}</span></p>`;
        var playerEquip = playerEquipment.join(' , ');
        var dispEquip = `<p class="stats varPrintText"> Your character's Equipment is :  <span class="varPrinter"> ${playerEquip}</span></p>`;
        if (playerSpells.length === 0) {
            var dispSpells = `<p class="stats varPrintText"> Your character doesn't know any spells</p>`;
        } else {
            var playerSpls = playerSpells.join(' , ');
            var dispSpells = `<p class="stats varPrintText"> Your character's Spells are :  <span class="varPrinter"> ${playerSpls}</span></p>`;
        }
        var playerTrts = playerTraits.join(' , ');
        var dispTraits = `<p class="stats varPrintText"> Your character's Traits are :  <span class="varPrinter">${playerTrts}</span></p>`;
        var dispHp = `<p class="stats varPrintText"> Your character's hitpoints are :  <span class="varPrinter"> ${playerHp}</span></p>`;
        var dispSpeed = `<p class="stats varPrintText"> Your character's speed is :  <span class="varPrinter"> ${playerSpeed}</span></p>`;
        $('#character-stats').append(dispName);
        $('#character-stats').append(dispClass);
        $('#character-stats').append(dispRace);
        $('#character-stats').append(dispAlign);
        $('#character-stats').append(dispSex);
        $('#character-stats').append(dispProf);
        $('#character-stats').append(dispStr);
        $('#character-stats').append(dispDex);
        $('#character-stats').append(dispCon);
        $('#character-stats').append(dispInt);
        $('#character-stats').append(dispWis);
        $('#character-stats').append(dispChar);
        $('#character-stats').append(dispEquip);
        $('#character-stats').append(dispSpells);
        $('#character-stats').append(dispTraits);
        $('#character-stats').append(dispHp);
        $('#character-stats').append(dispSpeed);
    }
}
