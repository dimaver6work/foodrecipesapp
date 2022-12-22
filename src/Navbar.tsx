import navIcon from './assets/navIcon.jpeg'
import { slide as Menu } from 'react-burger-menu'
import { useState, useEffect } from "react";
import icon from './assets/burger-menu.png'
import { useDispatch, useSelector } from "react-redux";
import { Store } from './interfaces';



interface ModalProps {
setModalActive:any
// setOpen:any
isActive:boolean
handleOnOpen:any
}


export const Navbar: React.FC<ModalProps> = ({ setModalActive , handleOnOpen, isActive }) =>{
 
  const shopSel = useSelector((state: Store) => state.shopReducer.items);


  return (
  <div className="Navbar">

   <a href='/'><img src={navIcon} alt="navIcon" /></a>
   <div >
    <p><a href='/'>Рецепты</a></p>
    <p onClick={()=>setModalActive(true)} >Добавить рецепт</p>
    <p  onClick={()=>handleOnOpen()} className={isActive ? 'animate__animated animate__bounce add_tolist' : 'add_tolist'} >Список покупок({shopSel.length})</p>

   
   </div>
   
  </div>
);}


