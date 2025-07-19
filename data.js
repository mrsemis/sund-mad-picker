// data.js

const mealsData = {
  morgenmad: [],
  frokost: [],
  snack: [],
  aftensmad: []
};

function addMeal(type, name, ingredients, steps, nutrition = {}) {
  if (!mealsData[type]) mealsData[type] = [];
  mealsData[type].push({ name, ingredients, steps, ...nutrition });
}

// MORGENMAD
addMeal("morgenmad", "Græsk yoghurt med bær og honning", [
  "1 dl græsk yoghurt",
  "håndfuld bær",
  "1 tsk honning"
], [
  "Hæld yoghurt i en skål",
  "Top med bær og honning"
], {
  calories: 189,
  fat: 4.7
});

addMeal("morgenmad", "Proteinpandekager med banan", [
  "1 æg",
  "1/2 banan",
  "1 tsk havregryn"
], [
  "Mos bananen og bland med æg og havregryn",
  "Steg på pande i lidt olie"
], {
  calories: 135,
  fat: 5.5
});

addMeal("morgenmad", "Havregrød med æble og kanel", [
  "1 dl havregryn",
  "2 dl vand eller mandelmælk",
  "1/2 æble i tern",
  "1 tsk kanel"
], [
  "Kog havregryn med væske.",
  "Tilsæt æbletern og kanel.",
  "Rør rundt og server."
], {
  calories: 210,
  fat: 3
});

addMeal("morgenmad", "Avocado toast", [
  "1 skive fuldkornsbrød",
  "1/2 avocado",
  "Lidt citron og salt"
], [
  "Mos avocado med citron og salt",
  "Smør på brødet og servér"
], {
  calories: 190,
  fat: 9
});

addMeal("morgenmad", "Smoothie bowl", [
  "1/2 banan",
  "1 dl bær",
  "1/2 dl yoghurt",
  "1 spsk havregryn"
], [
  "Blend alt og hæld i en skål",
  "Top med ekstra bær og lidt havregryn"
], {
  calories: 210,
  fat: 4
});

addMeal("morgenmad", "Chiagrød med blåbær", [
  "2 spsk chiafrø",
  "1 dl mandelmælk",
  "1 håndfuld blåbær"
], [
  "Rør chiafrø og mandelmælk sammen og stil i køleskab natten over.",
  "Top med blåbær før servering."
], {
  calories: 120,
  fat: 3
});

addMeal("morgenmad", "Bærkompot med skyr", [
  "1 dl skyr",
  "1 dl blandede bær (frosne eller friske)"
], [
  "Varm bærrene let op på en pande eller i mikroovn.",
  "Hæld over skyr og servér."
], {
  calories: 90,
  fat: 0.2
});

addMeal("morgenmad", "Æblegrød med kanel", [
  "1 æble",
  "1/2 tsk kanel"
], [
  "Skær æblet i tern og kog med lidt vand og kanel i 5 min.",
  "Servér lun."
], {
  calories: 60,
  fat: 0.2
});

// FROKOST
addMeal("frokost", "Grøntsags wok med tofu", [
  "100g tofu",
  "1 kop broccoli",
  "1 spsk sojasauce"
], [
  "Skær tofu i tern og steg",
  "Tilsæt broccoli og soja og steg videre"
], {
  calories: 283,
  fat: 13
});

addMeal("frokost", "Chiagrød med hindbær", [
  "2 spsk chiafrø",
  "1 dl mandelmælk",
  "håndfuld hindbær"
], [
  "Bland chia og mandelmælk og lad stå natten over",
  "Top med hindbær"
], {
  calories: 140,
  fat: 9.5
});

addMeal("frokost", "Tun salat med bønner", [
  "1 dåse tun i vand",
  "1 dl kogte kidneybønner",
  "Cherrytomater, agurk, rødløg",
  "Lidt citron og peber"
], [
  "Dræn tun og bønner.",
  "Bland med grønt og smag til med citron og peber.",
  "Server kold."
], {
  calories: 290,
  fat: 4
});

addMeal("frokost", "Æg med spinat og rugbrød", [
  "1 kogt æg",
  "1 håndfuld spinat",
  "1 skive rugbrød"
], [
  "Servér æg og spinat på ristet rugbrød"
], {
  calories: 220,
  fat: 9
});

addMeal("frokost", "Wrap med hummus og grønt", [
  "1 fuldkornswrap",
  "2 spsk hummus",
  "Salat, tomat, agurk"
], [
  "Smør hummus på wrap",
  "Tilsæt grøntsager og rul sammen"
], {
  calories: 270,
  fat: 8
});

addMeal("frokost", "Salat med rejer og citrus", [
  "50g rejer",
  "1 håndfuld blandet salat",
  "1/2 appelsin i tern",
  "1/4 agurk i skiver"
], [
  "Bland salat, appelsin og agurk.",
  "Top med rejer og servér."
], {
  calories: 110,
  fat: 1
});

addMeal("frokost", "Tomatsalat med bønner", [
  "1 dl cherrytomater",
  "1/2 dl kogte hvide bønner",
  "Frisk basilikum"
], [
  "Halvér tomater og bland med bønner og basilikum.",
  "Servér kold."
], {
  calories: 80,
  fat: 0.5
});

