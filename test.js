// const fetch = require('node-fetch');

// const postData = async () => {
//   const response = await fetch(
//     'https://us-central1-next-fb-host.cloudfunctions.net/user',
//     {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       redirect: 'follow',
//       referrerPolicy: 'no-referrer',
//       body: JSON.stringify({ name: 'Jelte' }),
//     }
//   );
//   return response.json();
// };

// postData() // parses JSON response into native JavaScript objects
//   .then((response) => response.json())
//   .then((data) => console.log(data));
