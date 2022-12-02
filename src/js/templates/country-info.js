export default function countryInfoTpl(item) {
  const { name, capital, population, flags, languages } = item;
  return `<img class="country-svg" src = "${flags.svg}" alt = "">
<h2>${name.official}</h2>
<ul>
   <li>
      <h3>Capital:</h3>
      <p>${capital}</p>
   </li>
   <li>
      <h3>Population:</h3>
      <p>${population}</p>
   </li>
   <li>
      <h3>Languages:</h3>
      <p>${Object.values(languages)}</p>
   </li>
</ul>`;
}
