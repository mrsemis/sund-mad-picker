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

addMeal("morgenmad", "Kiwi og skyr", [
  "1 dl skyr",
  "1 kiwi"
], [
  "Skræl og skær kiwi i skiver.",
  "Top skyr med kiwi."
], {
  calories: 70,
  fat: 0.2
});

addMeal("morgenmad", "Appelsinsalat med mynte", [
  "1 appelsin",
  "Lidt frisk mynte"
], [
  "Skræl appelsinen og skær i skiver.",
  "Drys med hakket mynte."
], {
  calories: 60,
  fat: 0.1
});

addMeal("morgenmad", "Rugbrød med tomat", [
  "1 skive rugbrød",
  "2 skiver tomat"
], [
  "Læg tomatskiver på rugbrød og servér."
], {
  calories: 90,
  fat: 0.5
});

addMeal("morgenmad", "Pære med skyr", [
  "1 pære",
  "1 dl skyr"
], [
  "Skær pære i tern og bland med skyr."
], { calories: 80, fat: 0.2 });

addMeal("morgenmad", "Banan med kanel", [
  "1 banan",
  "Lidt kanel"
], [
  "Skær banan i skiver og drys med kanel."
], { calories: 90, fat: 0.2 });

addMeal("morgenmad", "Melonmix", [
  "1 skive vandmelon",
  "1 skive honningmelon"
], [
  "Skær melon i tern og bland."
], { calories: 60, fat: 0.1 });

addMeal("morgenmad", "Blåbær med havregryn", [
  "1 dl blåbær",
  "2 spsk havregryn"
], [
  "Bland blåbær og havregryn."
], { calories: 70, fat: 0.5 });

addMeal("morgenmad", "Jordbær med skyr", [
  "1 dl jordbær",
  "1 dl skyr"
], [
  "Bland jordbær og skyr."
], { calories: 60, fat: 0.2 });

addMeal("morgenmad", "Æble med mandler", [
  "1 æble",
  "5 mandler"
], [
  "Skær æble i både og drys med hakkede mandler."
], { calories: 90, fat: 1 });

addMeal("morgenmad", "Hytteost med pære", [
  "1 dl hytteost",
  "1/2 pære"
], [
  "Skær pære i tern og bland med hytteost."
], { calories: 70, fat: 0.5 });

addMeal("morgenmad", "Ristet rugbrød med agurk", [
  "1 skive rugbrød",
  "5 skiver agurk"
], [
  "Rist rugbrød og læg agurk på."
], { calories: 80, fat: 0.4 });

addMeal("morgenmad", "Mango med lime", [
  "1/2 mango",
  "Lidt limesaft"
], [
  "Skær mango i tern og dryp med lime."
], { calories: 60, fat: 0.2 });

addMeal("morgenmad", "Papaya med citron", [
  "1/2 papaya",
  "Lidt citronsaft"
], [
  "Skær papaya i tern og dryp med citron."
], { calories: 55, fat: 0.1 });

addMeal("morgenmad", "Banan og blåbær", [
  "1/2 banan",
  "1 dl blåbær"
], [
  "Skær banan i skiver og bland med blåbær."
], { calories: 65, fat: 0.2 });

addMeal("morgenmad", "Kiwi og jordbær", [
  "1 kiwi",
  "1 dl jordbær"
], [
  "Skær kiwi og jordbær i skiver og bland."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Havregrød med bær", [
  "1 dl havregryn",
  "1 dl bær",
  "2 dl vand"
], [
  "Kog havregryn med vand og tilsæt bær."
], { calories: 120, fat: 1 });

addMeal("morgenmad", "Skyr med mango", [
  "1 dl skyr",
  "1/2 mango"
], [
  "Skær mango i tern og bland med skyr."
], { calories: 70, fat: 0.2 });

addMeal("morgenmad", "Æble og blåbær", [
  "1/2 æble",
  "1 dl blåbær"
], [
  "Skær æble i tern og bland med blåbær."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Rugbrød med radise", [
  "1 skive rugbrød",
  "3 radiser"
], [
  "Skær radiser i skiver og læg på rugbrød."
], { calories: 70, fat: 0.3 });

addMeal("morgenmad", "Hytteost med tomat", [
  "1 dl hytteost",
  "1 tomat"
], [
  "Skær tomat i tern og bland med hytteost."
], { calories: 65, fat: 0.5 });

