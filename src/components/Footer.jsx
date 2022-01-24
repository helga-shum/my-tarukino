import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="footer-block">
                        <div class="footer__description">
                            <h4 class="footer__title">tarukino</h4>
                            <span class="footer__subtitle">Ведущий производитель десертов</span>
                            <span class="footer__copy">@Tarukino</span>
                        </div>
                        <div class="footer__pay-info">
                            <img src="img/footer/mastercard.png" alt="" class="footer__pay-logo" />
                            <img src="img/footer/paypal.png" alt="" class="footer__pay-logo" />
                            <img src="img/footer/visa.png" alt="" class="footer__pay-logo" />
                            <img src="img/footer/webmoney.png" alt="" class="footer__pay-logo" />
                        </div>
                        <div class="footer__contacts">
                            <a href="#" class="footer__phone">+380638780194</a>
                            <a href="#" class="footer__mail">tarukino@gmail.com</a>
                            <div class="footer-social">
                                <a href="#" class="footer-social__link">
                                    <img src="./img/social/facebook.png" alt="" />
                                </a>
                                <a href="#" class="footer-social__link">
                                    <img src="./img/social/instagram.png" alt="" />
                                </a>
                                <a href="#" class="footer-social__link">
                                    <img src="./img/social/twitter.png" alt="" />
                                </a>
                                <a href="#" class="footer-social__link">
                                    <img src="./img/social/vk.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
