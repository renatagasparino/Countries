let countries;
fetch("https://restcountries.com/v2/all")
  .then((resp) => resp.json())
  .then((countriesList) => {
    countries = countriesList;
    countriesList.forEach((country) => {
      let button = document.createElement("option");
      button.setAttribute("class", "btn btn-primary");
      button.innerHTML = country.name;
      button.value = country.name;
      document.querySelector(".buttons-js").appendChild(button);
    });
  });

function displayCountry() {
  document.querySelector(".country-info-js").style.display = "block";
  let selectedCountry = document.querySelector(".buttons-js").value;
  let country = countries.find((country) => country.name === selectedCountry);
  document.querySelector("img").src = country.flags.png;
  document.querySelector(".name-js span").innerHTML = country.name;
  document.querySelector(".capital-js span").innerHTML = country.capital;
  document.querySelector(".population-js span").innerHTML = country.population;
  document.querySelector(".area-js span").innerHTML = country.area;
}
