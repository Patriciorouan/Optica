/* -- NAV MOBILE MENU -- */
const navMenu = document.getElementById('nav-menu');
const overlayMenu = document.getElementById('overlay-menu');

navMenu.addEventListener('click', () =>{
    overlayMenu.classList.toggle('show-overlay');
})

const navLink = document.querySelectorAll('.lista');

navLink.forEach(link => link.addEventListener('click', () => {
    overlayMenu.classList.remove('show-overlay');
}))
/* -- FIN NAV MOBILE MENU -- */

/* -- FORM VALIDATION -- */
let phone = document.getElementById('phone');
let enviar = document.getElementById('enviar');
let alert = document.querySelectorAll('.alert');

let regexpPhone = /^\d{3,4} \d{8}$/;
let regexpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(enviar){
    enviar.addEventListener('click', (e) => {
        e.preventDefault();
        resetAlerts();
        validateForm();
    })
}

/* Formatea el input del telefono */
phone.addEventListener("input", function() {
    let telefono = phone.value;

    telefono = telefono.replace(/\D/g, "");
    
    if (telefono.length > 0) {
        telefono = telefono.match(/^(\d{0,3})(\d{0,10})/);
        telefono = telefono[1] + (telefono[2] ? " " + telefono[2] : "");
    }

    phone.value = telefono;
});

/* Validaciones */
function validateForm () {
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let mail = document.getElementById('mail').value;
    let message = document.getElementById('message').value;

    if(!name) {
        alert[0].style.display = 'block';
        alert[0].textContent = `Nombre obligatorio`;
    } else if(name.length < 3) {
        alert[0].style.display = 'block';
        alert[0].textContent = `${name}: es menor a 3 caracteres`;
    } else if(name.length > 20) {
        alert[0].style.display = 'block';
        alert[0].textContent = `${name}: es mayor a 20 caracteres`;
    } 

    if(!lastname) {
        alert[1].style.display = 'block';
        alert[1].textContent = `Apellido obligatorio`;
    } else if(lastname.length < 3) {
        alert[1].style.display = 'block';
        alert[1].textContent = `${lastname}: es menor a 3 caracteres`;
    } else if (lastname.length > 20) {
        alert[1].style.display = 'block';
        alert[1].textContent = `${lastname}: es mayor a 20 caracteres`;
    }

    if (!phone.value) {
        alert[2].style.display = 'block';
        alert[2].textContent = `Telefono obligatorio`;
    } else if (phone.value.length < 13) {
        alert[2].style.display = 'block';
        alert[2].textContent = `Telefono demasiado corto`;
    }

    if(!mail) {
        alert[3].style.display = 'block';
        alert[3].textContent = `Mail obligatorio`;
    } else if (!regexpEmail.test(mail)){
        alert[3].style.display = 'block';
        alert[3].textContent = `Formato de mail incorrecto. Formato correcto: juanperez@gmail.com`;
    }

    if(message.length === 0) {
        alert[4].style.display = 'block';
        alert[4].textContent = `Mensaje obligatorio`;
    } else if(message.length < 10) {
        alert[4].style.display = 'block';
        alert[4].textContent = `Tu mensaje es demasiado corto`;
    } else if (message.length > 300) {
        alert[4].style.display = 'block';
        alert[4].textContent = `Tu mensaje es demasiado largo`;
    }
}

/* Resetea los mensajes de alerta de las validaciones */
function resetAlerts () {
    alert.forEach(a => {
        a.style.display = 'none';
        a.textContent = '';
    })
}

/* -- FIN FORM VALIDATION -- */