addMeal("morgenmad", "Banan og appelsin", [
  "1/2 banan",
  "1/2 appelsin"
], [
  "Skær i skiver og bland."
], { calories: 60, fat: 0.2 });

addMeal("morgenmad", "Skyr med granatæble", [
  "1 dl skyr",
  "2 spsk granatæblekerner"
], [
  "Bland skyr og granatæble."
], { calories: 60, fat: 0.2 });

addMeal("morgenmad", "Pære og blåbær", [
  "1/2 pære",
  "1 dl blåbær"
], [
  "Skær pære i tern og bland med blåbær."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Appelsin og kiwi", ["1 appelsin", "1 kiwi"], [
  "Skræl og skær i skiver, bland og servér."
], { calories: 70, fat: 0.2 });

addMeal("morgenmad", "Pære og jordbær", ["1 pære", "1 dl jordbær"], [
  "Skær pære i tern og bland med jordbær."
], { calories: 65, fat: 0.2 });

addMeal("morgenmad", "Skyr med blåbær", ["1 dl skyr", "1 dl blåbær"], [
  "Bland skyr og blåbær."
], { calories: 65, fat: 0.2 });

addMeal("morgenmad", "Hytteost med melon", ["1 dl hytteost", "1 skive melon"], [
  "Skær melon i tern og bland med hytteost."
], { calories: 70, fat: 0.3 });

addMeal("morgenmad", "Banan og kiwi", ["1/2 banan", "1 kiwi"], [
  "Skær i skiver og bland."
], { calories: 60, fat: 0.2 });

addMeal("morgenmad", "Æble og pære", ["1/2 æble", "1/2 pære"], [
  "Skær i tern og bland."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Skyr med æble", ["1 dl skyr", "1/2 æble"], [
  "Skær æble i tern og bland med skyr."
], { calories: 60, fat: 0.2 });

addMeal("morgenmad", "Havregrød med pære", ["1 dl havregryn", "1/2 pære", "2 dl vand"], [
  "Kog havregryn med vand og tilsæt pære i tern."
], { calories: 110, fat: 1 });

addMeal("morgenmad", "Blåbær og jordbær", ["1 dl blåbær", "1 dl jordbær"], [
  "Bland bær og servér."
], { calories: 50, fat: 0.2 });

addMeal("morgenmad", "Kiwi og mango", ["1 kiwi", "1/4 mango"], [
  "Skær i tern og bland."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Skyr med hindbær", ["1 dl skyr", "1 dl hindbær"], [
  "Bland skyr og hindbær."
], { calories: 60, fat: 0.2 });

addMeal("morgenmad", "Pære og banan", ["1/2 pære", "1/2 banan"], [
  "Skær i skiver og bland."
], { calories: 60, fat: 0.2 });

addMeal("morgenmad", "Æble og mango", ["1/2 æble", "1/4 mango"], [
  "Skær i tern og bland."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Jordbær og mango", ["1 dl jordbær", "1/4 mango"], [
  "Skær mango i tern og bland med jordbær."
], { calories: 50, fat: 0.2 });

addMeal("morgenmad", "Skyr med pære", ["1 dl skyr", "1/2 pære"], [
  "Skær pære i tern og bland med skyr."
], { calories: 60, fat: 0.2 });

addMeal("morgenmad", "Banan og æble", ["1/2 banan", "1/2 æble"], [
  "Skær i skiver og bland."
], { calories: 60, fat: 0.2 });

addMeal("morgenmad", "Kiwi og blåbær", ["1 kiwi", "1 dl blåbær"], [
  "Skær kiwi i skiver og bland med blåbær."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Hytteost med blåbær", ["1 dl hytteost", "1 dl blåbær"], [
  "Bland hytteost og blåbær."
], { calories: 65, fat: 0.3 });

addMeal("morgenmad", "Melon og jordbær", ["1 skive melon", "1 dl jordbær"], [
  "Skær melon i tern og bland med jordbær."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Skyr med melon", ["1 dl skyr", "1 skive melon"], [
  "Skær melon i tern og bland med skyr."
], { calories: 60, fat: 0.2 });

addMeal("morgenmad", "Banan og hindbær", ["1/2 banan", "1 dl hindbær"], [
  "Skær banan i skiver og bland med hindbær."
], { calories: 60, fat: 0.2 });

