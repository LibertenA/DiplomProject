type DirectoryCatalogProps = {
  title: string; 
  category: string
};

export default function DirectoryCatalog({ title, category }: DirectoryCatalogProps) {
  return(
  <nav className="directory_catalog">
    <a href="/">Главная</a> / <a href="">Каталог</a> / <a href="">{category}</a> / <a href="">{title}</a>
  </nav>
  )
}