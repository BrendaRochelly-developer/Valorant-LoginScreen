const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');

//temos duas formas de adicionar o event listener ao input 
//inputs[0].addEventListener('click', () => console.log('testando'));
//inputs[1].addEventListener('click', () => console.log('testando'));

//ou usando uma função .forEach, que para cada elemento do array(vetor) vai fazer alguma coisa

//no forEach passa uma função anÔnima e essa função que vai receber como parâmetro elementos do array e o forEach vai executar uma vez para cada elemento do array.

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {

    if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
};

const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {

        button.removeAttribute('disabled');
    } 
    
    else {
        button.setAttribute('disabled', '');
    }

}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));