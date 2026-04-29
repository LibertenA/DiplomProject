type Props = {
    params: {
        slug: string;
    }
}


import ProductPresentation from "@/components/ProductPresentation"
import ProductInfo from "@/components/ProductInfo"
import ProductPrice from "@/components/ProductPrice"
import ProductsList from "@/components/ProductsList"

export default function Page({params: {slug}}: Props) {
    return(
        <div>
            <span className="directory_catalog">Главная / Каталог / Компьютеры и Ноутбуки / {slug}</span>

            <div className="product-full_place">
                <ProductPresentation />
                <ProductInfo 
                    code= {2090229}
                    title= {"Apple MacBook Neo 13 (A18 Pro, 6C СPU/5С GPU, 2026), 8 ГБ, 256 ГБ SSD, синий индиго"}
                    color= {"индиго"}
                    memory= {256}
                    cpu= {"Apple M4 10-core (4 + 6)"}
                    ram= {16}
                    system= {"macOS"}
                    display= {13.6}
                    resolution= {"2560x1664"}
                    weight= {1.24}
                    language= {"английская/русская"}
                />
                <ProductPrice 
                    price={79990} 
                    discount={5000} 
                    installment={4166} />
            </div>
            
            <div className="product-discription_place">
                <h2 className="discription-title">
                    Описание
                </h2>

                <p className="text-block">
                    Apple MacBook Air A3240 – лёгкий и производительный ноутбук для тех, кто ценит мобильность и сочетание функций в одном устройстве. Он подходит для учебы, работы и творческих задач благодаря современному процессору и экрану с высоким разрешением. Модель выделяется голубым корпусом и обновлённой операционной системой macOS.
                </p>
                <p className="text-block">
                    13.6-дюймовый экран с разрешением 2560x1664 создаёт детализированную картинку с плотностью пикселей 224ppi. Матрица Liquid Retina на базе IPS с LED-подсветкой даёт широкие углы обзора 170-178° и яркость до 500 кд/м². Экран поддерживает HDR10, улучшая цветопередачу и контрастность при просмотре совместимого контента. Глянцевая поверхность подчёркивает насыщенность цветов, а режим защиты зрения снижает нагрузку на глаза при длительной работе. Соотношение сторон 16:10 расширяет вертикальное пространство для работы с документами и веб-страницами.
                </p>
            </div>

            <div className="recommendation_place">
                <h2>Аксессуары</h2>
                <ProductsList />
            </div>
        </div>
    )

}