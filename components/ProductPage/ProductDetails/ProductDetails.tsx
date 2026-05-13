"use client";

import { useState } from "react";
import styles from "./ProductDetails.module.css";

interface ColorOption {
  id: string;
  color: string;
  colorCode: string;
}

interface MemoryOption {
  id: string;
  memory: number;
}

interface ProductDetailsProps {
    id: number;
    title: string;
    price: number;
    discount: number;
    images: string[];
    color?: ColorOption[];
    memory?: MemoryOption[];
    language?: string;
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
}

export default function ProductDetails( props : ProductDetailsProps) {

  const [pickedMemory, setPickedMemory] = useState(props.memory?.[0]);
  const [pickedColor, setPickedColor] = useState(props.color?.[0]);

  return (
    <div className={styles.ProductDetails}>
      <div className={styles.productCode}>
        <span className={styles.codeProduct}>Код товара:
          <span className={styles.codeProduct}> {props.id} </span>
        </span>
        
      </div>
      
      <h2 className={styles.productTitle}> {props.title} </h2>

      {props.color && props.color.length > 0 && pickedColor && (
        <div className={styles.productColor}>
          <span className={styles.labelColor}>
            Цвет: <span className={styles.valueColor}> {pickedColor.color} </span>
          </span>
          <ul className={styles.colorChange}>
            {props.color.map((item) => {
              const isActive = item.id === pickedColor.id;
              return (
                <li
                  key={item.id}
                  className={isActive ? styles.colorItemActive : styles.colorItem}
                  onClick={() => setPickedColor(item)}
                >
                  <button
                    className={styles.color}
                    style={{ backgroundColor: item.colorCode }}
                  ></button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {props.memory && props.memory.length > 0 && pickedMemory && (
        <div className={styles.productMemory}>
          <span className={styles.label}>
            Объем памяти: <span className={styles.value}> {pickedMemory.memory} </span>
          </span>
          <div className={styles.memoryChoose}>
            {props.memory.map((memory) => {
              const isActive = memory.id === pickedMemory.id;
              return (
                <button
                  key={memory.id}
                  className={isActive ? styles.memoryActiveBtn : styles.memoryBtn}
                  onClick={() => setPickedMemory(memory)}
                >
                  {memory.memory} Гб
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className={styles.productInfoFeatures}>
        <h3 className={styles.titleFeatures}>Характеристики</h3>
        <table className={styles.featuresTable}>
          <tbody>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>Процессор</th>
              <td className={styles.featuresTableTd}>{props.cpu}</td>
            </tr>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>Память</th>
              <td className={styles.featuresTableTd}>
                ОЗУ/{props.ram} ГБ, {pickedMemory ? `Mem/${pickedMemory.memory} ГБ` : props.memory ? `Mem/${props.memory} ГБ` : ""}
              </td>
            </tr>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>ОС</th>
              <td className={styles.featuresTableTd}>{props.os}</td>
            </tr>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>Экран</th>
              <td className={styles.featuresTableTd}>
                {props.display}" ({props.resolution})
              </td>
            </tr>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>Вес</th>
              <td className={styles.featuresTableTd}>{props.weight} кг</td>
            </tr>
            <tr className={styles.featuresTableRowLast}>
              <th className={styles.featuresTableTh}>Раскладка клавиатуры</th>
              <td className={styles.featuresTableTd}>{props.language}</td>
            </tr>
          </tbody>
        </table>
        <a href="" className={styles.moreLink}>
          Все характеристики
        </a>
      </div>
    </div>
  );
}
