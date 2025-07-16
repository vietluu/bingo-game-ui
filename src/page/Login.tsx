import Input from "../components/Input";
import  IconKey  from "../assets/svg/keyIcon.svg?react";

import IconMail from "../assets/svg/mailIcon.svg?react";
import React from "react";
import { useNavigate } from "react-router-dom";
import bingo from "../../public/logo.png";
import Button from "../components/Button";
const Login = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen px-4 w-full h-screen bg-[url('/public/gameBg.png')]  bg-cover bg-center">
      <div className="bg-white items-center pb-8 px-4 pt-16 flex flex-col gap-y-8 rounded-4xl border-b-[3px] border-[#FF6D91] w-full max-w-sm relative">
        <img
          src={bingo}
          alt="Logo"
          className="absolute -top-[30px] left-10 w-3/4"
        />
        <h2 className="text-3xl font-['Mochiy_Pop_P_One'] font-bold text-center text-royal-blue-600 !text-shadow-[0_4px_0_rgba(65,118,199,0.3)]">
          ログイン
        </h2>
        <div className="flex flex-col gap-y-4 w-full">
          <Input
            inputRef={ref}
            className="w-full border rounded-full text-black bg-cover border-gray-300 p-2 focus:outline-none "
            type="text"
            required
            placeholder="メールアドレス"
            onChange={(e) => console.log(e.target.value)}
            prefix={<IconMail />}
          />
          <Input
            className="w-full border rounded-full text-black border-gray-300 p-2 focus:outline-none "
            type="password"
            placeholder="パスワード"
            required
            prefix={<IconKey />}
          />

          <span
            onClick={() => navigate("/signup")}
            className="w-full text-light-blue-600 text-sm text-right cursor-pointer "
          >
            パスワードをお忘れですか？{" "}
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Button
          >
            ログイン
          </Button>
          <span className="w-full text-light-blue-600 text-sm text-center cursor-pointer">
            新規登録はこちら
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
