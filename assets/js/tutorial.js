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

//loads Character Attributes from local storage

var load = function () {
    var charFromPrev = localStorage.getItem('character');
    CharacterAttributes = JSON.parse(charFromPrev);
    var pState = localStorage.getItem('pageState');
    PageAttributes = JSON.parse(pState);
};
load();

//create variables for each part of Character Attributes
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
// var playerEquipment = JSON.stringify(pEquipment);
var playerSpells = CharacterAttributes.spells;
var playerHp = CharacterAttributes.hitpoints;
var playerSpeed = CharacterAttributes.speed;
var playerTraits = CharacterAttributes.traits;
// var playerSpells = JSON.stringify(pSpells);

var apiKey = 'AIzaSyBZsuBMiz1R9DYR75Hr6VbSs74eJFb2FHk';
var baseApiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=handbook%20helper%205e%20${playerClass}&maxResults=1`;

var videoKey;

// finds video from Critical Role to help user with new class
var ClassVideo = function () {
    $.ajax({
        method: 'GET',
        url: baseApiUrl,
        success: function (data) {
            videoKey = data.items[0].id.videoId;
            var videoplayer = `<iframe
width="560"
height="315"
src="https://www.youtube.com/embed/${videoKey}"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen
></iframe>`;
            $('#video').append(videoplayer);
        },
    });
};

// returns user to home page on click
$('#returnHome').on('click', function () {
    location.href = './index.html';
});

//Displays stats under video for user to see and read.
var displayStats = function () {
    var dispName = `<p class="stats varPrintText"> Your character's Name is :  <span class="varPrinter" style="text-decoration: none">${playerName}</span></p>`;
    var dispClass = `<p class="stats varPrintText"> Your character's Class is :  <span class="varPrinter"> ${playerClass}</span></p>`;
    var dispRace = `<p class="stats varPrintText"> Your character's Race is :  <span class="varPrinter"> ${playerRace}</span></p>`;
    var dispAlign = `<p class="stats varPrintText"> Your character's alignment is :  <span class="varPrinter"> ${playerAlignment}</span></p>`;
    var dispSex = `<p class="stats varPrintText"> Your character's sex is :  <span class="varPrinter"> ${playerSex}</span></p>`;
    var playerProf = playerProficiencies.join(' , ');
    var dispProf = `<p class="stats varPrintText"> Your character's proficiencies are :  <span class="varPrinter"> ${playerProf}</span></p>`;
    var dispStr = `<p class="stats varPrintText"> Your character's Strength is :  <span class="varPrinter"> ${playerStrength}</span></p>`;
    var dispDex = `<p class="stats varPrintText"> Your character's Dexterity is :  <span class="varPrinter"> ${playerDexterity}</span></p>`;
    var dispCon = `<p class="stats varPrintText"> Your character's Constitution is :  <span class="varPrinter"> ${playerConstitution}</span></p>`;
    var dispInt = `<p class="stats varPrintText"> Your character's Intelligence is :  <span class="varPrinter"> ${playerIntelligence}</span></p>`;
    var dispWis = `<p class="stats varPrintText"> Your character's Wisdom is :  <span class="varPrinter"> ${playerWisdom}</span></p>`;
    var dispChar = `<p class="stats varPrintText"> Your character's Charisma is :  <span class="varPrinter"> ${playerCharisma}</span></p>`;
    var playerEquip = playerEquipment.join(' , ');
    var dispEquip = `<p class="stats varPrintText"> Your character's Equipment is :  <span class="varPrinter"> ${playerEquip}</span></p>`;
    if (playerSpells.length == 0) {
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
};

// ClassVideo();
displayStats();
