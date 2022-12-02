export default function countryInfoTpl(item) {
  const { name, capital, population, flags, languages } = item;
  return `<div class="country-info-box">
  <img class="country-info-svg" src = "${flags.svg}" alt = "">
<h2 class="country-info-title">${name.common}</h2></div>
<ul class="country-info-list">
   <li class="country-info-item">
      <h3 class="country-info-subtitle">Capital:</h3>
      <p class="country-info-text">${capital}</p>
   </li>
   <li class="country-info-item">
      <h3 class="country-info-subtitle">Population:</h3>
      <p class="country-info-text">${population}</p>
   </li>
   <li class="country-info-item">
      <h3 class="country-info-subtitle">Languages:</h3>
      <p class="country-info-text">${Object.values(languages)}</p>
   </li>
</ul>`;
}
