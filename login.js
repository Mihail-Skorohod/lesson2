document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Спроба входу', { email, password });
    // Тут ви б зазвичай відправляли дані на сервер
    alert('Форма відправлена!\nEmail: ' + email);
});