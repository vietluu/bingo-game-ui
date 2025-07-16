import React from 'react';
import Input from './Input';
import IconMail from '../assets/svg/mailIcon.svg?react';
import Button from './Button';

const ForgotPassword = () => {
  return (
    <div className='flex flex-col gap-8 items-center'>
      <p>
        ご登録のメールアドレスを入力してください。パスワード再設定用のリンクをお送りします。
      </p>
      <Input
        className="w-full border rounded-full text-black border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Username"
        onChange={(e) => console.log(e.target.value)}
        prefix={<IconMail />}
      />
      <Button>
        <span className="w-full text-blue-500 text-sm text-center hover:text-blue-600 cursor-pointer">
          パスワードをリセットする
        </span>
        v
      </Button>
    </div>
  );
};

export default ForgotPassword;
