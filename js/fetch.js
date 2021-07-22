(() => {
    let container = document.querySelector("#container");

    function createTableHeaderRow(headers) {
      // create table row
      const headerRow = document.createElement("tr");
  
      // iterate over headers array
      for (const headerText of headers) {
          // create header element
          const header = document.createElement("th");
          // set inner text of header
          header.innerText = headerText;
  
          // append header element to the header row element
          headerRow.appendChild(header);
      }
      return headerRow;
  }

    function createTableDataRow(data) {
      // creating a table row
      const dataRow = document.createElement("tr");
  
      // iterating over the data array
      for (const dataItem of data) {
          // creating a table data element
          const dataElement = document.createElement("td");
  
          // set the inner text to the current data item
          dataElement.innerText = dataItem;
  
          // append the data element to the data row
          dataRow.appendChild(dataElement);
      }
      return dataRow;
  }
    
  function createTable(headers, data) {
    console.log(data);
    const headerRow = createTableHeaderRow(headers);
    const dataRows = [];

    // iterate over the 2d array of data
    for (const dataSet of data) {
        // create a table row element with table data and append to the dataRows array
        dataRows.push(createTableDataRow(dataSet));
       // console.log(dataRows);
    }

    // create a table element
    const table = document.createElement("table");

    // append the header row to the table
    table.appendChild(headerRow);
    
    // iterate over the array of built data row elements
    for (dataRow of dataRows) {
        // append each dataRow element to the table
        table.appendChild(dataRow);
    }

    return table;
}
  function simpleFetch(){

    // fetch(`https://pokeapi.co/api/v2/pokemon`)
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((response => {
          if(response.status !== 200){
            console.error(`status: ${response.status})`);
            return;
          }
          return response.json();
        })) 
        .then(data => {
           // console.log(data);
           const result = data.map(({userId, id, title, completed}) => [userId, id, title, completed]);
          const table = createTable(header, result);
          container.appendChild(table);
          // let element = document.createElement("p");
          // element.innerText = data[0].title;

          //container.appendChild(element);
        
        })
        .catch(error => console.error(error))
        .finally(() => { console.log("All OK!"); });
  }
  const header = ["USERID", "ID", "TITLE", "COMPLETED"];
  simpleFetch();
  
})();