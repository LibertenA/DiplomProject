import Header from "./components/Header";
import Banner from "./components/Banner";
import PromoCard from "./components/PromoCard";
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
  },
  { 
    title: "RTX 5070", 
    price: 70000, 
    rating: 4, 
    gpuInterface: "PCIe 5.0", 
    frequency: "2500 MHz" 
  },
  { 
    title: "RX 9070", 
    price: 65000, 
    rating: 5, 
    gpuInterface: "PCIe 5.0", 
    frequency: "2100 MHz" 
  },
  { 
    title: "RTX 5060 Ti", 
    price: 55000, 
    rating: 4, 
    gpuInterface: "PCIe 5.0", 
    frequency: "2400 MHz" 
  },
  { 
    title: "Intel Arc B580", 
    price: 35000, 
    rating: 4, 
    gpuInterface: "PCIe 4.0", 
    frequency: "1700 MHz" 
  }
];
  return (
    <div>
      <Header />
      <div className="banner_place">
        <Banner />
      </div>
      {products.map((product, index) => (
        <PromoCard
          key={index} 
          title= {`Видеокарта ${product.title}`}
          price={product.price}
          rating={product.rating}
          gpuInterface={product.gpuInterface}
          frequency={product.frequency}
        />
      ))}

      {/*<AIChat />*/}
    </div>
  );
}