addMeal("morgenmad", "Æble og blåbær", ["1/2 æble", "1 dl blåbær"], [
  "Skær æble i tern og bland med blåbær."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Kiwi og jordbær", ["1 kiwi", "1 dl jordbær"], [
  "Skær kiwi og jordbær i skiver og bland."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Pære og mango", ["1/2 pære", "1/4 mango"], [
  "Skær i tern og bland."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Skyr med banan", ["1 dl skyr", "1/2 banan"], [
  "Skær banan i skiver og bland med skyr."
], { calories: 65, fat: 0.2 });

addMeal("morgenmad", "Hytteost med jordbær", ["1 dl hytteost", "1 dl jordbær"], [
  "Bland hytteost og jordbær."
], { calories: 65, fat: 0.3 });

addMeal("morgenmad", "Melon og blåbær", ["1 skive melon", "1 dl blåbær"], [
  "Skær melon i tern og bland med blåbær."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Banan og melon", ["1/2 banan", "1 skive melon"], [
  "Skær i skiver og bland."
], { calories: 60, fat: 0.2 });

addMeal("morgenmad", "Æble og jordbær", ["1/2 æble", "1 dl jordbær"], [
  "Skær æble i tern og bland med jordbær."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Kiwi og pære", ["1 kiwi", "1/2 pære"], [
  "Skær i tern og bland."
], { calories: 55, fat: 0.2 });

addMeal("morgenmad", "Skyr med kiwi", ["1 dl skyr", "1 kiwi"], [
  "Skær kiwi i skiver og bland med skyr."
], { calories: 60, fat: 0.2 });

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

addMeal("frokost", "Spinat og tomatsalat", [
  "1 håndfuld frisk spinat",
  "5 cherrytomater",
  "Lidt citronsaft"
], [
  "Skyl spinat og tomater.",
  "Halvér tomater og bland med spinat.",
  "Dryp med citronsaft."
], {
  calories: 35,
  fat: 0.2
});

addMeal("frokost", "Kikærtesalat med agurk", [
  "1 dl kogte kikærter",
  "1/4 agurk",
  "Lidt persille"
], [
  "Skær agurk i tern.",
  "Bland med kikærter og hakket persille."
], {
  calories: 80,
  fat: 0.7
});

addMeal("frokost", "Rødbedesalat", [
  "1 lille kogt rødbede",
  "1/2 æble",
  "Lidt citronsaft"
], [
  "Skær rødbede og æble i tern.",
  "Bland og dryp med citronsaft."
], {
  calories: 60,
  fat: 0.2
});

addMeal("frokost", "Gulerodssalat med citron", [
  "1 stor gulerod",
  "Lidt citronsaft"
], [
  "Riv gulerod og dryp med citron."
], { calories: 35, fat: 0.1 });

addMeal("frokost", "Tomat og agurksalat", [
  "1 tomat",
  "1/4 agurk"
], [
  "Skær tomat og agurk i tern og bland."
], { calories: 30, fat: 0.1 });

addMeal("frokost", "Spidskålssalat med gulerod", [
  "1 håndfuld snittet spidskål",
  "1/2 gulerod"
], [
  "Riv gulerod og bland med spidskål."
], { calories: 30, fat: 0.1 });

addMeal("frokost", "Bønnesalat med persille", [
  "1 dl kogte hvide bønner",
  "Lidt persille"
], [
  "Bland bønner og hakket persille."
], { calories: 70, fat: 0.3 });

addMeal("frokost", "Råkost med æble", [
  "1 gulerod",
  "1/2 æble"
], [
  "Riv gulerod og æble og bland."
], { calories: 40, fat: 0.1 });

addMeal("frokost", "Salat med radise og agurk", [
  "3 radiser",
  "1/4 agurk"
], [
  "Skær radiser og agurk i skiver og bland."
], { calories: 20, fat: 0.1 });

addMeal("frokost", "Broccolisalat med citron", [
  "1 dl broccoli",
  "Lidt citronsaft"
], [
  "Damp broccoli let og dryp med citron."
], { calories: 30, fat: 0.1 });

addMeal("frokost", "Kikærtesalat med tomat", [
  "1 dl kogte kikærter",
  "1 tomat"
], [
  "Skær tomat i tern og bland med kikærter."
], { calories: 80, fat: 0.7 });

