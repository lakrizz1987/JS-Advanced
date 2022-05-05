function carFactory(specification) {
    let car = {};
    car.model = specification.model;

    let carriage = {};
    let engine = {};
    let volume = 0;
    let power = 0;

    if (specification.power <= 90){
        volume = 1800;
        power = 90;
    }else if(specification.power <= 120){
        volume = 2400;
        power = 120;
    }else if(specification.power <= 200){
        volume = 3500;
        power = 200;
    }

    engine.power = power;
    engine.volume = volume;
    car.engine = engine;

    carriage.type = specification.carriage;
    carriage.color = specification.color;
    car.carriage = carriage;

    if(specification.wheelsize % 2 === 0){
        specification.wheelsize--;
    }

    let array = new Array(4).fill(specification.wheelsize);
    car.wheels = array;
    
    
    return car;

}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)