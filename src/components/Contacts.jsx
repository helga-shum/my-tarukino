import React from 'react'

function Contacts() {
    return (
        <div>
            <section class="section contacts">
                <div class="container">
                    <h2 class="section-title section__title">
                        Контакты
                    </h2>
                    <div class="contacts-block">
                        <div class="contacts-block__item">
                            <img src="./img/contacts/phone.png" alt="phone" class="contacts__image" />
                            <div class="contacts__text"><a href="#" class="contacts__link">+380688780195</a>
                            </div>
                        </div>
                        <div class="contacts-block__item">
                            <img src="./img/contacts/location.png" alt="location" class="contacts__image" />
                            <div class="contacts__text">
                                <address class="contacts__address">Харьков, ул.Комарова 23</address>
                            </div>
                        </div>
                        <div class="contacts-block__item">
                            <img src="./img/contacts/email.png" alt="email" class="contacts__image" />
                            <div class="contacts__text"><a href="#" class="contacts__link">incertus.margo @gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contacts
