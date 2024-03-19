// навигация на первую страницу
const toMain = document.querySelectorAll('.js-logo');
if (toMain) {
  for (let i = 0; i < toMain.length; i++) {
    toMain[i].addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = './index.html';
    })
  }
}


// навигация на страницу корзины
const toBasket = document.querySelectorAll('.js-to-basket');
if (toBasket) {
  for (let i = 0; i < toBasket.length; i++) {
    toBasket[i].addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = './basket.html';
    })
  }
}


// добавить товар в корзину
const btnBuy = document.querySelectorAll('.js-buy');
const elAmount = document.querySelector('.js-amount');
if (btnBuy) {
  for (let i = 0; i < btnBuy.length; i++) {
    btnBuy[i].addEventListener('click', (e) => {
      e.preventDefault();
      amount = sessionStorage.getItem('amount');
      amount++
      sessionStorage.setItem('amount', amount);
      elAmount.innerText = amount;
    })
  }
}


// начальное значение Session Storage
if (!sessionStorage.getItem('amount')) {
  sessionStorage.setItem('amount', 1);
}

// установка счетчика товаров из Session Storage
let amount = sessionStorage.getItem('amount');
console.log(amount);


// массив с товарами - наушники
const headphones = [
  {
    img: './assets/images/good1-1.png',
    title: 'Apple BYZ S852I',
    price: 2927,
    priceOld: 3527,
    rate: 4.7,
  },
  {
    img: './assets/images/good1-2.png',
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
  },
  {
    img: './assets/images/good1-3.png',
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
  },
  {
    img: './assets/images/good1-1.png',
    title: 'Apple BYZ S852I',
    price: 2927,
    rate: 4.7,
  },
  {
    img: './assets/images/good1-2.png',
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
  },
  {
    img: './assets/images/good1-3.png',
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
  },
]


// массив с товарами - беспроводные наушники
const headphones2 = [
  {
    img: './assets/images/good2-1.png',
    title: 'Apple AirPods',
    price: 9527,
    rate: 4.7,
  },
  {
    img: './assets/images/good2-2.png',
    title: 'GERLAX GH-04',
    price: 6527,
    rate: 4.7,
  },
  {
    img: './assets/images/good2-3.png',
    title: 'BOROFONE BO4',
    price: 7527,
    rate: 4.5,
  },
]