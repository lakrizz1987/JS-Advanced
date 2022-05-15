function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    //ToDo....
    let result = [];
    JSON.parse(input).forEach(obj => {
        //let areaSum = area.call(obj, obj.x, obj.y);
        //let volSum = vol.call(obj, obj.x, obj.y, obj.z);
        result.push({ area: area.call(obj, obj.x, obj.y), volume: vol.call(obj, obj.x, obj.y, obj.z) });
    });

    return result;

}

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
)
