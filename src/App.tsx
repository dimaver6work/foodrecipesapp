
import './index.scss';
import { Main } from './Main';
import { Navbar } from './Navbar';
import { SidebarL } from './SidebarL';
import { useRateApi } from './hooks/useRateApi';
import { useState } from 'react';
import ModalAdd from './modalAdd';
import { useDispatch, useSelector } from "react-redux";
import { removeFromShop } from './redux_/shop.action';
import { BugerMenu } from './BurgerMenu';




function App() {
  useRateApi();
  
  const [modalActive, setModalActive] = useState<boolean>(false) 
  const [openBurger, setOpenBurger] =  useState<boolean>(false)
  const [isActive, setIsActive] =  useState<boolean>(false)

  const dispatch = useDispatch()
  let handleOnOpen = ()=>{
    setOpenBurger(!openBurger)
  }

 

  return (
    <div className="App">
      <BugerMenu handleOnOpen={handleOnOpen} openBurger={openBurger}/>
      <div className="container">
      <Navbar isActive={isActive} setModalActive={setModalActive} handleOnOpen={handleOnOpen} />

       <SidebarL/>

        <Main setIsActive={setIsActive}/>
</div>
      
      {modalActive && (
        <ModalAdd
          modalActive={modalActive}
          setModalActive={setModalActive}
        />
        
      )}
    
    </div>
  );
}

export default App;
