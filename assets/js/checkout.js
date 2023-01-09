const checkout_data = document.querySelector('.checkout_data');

loadCheckout()

function loadCheckout() {
    let out = '';

    if (Object.keys(cart).length == 0) {
        out += '<div class="empty_data">';
        out += '<h4>Вы ничего не купили</h4>';
        out += '</div>';
    } else {
        for (key in cart) {
            out += '<div class="checkout_data_item">';
            out += '<a href="./product.html" class="product_name" data-id="' + key + '">' + data[key].name + '</a>';
            out += '<span>x' + cart[key] + '</span>';
            out += '<p>' + prettyfy(data[key].price * cart[key]) + '</p>';
            out += '</div>';
        }
        out += '<div class="checkout_data_total_price"><span>Итого:</span><p>' + prettyfy(countPrice()) + ' c' + '</p></div>';
    }
    checkout_data.innerHTML = out;
}


checkout_data.addEventListener('click', function (e) {
    if (e.target.classList.contains('product_name')) {
        let id = e.target.getAttribute('data-id');
        sessionStorage.setItem('product', id);
    }
})

const finish_btn = document.querySelector('.finish_btn');




finish_btn.addEventListener('click', function (e) {
    if (user.status == 'logged') {
        e.preventDefault();
        window.location.href = 'profile.html';
    } else {
        const user_data_input = document.querySelectorAll('.user_data_input');
        let i = 0;
        user_data_input.forEach(element => {
            if (element.value != '') {
                i++;
            }
        });
        if (i == user_data_input.length) {
            user.name = user_data_input[0].value;
            user.email = user_data_input[1].value;
            user.phone = user_data_input[2].value;
            user.city = user_data_input[3].value;
            user.address = user_data_input[4].value;
            user.password = user_data_input[5].value;
            user.status = 'logged';

            sessionStorage.setItem('user', JSON.stringify(user));
            e.preventDefault();
            window.location.href = 'profile.html';
        }
    }
})



profileCheck()

function profileCheck() {
    if (user.status == 'logged') {
        const login_link = document.querySelector('.login_link');
        const user_data_input = document.querySelectorAll('.user_data_input');

        user_data_input[0].value = user.name;
        user_data_input[1].value = user.phone;
        user_data_input[2].value = user.email;
        user_data_input[3].value = user.city;
        user_data_input[4].value = user.address;
        
        user_data_input[5].style.display = 'none';
        login_link.style.display = 'none';
    }
}