import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import NewApiServices from './js/NewApiServices';
import countryInfoTpl from './js/templates/country-info';
import { countryListTpl } from './js/templates/country-list';

const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');
const searchInput = document.querySelector('#search-box');

const DEBOUNCE_DELAY = 300;

const newApiServices = new NewApiServices();

searchInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  newApiServices.query = searchInput.value.trim();

  newApiServices
    .fetchCountries()
    .then(countries => {
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countries.length === 1) {
        renderCountryInfoMarkup(countries);
      } else {
        renderCountryListMarkup(countries);
      }
    })
    .catch(error => {
      if (newApiServices.query.length <= 1) {
        return;
      }
      Notify.failure('Oops, there is no country with that name');
    });
  clearCountriesContainer();
}

function renderCountryInfoMarkup([country]) {
  countryInfo.insertAdjacentHTML('beforeend', countryInfoTpl(country));
}

function renderCountryListMarkup(countries) {
  const makeCountryListMarkup = countries.map(countryListTpl).join('');
  console.log(makeCountryListMarkup);
  countryList.insertAdjacentHTML('beforeend', makeCountryListMarkup);
}

function clearCountriesContainer() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}
