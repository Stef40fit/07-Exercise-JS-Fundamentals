

function createHeroRegister(data) {
    const heroes = [];
    let heroData = [];

    // Process the input data
    data.forEach(heroInfo => {
        const [heroName, heroLevel, itemsString] = heroInfo.split(' / ');
        const heroItems = itemsString ? itemsString.split(', ') : [];

        const hero = {
            name: heroName,
            level: Number(heroLevel),
            items: heroItems
        };

        heroes.push(hero);
    });

    // Sort heroes by level
    heroes.sort((a, b) => a.level - b.level);

    // Print the result in the specified format
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}

// Използване на функцията с константата heroData
createHeroRegister([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);
