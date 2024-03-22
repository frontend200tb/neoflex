// в элемент main помот вставим одну из двух страниц
// страница магазина или страница корзины
const elMain = document.querySelector('.js-main');

// у значка корзины потом вставим количество товара в корзине
const elAmount = document.querySelector('.js-amount');

// при добавлени товара на страницу ему присваивается id
let id = 0;


/**************************************************************
Статические данные
**************************************************************/


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
];


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
];


/**************************************************************
Верстка первой страницы (Магазин)
**************************************************************/


/*******************************
функция createCard возвращает карточку товара
*******************************/
function createCard(item) {
  // картинка товара
  const elCardImg = document.createElement('img');
  elCardImg.src = item.img;
  elCardImg.alt = 'earphones';
  elCardImg.className = 'card__img';
  const elCardPicture = document.createElement('div');
  elCardPicture.className = 'card__picture';
  elCardPicture.appendChild(elCardImg);

  // цена товара
  const elCardPriceNew = document.createElement('div');
  elCardPriceNew.className = 'card__price-new';
  elCardPriceNew.innerHTML = `${item.price} ₽`;
  const elCardPrice = document.createElement('div');
  elCardPrice.className = 'card__price';
  if (item.priceOld) {
    const elCardPriceOld = document.createElement('div');
    elCardPriceOld.className = 'card__price-old';
    elCardPriceOld.innerHTML = `${item.priceOld} ₽`;
    elCardPrice.append(elCardPriceNew, elCardPriceOld);
  } else {
    elCardPrice.append(elCardPriceNew);
  }

  // название товара
  const elCardTitle = document.createElement('div');
  elCardTitle.className = 'card__title';
  elCardTitle.innerHTML = item.title;

  // верхний ряд информации
  const elCardRow1 = document.createElement('div');
  elCardRow1.className = 'card__row';
  elCardRow1.append(elCardTitle, elCardPrice);

  // рейтинг
  const elCardStarImg = document.createElement('img');
  elCardStarImg.src = './assets/svg/star.svg';
  elCardStarImg.alt = 'star';
  const elCardStar = document.createElement('div');
  elCardStar.className = 'card__star';
  elCardStar.appendChild(elCardStarImg);
  const elCardRate = document.createElement('div');
  elCardRate.className = 'card__rate';
  elCardRate.innerHTML = item.rate;
  const elCardStars = document.createElement('div');
  elCardStars.className = 'card__stars';
  elCardStars.append(elCardStar, elCardRate);

  // кнопка купить
  const elCardBuy = document.createElement('div');
  elCardBuy.className = 'card__buy';
  elCardBuy.classList.add('js-buy');
  elCardBuy.innerHTML = 'Купить';

  // нижний ряд информации
  const elCardRow2 = document.createElement('div');
  elCardRow2.className = 'card__row';
  elCardRow2.append(elCardStars, elCardBuy);

  // информация о товаре
  const elCardInfo = document.createElement('div');
  elCardInfo.className = 'card__info';
  elCardInfo.append(elCardRow1, elCardRow2);

  // карточка товара
  const elCard = document.createElement('div');
  elCard.className = 'card';
  elCard.append(elCardPicture, elCardInfo);
  elCard.product = structuredClone(item);
  elCard.product.id = id++;
  elCard.product.amount = 1;

  // возвращаем карточку товара
  return elCard;
}
/*******************************
/ функция createCard возвращает карточку товара
*******************************/


/*******************************
функция createGoods возвращает секцию с товарами
*******************************/
function createGoods(cardsItem, titleItem) {
  // создаем заголовок
  const elSectionTitle = document.createElement('h2');
  elSectionTitle.className = 'section-title';
  elSectionTitle.innerHTML = titleItem;

  // создаем блок с карточками
  const elCards = document.createElement('div');
  elCards.className = 'cards';
  elCards.append(...cardsItem);

  // создаем контейнер для секции с магазином
  const elShopContainer = document.createElement('div');
  elShopContainer.className = 'container';
  elShopContainer.append(elSectionTitle, elCards);

  // создаем секцию товаров
  const elGoods = document.createElement('section');
  elGoods.className = 'goods';
  elGoods.appendChild(elShopContainer);

  // возвращаем секцию с товарами
  return elGoods;

}
/*******************************
/ функция createGoods возвращает секцию с товарами
*******************************/

// создаем карточки товаров Наушники
let cards = headphones.map(el => createCard(el));

// создаем карточки товаров Беспроводные наушники
let cards2 = headphones2.map(el => createCard(el));

// создаем секцию с товарами Наушники
let goods = createGoods(cards, 'Наушники');

// создаем секцию с товарами Беспроводные наушники
let goods2 = createGoods(cards2, 'Беспроводные наушники');

elMain.append(goods, goods2);
elMain.addEventListener('click', mainClick);



