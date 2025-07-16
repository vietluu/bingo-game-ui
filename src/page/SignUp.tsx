import Input from "../components/Input";
import IconKey from '../assets/svg/keyIcon.svg?react';
import IconMail from '../assets/svg/mailIcon.svg?react';
import bingo from "../../public/logo.png";
import Button from "../components/Button";
const SignUp = () => {
  // const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-blue-100 px-4 bg-cover h-screen bg-center bg-[url('/public/gameBg.png')]">
      <div className="bg-white items-center pb-8 px-4 pt-16 flex flex-col gap-y-8 rounded-4xl border-b-[3px] border-[#FF6D91] w-full max-w-sm relative">
        <img
          src={bingo}
          alt="Logo"
          className="absolute -top-[50px] left-12 w-3/4"
        />
        <h2 className="text-3xl font-['Mochiy_Pop_P_One'] font-bold text-center text-[#4176C7] text-shadow-[0_4px_0_rgba(65,118,199,0.3)]">
          アカウント新規登録
        </h2>
        <div className="flex flex-col gap-y-4 w-full">
          <Input
            className="w-full border rounded-full text-black border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            required
            placeholder="メールアドレス"
                      onChange={(e) => console.log(e.target.value)}
                      prefix={<IconMail />}
          />
          <Input
            className="w-full border rounded-full text-black border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="パスワード"
            required
            prefix={<IconKey/>}
                  />
                   <Input
            className="w-full border rounded-full text-black border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            required
            placeholder="パスワード"
            prefix={<IconKey/>}
          />
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Button
          >
            ログイン
          </Button>
          <span className="w-full text-blue-500 text-sm text-center hover:text-blue-600 cursor-pointer">
            新規登録はこちら
          </span>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
