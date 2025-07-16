import React, { useRef, useEffect } from "react";
import bingo from "../../../public/logo.png";
import User from "../../assets/svg/ic-user.svg?react";
import KeyIcon from "../../assets/svg/keyIcon.svg?react";
import SignOutIcon from "../../assets/svg/signOutIcon.svg?react";
const Header = () => {
  const [isShowingMenu, setIsShowingMenu] = React.useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsShowingMenu(false);
      }
    };

    if (isShowingMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShowingMenu]);
  return (
    <div className="h-[116px] w-full flex items-center justify-center px-6 py-4 relative">
      <img src={bingo} alt="Logo" className="w-[162px] object-contain" />
      <div ref={menuRef} className='absolute h-full right-0 flex items-center'>
        <User className="text-black cursor-pointer" onClick={() => setIsShowingMenu(!isShowingMenu)} />
        {isShowingMenu && (
          <div className="flex flex-col w-full min-w-44 absolute right-0 top-20">
            <div className="flex gap-2 p-4 bg-white items-center rounded-t-2xl border border-gray-50 "
              onClick={() => setIsShowingMenu(false)}>
              <KeyIcon />
              <span className='text-light-blue-600'>
                パスワード変更
              </span>
            </div>
            <div className='flex  gap-x-2 p-4 bg-white items-center rounded-b-2xl border border-gray-50 ' onClick={() => {
              setIsShowingMenu(false);
            }}>
              <SignOutIcon />
              <span className='text-light-blue-600'>
                ログアウト
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Header