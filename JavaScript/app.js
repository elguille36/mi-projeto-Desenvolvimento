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

//funcion para minizar el numero de caracteres en el nombre
const inputTexto = document.getElementById('name');

inputTexto.addEventListener('input', () => {
    if (inputTexto.value.length === 30) {
    alert('Há atingido ó numero de caracteres!!');
    }
});


function deleteAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    loadAppointments();
}

//Função para Restrição de Data não Disponivel

const diasDisponivel = [2, 3, 4,]; // Dias disponivel Domingo , Terça , ....5 Quinta

        document.getElementById("date").addEventListener("input", function() {
            const dataSelecione = new Date(this.value);
            const diaDaSemana = dataSelecione.getUTCDay();

            if (!diasDisponivel.includes(diaDaSemana)) {
                alert("Data não disponivel. Por gentileza, seleciona outro dia. (Terça , Quarta e Quinta");
                this.value = ""; // Limpiar o imput sim não é data selecionada 
            }
        });

//funcion para el acordeon

function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}



function updateSelectedOptions() {
    const checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]');
    const selected = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    document.getElementById('title').value = selected.join(', ');
}

// Cierra el menú desplegable si se hace clic fuera de él

window.onclick = function(event) {
    if (!event.target.matches('#title')) {
        const dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    }
}

// Seguridad para Abrir el enlace
function abrirEnlaceConPassword(event, url) {
    // Evita la redirección automática
    event.preventDefault();

    // Define la contraseña
    const passwordCorrecta = "bispado-lider";

    // Solicita la contraseña al usuario
    const passwordIngresada = prompt("Digite a Senha:");

    // Verifica si la contraseña es correcta
    if (passwordIngresada === passwordCorrecta) {
        // Redirige al enlace si la contraseña es correcta
        window.location.href = url;
    } else {
        alert("Senha Inválida. Não Tem Acesso.");
    }
}

//função para activacion menu responsive
function toggleNav() {
    const navMenu = document.getElementById('nav');
    navMenu.classList.toggle('nav-open');
    navMenu.classList.toggle('nav-closed');
}


