import Header from './components/header/Header';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';

import Registerstay from './pages/register/Registerstay';
import Content from './components/content/Content';
import Cont from './components/content/Cont';
import Banner2 from './components/banner2/Banner2';
import Loginbg from './pages/loginbg/Loginbg';
import Loginstay from './pages/login/Loginstay';
import Footer from './components/footer/Footer';
import Characters from './components/characters/Characters';
import Charsec from './components/characters/Charsec';
import Ftchar from './components/footer/Ftchar';

import Charactergi from './components/characters/Charactergi';
import Charsecgi from './components/characters/Charsecgi';
import Characterzen from './components/characters/Characterzen';
import Charseczen from './components/characters/Charseczen';
import Characterhsr from './components/characters/Characterhsr';
import Charsechsr from './components/characters/Charsechsr';
import Loginwithlogin from './pages/loginbg/Loginwithlogin';
import Headernot from './components/header/Headernot';
import Nations from './components/nations/Nation';
import Notice from './notice/Notice';
import SalaryCalculator from './components/salaryCalculator/SalaryCalculator';
import Loading from './loading/Loading';

function App() {
  return(
    <div className='App'>
      
      <BrowserRouter>
          <Routes>
            
            <Route exact path='/' element= {<> <Loading/> <Headernot/> <Loginstay/> </>} />  
            <Route path='/home' element= {<>  <Header/>  <Content/> <Cont/> <Footer/>  <Banner2/> </>} />
            <Route path='/Login' element= {<>   <Headernot/> <Loginstay/> <Loginwithlogin/>  </>} />
            <Route path='/register' element= {<> <Headernot/> <Registerstay/> <Loginwithlogin/> </>} />
            <Route path='/chars' element= {<> <Header/> <Characters/> <Ftchar/> </>} />
            <Route path='/gichars' element= {<> <Header/> <Charactergi/> <Ftchar/> </>} />
            <Route path='/zenchars' element= {<> <Header/>  <Characterzen/> <Ftchar/></>} />
            <Route path='/starchars' element= {<> <Header/>  <Characterhsr/> <Ftchar/> </>} />
            <Route path='/worlds' element= {<> <Header/> <Nations/></>}/>
            <Route path='/news' element= {<> <Header/> <Notice/> </>}/>
            <Route path='/topup' element= {<> <Header/> <SalaryCalculator/> </>}/>
          </Routes>
      </BrowserRouter>
    </div>

  );  
};

export default App;