addMeal("frokost", "Spinat med appelsin", [
  "1 håndfuld spinat",
  "1/2 appelsin"
], [
  "Bland spinat og appelsin i tern."
], { calories: 35, fat: 0.2 });

addMeal("frokost", "Rødbede og æblesalat", [
  "1 lille kogt rødbede",
  "1/2 æble"
], [
  "Skær i tern og bland."
], { calories: 45, fat: 0.1 });

addMeal("frokost", "Tomatsalat med løg", [
  "1 tomat",
  "1/4 rødløg"
], [
  "Skær tomat og løg i skiver og bland."
], { calories: 25, fat: 0.1 });

addMeal("frokost", "Agurkesalat med dild", [
  "1/2 agurk",
  "Lidt dild"
], [
  "Skær agurk i skiver og drys med dild."
], { calories: 15, fat: 0.1 });

addMeal("frokost", "Bønnesalat med tomat", [
  "1 dl kogte grønne bønner",
  "1 tomat"
], [
  "Skær tomat i tern og bland med bønner."
], { calories: 40, fat: 0.2 });

addMeal("frokost", "Spidskål og æblesalat", [
  "1 håndfuld snittet spidskål",
  "1/2 æble"
], [
  "Bland spidskål og æble i tern."
], { calories: 35, fat: 0.1 });

addMeal("frokost", "Kikærtesalat med agurk og tomat", [
  "1 dl kogte kikærter",
  "1/4 agurk",
  "1 tomat"
], [
  "Skær agurk og tomat i tern og bland med kikærter."
], { calories: 90, fat: 0.8 });

addMeal("frokost", "Spinat og peberfrugt", [
  "1 håndfuld spinat",
  "1/2 rød peberfrugt"
], [
  "Skær peberfrugt i tern og bland med spinat."
], { calories: 25, fat: 0.1 });

addMeal("frokost", "Råkost med appelsin", [
  "1 gulerod",
  "1/2 appelsin"
], [
  "Riv gulerod og bland med appelsin i tern."
], { calories: 40, fat: 0.1 });

addMeal("frokost", "Broccoli og gulerodssalat", [
  "1 dl broccoli",
  "1/2 gulerod"
], [
  "Damp broccoli let og riv gulerod, bland."
], { calories: 35, fat: 0.1 });

addMeal("frokost", "Tomat og løgsalat", [
  "1 tomat",
  "1/4 rødløg"
], [
  "Skær i skiver og bland."
], { calories: 25, fat: 0.1 });

addMeal("frokost", "Agurk og peberfrugt", [
  "1/2 agurk",
  "1/2 rød peberfrugt"
], [
  "Skær i tern og bland."
], { calories: 20, fat: 0.1 });

addMeal("frokost", "Bønnesalat med citron", [
  "1 dl kogte hvide bønner",
  "Lidt citronsaft"
], [
  "Bland bønner med citronsaft."
], { calories: 60, fat: 0.2 });

addMeal("frokost", "Spidskål og radisesalat", [
  "1 håndfuld snittet spidskål",
  "3 radiser"
], [
  "Skær radiser i skiver og bland med spidskål."
], { calories: 25, fat: 0.1 });

// SNACK
addMeal("snack", "Gulerodsstave", ["2 gulerødder"], [
  "Skær i stave og servér"
], { calories: 50, fat: 0.1 });

addMeal("snack", "Agurkestave", ["1/2 agurk"], [
  "Skær i stave og servér"
], { calories: 10, fat: 0 });

addMeal("snack", "Peberfrugtstave", ["1/2 rød peberfrugt"], [
  "Skær i stave og servér"
], { calories: 15, fat: 0.1 });

addMeal("snack", "Cherrytomater", ["1 dl cherrytomater"], [
  "Skyl og spis."
], { calories: 20, fat: 0.1 });

addMeal("snack", "Radiser", ["5 radiser"], [
  "Skyl og spis."
], { calories: 10, fat: 0.1 });

addMeal("snack", "Selleristave", ["1 stilk bladselleri"], [
  "Skær i stave og spis."
], { calories: 8, fat: 0 });

addMeal("snack", "Melontern", ["1 skive melon"], [
  "Skær i tern og spis."
], { calories: 30, fat: 0.1 });

addMeal("snack", "Æbletern", ["1/2 æble"], [
  "Skær i tern og spis."
], { calories: 25, fat: 0.1 });

