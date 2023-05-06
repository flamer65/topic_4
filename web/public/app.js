$('#navbar').load('navbar.html');
const API_URL = 'http://localhost:5000/api';
// const devices = JSON.parse(localStorage.getItem('http://localhost:3001/devices')) || [];
$.get('http://localhost:5000/api/devices')
    .then(response => {
        response.forEach(device => {
            $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`);
        });
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });
// devices.forEach(function(device) {
//     const table = document.querySelector('#devices');
//     const row = document.createElement('tr');

//     const user = document.createElement('td');
//     const userText = document.createTextNode(device.user);
//     user.appendChild(userText);

//     const name = document.createElement('td');
//     const nameText = document.createTextNode(device.name);
//     name.appendChild(nameText);

//     row.appendChild(user);
//     row.appendChild(name);

//     table.appendChild(row);
//   });

// devices.forEach(function(device) {
//     $('#devices tbody').append(`
//       <tr>
//         <td>${device.user}</td>
//         <td>${device.name}</td>
//       </tr>`);
// });



$('#add-device').on('click', () => {
    const name = $('#name').val();
    const user = $('#user').val();
    const sensorData = [];

    const body = {
        name,
        user,
        sensorData
    };

    $.post('http://localhost:5000/api/devices', body)
        .then(response => {
            location.href = '/';
        })
        .catch(error => {
            console.error(`Error: ${error}`);
        });
});
