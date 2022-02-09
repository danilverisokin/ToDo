import { BrowserRouter, Routes, Switch, Route, Link } from 'react-router-dom';
import Main from './Main';
import AuthUserCreate from './AuthUserCreate';
import AuthLogin from './AuthLogin';

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<AuthUserCreate />} />
          <Route path="/login" element={<AuthLogin />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
