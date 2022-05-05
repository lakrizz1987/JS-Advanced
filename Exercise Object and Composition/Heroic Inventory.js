function hero(input) {
    let resultArr = [];

    for (let line of input) {
        let [name, level, items] = line.split(' / ');
        items = items ? items.split(', ') : [];

        let objHero = {
            name,
            level: Number(level),
            items
        }
        resultArr.push(objHero);

    }

    return JSON.stringify(resultArr);
}

hero(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / ']
)