var home_search = document.getElementById('home_search')
var items = document.getElementById('items')
var qty = document.getElementById('qty')
var a = document.getElementsByTagName('a')
var find = document.getElementById('find')
var del_charge = 40
var price_detail = document.getElementById('price_detail')

function hide_search() {
    if (home_search.classList.contains('hidden')) {
        home_search.classList.remove('hidden')
        home_search.classList.add('visible')
    }
    else {
        home_search.classList.remove('visible')
        home_search.classList.add('hidden')
    }
}

function offer1() {
    document.getElementById('offer').remove()
}

function increase() {
    if (qty.value < 5) {
        qty.value++
    }
}
function decrease() {
    if (qty.value > 1) {
        qty.value--
    }
}

function removeitem(id) {

    id.remove()

}

function addtocart(value) {

    fetch("product.json")
        .then((res) => res.json())
        .then((a) => {
            a.pro.map((a) => {
                var discount = a.act - a.price
                var toatl = a.price + del_charge
                if (value == a.id) {
                    items.innerHTML += `<div class="row bg-light cart-item mb-2" id="${a.id}">
                            <div class="col-5 bor">
                                <img style="width: 100%;" src="${a.img}" alt="">
                            </div>
                            <div class="col-6 d-flex flex-column justify-content-center ms-2 my-2">
                                <div class="row mt-lg-2">
                                    <h3>${a.product_name}</h3>
                                </div>
                                <div class="row mt-lg-2">
                                    <h6 style="word-spacing: 5px;"><del>&#8377;${a.act}</del> ${a.price}</h6>                    
                                </div>
                                <div class="row mt-lg-2">
                                    <div class="col mt-2 d-flex align-items-center">
                                        <button onclick="increase()" class="qty btn d-flex justify-content-center align-items-center flex-row">+</button>
                                        <div class="align mt-sm-2">
                                            <input class="text-center qty_value mb-1" type="text" value="1" id="qty">
                                        </div>
                                        <button class="qty btn d-flex justify-content-center align-items-center flex-row" onclick="decrease()">-</button>                  
                                    </div>
                                </div>
                                <div class="row w-lg-50 mt-lg-3">
                                    <button class="btn w-50 bg-dark text-light remove" onclick="removeitem(${a.id})"><i class="fa-regular fa-trash-can me-1"></i> Remove</button>
                                </div>
                            </div>
                        </div>`
                    price_detail.innerHTML=`<h3 class="text-center">Price Details</h3>
                            <hr>
                            <div class="div d-flex my-4">
                                <h5>Price Amount</h5>
                                <h6 class="ms-auto">${a.act}</h6>
                            </div>
                            <div class="div d-flex my-4">
                                <h5>Discount Amount</h5>
                                <h6 class="ms-auto">${discount}</h6>
                            </div>
                            <div class="div d-flex my-4">
                                <h5>Delivery Charge</h5>
                                <h6 class="ms-auto">${del_charge}</h6>
                            </div>
                            <hr>
                            <div class="div d-flex my-4">
                                <h5>Total</h5>
                                <h6 class="ms-auto">${toatl}</h6>
                            </div>`
                }

                console.log(del_charge);
                

            })
        })

}


// find.addEventListener('click', function update() {
//     find.preventDefault
//     var productList = document.querySelectorAll(".shirts-container")
//     for (var i = 0; i < productList.length; i++) {
//         var check = false
//         var product = productList[i]
//         console.log(product)
//         var temp = product.querySelector("tags").innerHTML

//         console.log("elemen" + temp)

//         const tempFilterArray = temp.split(',');

//         console.log("tempfilterarray" + tempFilterArray)
//         console.log("filterlist" + filterList)

//         filterList.forEach((j) => {
//             tempFilterArray.forEach((i) => {
//                 if (j == i) {
//                     check = true
//                 }
//             })
//         })

//         if (!check && filterList.length > 0) {
//             product.style.display = "none"
//         }
//         else {
//             product.style.display = "block"
//         }

//     };

// })
