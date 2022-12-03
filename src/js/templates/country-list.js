export default function countryListTpl(country) {
  return country
    .map(
      ({ name, flags }) => `<li class="country-list-item">
<img class="country-list-svg" src="${flags.svg}" alt="">
<h2 class="country-list-title">${name.common}</h2>
</li>`
    )
    .join('');
}
