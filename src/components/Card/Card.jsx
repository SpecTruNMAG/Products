function Card({items}) {
  return (
    <div>
      <h2>{items.name}</h2>
      <p>{items.description}</p>
      <p>{items.price}</p>
    </div>
    
    
  )
}

export default Card