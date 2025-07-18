const mealsData = {
  morgenmad: [
    {
      name: "Græsk yoghurt med bær og honning",
      ingredients: [
        "1 dl fedtfattig græsk yoghurt",
        "1 håndfuld blåbær og jordbær",
        "1 teskefuld honning",
        "1 spsk havregryn (valgfrit)"
      ],
      steps: [
        "Hæld yoghurt i en skål.",
        "Top med bær og dryp med honning.",
        "Drys evt. lidt havregryn på."
      ]
    },
    {
      name: "Smoothie med spinat og banan",
      ingredients: [
        "1 banan",
        "1 håndfuld spinat",
        "1 dl mandelmælk",
        "1 teskefuld chiafrø"
      ],
      steps: [
        "Put alt i en blender.",
        "Blend indtil smooth.",
        "Hæld i glas og nyd."
      ]
    },
    {
      name: "Havregrød med æble og kanel",
      ingredients: [
        "1 dl havregryn",
        "2 dl vand eller mandelmælk",
        "1/2 æble i tern",
        "1 tsk kanel"
      ],
      steps: [
        "Kog havregryn med væske.",
        "Tilsæt æbletern og kanel.",
        "Rør rundt og server."
      ]
    },
    {
      name: "Avocado toast med tomat",
      ingredients: [
        "1 skive fuldkornsbrød",
        "1/2 avocado",
        "Cherrytomater",
        "Salt og peber"
      ],
      steps: [
        "Rist brødet.",
        "Mos avocado og smør på brødet.",
        "Top med skiveskårne tomater.",
        "Krydr med salt og peber."
      ]
    },
    {
      name: "Chiagrød med hindbær",
      ingredients: [
        "2 spsk chiafrø",
        "1 dl mandelmælk",
        "1 tsk honning",
        "Håndfuld hindbær"
      ],
      steps: [
        "Bland chiafrø, mandelmælk og honning.",
        "Sæt i køleskab natten over.",
        "Top med friske hindbær."
      ]
    },
    {
      name: "Protein smoothie bowl",
      ingredients: [
        "1/2 banan",
        "1 dl skyr",
        "1 håndfuld frosne bær",
        "Lidt mandelmælk"
      ],
      steps: [
        "Blend alt til en tyk smoothie.",
        "Hæld i skål og pynt med frugt el. nødder.",
        "Ske og chill 🍌"
      ]
    }
  ],
  frokost: [
    {
      name: "Kylling wrap med grønt",
      ingredients: [
        "1 fuldkornstortilla",
        "50g grillet kyllingebryst",
        "Salat, tomat og agurk",
        "1 spsk fedtfattig dressing"
      ],
      steps: [
        "Læg tortilla på en tallerken.",
        "Tilføj kylling og grønt.",
        "Rul sammen og spis!"
      ]
    },
    {
      name: "Æggesalat med rugbrød",
      ingredients: [
        "2 kogte æg",
        "1 spsk skyr",
        "Lidt karry og salt",
        "1 skive rugbrød"
      ],
      steps: [
        "Hak æggene og bland med skyr og krydderier.",
        "Smør på rugbrød.",
        "Spis med grønt ved siden af."
      ]
    },
    {
      name: "Tun salat med bønner",
      ingredients: [
        "1 dåse tun i vand",
        "1 dl kogte kidneybønner",
        "Cherrytomater, agurk, rødløg",
        "Lidt citron og peber"
      ],
      steps: [
        "Dræn tun og bønner.",
        "Bland med grønt og smag til med citron og peber.",
        "Server kold."
      ]
    },
    {
      name: "Quinoasalat med grøntsager",
      ingredients: [
        "1 dl kogt quinoa",
        "Agurk, peberfrugt, tomat",
        "Frisk persille",
        "Citron og olivenolie"
      ],
      steps: [
        "Bland quinoa og hakkede grøntsager.",
        "Tilsæt persille, citron og olie.",
        "Server frisk."
      ]
    },
    {
      name: "Let bønnesalat med majs",
      ingredients: [
        "1 dl kogte hvide bønner",
        "1/2 dl majs",
        "Tomat, agurk og rødløg",
        "1 tsk citronsaft"
      ],
      steps: [
        "Mix alle ingredienser i en skål.",
        "Smag til med citron.",
        "Server kold og frisk."
      ]
    },
    {
      name: "Wrap med hummus og grønt",
      ingredients: [
        "1 fuldkornstortilla",
        "2 spsk hummus",
        "Salat, agurk, revet gulerod"
      ],
      steps: [
        "Smør hummus på tortilla.",
        "Top med grønt og rul den tight.",
        "Perfekt to-go 🌯"
      ]
    }
  ],
  aftensmad: [
    {
      name: "Laks med dampet broccoli og quinoa",
      ingredients: [
        "1 laksestykke (ca. 100g)",
        "1 dl quinoa",
        "1 håndfuld broccoli",
        "Citron og peber"
      ],
      steps: [
        "Kog quinoaen som anvist.",
        "Damp broccolien i 5 min.",
        "Steg eller bag laksen med citron og peber.",
        "Server sammen!"
      ]
    },
    {
      name: "Grøntsags wok med tofu",
      ingredients: [
        "Tofu (100g)",
        "Gulerødder, broccoli, peberfrugt",
        "Sojasauce og ingefær",
        "1 tsk olie"
      ],
      steps: [
        "Skær tofu og grønt.",
        "Steg hurtigt i olie og tilsæt soja + ingefær.",
        "Server varm og sprød!"
      ]
    },
    {
      name: "Kylling med bulgur og grønt",
      ingredients: [
        "100g kyllingebryst",
        "1 dl kogt bulgur",
        "Grøntsager: squash, tomat, løg",
        "1 tsk olie og krydderier"
      ],
      steps: [
        "Steg kylling i olie og krydderier.",
        "Kog bulgur og sautér grønt.",
        "Server som en bowl."
      ]
    },
    {
      name: "Vegetarisk lasagne med spinat",
      ingredients: [
        "Lasagneplader",
        "Spinatsauce",
        "Revet ost",
        "Tomatsauce"
      ],
      steps: [
        "Læg lag af lasagneplader, spinatsauce og tomatsauce.",
        "Drys ost på toppen.",
        "Bag i ovnen 30 min ved 180°C."
      ]
    },
    {
      name: "Blomkålsris med grønt og æg",
      ingredients: [
        "1 dl blomkålsris",
        "1 æg",
        "Grøntsager: peberfrugt, forårsløg, ærter",
        "1 tsk soja"
      ],
      steps: [
        "Steg grøntsager og blomkålsris kort.",
        "Røræg i midten af panden.",
        "Mix det hele og dryp soja på."
      ]
    },
    {
      name: "Bagt sød kartoffel med kikærter",
      ingredients: [
        "1 lille sød kartoffel",
        "1/2 dl kogte kikærter",
        "Spidskål og dressing (skyr + citron)"
      ],
      steps: [
        "Bag kartoflen 25 min ved 200°C.",
        "Top med kikærter og kål.",
        "Dryp med dressing."
      ]
    }
  ],
  snack: [
    {
      name: "Grøntsagsstave med hummus",
      ingredients: ["Gulerødder, agurk, peberfrugt", "3 spsk hummus"],
      steps: ["Skær grønt i stave.", "Dyp i hummus.", "Crunch-time 🥕"]
    },
    {
      name: "Æble med peanutbutter",
      ingredients: ["1 æble", "1 teskefuld naturlig peanutbutter"],
      steps: ["Skær æble i skiver.", "Dyp i peanutbutter.", "Enjoy bro 🍎"]
    },
    {
      name: "Skyr med nødder og bær",
      ingredients: ["1 dl neutral skyr", "En håndfuld blandede bær", "1 tsk hakkede mandler"],
      steps: ["Hæld skyr i en skål.", "Top med bær og nødder.", "Rør og spis!"]
    },
    {
      name: "Riskager med avocado",
      ingredients: [
        "2 riskager",
        "1/2 avocado",
        "Salt og peber"
      ],
      steps: [
        "Mos avocado og smør på riskager.",
        "Krydr med salt og peber.",
        "Spis og nyd!"
      ]
    },
    {
      name: "Frosne druer",
      ingredients: ["En håndfuld druer"],
      steps: [
        "Put druerne i fryseren i 2+ timer.",
        "Spis som sunde is-slik 🍇",
        "Nice og crispy!"
      ]
    },
    {
      name: "Mini skyr-is",
      ingredients: [
        "Skyr naturel",
        "Lidt vaniljepulver",
        "Blendede bær"
      ],
      steps: [
        "Mix det hele sammen.",
        "Hæld i små forme og frys.",
        "Tag op når du craver noget sweet 😋"
      ]
    }
  ]
};
