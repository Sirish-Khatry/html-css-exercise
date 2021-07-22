



class Pokemon {
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


    const increase = (value) => {
        console.log(`New value ${value+10}`);
    }

    const main = (callBack) => {
        let value = prompt(`Please enter a value`);
        callBack(value);
    }
    main(increase);

