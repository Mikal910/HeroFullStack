const heroes = [
    {
        name: 'superman',
        powers: 'Super strength, Flight, X-ray vision',
        birthName: 'Clark Kent',
        birthLocation: 'Kryptonopolis, Krypton',
        height: '6 ft 3 in'
    },
    {
        name: 'batman',
        powers: 'Intelligence, Martial arts, Wealth',
        birthName: 'Bruce Wayne',
        birthLocation: 'Gotham City, New Jersey',
        height: '6 ft 2 in'
    },
    {
        name: 'spiderman',
        powers: 'Super strength, Spider-sense, Wall Crawling',
        birthName: 'Peter Parker',
        birthLocation: 'Queens, New York',
        height: '5 ft 10 in'
    },
    {
        name: 'sentry',
        powers: 'Super strength, Invulnerability, Energy manipulation',
        birthName: 'Robert Reynolds',
        birthLocation: 'USA',
        height: '6 ft 4 in'
    },
    {
        name: 'ironman',
        powers: 'Genius inventor, Powered armor suits',
        birthName: 'Tony Stark',
        birthLocation: 'Long Island, New York',
        height: '6 ft 1 in'
    },
    {
        name: 'thor',
        powers: 'God of Thunder, Wields Mjolnir',
        birthName: 'Thor Odinson',
        birthLocation: 'Asgard',
        height: '6 ft 6 in'
    },
    {
        name: 'hulk',
        powers: 'Super strength, Transformation upon anger',
        birthName: 'Bruce Banner',
        birthLocation: 'Dayton, Ohio',
        height: '8 ft 3 in (Hulk), 5 ft 9 in (Bruce Banner)'
    },
    {
        name: 'blackwidow',
        powers: 'Skilled spy, Hand-to-hand combatant',
        birthName: 'Natasha Romanoff',
        birthLocation: 'Stalingrad, Russia',
        height: '5 ft 7 in'
    },
    {
        name: 'doctorstrange',
        powers: 'Master of the mystic arts',
        birthName: 'Stephen Strange',
        birthLocation: 'Philadelphia, Pennsylvania',
        height: '6 ft 2 in'
    },
    {
        name: 'scarletwitch',
        powers: 'Reality manipulation, Chaos magic',
        birthName: 'Wanda Maximoff',
        birthLocation: 'Sokovia',
        height: '5 ft 7 in'
    },
    {
        name: 'antman',
        powers: 'Shrinks and grows with Pym particles',
        birthName: 'Scott Lang',
        birthLocation: 'Coral Gables, Florida',
        height: '6 ft 0 in'
    },
    {
        name: 'wolverine',
        powers: 'Healing factor, Adamantium claws, Heightened senses',
        birthName: 'Logan, James Howlett',
        birthLocation: 'Cold Lake, Alberta, Canada',
        height: '5 ft 3 in'
    },
    {
        name: 'captainmarvel',
        powers: 'Super strength, Flight, Energy manipulation',
        birthName: 'Carol Danvers',
        birthLocation: 'Boston, Massachusetts',
        height: '5 ft 11 in'
    },
    {
        name: 'hawkeye',
        powers: 'Master archer, Skilled tactician',
        birthName: 'Clint Barton',
        birthLocation: 'Waverly, Iowa',
        height: '6 ft 3 in'
    },
    {
        name: 'falcon',
        powers: 'Flight via winged suit, Combat expertise',
        birthName: 'Sam Wilson',
        birthLocation: 'Harlem, New York City',
        height: '6 ft 2 in'
    },
    {
        name: 'blackpanther',
        powers: 'Enhanced agility, Senses, Skilled fighter',
        birthName: 'T\'Challa',
        birthLocation: 'Wakanda',
        height: '6 ft 0 in'
    },
    {
        name: 'shehulk',
        powers: 'Super strength, Lawyer, Similar abilities to Hulk',
        birthName: 'Jennifer Walters',
        birthLocation: 'Los Angeles, California',
        height: '6 ft 7 in'
    },
    {
        name: 'daredevil',
        powers: 'Enhanced senses, Skilled martial artist',
        birthName: 'Matt Murdock',
        birthLocation: 'Hell\'s Kitchen, New York City',
        height: '6 ft 0 in'
    },
    {
        name: 'aquaman',
        powers: 'Atlantean strength, Control over marine life',
        birthName: 'Arthur Curry',
        birthLocation: 'Atlantis',
        height: '6 ft 1 in'
    },
    {
        name: 'greenlantern',
        powers: 'Power ring constructs, Enhanced willpower',
        birthName: 'Hal Jordan',
        birthLocation: 'Coast City, California',
        height: '6 ft 1 in'
    },
    {
        name: 'wonderwoman',
        powers: 'Super strength, Agility, Lasso of Truth',
        birthName: 'Diana Prince',
        birthLocation: 'Themyscira',
        height: '6 ft 0 in'
    },
    {
        name: 'theflash',
        powers: 'Super speed, Time manipulation',
        birthName: 'Barry Allen',
        birthLocation: 'Central City, Missouri',
        height: '6 ft 0 in'
    },
    {
        name: 'martianmanhunter',
        powers: 'Telepathy, Shapeshifting, Super strength',
        birthName: 'J\'onn J\'onzz',
        birthLocation: 'Mars',
        height: '6 ft 7 in'
    },
    {
        name: 'greenarrow',
        powers: 'Expert archer, Skilled tactician',
        birthName: 'Oliver Queen',
        birthLocation: 'Star City, California',
        height: '5 ft 11 in'
    },
    {
        name: 'shazam',
        powers: 'Super strength, Lightning manipulation, Wisdom',
        birthName: 'Billy Batson',
        birthLocation: 'Fawcett City, Wisconsin',
        height: '6 ft 2 in'
    },
    {
        name: 'cyborg',
        powers: 'Cybernetic enhancements, Technopathy',
        birthName: 'Victor Stone',
        birthLocation: 'Detroit, Michigan',
        height: '6 ft 6 in'
    },
    {
        name: 'zatanna',
        powers: 'Reality-altering magic',
        birthName: 'Zatanna Zatara',
        birthLocation: 'Gotham City',
        height: '5 ft 7 in'
    },
    {
        name: 'nightwing',
        powers: 'Skilled acrobat, Martial artist',
        birthName: 'Dick Grayson',
        birthLocation: 'Blüdhaven, New Jersey',
        height: '5 ft 10 in'
    },
    {
        name: 'supergirl',
        powers: 'Super strength, Heat vision, Invulnerability',
        birthName: 'Kara Zor-El',
        birthLocation: 'Argo City, Krypton',
        height: '5 ft 11 in'
    },
    {
        name: 'bluebeetle',
        powers: 'Alien tech suit, Strength, Flight',
        birthName: 'Jaime Reyes',
        birthLocation: 'El Paso, Texas',
        height: '5 ft 9 in'
    },
    {
        name: 'invincible',
        powers: 'Super strength, Flight, Durability',
        birthName: 'Mark Grayson',
        birthLocation: 'Earth',
        height: '5 ft 11 in'
    },
    {
        name: 'omniman',
        powers: 'Super strength, Flight, Near-invulnerability',
        birthName: 'Nolan Grayson',
        birthLocation: 'Viltrum',
        height: '6 ft 2 in'
    },
    {
        name: 'homelander',
        powers: 'Super strength, Flight, Heat vision',
        birthName: 'John',
        birthLocation: 'USA',
        height: '6 ft 3 in'
    },
    {
        name: 'queenmaeve',
        powers: 'Super strength, Enhanced durability, Combat skills',
        birthName: 'Maggie Shaw',
        birthLocation: 'USA',
        height: '6 ft 1 in'
    },
    {
        name: 'atom eve',
        powers: 'Molecular manipulation, Flight, Healing',
        birthName: 'Samantha Eve Wilkins',
        birthLocation: 'Earth',
        height: '5 ft 9 in'
    },
    {
        name: 'the deep',
        powers: 'Aquatic telepathy, Enhanced swimming, Underwater breathing',
        birthName: 'Kevin Moskowitz',
        birthLocation: 'USA',
        height: '6 ft 0 in'
    },
    {
        name: 'black noir',
        powers: 'Enhanced strength, Expert combatant, Stealth',
        birthName: 'Earving',
        birthLocation: 'USA',
        height: '6 ft 2 in'
    },
]
module.exports=heroes