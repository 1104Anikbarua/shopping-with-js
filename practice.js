let serial = 0;

document.getElementById('cart-btn-1').addEventListener('click', function () {
    // console.log('connected')
    serial += 1;
    // const productName = document.getElementById('cart-1-productname').innerHTML;
    // const productPrice = document.getElementById('cart-1-productprice').innerHTML;
    // const productQuantity = document.getElementById('cart-1-productquantity').innerHTML;

    // const productImage = document.getElementById('cart-1-productimg').src
    const product = setElementById(
        'cart-1-productname',
        'cart-1-productimg',
        'cart-1-productprice',
        'cart-1-productquantity')
    // console.log(product)
    const total = parseInt(product.productPrice * product.productQuantity)

    setTableElement('container', product, total);
    btnDisabled('cart-btn-1')
    setTotal(total)

    // const container = document.getElementById('container')
    // const tr = document.createElement('tr');
    // tr.innerHTML =
    //     `
    // <td>${serial}</td>
    // <td>
    // <div class="avatar">
    // <div class="w-12 rounded-full h-auto">
    // <img src="${product.productImage}" />
    // </div>
    // </div>
    // </td>
    // <td>${product.productName}</td>
    // <td>${product.productPrice}</td>
    // <td>${product.productQuantity}</td>
    // <td>${total}</td>
    // `
    // container.appendChild(tr)
    // const disabled = document.getElementById('cart-btn-1')
    // disabled.setAttribute('disabled', true)
});
// card-2 
document.getElementById('cart-btn-2').addEventListener('click', function () {
    serial += 1;
    const product = setElementById(
        'cart-2-productname',
        'cart-2-productimg',
        'cart-2-productprice',
        'cart-2-productquantity')
    // console.log(product)
    const total = parseInt(product.productPrice - product.productQuantity)

    setTableElement('container', product, total);
    btnDisabled('cart-btn-2')
    setTotal(total);

});
// card-3 
document.getElementById('cart-btn-3').addEventListener('click', function () {
    serial += 1;
    if (serial > 2) {
        return;
    }
    const product = setElementById(
        'cart-3-productname',
        'cart-3-productimg',
        'cart-3-productprice',
        'cart-3-productquantity')
    // console.log(product)
    const total = parseInt(product.productPrice / product.productQuantity)

    setTableElement('container', product, total);
    btnDisabled('cart-btn-3')
    setTotal(total)

})

function setElementById(elementId, elementIdImg, elementIdPrice, elementIdQuantity) {
    const productName = document.getElementById(elementId,).innerText;

    const productImage = document.getElementById(elementIdImg).src

    const productPrice = document.getElementById(elementIdPrice).innerHTML;
    const productQuantity = document.getElementById(elementIdQuantity).innerHTML;

    return { productName, productImage, productPrice, productQuantity }
}
function setTableElement(elementId, product, total) {
    console.log(serial)
    // if (serial > 2) {
    //     alert('can not add more than two')
    //     return;
    // }
    const container = document.getElementById(elementId)
    const tr = document.createElement('tr');
    const test = document.querySelectorAll('tr')
    // console.log(test.length)
    if (test.length > 2) {
        alert('Cannot Add More Than Two!!!');
        return
    }
    tr.innerHTML =
        `
    <td>${serial}</td>
    <td>
    <div class="avatar">
    <div class="w-12 rounded-full h-auto">
    <img src="${product.productImage}" />
    </div>
    </div>
    </td>
    <td>${product.productName}</td>
    <td>${product.productPrice}</td>
    <td>${product.productQuantity}</td>
    <td>${total}</td>
    `
    container.appendChild(tr)
}

function btnDisabled(elementId) {
    const disabled = document.getElementById(elementId)
    disabled.setAttribute('disabled', true)
}
let totalid = document.getElementById('total').innerText;
function setTotal(setTotalId) {

    let sum = parseFloat(totalid) + parseFloat(setTotalId);
    totalid = sum;
    const set = document.getElementById('total');
    set.innerText = totalid;

    // const total = document.getElementsByClassName('total');
    // const finalTotal = parseInt(total[0].innerText) + parseInt(total[1].innerText);

    // const container = document.getElementById('container')
    // const tr = document.createElement('tr');
    // tr.innerHTML =
    //     `
    // <td>Total: ${finalTotal}</td>
    // `
    // container.appendChild(tr);

}


// function total(setTotalID) {
//     let sum = parseFloat(totalid) + parseFloat(setTotalID);
//     totalid = sum;
//     let set = document.getElementById('total');
//     set.innerText = totalid;
// }