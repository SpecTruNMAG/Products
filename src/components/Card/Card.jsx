function Card({items}) {
  return (
    <div>
      
      <h2>{items.pro_name}</h2>
      <p>{items.pro_description}</p>
      <p>{items.pro_price}</p>
    </div>
    
    
  )
}

export default Card