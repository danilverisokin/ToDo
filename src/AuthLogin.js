import { Input, Button } from 'antd';
import { Navigate } from 'react-router-dom';

const AuthLogin = () => {
  // localStorage.setItem('token', token);
  // navigate('/')
  return (
    <div>
      <Input placeholder="Login" />
      <Input placeholder="Password" />
      <Button type="primary">Просто кнопка логина</Button>
    </div>
  );
};

export default AuthLogin;
