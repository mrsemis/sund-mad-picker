const mealsData = {
  morgenmad: [],
  frokost: [],
  aftensmad: [],
  snack: []
};

function addMeal(category, name, ingredients, steps) {
  mealsData[category].push({ name, ingredients, steps });
}

addMeal("morgenmad", "Græsk yoghurt med bær og honning", [
  "1 dl fedtfattig græsk yoghurt",
  "1 håndfuld blåbær og jordbær",
  "1 teskefuld honning",
  "1 spsk havregryn (valgfrit)"
], [
  "Hæld yoghurt i en skål.",
  "Top med bær og dryp med honning.",
  "Drys evt. lidt havregryn på."
]);

addMeal("morgenmad", "Smoothie med spinat og banan", [
  "1 banan", "1 håndfuld spinat", "1 dl mandelmælk", "1 teskefuld chiafrø"
], [
  "Put alt i en blender.",
  "Blend indtil smooth.",
  "Hæld i glas og nyd."
]);

addMeal("morgenmad", "Havregrød med æble og kanel", [
  "1 dl havregryn", "2 dl vand eller mandelmælk", "1/2 æble i tern", "1 tsk kanel"
], [
  "Kog havregryn med væske.",
  "Tilsæt æbletern og kanel.",
  "Rør rundt og server."
]);

addMeal("morgenmad", "Avocado toast med tomat", [
  "1 skive fuldkornsbrød", "1/2 avocado", "Cherrytomater", "Salt og peber"
], [
  "Rist brødet.",
  "Mos avocado og smør på brødet.",
  "Top med skiveskårne tomater.",
  "Krydr med salt og peber."
]);

addMeal("morgenmad", "Chiagrød med hindbær", [
  "2 spsk chiafrø", "1 dl mandelmælk", "1 tsk honning", "Håndfuld hindbær"
], [
  "Bland chiafrø, mandelmælk og honning.",
  "Sæt i køleskab natten over.",
  "Top med friske hindbær."
]);

addMeal("morgenmad", "Protein smoothie bowl", [
  "1/2 banan", "1 dl skyr", "1 håndfuld frosne bær", "Lidt mandelmælk"
], [
  "Blend alt til en tyk smoothie.",
  "Hæld i skål og pynt med frugt el. nødder.",
  "Ske og chill 🍌"
]);

addMeal("frokost", "Kylling wrap med grønt", [
  "1 fuldkornstortilla", "50g grillet kyllingebryst", "Salat, tomat og agurk", "1 spsk fedtfattig dressing"
], [
  "Læg tortilla på en tallerken.",
  "Tilføj kylling og grønt.",
  "Rul sammen og spis!"
]);

addMeal("frokost", "Æggesalat med rugbrød", [
  "2 kogte æg", "1 spsk skyr", "Lidt karry og salt", "1 skive rugbrød"
], [
  "Hak æggene og bland med skyr og krydderier.",
  "Smør på rugbrød.",
  "Spis med grønt ved siden af."
]);

addMeal("frokost", "Tun salat med bønner", [
  "1 dåse tun i vand", "1 dl kogte kidneybønner", "Cherrytomater, agurk, rødløg", "Lidt citron og peber"
], [
  "Dræn tun og bønner.",
  "Bland med grønt og smag til med citron og peber.",
  "Server kold."
]);

addMeal("frokost", "Quinoasalat med grøntsager", [
  "1 dl kogt quinoa", "Agurk, peberfrugt, tomat", "Frisk persille", "Citron og olivenolie"
], [
  "Bland quinoa og hakkede grøntsager.",
  "Tilsæt persille, citron og olie.",
  "Server frisk."
]);

addMeal("frokost", "Let bønnesalat med majs", [
  "1 dl kogte hvide bønner", "1/2 dl majs", "Tomat, agurk og rødløg", "1 tsk citronsaft"
], [
  "Mix alle ingredienser i en skål.",
  "Smag til med citron.",
  "Server kold og frisk."
]);

addMeal("frokost", "Wrap med hummus og grønt", [
  "1 fuldkornstortilla", "2 spsk hummus", "Salat, agurk, revet gulerod"
], [
  "Smør hummus på tortilla.",
  "Top med grønt og rul den tight.",
  "Perfekt to-go 🌯"
]);

addMeal("aftensmad", "Laks med dampet broccoli og quinoa", [
  "1 laksestykke (ca. 100g)", "1 dl quinoa", "1 håndfuld broccoli", "Citron og peber"
], [
  "Kog quinoaen som anvist.",
  "Damp broccolien i 5 min.",
  "Steg eller bag laksen med citron og peber.",
  "Server sammen!"
]);

addMeal("aftensmad", "Grøntsags wok med tofu", [
  "Tofu (100g)", "Gulerødder, broccoli, peberfrugt", "Sojasauce og ingefær", "1 tsk olie"
], [
  "Skær tofu og grønt.",
  "Steg hurtigt i olie og tilsæt soja + ingefær.",
  "Server varm og sprød!"
]);

addMeal("aftensmad", "Kylling med bulgur og grønt", [
  "100g kyllingebryst", "1 dl kogt bulgur", "Grøntsager: squash, tomat, løg", "1 tsk olie og krydderier"
], [
  "Steg kylling i olie og krydderier.",
  "Kog bulgur og sautér grønt.",
  "Server som en bowl."
]);

