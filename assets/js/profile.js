
const profile = document.querySelector('.profile');
const history = document.querySelector('.history');

loadProfile()

function loadProfile() {
    let out_history = '';
    let out_profile = '';

    let today = new Date();
    let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    let dayTomorrow = tomorrow.getDate();
    let monthTomorrow = tomorrow.getMonth() + 1;
    let yearTomorrow = tomorrow.getFullYear();



    out_profile += '<img src="./content/images/profile.png" alt="profile">';
    out_profile += '<input type="text" placeholder="ФИО" value="' + user.name + '" class="profile_data">';
    out_profile += '<input type="text" placeholder="Email" value="' + user.email + '"  class="profile_data">';
    out_profile += '<input type="text" placeholder="Телефон" value="' + user.phone + '"  class="profile_data">';
    out_profile += '<input type="text" placeholder="Город" value="' + user.city + '"  class="profile_data">';
    out_profile += '<input type="text" placeholder="Адрес" value="' + user.address + '"  class="profile_data">';
    out_profile += '<div class="refresh_btn">Обновить</div>';
    out_profile += '<div class="logout_btn">Выйти</div>';

    if (Object.keys(cart).length == 0) {
        out_history += '<div class="empty_data">';
        out_history += '<h4>Вы еще ничего не купили <a href="./products.html">исправить?</a></h4>';
        out_history += '</div>';
    } else {
        for (key in cart) {
            out_history += '<div class="history_item">';
            out_history += '<div class="img_box"><img src="./content/images/products/' + data[key].images[0] + '"></div>';
            out_history += '<div class="text_box">';
            out_history += '<a href="./product.html" class="product_name" data-id="' + key + '">' + data[key].name + '</a>';
            out_history += '<div class="date">Дата доставки: <span>' + dayTomorrow + '.' + monthTomorrow + '.' + yearTomorrow + '</span></div>';
            out_history += '<div class="place">Место доставки: <span>'+ user.city +' ' +  user.address + '</span></div>';
            out_history += '<div class="cancel_btn" data-id="'+ key +'">Отменить</div>';
            out_history +=  '<span class="total">' + prettyfy(data[key].price) + ' x '+cart[key] + ' = '+ prettyfy(data[key].price * cart[key]) + '</span>';
            out_history += '</div></div>';
        }
    }

    profile.innerHTML = out_profile;
    history.innerHTML = out_history;
}


history.addEventListener('click', function (e) {
    if (e.target.classList.contains('product_name')) {
        let id = e.target.getAttribute('data-id');
        sessionStorage.setItem('product', id);
    } else if (e.target.classList.contains('cancel_btn')) {
        let id = e.target.getAttribute('data-id');
        delete cart[id];
        sessionStorage.setItem('cart', JSON.stringify(cart));
        loadProfile();
        showMiniCart();
    }
})


profile.addEventListener('click', function(e){
    if (e.target.classList.contains('refresh_btn')){
        const profile_data = document.querySelectorAll('.profile_data');

        user.name = profile_data[0].value;
        user.email = profile_data[1].value;
        user.phone = profile_data[2].value;
        user.city = profile_data[3].value;
        user.address = profile_data[4].value;
    
        sessionStorage.setItem('user', JSON.stringify(user));
        loadProfile();

    } else if (e.target.classList.contains('logout_btn')) {
        user.status = 'logout';
        sessionStorage.setItem('user', JSON.stringify(user));
        
        window.location.href = 'login.html';
    }
})



cart_data.addEventListener('click', loadProfile);