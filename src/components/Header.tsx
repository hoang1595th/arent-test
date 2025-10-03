import { LayoutConfig } from "../layout/LayoutConfig";
import { Link } from 'react-router-dom'

function IconEdit() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  );
}

function IconMedal() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 8a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-2 3-4H9l3 4z" />
    </svg>
  );
}

function IconInfoBubble() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M20 2H4a2 2 0 0 0-2 2v14l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM11 7h2v2h-2V7zm0 4h2v4h-2v-4z" />
    </svg>
  );
}

function IconHamburger() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className={`border-b border-dark-500`} style={{ height: `${LayoutConfig.headerHeight}px`, backgroundColor: LayoutConfig.headerBg }}>
      <div className="w-full mx-auto px-4 h-full flex items-center" style={{ maxWidth: `${LayoutConfig.contentMaxWidth}px` }}>
        {/* Left: Brand */}
        <div className="text-primary-500 font-bold text-3xl select-none">
          Healthy
        </div>

        {/* Center: Navigation */}
        <nav className="ml-auto mr-6 hidden md:flex items-center gap-12 text-light">
          <Link to="/my-record" className="flex items-center gap-2 hover:opacity-90">
            <span className="text-primary-500"><IconEdit /></span>
            <span className="text-base">自分の記録</span>
          </Link>
          <Link to="/top-page" className="flex items-center gap-2 hover:opacity-90">
            <span className="text-primary-500"><IconMedal /></span>
            <span className="text-base">チャレンジ</span>
          </Link>
          <Link to="/column" className="relative flex items-center gap-2 hover:opacity-90">
            <span className="text-primary-500"><IconInfoBubble /></span>
            <span className="text-base">お知らせ</span>
            <span className="absolute -top-1 -right-3 inline-flex items-center justify-center rounded-full bg-primary-500 text-white text-[10px] leading-none w-4 h-4">1</span>
          </Link>
        </nav>

        {/* Right: Hamburger */}
        <button className="text-primary-500 ml-2 md:ml-0" aria-label="menu">
          <IconHamburger />
        </button>
      </div>
    </header>
  );
}