addMeal("aftensmad", "Vegetarisk lasagne med spinat", [
  "Lasagneplader", "Spinatsauce", "Revet ost", "Tomatsauce"
], [
  "Læg lag af lasagneplader, spinatsauce og tomatsauce.",
  "Drys ost på toppen.",
  "Bag i ovnen 30 min ved 180°C."
]);

addMeal("aftensmad", "Blomkålsris med grønt og æg", [
  "1 dl blomkålsris", "1 æg", "Grøntsager: peberfrugt, forårsløg, ærter", "1 tsk soja"
], [
  "Steg grøntsager og blomkålsris kort.",
  "Røræg i midten af panden.",
  "Mix det hele og dryp soja på."
]);

addMeal("aftensmad", "Bagt sød kartoffel med kikærter", [
  "1 lille sød kartoffel", "1/2 dl kogte kikærter", "Spidskål og dressing (skyr + citron)"
], [
  "Bag kartoflen 25 min ved 200°C.",
  "Top med kikærter og kål.",
  "Dryp med dressing."
]);

addMeal("snack", "Grøntsagsstave med hummus", [
  "Gulerødder, agurk, peberfrugt", "3 spsk hummus"
], [
  "Skær grønt i stave.",
  "Dyp i hummus.",
  "Crunch-time 🥕"
]);

addMeal("snack", "Æble med peanutbutter", [
  "1 æble", "1 teskefuld naturlig peanutbutter"
], [
  "Skær æble i skiver.",
  "Dyp i peanutbutter.",
  "Enjoy bro 🍎"
]);

addMeal("snack", "Skyr med nødder og bær", [
  "1 dl neutral skyr", "En håndfuld blandede bær", "1 tsk hakkede mandler"
], [
  "Hæld skyr i en skål.",
  "Top med bær og nødder.",
  "Rør og spis!"
]);

addMeal("snack", "Riskager med avocado", [
  "2 riskager", "1/2 avocado", "Salt og peber"
], [
  "Mos avocado og smør på riskager.",
  "Krydr med salt og peber.",
  "Spis og nyd!"
]);

addMeal("snack", "Frosne druer", [
  "En håndfuld druer"
], [
  "Put druerne i fryseren i 2+ timer.",
  "Spis som sunde is-slik 🍇",
  "Nice og crispy!"
]);

addMeal("snack", "Mini skyr-is", [
  "Skyr naturel", "Lidt vaniljepulver", "Blendede bær"
], [
  "Mix det hele sammen.",
  "Hæld i små forme og frys.",
  "Tag op når du craver noget sweet 😋"
]);
addMeal("morgenmad", "Proteinpandekager med banan", [
  "1 banan", "2 æg", "1 tsk havregryn", "Kanel (valgfrit)"
], [
  "Mos banan og pisk med æg og havregryn.",
  "Steg små pandekager på nonstick pande.",
  "Top med lidt frugt eller skyr."
]);

addMeal("morgenmad", "Overnight oats med bær", [
  "1 dl havregryn", "1 dl mandelmælk", "1 tsk chiafrø", "Håndfuld bær"
], [
  "Mix alt i en beholder.",
  "Sæt i køleskab natten over.",
  "Rør rundt og top med ekstra bær hvis du vil."
]);
addMeal("frokost", "Spinat omelet wrap", [
  "2 æg", "1 håndfuld frisk spinat", "Salt og peber", "1 fuldkornstortilla"
], [
  "Pisk æg og steg med spinat.",
  "Rul omeletten ind i tortillaen.",
  "Spis som wrap eller del i slices."
]);

addMeal("frokost", "Kikærte salat med avocado", [
  "1/2 avocado", "1 dl kogte kikærter", "Tomat, rødløg, agurk", "Citron og salt"
], [
  "Mos avocado og mix med kikærter og grønt.",
  "Smag til med citron og salt.",
  "Server som salat eller i pitabrød."
]);
addMeal("aftensmad", "Bagte grøntsager med kikærter", [
  "Gulerødder, squash, peberfrugt", "1 dl kogte kikærter", "1 tsk olivenolie", "Krydderier"
], [
  "Skær grøntsager og læg på bagepapir.",
  "Dryp olie og drys krydderier.",
  "Bag 20 min ved 200°C og mix med kikærter."
]);

addMeal("aftensmad", "Stegt blomkål med linser", [
  "1/2 blomkålshoved", "1 dl grønne linser (kogte)", "Spidskommen og paprika", "Lidt citronsaft"
], [
  "Del blomkål i buketter og steg møre.",
  "Tilsæt linser og krydderier.",
  "Dryp citron over og server varmt."
]);
addMeal("snack", "Bananis med peanutbutter", [
  "1 banan", "1 tsk peanutbutter (naturlig)", "Tandstikker eller ispinde"
], [
  "Skær banan i bidder, smør lidt peanutbutter på.",
  "Frys 1-2 timer med pind i.",
  "Snack ready 🧊🍌"
]);

addMeal("snack", "Popcorn med krydderier", [
  "3 spsk popcornkerner", "1 tsk olie", "Paprika eller chili (valgfrit)"
], [
  "Pop popcorn i gryde eller mikro uden smør.",
  "Drys med lidt krydderi.",
  "Snack on uden skyld 🍿"
]);
