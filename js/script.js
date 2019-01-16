const imagens = [
"MacBook-Pro-Apple-MF839BZ-A-com-Intel-Core-i5-Dual-Core-8GB-128GB-SSD-Leitor-de-Cartoes-HDMI-Wireless-Webcam-LED-Retina-13-3-e-OS-X-Yosemite-4453613.jpg",
"apple-macbook-air-13-i5-16ghz-8gb-128gb-ssd-mmgf2-11549005.jpg",
"MacBook-Pro-Apple-MJLQ2BZ-A-com-Intel-Core-i7-Quad-Core-16GB-256GB-SSD-Leitor-de-Cartoes-HDMI-Bluetooth-Tela-LED-Retina-15-4-e-OS-X-Yosemite-4996363.jpg",
"apple-macbook-air-13-core-i5-16ghz-8gb-128gb-ssd-mmgf2-11514560.jpg",
"Mac-Mini-Apple-MGEN2BZ-A-com-Intel-Core-i5-Dual-Core-8GB-1TB-Leitor-de-Cartoes-HDMI-Wireless-AC-Bluetooth-4-0-e-OS-X-Yosemite-3865616.jpg",
"iMac-Apple-MK142BZ-A-com-Intel-Core-i5-Dual-Core-8GB-1TB-Leitor-de-Cartoes-Wireless-Bluetooth-Webcam-LED-21-5-e-OS-X-El-Capitan-6823995.jpg",
"iphone-6s-apple-com-tela-47-hd-32gb-3d-touch-ios-9-sensor-touch-id-camera-isight-12mp-wi-fi-4g-gps-bluetooth-e-nfc-cinza-espacial-10404692.jpg",
"iphone-7-apple-plus-red-com-128gb-tela-retina-hd-de-55-ios-10-dupla-camera-traseira-resistente-a-agua-wi-fi-4g-lte-e-nfc-vermelho-11466328.jpg",
"iphone-6s-apple-com-tela-47-hd-32gb-3d-touch-ios-9-sensor-touch-id-camera-isight-12mp-wi-fi-4g-gps-bluetooth-e-nfc-cinza-espacial-10404692.jpg",
]

function mostraItemVisitado() {
    const produtoVisitadoHtml = document.querySelector(".principal__produtos-visitados-carrossel-corpo");

    var produtoVisitado = data[0].data.item;
    var produtoVisitadoNome = produtoVisitado.name;
    var produtoVisitadoImagem = produtoVisitado.imageName;
    var produtoVisitadoPreco = produtoVisitado.price;
    var produtoVisitadoCondicao = produtoVisitado.productInfo.paymentConditions;

    produtoVisitadoHtml.innerHTML = `
    <div class="principal__produtos-visitados-carrossel-corpo-imagem">
    <img src="images/iPhone-SE-Apple-com-16GB-Tela-4-iOS-9-Sensor-de-Impressao-Digital-Camera-iSight-12MP-Wi-Fi-3G-4G-GPS-MP3-Bluetooth-e-NFC-Cinza-Espacial-7990220.jpg">
    </div>
    <div class="principal__produtos-visitados-carrossel-corpo-descricao">
        <p>${produtoVisitadoNome}</p>
    </div>
    <div class="principal__produtos-visitados-carrossel-corpo-preco">
        <span>Por:</span>
        <h5>${produtoVisitadoPreco}</h5>
    </div>
    <div class="principal__produtos-visitados-carrossel-corpo-pagamento">
        <h6>${produtoVisitadoCondicao}</h6>
    </div>
    <div class="adicionar">
        <button id="button" class="principal__produtos-visitados-carrossel-corpo-btn">
            adicionar ao carrinho
            <img src="./images/shopping-cart.svg">
        </button>
        </div>
    </div>`
}
mostraItemVisitado()

mostraRecomendacao(0)//Mostra três primeiras após carregar página

function mostraRecomendacao(primeiroId) {
    const produtoRecomendadoHtml = document.getElementById('carrossel');
    produtoRecomendadoHtml.innerHTML=''
    const produtoRecomendado = data[0].data.recommendation;
    for(let i = primeiroId; i <= primeiroId+2; i++){
        let item = produtoRecomendado[i]
        produtoRecomendadoHtml.innerHTML += ` 
        <div id="${item.businessId}" class="principal__produtos-interesses-carrossel-corpo">
            <div class="principal__produtos-interesses-carrossel-corpo-imagem">
            <img src="images/${imagens[i]}">
            </div>
            <div class="principal__produtos-interesses-carrossel-corpo-descricao">
                <p>${item.name}</p>
            </div>
            <div class="principal__produtos-interesses-carrossel-corpo-preco">
                <span>Por:</span>
                <h5>${item.price}</h5>
            </div>
            <div class="principal__produtos-interesses-carrossel-corpo-pagamento">
                <h6>${item.productInfo.paymentConditions}</h6>
            </div>
            <div class="adicionar">
                <button id="button" class="principal__produtos-interesses-carrossel-corpo-btn">
                    adicionar ao carrinho
                    <img src="./images/shopping-cart.svg">
                </button>
            </div>
        </div>`
    }
}