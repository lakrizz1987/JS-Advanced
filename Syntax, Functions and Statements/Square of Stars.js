function stars(num) {

    if (!num) {
        num = 5;
    }

    for (let i = 0; i < num; i++) {
        console.log('* '.repeat(num));
    }
}

stars(7)