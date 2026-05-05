"use client";

import { useState } from "react";
import styles from "./ProductPresentation.module.css";

interface ProductPresentationProps {
  images: string[];
}
export default function ProductPresentation({images}: ProductPresentationProps) {
  const [pickedImage, setPickedImage] = useState(0);

  return (
    <div className={styles.placePresentation}>
      
      <div className={styles.mainIcon}>
        <img src={images[pickedImage]} className={styles.mainIconImg} />
      </div>

      <ul className={styles.gallery}>
        {images.map((url, index) => {
            const isActive = index === pickedImage;
            return (
                <li 
                  key={index} 
                  className={isActive ? styles.galleryItemActive : styles.galleryItem}
                  onClick={() => setPickedImage(index)} 
                >
                  <img src={url} 
                  className={styles.galleryImg} 
                  />
                </li>
              )
            }  
        )}
      
      </ul>
    </div>
  );
}
