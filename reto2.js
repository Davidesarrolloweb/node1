const fs  = require('fs');

let data = {
    "persona" : [{"Nombre" : "David", "Apellido" : "Sanchez", "Edad" : 26}]
};

let jsonData = JSON.stringify(data);
console.log(jsonData);
console.log(typeof (jsonData));

fs.writeFile('./persona.json', jsonData, function(error) {
  
  console.log("El archivo JSON fue creado correctamente");
  
  fs.readFile('./persona.json', 'utf8', function(err, data) {
    
    console.log(data);

  });
});






