const getPuzzle = (wordCount) =>
  fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Error");
      }
    })
    .then((e) => e.puzzle);

/*const getPuzzle = (wordCount) =>
  new Promise((rs, rj) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", (e) => {
      if ((e.target.readyState === 4) & (e.target.status === 200)) {
        const data = JSON.parse(e.target.responseText);
        rs(data.puzzle);
      } else if (e.target.readyState === 4) {
        rj("Erorr");
      }
    });
    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
  });
*/
const getCountry = (countryCode) =>
  new Promise((rs, rj) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const country = data.find((e) => e.alpha2Code === countryCode);
        if (country) rs(country.name);
        else rs("Not found");
      } else if (e.target.readyState === 4) {
        rj("error 404");
      }
    });
    request.open("GET", "https://restcountries.com/v2/all");
    request.send();
  });
