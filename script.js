'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//Using Geo-Location API
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    /*success Function*/ function (pos) {
      console.log(pos);

      //Destructuring ---> creates a variable out of the coords objects

      const { latitude } = pos.coords;
      const { longitude } = pos.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      //code to show the map and the current location

      const coords = [latitude, longitude];
      const map = L.map('maps').setView(coords, 15);

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
    },

    /*Error Function*/ () => {
      alert(`Sorry! Could not get your current location`);
    }
  );
