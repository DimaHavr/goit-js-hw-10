export default function countryListTpl(item) {
  const { name, flags } = item;
  return `<li>
<img class="country-svg" src="${flags.svg}" alt="">
<h2>${name.official}</h2>
</li>`;
}
