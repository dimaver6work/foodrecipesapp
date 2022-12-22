import  Modal  from 'react-modal';
import { Store } from './interfaces';

import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { arrayBuffer } from 'stream/consumers';

 const customStyles = {
    content: {
        top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor:'#513C33',
            color: '#F4B46A',
            zIndex: '1',

    }

}
interface ModalRecipeProps {
setIsOpen:any;
modalIsOpen:boolean;

}

 export const ModalRecipe : React.FC<ModalRecipeProps> = ({ setIsOpen, modalIsOpen }) => {

  const modalRecipeData = useSelector((state: Store) => state.modalRecipeReducer);


  function closeModal() {
    setIsOpen(false);
  }
    
  



 return (
    
 <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        
      >
        <div className='modalRecipe_content'>
            <div className='modalRecipe_top'>
            <div className='modalRecipe_left'>
        <h2 className='modalRecipe_name'>{modalRecipeData.name}</h2>
        <div className='modalRecipe_ingredients'>
            {modalRecipeData.ingredients.map((i:any) => <p>{i.ingredient}: {i.sum}</p>)}
        </div>
        </div>
        <div className="modalRecipe_right">
            <img src={modalRecipeData.img} ></img>
        </div>
        </div>
        <div className="modalRecipe_bot">
           <a href={modalRecipeData.description}>Ссылка на подробный рецепт</a>
        </div>
        <button className='button-78' onClick={closeModal}>Закрыть</button>

        </div>
        
        
         

      </Modal>
  );
};



