function timeToWalk(steps, footprint, speed) {

    let distanceMeter = steps * footprint;
    let speedMeterSecont = speed / 3.6;

    let rest = Math.floor(distanceMeter / 500);

    let time = distanceMeter / speedMeterSecont;

    let minutes = Math.floor(time / 60);
    let hours = Math.floor(time / 3600);
    let seconds = Math.round(time - (minutes * 60));

    minutes += rest;

    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds);

}

timeToWalk(4000, 0.60, 5)