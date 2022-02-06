import React from 'react'

function Reviews() {
    return (
        <div>
            <section className="section reviews">
                <div className="container">
                    <h2 className="section-title section__title">
                        Отзывы наших клиентов

                    </h2>
                    <div className="reviews-slider">
                        <div className="reviews-slider__item">
                            <div className="reviews-slider__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." </div>
                            <img src="./img/face/face-1.jpg" alt="face" className="reviews-slider__image" />
                            <span className="reviews-slider__name">Даниил Бондаренко<br />Харьков</span>
                        </div>
                        <div className="reviews-slider__item">
                            <div className="reviews-slider__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." </div>
                            <img src="./img/face/face-2.jpg" alt="face" className="reviews-slider__image" />
                            <span className="reviews-slider__name">Мария Котова<br />Харьков</span>
                        </div>
                        <div className="reviews-slider__item">
                            <div className="reviews-slider__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." </div>
                            <img src="./img/face/face-3.jpg" alt="face" className="reviews-slider__image" />
                            <span className="reviews-slider__name">Ольга Самойлова<br />Харьков</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Reviews
