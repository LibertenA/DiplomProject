import Banner from "../components/Banner";
import ProductsList from "../components/ProductsList";
/*import AIChat from "./components/AIChat";*/


export default function Page() {

  return (
    <div>
      <Banner />

      <div className="special_place">
        <h2>Специально для вас</h2>
        <ProductsList />
      </div>

      <div className="recommendation_place">
        <h2>Рекомендации</h2>
        <ProductsList />
      </div>

      {/*<AIChat />*/}
    </div>
  );
}