/**************************************************************
Верстка второй страницы (Корзина)
**************************************************************/


// создаем блок basket total
// создаем Итого
const elTotalName = document.createElement('div');
elTotalName.innerHTML = 'ИТОГО';

// создаем цену
const elTotalPrice = document.createElement('div');
elTotalPrice.className = 'js-total'
elTotalPrice.innerHTML = '₽ 0';

// создаем тотал инфо
const elTotalInfo = document.createElement('div');
elTotalInfo.className = 'total-info'
elTotalInfo.append(elTotalName, elTotalPrice)

// создаем кнопку заказать
const elBtnOrder = document.createElement('button');
elBtnOrder.className = 'btn-order'
elBtnOrder.innerHTML = 'Перейти к оформлению';

// создаем элемент basket total
const elBasketTotal = document.createElement('div');
elBasketTotal.className = 'basket__total'
elBasketTotal.append(elTotalInfo, elBtnOrder)


// создаем basket card

/*******************************
функция createBasketCard возвращает карточку товара в корзине
*******************************/
function createBasketCard(item) {
  // кнопка delete
  const elDeleteImg = document.createElement('img');
  elDeleteImg.src = './assets/svg/delete.svg';
  elDeleteImg.alt = 'delete';
  elDeleteImg.className = 'js-delete';
  const elDelete = document.createElement('div');
  elDelete.className = 'delete';
  elDelete.appendChild(elDeleteImg);
  // elDelete.addEventListener('click', btnDeleteClick);

  // картинка товара
  const elBasketCardImg = document.createElement('img');
  elBasketCardImg.src = item.img;
  elBasketCardImg.alt = 'earphones';
  elBasketCardImg.className = 'basket__card__img';
  const elBasketCardPicture = document.createElement('div');
  elBasketCardPicture.className = 'basket__card__picture';
  elBasketCardPicture.appendChild(elBasketCardImg);

  // информация о товаре
  const elBasketCardTitle = document.createElement('div');
  elBasketCardTitle.className = 'basket__card__title';
  elBasketCardTitle.innerHTML = item.title;
  const elBasketCardPrice = document.createElement('div');
  elBasketCardPrice.className = 'basket__card__price-one';
  elBasketCardPrice.innerHTML = `${spaceDigit(item.price)} ₽`;
  const elBasketCardInfo = document.createElement('div');
  elBasketCardInfo.className = 'basket__card__info';
  elBasketCardInfo.append(elBasketCardTitle, elBasketCardPrice);

  // первый ряд
  const elBasketCardGood = document.createElement('div');
  elBasketCardGood.className = 'basket__card__good';
  elBasketCardGood.append(elBasketCardPicture, elBasketCardInfo);

  // минус
  const elMinusImg = document.createElement('img');
  elMinusImg.src = './assets/svg/minus.svg';
  elMinusImg.alt = 'minus';
  elMinusImg.className = 'js-minus';
  const elMinus = document.createElement('div');
  elMinus.className = 'minus';
  elMinus.appendChild(elMinusImg);

  // количество
  const elCardAmount = document.createElement('div');
  elCardAmount.className = 'amount';
  elCardAmount.innerHTML = item.amount;

  // плюс
  const elPlusImg = document.createElement('img');
  elPlusImg.src = './assets/svg/plus.svg';
  elPlusImg.alt = 'plus';
  elPlusImg.className = 'js-plus';
  const elPlus = document.createElement('div');
  elPlus.className = 'plus';
  elPlus.appendChild(elPlusImg);

  // выбор количества товаров
  const elBasketCardAmount = document.createElement('div');
  elBasketCardAmount.className = 'basket__card__amount';
  elBasketCardAmount.append(elMinus, elCardAmount, elPlus);

  // итоговая цена на карточке
  const elBasketCardPriceTotal = document.createElement('div');
  elBasketCardPriceTotal.className = 'basket__card__price-total';
  elBasketCardPriceTotal.innerHTML = `${spaceDigit(item.price * item.amount)} ₽`;

  // второй ряд
  const elBasketCardTotal = document.createElement('div');
  elBasketCardTotal.className = 'basket__card__total';
  elBasketCardTotal.append(elBasketCardAmount, elBasketCardPriceTotal);

  // создаем элемент basket card
  const elBasketCard = document.createElement('div');
  elBasketCard.className = 'basket__card';
  elBasketCard.append(elDelete, elBasketCardGood, elBasketCardTotal);
  elBasketCard.product = item;

  // возвращаем карточку товара
  return elBasketCard;
}
/*******************************
/ функция createBasketCard возвращает карточку товара в корзине
*******************************/


// создаем basket cards
const elBasketCards = document.createElement('div');
elBasketCards.className = 'basket__cards';

