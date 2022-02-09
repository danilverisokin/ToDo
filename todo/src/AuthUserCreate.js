import { Input, Button } from 'antd';

const AuthUserCreate = () => {
  return (
    <div>
      <Input placeholder="Login" />
      <Input placeholder="Password" />
      <Button type="primary">Просто кнопка регистрации</Button>
    </div>
  );
};

export default AuthUserCreate;
