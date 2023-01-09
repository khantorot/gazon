const singin_btn = document.querySelector('.singin_btn');
const email_input = document.querySelector('.email_input');
const password_input = document.querySelector('.password_input');

singin_btn.addEventListener('click', function(e){
    if (email_input.value == user.email && password_input.value == user.password) {
        user.status = 'logged';
        sessionStorage.setItem('user', JSON.stringify(user));
        
        e.preventDefault();
        location.href = 'profile.html'
    }
})