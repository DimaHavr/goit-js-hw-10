export default function countryListTpl(country) {
  const { name, flags } = country;
  const markup = country
    .map(
      technology => `<li class="country-list-item">
<img class="country-list-svg" src="${flags.svg}" alt="">
<h2 class="country-list-title">${name.common}</h2>
</li>`
    )
    .join('');
}
