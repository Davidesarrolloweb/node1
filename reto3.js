const readline  = require('readline');
const fs  = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Ingrese su nombre : ', (nombre) => {
    
    rl.question('Ingrese su apellido : ', (apellido) => {

        rl.question('Ingrese su edad : ', (edad) => {
            console.log('Persona: ' + `Nombre: ${nombre}`,`Apellido: ${apellido}`,`Edad: ${edad}`);  
            let data = {nombre,apellido,edad}
            let jsonData = JSON.stringify(data);
            console.log('Persona:' + `${jsonData}` );
            console.log(typeof (jsonData));
        fs.writeFile('./persona2.json', jsonData, function(error) {
          console.log("El archivo JSON fue creado correctamente");
          fs.readFile('./persona2.json', 'utf8', function(err, data) {
            console.log('Persona:' + data);
          });
              });
        
        rl.close();
        });
    });
});



            


     
 

  















