import React from 'react'

function Blog() {
    return (
        <div>
            <section class="section blog">
                <div class="container">
                    <div class="blog__heading">
                        <h3 class="blog__title">
                            Полезное или что нужно знать о десертах...
                        </h3>
                        <a href="#" class="blog-list__link-more">Читать все статьи</a>

                    </div>
                    <div class="blog-list">
                        <div class="blog-card blog-list__card">
                            <div class="blog-list__image">
                                <img src="img/collage/collage-1.jpg" alt="collage" />

                            </div>
                            <div class="blog-list__text">Виды кремов для тортов</div>
                        </div>
                        <div class="blog-card blog-list__card">
                            <div class="blog-list__image">
                                <img src="img/collage/collage-2.jpg" alt="collage" />
                            </div>
                            <div class="blog-list__text">Срок хранения десертов</div>
                        </div>
                        <div class="blog-card blog-list__card">
                            <div class="blog-list__image">
                                <img src="img/collage/collage-3.jpg" alt="collage" />
                            </div>
                            <div class="blog-list__text">Десерты без выпечки</div>
                        </div>
                        <div class="blog-card blog-list__card">
                            <div class="blog-list__image">
                                <img src="img/collage/collage-4.jpg" alt="collage" />
                            </div>
                            <div class="blog-list__text">Вопросы - Ответы</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Blog
