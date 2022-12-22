import Multiselect from 'multiselect-react-dropdown';
import { useDispatch, useSelector } from "react-redux";
import { Store } from './interfaces';
import { Recipe } from './interfaces/redux/Recipe';

interface ingredient {
  ingredient: string,
  sum:number | null,

}
export const SidebarL = () => {
// Остальные стили мультиселекта в scss 
  let custom = {
  chips: {
	background: '#513c33',
  color:'#F4B46A',
  fontSize: '1.2rem'
  },
  multiselectContainer: {
    maxWidth: '300px'
  },
  inputField :{
    width: '100%'
  }
  
  
}


  const recipesData = useSelector((state: Store) => state.recipesReducer.data);


let  options:string[] =  []
let selectItems = () =>{
  recipesData?.map((i: Recipe, index)=>{
    i.ingredients.map((item:ingredient) =>options = [...options, item.ingredient ])
    
  })
  const newSet = new Set(options)
  const uniqueNumbers = Array.from(newSet)
  options = uniqueNumbers
}
selectItems()

 
 
return (
   <div className="SidebarL">
    <h2>Рецепты из того что у вас есть в холодильнике:</h2>
<Multiselect
  isObject={false}
  onRemove={function noRefCheck(){}}
  onSearch={function noRefCheck(){}}
  onSelect={function noRefCheck(){}}
  options={options}
  style={custom}
  avoidHighlightFirstOption={true}
  placeholder="Выберите продукты"
    customCloseIcon={<span className='closeIcon'>X</span>}
    emptyRecordMsg='Таких продуктов нет'

/>
  </div>)
}