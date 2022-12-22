import { stack as Menu } from 'react-burger-menu'

import { Store } from './interfaces';
import { useDispatch, useSelector } from "react-redux";
import { removeFromShop } from './redux_/shop.action';


interface BurgerMenuProps {
openBurger:boolean
handleOnOpen:any

}

export const BugerMenu : React.FC<BurgerMenuProps> = ({ openBurger, handleOnOpen }) => {
  const dispatch = useDispatch()
  const shopSel = useSelector((state: Store) => state.shopReducer.items);
 
return (
  <Menu customBurgerIcon={ false } width={ '280px' } isOpen={ openBurger } onOpen={handleOnOpen} right >
         <h2>Список покупок </h2>
       {shopSel.map((i:String, index:number) => 
  <div className="foodList" >
    <div className='crest' onClick={()=>dispatch(removeFromShop(i))}>X</div>
  <li key={index} >{i.slice(0,1).toUpperCase()+i.slice(1)}</li>
  </div>)
  
  }
      </Menu>
)
}