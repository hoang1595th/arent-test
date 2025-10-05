import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function IconHamburger() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
      <path d="M3 8H29" stroke="#FF963C" stroke-width="3" />
      <path d="M3 16H29" stroke="#FF963C" stroke-width="3" />
      <path d="M3 24H29" stroke="#FF963C" stroke-width="3" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
      <path d="M7 7L26 26" stroke="#FF963C" stroke-width="3" />
      <path d="M7 26L26 7" stroke="#FF963C" stroke-width="3" />
    </svg>
  );
}

export default function DrawerMenu() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const menuItems = [
    { text: '自分の記録', path: '/my-record' },
    { text: '体重グラフ', path: '/my-record-1' },
    { text: '目標', path: '/my-record-2' },
    { text: '選択中のコース', path: '/my-record-3' },
    { text: 'コラム一覧', path: '/column' },
    { text: '設定', path: '/my-record-4' }
  ];

  return (
    <>
      <button
        className="text-primary-500 ml-2 md:ml-0"
        aria-label="menu"
        onClick={() => setIsOpen(true)}
      >
        <IconHamburger />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute top-0 right-0 w-80 h-full bg-gray-300">
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#FF963C]"
                aria-label="Close menu"
              >
                <IconClose />
              </button>
            </div>

            <div className="py-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleMenuItemClick(item.path)}
                  className={`w-full px-6 py-4 text-left text-white hover:bg-dark-400 transition-colors ${isActive(item.path) ? 'bg-dark-400' : ''}`}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
