import { Store } from './interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { Recipe } from './interfaces/redux/Recipe';
import React, { useState, useEffect } from "react";
import { addToShop } from './redux_/shop.action';
import { ModalRecipe } from './modalRecipe'
import { addModalRecipe } from './redux_/modalRecipe.action';

interface MainProps {
setIsActive:any

}


export const Main: React.FC<MainProps> = ({ setIsActive }) => {


const navbarStyles = ["Все","Супы","Основное","Десерты","Другое"];
const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [animation, setAnimation] = React.useState(false);

 const handleClick = () => {
    setIsActive(true);
    setTimeout(()=>setIsActive(false),1000)
  };

  function openModal() {
    setIsOpen(true);
  }
 
  let animationClick = () =>{
    setAnimation(true)
    setTimeout(()=>setAnimation(false), 1000)
  }
  const recipesData = useSelector((state: Store) => state.recipesReducer.data);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    animationClick()
    const button: HTMLButtonElement = event.currentTarget;
    let a = recipesData?.[+button.name-1].ingredients
    a.map((i:any)=>{dispatch(addToShop(i.ingredient))})
    handleClick()
   
  };

  let modalRecipe = (recipe:any)=>{
      dispatch(addModalRecipe(recipe))
openModal()
  }


  

  
  const [type, setType] = useState("Все");

let data = () =>{
  if (recipesData===null){
    return <div className="loader">
  <div className="loader_inner"></div>
</div>
  }
  if (type !== 'Все'){
      
      return  recipesData?.filter((obj) =>
        obj.name.toLowerCase().includes(searchValue.toLowerCase())
      ).filter((i: Recipe)=> i.category == type).map( (i: Recipe)  => 
      <div className='recipe' key={i.id}>
        <img   src={i.img} alt={i.name} />
        <div onClick={()=>modalRecipe(i)} className="black_img"></div>
<div className="reverse">
   <button key={i.id} name={i.id.toString()} onClick={buttonHandler} className="icon-btn add-btn"><div className="add-icon"></div>   <div className="btn-txt">Add</div></button>
</div>

    <h2 className="text">{i.name}</h2>


      </div>
    )
      
    }
    else {
      return (
      recipesData?.filter((obj) =>
        obj.name.toLowerCase().includes(searchValue.toLowerCase())
      ).map( (i: Recipe, index)  => 
      <div className='recipe'key={index} >
        <img src={i.img} alt={i.name} />
        <div onClick={()=>modalRecipe(i)} className="black_img"></div>
<div className="reverse">
   <button data-ripple key={i.id} name={i.id.toString()}  onClick={buttonHandler} className={animation ? 'ripple icon-btn add-btn' : 'icon-btn add-btn'} ><div className="add-icon"><div   ></div></div>   <div className="btn-txt">Add</div></button>
</div>
    <h2 className="text">{i.name}</h2>
      </div>
    )
      )

    }
}

  return (

  
  <div className="Content">
    <div>
      <ModalRecipe modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
     
    </div>
    
       <div  className="top">
        <ul className="tags">
          {navbarStyles.map((i,index) => (
            <li key={index}
              onClick={() => {
                setType(i);
              }}
              className={i === type ? "active" : ""}
            >
              {i}
            </li>
          ))}
        </ul>
         <input
              id="search"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Поиск по названию'
            />
      </div>
<div className='recipes'>
  {data()}
</div>
  </div>
)


}