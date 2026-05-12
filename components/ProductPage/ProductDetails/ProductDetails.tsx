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
  color: ColorOption[]; 
  memory: MemoryOption[];
  cpu: string;
  ram: number;
  system: string;
  display: number;
  resolution: string;
  weight: number;
  language: string;
}

export default function ProductDetails({
  id,
  title,
  color,
  memory,
  cpu,
  ram,
  system,
  display,
  resolution,
  weight,
  language,
}: ProductDetailsProps) {

  const [pickedMemory, setPickedMemory] = useState(memory?.[0]);
  const [pickedColor, setPickedColor] = useState(color?.[0]);

  if (!memory?.length || !color?.length) {
    return <h4 className={styles.error}>Нет данных</h4>;
  }

  return (
    <div className={styles.ProductDetails}>
      <div className={styles.productCode}>
        <span className={styles.codeProduct}>Код товара:
          <span className={styles.codeProduct}> {id} </span>
        </span>
        
      </div>
      
      <h2 className={styles.productTitle}>
        {title}
      </h2>
      <div className={styles.productColor}>
        <span className={styles.labelColor}>Цвет:
          <span className={styles.valueColor}> {pickedColor.color} </span>
        </span>
        <ul className={styles.colorChange}>
          {color.map((item) => {
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
              )
            }  
          )}
          
        </ul>
      </div>

      <div className={styles.productMemory}>
        <span className={styles.label}>Объем SSD:
          <span className={styles.value}> {pickedMemory.memory} </span>
        </span>
        
        <div className={styles.memoryChoose}>
          {memory.map((memory) => {
            const isActive = memory.id === pickedMemory.id;
            return (
                <button 
                  key={memory.id}
                  className={isActive ? styles.memoryActiveBtn: styles.memoryBtn} 
                  onClick={() => setPickedMemory(memory)}
                  >{memory.memory} Гб
                </button>
              )
            }   
          )}
        </div>
      </div>

      <div className={styles.productInfoFeatures}>
        <h3 className={styles.titleFeatures}>Характеристики</h3>
        <table className={styles.featuresTable}>
          <tbody>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>Процессор</th>
              <td className={styles.featuresTableTd}>{cpu}</td>
            </tr>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>Память</th>
              <td className={styles.featuresTableTd}>
                ОЗУ/{ram} ГБ, SSD/{pickedMemory.memory} ГБ
              </td>
            </tr>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>ОС</th>
              <td className={styles.featuresTableTd}>{system}</td>
            </tr>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>Экран</th>
              <td className={styles.featuresTableTd}>
                {display}" ({resolution})
              </td>
            </tr>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>Вес</th>
              <td className={styles.featuresTableTd}>{weight} кг</td>
            </tr>
            <tr className={styles.featuresTableRowLast}>
              <th className={styles.featuresTableTh}>Раскладка клавиатуры</th>
              <td className={styles.featuresTableTd}>{language}</td>
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
