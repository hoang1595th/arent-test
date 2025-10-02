import { LayoutConfig } from "../layout/LayoutConfig";

export default function Footer() {
    return (
      <footer className={``} style={{ height: `${LayoutConfig.footerHeight}px`, backgroundColor: LayoutConfig.footerBg }}>
        <div className="w-full mx-auto px-4 h-full flex items-center justify-center space-x-12 text-light text-sm" style={{ maxWidth: `${LayoutConfig.contentMaxWidth}px` }}>
          <a href="#" className="hover:underline">
            会員登録
          </a>
          <a href="#" className="hover:underline">
            運営会社
          </a>
          <a href="#" className="hover:underline">
            利用規約
          </a>
          <a href="#" className="hover:underline">
            個人情報の取扱について
          </a>
          <a href="#" className="hover:underline">
            特定商取引法に基づく表記
          </a>
          <a href="#" className="hover:underline">
            お問い合わせ
          </a>
        </div>
      </footer>
    );
  }
  