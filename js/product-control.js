function formatPrice(value) {
    const number = Number(value);
    if (Number.isNaN(number)) return '0';
    return number.toLocaleString('ko-KR');
}

const saleUlTag = document.querySelector('.sale');
let result = productArray.map(product => {
    return `<li>
                <a href="#">
                        <figure>
                            <img src="./img/${product.pthumbFileName}" alt="${product.pname}">
                        </figure>
                        <div class="sale-txt">
                            <h4 class="title-1">${product.pname}</h4>
                            <p class="desc-1">${product.pdesc}</p>
                            <div class="pay-frame">
                                <div class="pay-original">
                                    <span>${formatPrice(product.price)}</span>원
                                </div>
                                <div class="pay-discount">
                                    <div class="discount">${Math.round(product.pdiscount*100)}%</div>
                                    <div class="pay"><b>${formatPrice(product.price*(1-product.pdiscount))}</b>원</div>
                                </div>
                            </div>
                            <span class="like-badge noab"><img src="./img/heart-off.svg" alt="좋아요 하트">${product.plike}</span>
                        </div>
                    </a>
                </li>`
}).join('')

saleUlTag.innerHTML = result
