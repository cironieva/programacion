const http = require('http');

const server = http.createServer((request, response) => {  // Método createServer(callback con req y res)
  
  if (request.url === '/') {              // Indicamos en qué url hacer lo siguiente
    response.write('home');               // Indicamos qué hace la response
    return response.end();                // Finalizamos la response, si no, no carga
  }

  if (request.url === '/profile') {
    response.write('perfil');
    return response.end();
  }

                                          // Para todas demás rutas, podemos insertar código html
  response.write(`                         
  <h1>Not found :(</h1>
  <p>pagina no encontrada</p>
  <a href="/">pagina principal</a>
  `);              
  response.end();                           

  console.log(request.url);                 // Opcional, muestra en qué url estamos
});

server.listen(3000);                        // Indicamos en qué puerto montamos el server

console.log('server escuchando en el puerto 3000');     // Mensaje en consola para indicar que está funcionando