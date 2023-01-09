


const products = document.querySelector('.products');

let product_group;
let product_producer;


loadProducts();

function loadProducts() {
    let out = '';

    product_group = 'popular';
    product_producer = 'all';

    for (let key in data) {
        if ((data[key].group.indexOf(product_group) != -1 || product_group == 'all') && (data[key].group.indexOf(product_producer) != -1 || product_producer == 'all')) {
            out += '<div class="product">';
            out += '<div class="img_box">';
            out += '<img src="./content/images/products/' + data[key].images[0] + '" alt="product">';
            out += '<img src="./content/images/products/' + data[key].images[1] + '" alt="product">';
            out += '</div>';
            out += '<div class="text_box">';
            out += '<h5>' + data[key].producer + '</h5>';
            out += '<a href="./product.html" data-id="' + key + '" class="product_name">' + data[key].name + '</a>'
            out += '<span class="price">' + prettyfy(data[key].price) + ' с</span>';
            out += '<div class="add_btn" data-id="' + key + '"><span></span></div>';
            out += '</div>';
            out += '</div>';
        }
    }
    products.innerHTML = out;
};




document.querySelector('.all_products_link').addEventListener('click', function (e) {
    getLinkData(e, 'all_products_link');
})




products.addEventListener('click', function (e) {
    if (e.target.classList.contains('add_btn')) {
        let id = e.target.getAttribute('data-id');
        if (cart[id] != undefined) {
            cart[id]++;
        } else {
            cart[id] = 1;
        }

        sessionStorage.setItem('cart', JSON.stringify(cart));
        showMiniCart();
        showModalBar(id);
    } else if (e.target.classList.contains('product_name')) {
        let id = e.target.getAttribute('data-id');
        sessionStorage.setItem('product', id);
    }
});


















const nowelty = document.querySelectorAll('.nowelty');

nowelty.forEach(element => {
    element.addEventListener('mousemove', function (e) {
        if (e.target.classList.contains('nowelty_link')) {
            element.classList.add('nowelty_active');
        } else {
            element.classList.remove('nowelty_active');
        }
    })
    element.addEventListener('click', function (e) {
        if (e.target.classList.contains('nowelty_link')) {
            let id = e.target.getAttribute('data-id');
            sessionStorage.setItem('product', id);
        }
    })
});

const category = document.querySelector('.category');


category.addEventListener('click', function (e) {
    getLinkData(e, 'category_link');
})



new Glider(document.querySelector('.category'), {
    slidesToShow: 2,
    dragVelocity: 2,
    draggable: 1,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
            }
        }
    ]
})