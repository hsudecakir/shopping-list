// Kullanıcıya kaç adet ürün eklemek istediğini soralım
// Kullanıcıdan aldığı cevaba göre ürünleri yazdığında diziye eklesin.
// Console'a tüm ürünleri yazdıralım ve dizi içinde kaç eleman olduğunu yazdıralım.

let products = []
let addList = Number(prompt('Alışveriş listenize kaç adet ürün eklemek istediğinizi sayıyla giriniz.'));
let product;

function addProduct() {
  for(let i = 0; i < addList; i++) {
    product = prompt('Listeye eklemek istediğiniz ürün adını giriniz.');
    products.push(product);
  }
}

function listProducts() {
  for(let i = 0; i < products.length; i++) {
    let sira = i + 1;
    console.log(`${sira}. ${products[i]}`);
  }
  console.log(`Alışveriş listenizdeki toplam ürün sayısı: ${products.length}`);
}

addProduct();
listProducts();