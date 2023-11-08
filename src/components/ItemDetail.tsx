import {ItemType} from "../App.tsx";

const ItemDetail = ({item, isEven} : {item:  ItemType, isEven: boolean}) => {
  return <div className={`section ${isEven ? 'section-row' : 'section-reverse'}`}>
    <div>
      <h1 className="text">{item.title}</h1>
      <h3 className="text">{item.content}</h3>
    </div>
    <img src={item.image} className="image" />
  </div>
}

export default ItemDetail