// создаем basket content
const elBasketContent = document.createElement('div');
elBasketContent.className = 'basket-content';
elBasketContent.append(elBasketCards, elBasketTotal);

// создаем заголовок Корзина
const elBasketTitle = document.createElement('h2');
elBasketTitle.className = 'section-title';
elBasketTitle.classList.add('basket__title');
elBasketTitle.innerHTML = 'Корзина';

// создаем контейнер Корзины
const elBasketContainer = document.createElement('div');
elBasketContainer.className = 'container';
elBasketContainer.append(elBasketTitle, elBasketContent);

// создаем корзину
const elBasket = document.createElement('div');
elBasket.className = 'basket';
elBasket.appendChild(elBasketContainer);


/*******************************
функция showInBasket показывает товар в корзине
*******************************/
function showInBasket(item) {
  elBasketCards.appendChild(item);
}
/*******************************
/ функция showInBasket показывает товар в корзине
*******************************/


// создаем карточку товара в корзине
//let basketCard = createBasketCard(headphones[0]);
//showInBasket(basketCard);


/**************************************************************
Обработка действий пользователя
**************************************************************/


// навигация на первую страницу
const toMain = document.querySelectorAll('.js-logo');
if (toMain) {
  for (let i = 0; i < toMain.length; i++) {
    toMain[i].addEventListener('click', (e) => {
      e.preventDefault();
      elMain.innerHTML = '';
      elMain.append(goods, goods2);
    })
  }
}


// навигация на страницу корзины
const toBasket = document.querySelectorAll('.js-to-basket');
if (toBasket) {
  for (let i = 0; i < toBasket.length; i++) {
    toBasket[i].addEventListener('click', (e) => {
      e.preventDefault();
      elMain.innerHTML = '';
      elMain.append(elBasket);
    })
  }
}


/**************************************************************
Вспомогательные функции
**************************************************************/


// запись числа с пробелом между тысячями
function spaceDigit(num) {
  if (num < 1000) {
    return num;
  }
  let thousand = Math.floor(num / 1000);
  let unit = (num % 1000).toString().padStart(3, '0');
  return `${thousand} ${unit}`;
}


/**************************************************************
делегируем собитие клик по секции main
**************************************************************/

function mainClick(e) {
  // обработаем нажатие на кнопку Купить
  if (e.target.classList.contains('js-buy')) {
    btnBuyClick(e);
  } else if (e.target.classList.contains('js-delete')) {
    btnDeleteClick(e);
  } else if (e.target.classList.contains('js-minus')) {
    btnMinusClick(e);
  } else if (e.target.classList.contains('js-plus')) {
    btnPlusClick(e);
  }
}

/*********************************
логика добавления товара в корзину
*********************************/
// обработаем нажатие на кнопку Купить
function btnBuyClick(e) {
  let item = e.target.closest('.card').product;
  addToStorage(item);
}

// добавление одного товара
function addToStorage(item) {
  goodsInBasket = JSON.parse(sessionStorage.getItem('goods'));

  // если товар с таким id уже есть в корзине
  // то увеличиваем его количество на 1
  let currentItem = goodsInBasket.find(el => el.id === item.id);
  if (currentItem) {
    currentItem.amount++;
  } else {
    goodsInBasket.push(item);
  }

  elBasketCards.innerHTML = '';
  goodsInBasket.forEach(el => showInBasket(createBasketCard(el)));
  sessionStorage.setItem('goods', JSON.stringify(goodsInBasket));
  // увеличим количество товаров в корзине
  increaseCounter();

  // увеличим итоговую цену товаров в корзине
  increaseTotal(item.price);
}

// функция increaseCounter увеличивает счетчик товаров в корзине
function increaseCounter() {
  amount = sessionStorage.getItem('amount');
  amount++;
  sessionStorage.setItem('amount', amount);
  elAmount.innerText = amount;
}

// функция increaseTotal увеличивает сумму товаров в корзине
function increaseTotal(price) {
  total = sessionStorage.getItem('total');
  total = +total + +price;
  sessionStorage.setItem('total', total);
  elTotalPrice.innerHTML = `₽ ${spaceDigit(total)}`;
}


/*********************************
логика кнопок плюс, минус, удалить в карточке товара в корзине
*********************************/
// обработаем нажатие на кнопку Delete
function btnDeleteClick(e) {
  let item =  e.target.closest('.basket__card').product;
  removeBasketCard(item);
}

// обработаем нажатие на кнопку Минус
function btnMinusClick(e) {
  let item =  e.target.closest('.basket__card').product;
  removeFromStorage(item);
}

// обработаем нажатие на кнопку Плюс
function btnPlusClick(e) {
  let item =  e.target.closest('.basket__card').product;
  addToStorage(item);
}

