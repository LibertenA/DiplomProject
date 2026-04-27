import ProductPresentation from "@/components/ProductPresentation"
import ProductInfo from "@/components/ProductInfo"
import ProductPrice from "@/components/ProductPrice"

export default function Page() {
    return(
        <div>
            <span>Главная / Каталог / Компьютеры и Ноутбуки / Apple</span>
            <ProductPresentation />
            <ProductInfo />
            <ProductPrice />
        </div>
    )

}