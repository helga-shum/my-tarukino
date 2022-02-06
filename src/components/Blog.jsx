import React from 'react'

function Blog() {
    return (
        <div>
            <section className="section blog">
                <div className="container">
                    <div className="blog__heading">
                        <h3 className="blog__title">
                            Полезное или что нужно знать о десертах...
                        </h3>
                        <a href="#" className="blog-list__link-more">Читать все статьи</a>

                    </div>
                    <div className="blog-list">
                        <div className="blog-card blog-list__card">
                            <div className="blog-list__image">
                                <img src="img/collage/collage-1.jpg" alt="collage" />

                            </div>
                            <div className="blog-list__text">Виды кремов для тортов</div>
                        </div>
                        <div className="blog-card blog-list__card">
                            <div className="blog-list__image">
                                <img src="img/collage/collage-2.jpg" alt="collage" />
                            </div>
                            <div className="blog-list__text">Срок хранения десертов</div>
                        </div>
                        <div className="blog-card blog-list__card">
                            <div className="blog-list__image">
                                <img src="img/collage/collage-3.jpg" alt="collage" />
                            </div>
                            <div className="blog-list__text">Десерты без выпечки</div>
                        </div>
                        <div className="blog-card blog-list__card">
                            <div className="blog-list__image">
                                <img src="img/collage/collage-4.jpg" alt="collage" />
                            </div>
                            <div className="blog-list__text">Вопросы - Ответы</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Blog
