type Props = {
    params: Promise<{
        slug: string;
    }>;
};


import {
  ProductInfo,
  ProductPresentation,
  ProductPrice
} from "@/components/Product";
import ProductsList from "@/components/ProductsList";
import { mockProducts } from "@/data/mockProducts";

export default async function Page({params}: Props) {
    const { slug } = await params;

    const product = mockProducts.find((p) => p.id === Number(slug));

    if (!product) {
        return <div className="p-10">Товар с ID {slug} не найден</div>;
    }

    return(
        <div>
            <span className="directory_catalog">Главная / Каталог / Компьютеры и Ноутбуки / {slug}</span>

            <div className="product-full_place">
                <ProductPresentation />
                <ProductInfo
                    code={product.id}
                    title={`${product.title}, ${product.ram} ГБ, ${product.memory} ГБ SSD, ${product.color}`}
                    color={product.color}
                    memory={product.memory}
                    cpu={product.cpu}
                    ram={product.ram}
                    system={product.system}
                    display={product.display}
                    resolution={product.resolution}
                    weight={product.weight}
                    language={product.language}
                />

                <ProductPrice
                    price={product.price}
                    discount={product.discount}
                    installment={product.installment}
                />
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