
import styles from "./Categories.module.css";

interface CategoriesProps {
  categories: string[];
  pickedCategory: string;
  setPickedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function Categories ({categories, pickedCategory, setPickedCategory }: CategoriesProps) {
  

  return (
    <div className={styles.categoryPlace}>
      {categories.map((category, index) => {
        const isActive = category === pickedCategory;
        return (
          <button
            key={index}
            className={isActive ? styles.categoryActiveBtn : styles.categoryBtn}
            onClick={() => setPickedCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  )
}