type DirectoryCatalogProps = {
  title: string; 
};

export default function DirectoryCatalog({ title }: DirectoryCatalogProps) {
  return(
  <nav className="directory_catalog">
    <a href="/">Главная</a> / <a href="">Каталог</a> / <a href="">Компьютеры и Ноутбуки</a> / <a href="">{title}</a>
  </nav>
  )
}