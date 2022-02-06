import React from 'react'

function Contacts() {
    return (
        <div>
            <section className="section contacts">
                <div className="container">
                    <h2 className="section-title section__title">
                        Контакты
                    </h2>
                    <div className="contacts-block">
                        <div className="contacts-block__item">
                            <img src="./img/contacts/phone.png" alt="phone" className="contacts__image" />
                            <div className="contacts__text"><a href="#" className="contacts__link">+380688780195</a>
                            </div>
                        </div>
                        <div className="contacts-block__item">
                            <img src="./img/contacts/location.png" alt="location" class="contacts__image" />
                            <div className="contacts__text">
                                <address className="contacts__address">Харьков, ул.Комарова 23</address>
                            </div>
                        </div>
                        <div className="contacts-block__item">
                            <img src="./img/contacts/email.png" alt="email" className="contacts__image" />
                            <div className="contacts__text"><a href="#" className="contacts__link">incertus.margo @gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contacts
