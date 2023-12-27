import './style.css'

const Card = ({title, price, description}: Record<string, string | number>) => {
  return (
    <div className="card">

      <h4>{title}</h4>
      
      <p>{price}</p>
      
      <p>{ description}</p>
    </div>
  )
}

export default Card