//## 6. 장바구니 뒤바뀜 문제


function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};


const userBCart = userACart;
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);



```
1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
  - 둘 다    
    [{ name: "키보드", price: 25000 },
    { name: "마우스", price: 15000 }],

2.	1번의 결과에 대한 이유를 설명해보세요.
  - useBCart라는 변수에 useACart를 할당했다. 결론적으로 두 변수는 같은 주소값을 가진 객체 참조하게 된다.
    따라서 해당 주소값의 내용이 변하면 두 변수 모두 값이 변하게 된다.
    
3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
  - 유저 A와 B가 각 각 다른 주소를 참조하도록 B의 items를 새로 할당한다. 
  
  const userBCart = {
    items : userACart.items.map((item) => {return {...item}})
  }
