import React from 'react';
import { BINGO_CARDS } from '../constant/bingo';
import Button from './Button';
const BingoBoard = () => {
  return (
    <div className="w-full h-full flex flex-row bg-white py-6 px-4 gap-4 ">
      <div className="flex flex-row justify-start shadow-[0_4px_4px_0_rgba(65,118,199,0.3)] h-fit rounded-b-lg overflow-y-hidden w-full *:*:last:*:border-l *:first:*:last:*:border-l-0 *:*:last:*:border-[#8DADDD]">
        {Object.entries(BINGO_CARDS).map(([key, { numbers, color }]) => (
          <div key={key} className="h-fit w-fit">
            <h2
              className={`bg-gradient-to-b h-6 w-8 flex items-center justify-center text-base rounded-tl-lg rounded-tr-lg ${color}`}
            >
              {key.toUpperCase()}
            </h2>
            <div className="flex flex-col">
              {numbers.map((num) => (
                <div
                  key={num}
                  className="p-1 w-8 h-8 text-sm flex items-center justify-center border-t  text-[#8DADDD] font-bold"
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-y-4 max-w-[46%]">
        <div className="relative">
          <img
            src="/assets/numberChoice.png"
            alt="Bingo"
            className="w-full h-auto"
          />
          <span className="absolute top-0 left-0 text-6xl font-black w-full h-full flex items-center justify-center">
            1
          </span>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <Button
            className="!w-28"
            onClick={() => console.log('Button clicked!')}
          >
            抽選する
          </Button>
          <Button
            className="!w-28 h-10 !bg-[#FEF1F4] !text-[#2C527D]"
            onClick={() => console.log('Button clicked!')}
          >
            景品一覧
          </Button>
        </div>
        <div className="flex flex-col  items-center justify-center w-full">
          <div className="flex justify-between py-6 w-full">
            <div className="flex flex-col justify-between gap-y-2">
              <span className="text-[#2C527D]">参加者数</span>
              <span className="text-[#2C527D] font-bold"> 10</span>
            </div>
            <Button className="!w-10 !h-5 !text-xs !text-[#2C527D]">
              確認
            </Button>
          </div>
          <div className="flex justify-between py-6 border-t border-[#8DADDD] border-b w-full">
            <div className="flex flex-col justify-between gap-y-2">
              <span className="text-[#2C527D]">参加者数</span>
              <span className="text-[#2C527D] font-bold"> 10</span>
            </div>
            <Button className="!w-10 !h-5 !text-xs !text-[#2C527D]">
              確認
            </Button>
          </div>
          <div className="flex justify-between py-6 w-full">
            <div className="flex flex-col justify-between gap-y-2">
              <span className="text-[#2C527D]">参加者数</span>
              <span className="text-[#2C527D] font-bold"> 10</span>
            </div>
            <Button className="!w-10 !h-5 !text-xs !text-[#2C527D]">
              確認
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BingoBoard;
