export default function countryListTpl(item) {
  const { name, flags } = item;
  return `<li class="country-list-item">
<img class="country-list-svg" src="${flags.svg}" alt="">
<h2 class="country-list-title">${name.common}</h2>
</li>`;
}