addMeal("frokost", "Spidskålssalat med æble", [
  "1 håndfuld snittet spidskål",
  "1/2 æble i tern",
  "Lidt citronsaft"
], [
  "Bland spidskål og æble.",
  "Dryp med citronsaft og servér."
], {
  calories: 45,
  fat: 0.1
});

// SNACK
addMeal("snack", "Gulerodsstave", [
  "2 gulerødder"
], [
  "Skær i stave og servér"
], {
  calories: 50,
  fat: 0.1
});

addMeal("snack", "Frugt mix", [
  "1 banan",
  "1 æble"
], [
  "Skær i stykker og bland"
], {
  calories: 160,
  fat: 0.5
});

addMeal("snack", "Bananis med peanutbutter", [
  "1 banan",
  "1 tsk peanutbutter (naturlig)"
], [
  "Skær banan i bidder, smør lidt peanutbutter på.",
  "Frys 1-2 timer."
], {
  calories: 180,
  fat: 6
});

addMeal("snack", "Knækbrød med ost", [
  "1 stk fuldkorns knækbrød",
  "1 skive ost 17%"
], [
  "Læg ost på knækbrød og servér"
], {
  calories: 120,
  fat: 5
});

addMeal("snack", "Skyr med lidt honning", [
  "1 dl skyr",
  "1 tsk honning"
], [
  "Hæld skyr i skål og top med honning"
], {
  calories: 100,
  fat: 0.3
});

addMeal("snack", "Edamame bønner", [
  "1 dl edamame bønner"
], [
  "Kog bønnerne kort og drys evt. med lidt salt."
], {
  calories: 90,
  fat: 2
});

addMeal("snack", "Agurkestave med citron", [
  "1/2 agurk",
  "Lidt citronsaft"
], [
  "Skær agurk i stave og dryp med citron."
], {
  calories: 15,
  fat: 0
});

addMeal("snack", "Bagte kikærter", [
  "1 dl kogte kikærter",
  "Lidt paprika"
], [
  "Vend kikærter med paprika og bag 15 min ved 200°C."
], {
  calories: 90,
  fat: 1
});

// AFTENSMAD
addMeal("aftensmad", "Kylling med quinoa og broccoli", [
  "100g kylling",
  "1 dl quinoa",
  "1 kop broccoli"
], [
  "Kog quinoa og damp broccoli",
  "Steg kylling og server med quinoa og broccoli"
], {
  calories: 320,
  fat: 8
});

addMeal("aftensmad", "Laks med sød kartoffel", [
  "100g laks",
  "1 lille sød kartoffel"
], [
  "Bag laks og sød kartoffel i ovn ved 180C i 25 min"
], {
  calories: 350,
  fat: 14
});

addMeal("aftensmad", "Vegetarisk lasagne med spinat", [
  "Lasagneplader",
  "Spinatsauce",
  "Revet ost",
  "Tomatsauce"
], [
  "Læg lag af lasagneplader, spinatsauce og tomatsauce.",
  "Drys ost på toppen.",
  "Bag i ovnen 30 min ved 180°C."
], {
  calories: 330,
  fat: 11
});

addMeal("aftensmad", "Kikærtegryde med ris", [
  "1 dl kogte kikærter",
  "1 dl ris",
  "Grøntsager (fx peberfrugt, squash)",
  "Karry og kokosmælk"
], [
  "Steg grøntsager med karry og tilsæt kokosmælk og kikærter.",
  "Server med ris."
], {
  calories: 360,
  fat: 10
});

addMeal("aftensmad", "Æggekage med grøntsager", [
  "2 æg",
  "Grøntsager (tomat, spinat, løg)"
], [
  "Pisk æg og hæld over stegte grøntsager i pande",
  "Bag i ovn eller steg færdig på lav varme"
], {
  calories: 240,
  fat: 9
});

addMeal("aftensmad", "Grøntsagssuppe", [
  "1 gulerod",
  "1/2 porre",
  "1/2 squash",
  "5 dl grøntsagsbouillon"
], [
  "Skær grøntsager i tern.",
  "Kog i bouillon til møre.",
  "Blend suppen og servér varm."
], {
  calories: 80,
  fat: 0.5
});

addMeal("aftensmad", "Torsk med dampede grøntsager", [
  "100g torsk",
  "1 kop broccoli",
  "1/2 rød peberfrugt"
], [
  "Damp torsk og grøntsager i 10-12 min.",
  "Servér straks."
], {
  calories: 120,
  fat: 1
});

addMeal("aftensmad", "Blomkålscouscous med grønt", [
  "1/2 blomkål",
  "1/2 rød peberfrugt",
  "1/2 agurk"
], [
  "Blend blomkål til couscous-struktur.",
  "Bland med finthakket peberfrugt og agurk.",
  "Servér kold."
], {
  calories: 70,
  fat: 0.5
});

addMeal("aftensmad", "Grillet squash med tomatsalsa", [
  "1 squash",
  "2 tomater",
  "Lidt persille"
], [
  "Skær squash i skiver og grill dem.",
  "Hak tomater og persille og bland til salsa.",
  "Servér squash med salsa."
], {
  calories: 60,
  fat: 0.3
});
