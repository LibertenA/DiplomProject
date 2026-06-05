"use client";

import { useState } from "react";
import styles from "./ProductPresentation.module.css";

interface ProductImage {
  id?: number;
  image_url: string;
}

interface ProductPresentationProps {
  images: string[];
}

export default function ProductPresentation({
  images,
}: ProductPresentationProps) {

  const [pickedImage, setPickedImage] = useState(0);

  if (!images?.length) {
    return <h4>Нет данных</h4>;
  }

  return (
    <div className={styles.placePresentation}>

      <div className={styles.mainIcon}>
        <img
          src={images[pickedImage]}
          className={styles.mainIconImg}
          alt="product"
        />
      </div>

      <ul className={styles.gallery}>
        {images.map((image, index) => {

          const isActive = index === pickedImage;

          return (
            <li
              key={index}
              className={`${styles.galleryItem} ${isActive ? styles.galleryItemActive : ""}`}
              onClick={ () =>setPickedImage(index) }
            >
              <img
                src={image}
                className={styles.galleryImg}
                alt="product"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}


