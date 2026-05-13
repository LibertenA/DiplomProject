"use client"

import React from 'react';
import styles from "./CartProduct.module.css";
import { useRouter } from "next/navigation";

type Action =  { type: 'INCREMENT'; id: number } | { type: 'DECREMENT'; id: number } | { type: 'REMOVE'; id: number };

interface CartProductProps {
  id: number;
  title: string;
  price: number;
  discount: number;
  count: number;
  images: string; 
  color?: string;
  memory?: number;
  ram?: number;
  cpu?: string;
  display?: string | number;
  display_size?: string;
  resolution?: string;
  refresh_rate?: string | number;
  gpu?: string;
  gpu_tech?: string;
  battery?: string;
  ios?: string;
  os?: string;
  ai_features?: string;
  ai_camera?: string;
  ai_sensing?: string;
  folding_type?: string;
  expanded_display?: string;
  lights?: string;
  feature?: string;
  features?: string[];
  weight?: number;
  material?: string;
  pressure?: number;
  milk_system?: string;
  screen?: string;
  ai_vision?: string;
  modes?: number;
  pressure_cook?: boolean;
  steeping_timer?: boolean;
  steam?: boolean;
  diagonal?: number;
  connection?: string;
  peak_brightness?: string;
  local_dimming?: string;
  portability?: string;
  auto_keystone?: boolean;
  suction?: string;
  mop_washing?: string;
  airflow?: string;
  noise?: string;
  assistant?: string;
  protocol?: string;
  unlock?: string;
  efficiency?: string;
  backward_compatible?: boolean;
  chip?: string;
  curve?: string;
  spatial_audio?: boolean;
  sensor?: string;
  attachments?: number;
  versatility?: string;
  heat_modes?: number;
  charging?: string;
  blades?: string;
  feedback?: string;
  base?: string;
  amplitude?: string;
  bt_app?: boolean;
  anc?: string;
  immersion_mode?: boolean;
  bt?: string;
  power?: string;
  freq_range?: string;
  wired_inputs?: string;
  af?: string;
  camera?: string;
  flight_time?: string;
  video?: string;
  hypersmooth?: string;
  ibis?: string;
  video_360?: string;
  capacity?: string;
  auto_dos?: string;
  wifi?: boolean;
  width?: string;
  handmade?: boolean;
  antimicrobial?: string;
  fresher_zones?: number;
  heat_pump?: boolean;
  self_cleaning?: boolean;
  dispatch: React.Dispatch<Action>;
}


export default function CartProduct(props: CartProductProps) { 

  const { dispatch } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${props.id}`); 
  }  

  return (
    <div className={styles.cartProductPlace}>
      <div className={styles.cartProductIcon} onClick={handleClick}>
        <img src={props.images} alt={props.title} className={styles.cartProductIconImg}/>
      </div>

      <div className={styles.cartProductInfo}>
        <span className={styles.cartProductCode}>Код товара {props.id}</span>
        <h3 className={styles.cartProductName}>
          {props.title}
        </h3>
      </div>

      <div className={styles.cartProductCounter}>
        <button type="button" className={styles.counterBtn} onClick={() => dispatch({ type: 'DECREMENT', id: props.id })}>
          <img src="/minus.png" alt="minus" />
        </button>
        <input
          type="number"
          className={styles.counterValue}
          value={props.count} 
          readOnly
        />
        <button type="button" className={styles.counterBtn} onClick={() => dispatch({ type: 'INCREMENT', id: props.id })}>
          <img src="/plus.png" alt="plus" />
        </button>
      </div>

      <div className={styles.cartProductPrice}>
        <span className={styles.cartPrice}>{props.price} ₽</span>
      </div>
    </div>
  );
}