// удаление одного товара
function removeFromStorage(item) {
  goodsInBasket = JSON.parse(sessionStorage.getItem('goods'));

  // находим товар с таким id и уменьшаем его количество на 1
  let currentItem = goodsInBasket.find(el => el.id === item.id);
  if (currentItem.amount > 1) {
    currentItem.amount--;
    elBasketCards.innerHTML = '';
    goodsInBasket.forEach(el => showInBasket(createBasketCard(el)));
    sessionStorage.setItem('goods', JSON.stringify(goodsInBasket));
    // уменьшим количество товаров в корзине
    decreaseCounter();
    // уменьшим итоговую цену товаров в корзине
    decreaseTotal(item.price);
  } else {
    removeBasketCard(item);
  }
}

function removeBasketCard(item) {
  // уменьшим счетчик товаров в корзине
  amount = sessionStorage.getItem('amount');
  amount -= item.amount;
  sessionStorage.setItem('amount', amount);
  elAmount.innerText = amount;

  // уменьшим сумму товаров в корзине
  total = sessionStorage.getItem('total');
  total = +total - (item.amount * item.price);
  sessionStorage.setItem('total', total);
  elTotalPrice.innerHTML = `₽ ${spaceDigit(total)}`;

  // удаляем товар из корзины
  let index = goodsInBasket.findIndex(el => {
    return el.id === item.id;
  })
  goodsInBasket.splice(index, 1);
  elBasketCards.innerHTML = '';
  goodsInBasket.forEach(el => showInBasket(createBasketCard(el)));
  sessionStorage.setItem('goods', JSON.stringify(goodsInBasket));
}

// функция decreaseCounter уменьшает счетчик товаров в корзине
function decreaseCounter() {
  amount = sessionStorage.getItem('amount');
  amount--;
  sessionStorage.setItem('amount', amount);
  elAmount.innerText = amount;
}

// функция decreaseTotal уменьшает сумму товаров в корзине
function decreaseTotal(price) {
  total = sessionStorage.getItem('total');
  total = +total - price;
  sessionStorage.setItem('total', total);
  elTotalPrice.innerHTML = `₽ ${spaceDigit(total)}`;
}

/**************************************************************
Открытие страницы приложения
**************************************************************/


/*      *     *     *     *
при запуске приложения Session Storage пуст
поэтому надо изначально поставить
количество товаров в корзине amount = 0
итоговую цену товаров в корзине total = 0
массив товаров в корзине goodsInBasket = []
*     *     *     *     */
// количество товаров в корзине
let amount;
// начальное значение количества товаров в корзине
if (!sessionStorage.getItem('amount')) {
  amount = 0;
  sessionStorage.setItem('amount', amount);
}

// итоговая цена товаров в корзине
let total;
// начальное значение цены товаров в корзине
if (!sessionStorage.getItem('total')) {
  total = 0;
  sessionStorage.setItem('total', total);
}

// массив товаров в корзине
let goodsInBasket;
// начальное значение количества товаров в корзине
if (!sessionStorage.getItem('goods')) {
  goodsInBasket = [];
  sessionStorage.setItem('goods', JSON.stringify(goodsInBasket));
}


/**************************************************************
Обновление страницы приложения
**************************************************************/
/*      *     *     *     *
при обновлении приложения Session Storage заполнен
поэтому надо взять из него
количество товаров в корзине amount
итоговую цену товаров в корзине total
массив товаров в корзине goodsInBasket
*     *     *     *     */
amount = sessionStorage.getItem('amount');
total = sessionStorage.getItem('total');
goodsInBasket = JSON.parse(sessionStorage.getItem('goods'));

// выведем количество товаров в корзине
elAmount.innerText = amount;
// выведем итоговую цену товаров в корзине
elTotalPrice.innerHTML = `₽ ${spaceDigit(total)}`;
// создадим и выведем карточки товаров в корзине
goodsInBasket.forEach(el => showInBasket(createBasketCard(el)));



/*
осталось сделать
+ 1. при увеличении количества товара в карточке увеличивать итоговую сумму в карточке

+ 2. обработка клика по плюсу на карточке в корзине
количесвто товара на карточке должно увеличиться на 1
количество товара в корзине должно увеличиться на 1
итоговая сумма в карточке должна увеличиваться
итоговая сумма в корзине должна увеличиваться

+ 3. обработка клика по минусу на карточке в корзине
если на карточке больше 1 товара
количесвто товара на карточке должно уменьшиться на 1
количество товара в корзине должно уменьшиться на 1
итоговая сумма в карточке должна уменьшиться
итоговая сумма в корзине должна уменьшиться
если оставался один товар то переходим к удалению товара

4. обработка клика по иконке удалить на карточке в корзине
количество товара в корзине должно уменьшиться на число товаров в карточке
итоговая сумма в корзине должна уменьшиться на итоговую сумму в карточке
карточка должна удалиться

*/
