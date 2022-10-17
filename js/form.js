document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
});

const enviadoForm = () =>{
    Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado correctamente!',
        text: 'A la brevedad nos pondremos en contacto',
    })
}

function validarFormulario(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    if(name.length == 0) {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El campo NOMBRE es obligatorio'
        })
        return;
    }

    let email = document.getElementById('email').value;
    if(email.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo EMAIL es obligatorio'
            })
        return;
    }

    let coment = document.getElementById('coment').value;
    if(coment.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo COMENTARIO es obligatorio'
            })
        return;
    }
    enviadoForm();
}