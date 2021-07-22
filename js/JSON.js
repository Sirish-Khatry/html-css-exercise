function Pokemon(pokemonData) {
    constructor(name, url)
    
}

const dittoJson = {    
    "abilities": [
        {
          "ability": {
            "name": "limber",
            "url": "https://pokeapi.co/api/v2/ability/7/"
          },
          "is_hidden": false,
          "slot": 1
        },
        {
          "ability": {
            "name": "imposter",
            "url": "https://pokeapi.co/api/v2/ability/150/"
          },
          "is_hidden": true,
          "slot": 3
        }
      ]
    };


    const increase = (val) => {
        console.log(`New value ${val+10}`);
    }

    const main = (callBack) => {
        let value = parseInt(prompt(`Please enter a value`));
        callBack(value);
    }
    main(increase);

    (function hello(){
      var x = 1;
      var y = 2;

      return x+y;
    })();

    console.log(x);


