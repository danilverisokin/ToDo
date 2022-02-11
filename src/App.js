import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import AuthUserCreate from './AuthUserCreate';
import AuthLogin from './AuthLogin';

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/ToDo/register" element={<AuthUserCreate />} />
          <Route path="/ToDo/login" element={<AuthLogin />} />
          <Route path="/ToDo" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
