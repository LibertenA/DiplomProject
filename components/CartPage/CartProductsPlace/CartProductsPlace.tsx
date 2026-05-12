"use client"

import CartOrderProduct from "../CartOrderProduct";
import CartProduct from "../CartProduct";
import { mockProducts } from "@/data/mockProducts";
import styles from "./CartProductsPlace.module.css";
import { useReducer } from "react";
import { cartReducer } from "@/reducer/cartReducer";

export default function CartProductsPlace() {

  const cartData = mockProducts.map(product => {
  const selectedColor = product.color?.[0] || { id: 'none', color: 'Стандартный', colorCode: 'transparent' };
  const selectedMemory = product.memory?.[0] || { id: 'none', memory: 0};

  return {
    id: product.id,
    title: product.title,
    price: product.price,
    images: product.images?.[0] ?? undefined,
    count: product.count || 1,
    discount: product.discount || 0,

    color: selectedColor?.color ?? undefined,
    colorCode: selectedColor?.colorCode ?? undefined,
    memory: selectedMemory?.memory ?? undefined,

    ram: product.ram ?? undefined,
    cpu: product.cpu ?? undefined,
    gpu: product.gpu ?? undefined,
    gpu_tech: product.gpu_tech ?? undefined,
    ssd: product.ssd ?? undefined,
    display: product.display ?? product.screen ?? undefined,
    resolution: product.resolution ?? undefined,
    refresh_rate: product.refresh_rate ?? undefined,
    battery: product.battery ?? undefined,
    os: product.os ?? product.ios ?? undefined,
    weight: product.weight ?? undefined,
    material: product.material ?? undefined,

    ai_features: product.ai_features ?? undefined,
    ai_camera: product.ai_camera ?? undefined,
    ai_sensing: product.ai_sensing ?? undefined,
    ai_vision: product.ai_vision ?? undefined,

    folding_type: product.folding_type ?? undefined,
    expanded_display: product.expanded_display ?? undefined,
    diagonal: product.diagonal ?? undefined,
    connection: product.connection ?? undefined,
    peak_brightness: product.peak_brightness ?? undefined,
    backward_compatible: product.backward_compatible ?? undefined,
    spatial_audio: product.spatial_audio ?? undefined,
    lights: product.lights ?? undefined,

    pressure: product.pressure ?? undefined,
    milk_system: product.milk_system ?? undefined,
    modes: product.modes ?? undefined,
    steam: product.steam ?? undefined,
    suction: product.suction ?? undefined,
    mop_washing: product.mop_washing ?? undefined,
    capacity: product.capacity ?? undefined,
    auto_dos: product.auto_dos ?? undefined,
    fresher_zones: product.fresher_zones ?? undefined,

    sensor: product.sensor ?? undefined,
    attachments: product.attachments ?? undefined,
    versatility: product.versatility ?? undefined,
    charging: product.charging ?? undefined,
    feedback: product.feedback ?? undefined,
    amplitude: product.amplitude ?? undefined,

    anc: product.anc ?? undefined,
    power: product.power ?? undefined,
    af: product.af ?? undefined,
    video: product.video ?? undefined,
    flight_time: product.flight_time ?? undefined,

    wifi: product.wifi ?? undefined,
    feature: product.feature ?? undefined,
  };
  });

  const [state, dispatch] = useReducer(cartReducer, cartData); 

  const totalCount = state.reduce(
    (sum, product) => sum + product.count,
    0,
  );

  const totalPrice = state.reduce(
    (sum, product) => sum + product.price * product.count,
    0,
  );

  const totalDiscount = state.reduce(
    (sum, product) => sum + product.discount * product.count,
    0,
  );

  return (
    <div className={styles.cartPlace}>
      <div className={styles.cartContainerLayout}>
        <h2 className={styles.cartTitle}>Корзина</h2>

        {state.map((item) => (
          <CartProduct key={item.id} {...item} dispatch={dispatch}/>
        ))}
      </div>

      <CartOrderProduct
        price={totalPrice}
        discount={totalDiscount}
        count={totalCount}
      />
    </div>
  );
}
