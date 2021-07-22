(() => {
    let container = document.querySelector("#container");

  function simpleFetch(){
    fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        .finally(() => { console.log("All OK!"); });
  }

  simpleFetch();
})();