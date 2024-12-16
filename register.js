document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Спроба реєстрації', { name, email, password });
    // Тут ви б зазвичай відправляли дані на сервер
    alert('Форма відправлена!\nІм\'я: ' + name + '\nEmail: ' + email);
});