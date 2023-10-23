let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        'season one':
        [
            {
                episode_title: 'Simpsons Roasting on an Open Fire',
                aired: '1989-12-17'
            },
            {
                episode_title: 'Bart the Genius',
                aired: '1990-01-01'
            },
        ],
        'season two': [/* ... */],
        'season three': [/* ... */]
    },
    currently_running: true,
    characters: [
        'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
    ]
};

const { characters, seasons} = theSimpsons;
console.log(characters);

characters.push ('Meo');
characters[5] = 'Moe';
console.log(characters);
//  helpful when capturing data from front end 

const { currently_running: on_air} = theSimpsons;
console.log(on_air);
console.log(theSimpsons.currently_running);

//  ! Spread with Objects

const simpsonsCharacters = {
    simpsonHouse: [
        'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
    ],
    moesTavern: ['Moe', 'Barney']
}
const generalLocations = {
    park: 'statue',
    beach: 'dock',
    lake: '3-eyed fish'
}

const locations = {
    ...simpsonsCharacters,
    dmv: ['Patty', 'Selma'],
    ...generalLocations
}

console.log(locations);
console.log(locations.simpsonHouse[1]);
