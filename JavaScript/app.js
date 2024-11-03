document.addEventListener('DOMContentLoaded', loadAppointments);

function addAppointment() {
    const title = document.getElementById('title').value;
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!title || !name || !date || !time) {
        alert('Por Gentileza, Prenche ó formulario');
        return;
    }

    const appointment = {
        title,
        name,
        date,
        time
    };

    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    document.getElementById('title').value = '';
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';

    loadAppointments();
}

function loadAppointments() {
    const appointmentsList = document.getElementById('appointments-list');
    appointmentsList.innerHTML = '';

    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    appointments.forEach((appointment, index) => {
        const appointmentDiv = document.createElement('div');
        appointmentDiv.classList.add('appointment');

        appointmentDiv.innerHTML = `
            <h3>${appointment.title}</h3>
            <h3>${appointment.name}</h3>
            <p>Data: ${appointment.date}</p>
            <p>Horario: ${appointment.time}Hs</p>
            <button onclick="deleteAppointment(${index})">Eliminar</button>
        `;

        appointmentsList.appendChild(appointmentDiv);
    });
}

function deleteAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    loadAppointments();
}

 /*Funcion hecha para probar al clik boton criar un alert de aviso envio formulario*/

function CadastroRealizado(){

document.getElementById('appointments-list');
alert("Agendamento Cadastrado");
return;

}