addMeal("snack", "Gulerodsrondeller", ["1 gulerod"], [
  "Skær i skiver og spis."
], { calories: 25, fat: 0.1 });

addMeal("snack", "Agurkerondeller", ["1/2 agurk"], [
  "Skær i skiver og spis."
], { calories: 10, fat: 0 });

addMeal("snack", "Peberfrugttern", ["1/2 rød peberfrugt"], [
  "Skær i tern og spis."
], { calories: 15, fat: 0.1 });

addMeal("snack", "Appelsinbåde", ["1/2 appelsin"], [
  "Skær i både og spis."
], { calories: 30, fat: 0.1 });

addMeal("snack", "Blåbær", ["1 dl blåbær"], [
  "Spis som snack."
], { calories: 35, fat: 0.1 });

addMeal("snack", "Jordbær", ["1 dl jordbær"], [
  "Spis som snack."
], { calories: 25, fat: 0.1 });

addMeal("snack", "Vindruer", ["1 håndfuld vindruer"], [
  "Spis som snack."
], { calories: 40, fat: 0.1 });

addMeal("snack", "Pæretern", ["1/2 pære"], [
  "Skær i tern og spis."
], { calories: 30, fat: 0.1 });

addMeal("snack", "Kiwi", ["1 kiwi"], [
  "Skræl og spis."
], { calories: 35, fat: 0.1 });

addMeal("snack", "Mango", ["1/4 mango"], [
  "Skær i tern og spis."
], { calories: 25, fat: 0.1 });

addMeal("snack", "Papaya", ["1/4 papaya"], [
  "Skær i tern og spis."
], { calories: 20, fat: 0.1 });

addMeal("snack", "Broccolibuketter", ["1 dl broccoli"], [
  "Spis rå eller dampet."
], { calories: 15, fat: 0.1 });

addMeal("snack", "Bladselleri med citron", ["1 stilk bladselleri", "Lidt citronsaft"], [
  "Dryp citronsaft på selleri og spis."
], { calories: 10, fat: 0 });

addMeal("snack", "Tomatbåde", ["1 tomat"], [
  "Skær i både og spis."
], { calories: 15, fat: 0.1 });

addMeal("snack", "Råkostmix", ["1/2 gulerod", "1/2 æble"], [
  "Riv og bland."
], { calories: 25, fat: 0.1 });

addMeal("snack", "Frosne vindruer", ["1 håndfuld vindruer"], [
  "Frys vindruer og spis som snack."
], { calories: 40, fat: 0.1 });

addMeal("snack", "Æblebåde med kanel", ["1 æble", "Lidt kanel"], [
  "Skær æble i både og drys med kanel."
], { calories: 55, fat: 0.2 });

addMeal("snack", "Peberfrugt og agurk", ["1/2 rød peberfrugt", "1/2 agurk"], [
  "Skær i stave og spis."
], { calories: 20, fat: 0.1 });

addMeal("snack", "Gulerod og selleri", ["1 gulerod", "1 stilk bladselleri"], [
  "Skær i stave og spis."
], { calories: 25, fat: 0.1 });

addMeal("snack", "Jordbær og blåbær", ["1 dl jordbær", "1 dl blåbær"], [
  "Bland og spis."
], { calories: 40, fat: 0.1 });

addMeal("snack", "Melon og pære", ["1 skive melon", "1/2 pære"], [
  "Skær i tern og bland."
], { calories: 35, fat: 0.1 });

addMeal("snack", "Kiwi og mango", ["1 kiwi", "1/4 mango"], [
  "Skær i tern og bland."
], { calories: 30, fat: 0.1 });

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

addMeal("aftensmad", "Bagte tomater med timian", [
  "4 tomater",
  "Lidt frisk timian"
], [
  "Halvér tomater og drys med timian.",
  "Bag 15 min ved 180°C."
], {
  calories: 50,
  fat: 0.3
});

addMeal("aftensmad", "Stegte grønne bønner", [
  "1 dl grønne bønner",
  "Lidt citronsaft"
], [
  "Steg bønner kort på pande.",
  "Dryp med citronsaft før servering."
], {
  calories: 35,
  fat: 0.2
});

addMeal("aftensmad", "Broccolisalat med æble", [
  "1 dl broccoli i små buketter",
  "1/2 æble i tern"
], [
  "Bland broccoli og æble.",
  "Servér rå eller damp broccoli let først."
], {
  calories: 45,
  fat: 0.2
});

