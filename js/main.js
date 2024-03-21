// элемент main куда при роутинге будут вставляться
// или страница магазина или страница корзины
const elMain = document.querySelector('.js-main');

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
elTotalPrice.innerHTML = '₽ 2 927';

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
// создаем кнопку delete
const elDeleteImg = document.createElement('img');
elDeleteImg.src = './assets/svg/delete.svg';
elDeleteImg.alt = 'delete';
const elDelete = document.createElement('div');
elDelete.className = 'delete';
elDelete.appendChild(elDeleteImg);

// создаем картинку товара в корзине
const elBasketCardImg = document.createElement('img');
elBasketCardImg.src = './assets/images/good1-1.png';
elBasketCardImg.alt = 'earphones';
elBasketCardImg.className = 'basket__card__img';
const elBasketCardPicture = document.createElement('div');
elBasketCardPicture.className = 'basket__card__picture';
elBasketCardPicture.appendChild(elBasketCardImg);

// создаем информацию о товаре в корзине
const elBasketCardTitle = document.createElement('div');
elBasketCardTitle.className = 'basket__card__title';
elBasketCardTitle.innerHTML = 'Apple BYZ S852I';
const elBasketCardPrice = document.createElement('div');
elBasketCardPrice.className = 'basket__card__price-one';
elBasketCardPrice.innerHTML = '2 927 ₽';
const elBasketCardInfo = document.createElement('div');
elBasketCardInfo.className = 'basket__card__info';
elBasketCardInfo.append(elBasketCardTitle, elBasketCardPrice);

// создаем первый ряд в busket card
const elBasketCardGood = document.createElement('div');
elBasketCardGood.className = 'basket__card__good';
elBasketCardGood.append(elBasketCardPicture, elBasketCardInfo);

// создаем блок изменения количества товаров
// создаем минус
const elMinusImg = document.createElement('img');
elMinusImg.src = './assets/svg/minus.svg';
elMinusImg.alt = 'minus';
const elMinus = document.createElement('div');
elMinus.className = 'minus';
elMinus.appendChild(elMinusImg);

// создаем количество
const elCardAmount = document.createElement('div');
elCardAmount.className = 'amount';
elCardAmount.innerHTML = '1';

// создаем плюс
const elPlusImg = document.createElement('img');
elPlusImg.src = './assets/svg/plus.svg';
elPlusImg.alt = 'plus';
const elPlus = document.createElement('div');
elPlus.className = 'plus';
elPlus.appendChild(elPlusImg);

// создаем элемент изменения количества товаров
const elBasketCardAmount = document.createElement('div');
elBasketCardAmount.className = 'basket__card__amount';
elBasketCardAmount.append(elMinus, elCardAmount, elPlus);

// создаем общую цену на карточке в корзине
const elBasketCardPriceTotal = document.createElement('div');
elBasketCardPriceTotal.className = 'basket__card__price-total';
elBasketCardPriceTotal.innerHTML = '2 927 ₽';

// создаем второй ряд в busket card
const elBasketCardTotal = document.createElement('div');
elBasketCardTotal.className = 'basket__card__total';
elBasketCardTotal.append(elBasketCardAmount, elBasketCardPriceTotal);

// создаем элемент basket card
const elBasketCard = document.createElement('div');
elBasketCard.className = 'basket__card';
elBasketCard.append(elDelete, elBasketCardGood, elBasketCardTotal);

// создаем basket cards
const elBasketCards = document.createElement('div');
elBasketCards.className = 'basket__cards';
elBasketCards.appendChild(elBasketCard);

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



// добавить товар в корзину
const btnBuy = document.querySelectorAll('.js-buy');
const elAmount = document.querySelector('.js-amount');
if (btnBuy) {
  for (let i = 0; i < btnBuy.length; i++) {
    btnBuy[i].addEventListener('click', (e) => {
      e.preventDefault();
      amount = sessionStorage.getItem('amount');
      amount++;
      sessionStorage.setItem('amount', amount);
      elAmount.innerText = amount;
    })
  }
}


/*      *     *     *     *
start
при запуске приложения Session Storage пуст
*     *     *     *     */
// количество товаров в корзине
let amount;
// начальное значение количества товаров в корзине
if (!sessionStorage.getItem('amount')) {
  amount = 0;
} else {
  amount = sessionStorage.getItem('amount');
}
// покажем начальное значение количества товаров в корзине
elAmount.innerText = amount;