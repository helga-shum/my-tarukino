import React from 'react'

function Features() {
    return (
        <div>
            <section className="features section">
                <div className="container">
                    <h2 className="section-title section__title">
                        наши приемущества
                    </h2>
                    <div className="features-block">
                        <div className="features-block__item">
                            <img src="img/features/feature-1.png" alt="торт" className="features-block__image" />
                            <p className="features-block__text">Большой выбор десертов</p>
                        </div>
                        <div className="features-block__item">
                            <img src="img/features/feature-2.png" alt="торт" className="features-block__image" />
                            <p className="features-block__text">Соблюдение санитарных<br /> норм производства</p>
                        </div>
                        <div className="features-block__item">
                            <img src="img/features/feature-3.png" alt="торт" className="features-block__image" />
                            <p className="features-block__text">Собственное производство</p>
                        </div>
                        <div className="features-block__item">
                            <img src="img/features/feature-4.png" alt="торт" className="features-block__image" />
                            <p className="features-block__text">Высокое качество</p>
                        </div>
                        <div className="features-block__item">
                            <img src="img/features/feature-5.png" alt="торт" className="features-block__image" />
                            <p className="features-block__text">Выгодные цены</p>
                        </div>
                        <div className="features-block__item">
                            <img src="img/features/feature-6.png" alt="торт" className="features-block__image" />
                            <p className="features-block__text">Соблюдение сроков</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Features
