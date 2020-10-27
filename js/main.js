(function () {
    const nameDOM = document.querySelector('#name');
    const lastnameDOM = document.querySelector('#lastname');
    const emailDOM = document.querySelector('#email');
    const passwordDOM = document.querySelector('#pass');
    const buttonDOM = document.querySelector('button');

    const name = localStorage.getItem('name') || '';
    const lastname = localStorage.getItem('lastname') || '';
    const email = localStorage.getItem('email') || '';
    const password = localStorage.getItem('password') || '';

    nameDOM.value = name;
    lastnameDOM.value = lastname;
    emailDOM.value = email;
    passwordDOM.value = password;

    buttonDOM.addEventListener('click', (e) => {
        console.log(e.preventDefault());

        if (nameDOM.value.includes('<')) {
            console.log('ERROR');
            return;
        }

        localStorage.setItem('name', nameDOM.value);
        localStorage.setItem('lastname', lastnameDOM.value);
        localStorage.setItem('email', emailDOM.value);
        localStorage.setItem('password', passwordDOM.value);

        location.href = "./confirm";
    })

    const sum = (a, b) => {
        magic = 'kabum';
        return a + b;
    }
})();