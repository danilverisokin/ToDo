import { Input, Button } from 'antd';

const AuthLogin = () => {
  return (
    <div>
      <Input placeholder="Login" />
      <Input placeholder="Password" />
      <Button type="primary">Просто кнопка логина</Button>
    </div>
  );
};

export default AuthLogin;
