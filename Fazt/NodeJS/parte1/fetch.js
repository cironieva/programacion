import fetch from 'node-fetch';

// SINCRONO

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data))


// ASINCRONO

const loadData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
}

loadData();

// CON VALIDACIÓN DE ERROR TRY CATCH

const logData = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
} catch (error) {
  console.log(error);
}
}

logData();