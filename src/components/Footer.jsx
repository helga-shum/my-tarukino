import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-block">
                        <div className="footer__description">
                            <h4 className="footer__title">tarukino</h4>
                            <span className="footer__subtitle">Ведущий производитель десертов</span>
                            <span className="footer__copy">@Tarukino</span>
                        </div>
                        <div className="footer__pay-info">
                            <img src="img/footer/mastercard.png" alt="" className="footer__pay-logo" />
                            <img src="img/footer/paypal.png" alt="" className="footer__pay-logo" />
                            <img src="img/footer/visa.png" alt="" className="footer__pay-logo" />
                            <img src="img/footer/webmoney.png" alt="" className="footer__pay-logo" />
                        </div>
                        <div class="footer__contacts">
                            <a href="#" className="footer__phone">+380638780194</a>
                            <a href="#" className="footer__mail">tarukino@gmail.com</a>
                            <div className="footer-social">
                                <a href="#" className="footer-social__link">
                                    <img src="./img/social/facebook.png" alt="" />
                                </a>
                                <a href="#" className="footer-social__link">
                                    <img src="./img/social/instagram.png" alt="" />
                                </a>
                                <a href="#" className="footer-social__link">
                                    <img src="./img/social/twitter.png" alt="" />
                                </a>
                                <a href="#" className="footer-social__link">
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
