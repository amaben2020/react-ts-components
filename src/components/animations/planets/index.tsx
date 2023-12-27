import "./styles.css"

const Planets = () => {
  return (
  <>
         <article className="earth-demo" >
    <div className="earth">
      <div className="more-info">
        <h1>Earth</h1>
        <ul>
          <li>Third planet from the Sun</li>
          <li>Atmosphere: 21% oxygen</li>
          <li>Liquid water on surface</li>
          <li>Only planet that has life (that we know of)</li>
        </ul>
      </div>
      <img src="https://cssanimation.rocks/images/random/earth.png"/>
    </div>
    <div className="moon-container">
      <div className="moon">
        <img src="https://cssanimation.rocks/images/random/moon.png"/>
      </div>
    </div>
      </article>
      
      <div className="multi">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum hic recusandae at iusto corrupti tempora, eveniet eaque doloremque consectetur, laudantium natus consequuntur dolorem, voluptate ea ratione odio officia perferendis.
      </div>
  </>
   
   

  )
}

export default Planets