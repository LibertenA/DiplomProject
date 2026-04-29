import PromoCard from "./PromoCard";

export default function ProductList() {
      const products = [
        { 
        title: "RTX 5090", 
        price: 350000, 
        rating: 5, 
        gpuInterface: "PCIe 5.0", 
        frequency: "2300 MHz" 
        },
        { 
        title: "RTX 5080", 
        price: 150000, 
        rating: 5, 
        gpuInterface: "PCIe 5.0", 
        frequency: "2300 MHz" 
        },
        { 
        title: "RTX 5070 Ti", 
        price: 110000, 
        rating: 5, 
        gpuInterface: "PCIe 5.0", 
        frequency: "2300 MHz" 
        },
        { 
        title: "RX 9070 XT", 
        price: 88000, 
        rating: 5, 
        gpuInterface: "PCIe 5.0", 
        frequency: "2400 MHz" 
        }
    ];    

    return(
        <div className="product_place">
            {products.map((product, index) => (
            <PromoCard
                key={index} 
                title= {`Видеокарта ${product.title}`}
                price={product.price}
            />
            ))}
        </div>
    )
}