addMeal("aftensmad", "Dampet blomkål", [
  "1/2 blomkål"
], [
  "Del i buketter og damp."
], { calories: 40, fat: 0.2 });

addMeal("aftensmad", "Bagte rodfrugter", [
  "1 gulerod",
  "1/2 pastinak",
  "1/2 rødbede"
], [
  "Skær i tern og bag 20 min ved 200°C."
], { calories: 70, fat: 0.2 });

addMeal("aftensmad", "Grøntsagsfad", [
  "1/2 squash",
  "1/2 aubergine",
  "1/2 rød peberfrugt"
], [
  "Skær i skiver og bag 20 min ved 200°C."
], { calories: 60, fat: 0.3 });

addMeal("aftensmad", "Tomatsuppe", [
  "2 tomater",
  "2 dl grøntsagsbouillon"
], [
  "Kog tomater i bouillon og blend."
], { calories: 50, fat: 0.2 });

addMeal("aftensmad", "Dampet broccoli", [
  "1 kop broccoli"
], [
  "Damp og servér."
], { calories: 30, fat: 0.1 });

addMeal("aftensmad", "Grøntsagswok", [
  "1/2 squash",
  "1/2 rød peberfrugt",
  "1 gulerod"
], [
  "Skær i strimler og steg kort på pande."
], { calories: 60, fat: 0.3 });

addMeal("aftensmad", "Bagte aubergineskiver", [
  "1/2 aubergine"
], [
  "Skær i skiver og bag 15 min ved 200°C."
], { calories: 35, fat: 0.2 });

addMeal("aftensmad", "Spidskålssauté", [
  "1 håndfuld snittet spidskål"
], [
  "Steg kort på pande."
], { calories: 20, fat: 0.1 });

addMeal("aftensmad", "Ratatouille", [
  "1/2 squash",
  "1/2 aubergine",
  "1 tomat"
], [
  "Skær i tern og steg sammen."
], { calories: 60, fat: 0.3 });

addMeal("aftensmad", "Grøntsagsgryde", [
  "1/2 gulerod",
  "1/2 porre",
  "1/2 pastinak"
], [
  "Skær i tern og kog i lidt bouillon."
], { calories: 50, fat: 0.2 });

addMeal("aftensmad", "Bagte peberfrugter", [
  "1 rød peberfrugt"
], [
  "Skær i både og bag 15 min ved 200°C."
], { calories: 30, fat: 0.1 });

addMeal("aftensmad", "Dampet grønne bønner", [
  "1 dl grønne bønner"
], [
  "Damp og servér."
], { calories: 20, fat: 0.1 });

addMeal("aftensmad", "Blomkålssalat", [
  "1/2 blomkål",
  "1/2 æble"
], [
  "Riv blomkål og skær æble i tern, bland."
], { calories: 45, fat: 0.2 });

addMeal("aftensmad", "Tomat og løgsalat", [
  "2 tomater",
  "1/4 rødløg"
], [
  "Skær i skiver og bland."
], { calories: 30, fat: 0.1 });

addMeal("aftensmad", "Bagte gulerødder", [
  "2 gulerødder"
], [
  "Skær i stave og bag 20 min ved 200°C."
], { calories: 40, fat: 0.1 });

addMeal("aftensmad", "Squashspaghetti", [
  "1/2 squash"
], [
  "Lav strimler med spiralizer og damp kort."
], { calories: 20, fat: 0.1 });

addMeal("aftensmad", "Grøntsagsmix", [
  "1/2 broccoli",
  "1/2 blomkål",
  "1/2 gulerod"
], [
  "Damp og servér."
], { calories: 50, fat: 0.2 });

addMeal("aftensmad", "Bagte løg", [
  "1 løg"
], [
  "Skær i både og bag 15 min ved 200°C."
], { calories: 25, fat: 0.1 });

addMeal("aftensmad", "Dampet porre", [
  "1/2 porre"
], [
  "Skær i skiver og damp."
], { calories: 15, fat: 0.1 });

addMeal("aftensmad", "Grøntsagsstave", [
  "1/2 gulerod",
  "1/2 agurk",
  "1/2 rød peberfrugt"
], [
  "Skær i stave og servér."
], { calories: 30, fat: 0.1 });
