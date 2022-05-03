function createAssemblyLine() {

    let obj = {
        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    this.car.temp++
                } else if (car.temp > car.tempSettings) {
                    this.car.temp--
                }
            }

        },

        hasAudio: (car) => {
            car.currentTrack = { name: '', artist: '' };
            car.nowPlaying = () => {
                if (car.currentTrack !== null) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            }
        },

        hasParktronic: (car) => {
            car.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    }


    return obj;
}    