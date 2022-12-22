import axios from "axios";
import { useDispatch } from "react-redux";
import  Modal  from 'react-modal';
import React, { useState, useEffect } from "react";
import Multiselect from 'multiselect-react-dropdown';
import { customStylesModal } from './customStylesModal'
 import { Formik, Field, Form, ErrorMessage, FieldArray, useField } from 'formik';
import { Recipe } from "./interfaces";
import * as Yup from "yup";

interface ModalAddProps {
modalActive:boolean;
setModalActive:any
}
interface ingredient {
  ingredient: string,
  sum:number | null,

}

 interface RecipeAdd {
  name: string;
  img: string;
  ingredients: ingredient[],
  description:string
  category: string
  id: number;
}










const ModalAdd : React.FC<ModalAddProps> = ({ modalActive, setModalActive }) => {
  const dispatch = useDispatch();

  const [recipePost, setRecipePost] = useState({});

    function closeModal() {
    setModalActive(false);
  }

  let post = (Recipe:RecipeAdd) =>{
    axios
    .post("https://6375172408104a9c5f91fd66.mockapi.io/new", {
      
    ...Recipe
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  }


  const initialValues:RecipeAdd = {
    name: '',
      img: "",
      ingredients: [
        {
          ingredient: '',
          sum: null
      }
    ],
      description: "",
      category: "",
      id: Date.now(),
};

  return (
    <Modal 
       isOpen={modalActive}
        onRequestClose={closeModal}
        style={customStylesModal}
        ariaHideApp={false}
        >
      <div className="contentModal" onClick={(e) => e.stopPropagation()}>
        <h2>Добавьте данные нового рецепта</h2>
 <Formik
       initialValues={initialValues}
       
       validationSchema={Yup.object({
          name: Yup.string().min(5, 'Название должно быть больше 5 символов')
            .max(30, "Название должно быть меньше 30 символов")
            .required("Обязательное поле"),
          img: Yup.string()
            .min(15, "Must be 15 characters or more")
            .required("Обязательное поле"),
     description: Yup.string()
            .min(15, "Must be 15 characters or more")
            .required("Обязательное поле"),
           
   ingredients: Yup.array()
     .of(
       Yup.object().shape({
         ingredient: Yup.string().min(3, 'Короткое название').required('Обязательное поле'), 
         sum: Yup.number().min(1, 'Некорректное значение').max(10000, 'Не больше 10000 грамм').required('Обязательное поле'),
       })
     )
     .required('Должны быть ингрединты') 
     .min(1, 'Минимум 2 ингредиента'),
          category: Yup.string()
            .oneOf(
              ["Супы", "Основное", "Десерты", "Другое"],
              "Выберите категорию"
            )
            .required("Обязательное поле")
        })}
       onSubmit={(values, { setSubmitting }) => {
        
           console.log(JSON.stringify(values));
           post(values)
           setSubmitting(false);
           closeModal()
       }}
     >
       {({ values }) => (
         <Form>
           <label className="label" htmlFor={`name`}>Название</label>
           <Field className='field' placeholder="Напишите имя блюда" type="text" name="name" />
           <ErrorMessage className="error" name="name" component="div" />
           <label className="label"  htmlFor={`img`}>Ссылка на картинку</label>
           <Field className='field sourse' placeholder="Вставьте ссылку на картинку" type="text" name="img" />
           <ErrorMessage className="error" name="img" component="div" />
           <FieldArray name="ingredients">
            {({ insert, remove, push }) => (
              <div>
                {values.ingredients.length > 0 &&
                  values.ingredients.map((ingredient, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label className="label" htmlFor={`ingredients.${index}.ingredient`}>Ингредиент</label>
                        <Field
                        className='field'
                          name={`ingredients.${index}.ingredient`}
                          placeholder="Название ингридиента"
                          type="text"
                        />
                        <ErrorMessage
                          name={`ingredients.${index}.ingredient`}
                          component="div"
                          className="error"
                        />
                      </div>
                      <div className="col">
                        <label className="label" htmlFor={`ingredients.${index}.sum`}>Количество<br/>(в граммах/милилитрах или штуках)</label>
                        <Field
                        className='field'
                          name={`ingredients.${index}.sum`}
                          type="text"
                        />
                        <ErrorMessage
                          name={`ingredients.${index}.sum`}
                          component="div"
                          className="error"

                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="button-78 delete"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="button-78 add"
                  onClick={() => push({ ingredient: '', sum: '' })}
                >
                 Добавить ингредиент
                </button>
              </div>
            )}
          </FieldArray>
 <label className="label"  htmlFor={`category`}>Категория</label>

           <Field default='' className='field' name="category" as="select">
   <option value="">Выберите категорию</option>
   <option value="Супы">Супы</option>
   <option value="Основное">Основное</option>
   <option value="Десерты">Десерты</option>
   <option value="Другое">Другое</option>

 </Field>
           <ErrorMessage   name="category" component="div" className="error" />

 <label className="label"  htmlFor={`description`}>Описание</label>
           <Field className='field sourse' type="text" name="description" placeholder='Вставьте ссылку на подробный рецепт или видео' />
           <ErrorMessage   name="description" component="div" className="error" />
           <button type="submit" className="button-78 submit" >
             Добавить
           </button>
         </Form>
       )}
     </Formik>

       
      </div>
 </Modal> );
};

export default ModalAdd;

