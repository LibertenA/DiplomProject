"use client";
import Headline from "./Headline";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner_content">
        <Headline />
          <button className="banner_start_btn" onClick={() => alert("Переход к сборке")}>
            Начать сборку
          </button>
      </div>
      <div className="banner_img">
        <img src="/buildPC.jpg" alt="Баннер сборки персонального компьютера" />
      </div>
    </div>
  );
}
