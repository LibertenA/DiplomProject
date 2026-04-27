import Banner from "../components/Banner";
import PromoCard from "../components/PromoCard";
/*import AIChat from "./components/AIChat";*/


export default function Page() {
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

  return (
    <div>
      <div className="banner_place">
        <Banner />
      </div>
      <div className="special_place">
        <h2>Специально для вас</h2>
        <div className="product_place">
          {products.map((product, index) => (
            <PromoCard
              key={index} 
              title= {`Видеокарта ${product.title}`}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <div className="recommendation_place">
        <h2>Рекомендации</h2>
        <div className="product_place">
          {products.map((product, index) => (
            <PromoCard
              key={index} 
              title= {`Видеокарта ${product.title}`}
              price={product.price}
            />
          ))}
        </div>
      </div>

      {/*<AIChat />*/}
    </div>
  );
}