import "./style.css"

const SimpleAnimation = () => {
  return (
    <div>

      <div>
        <h3>Button</h3>
        <button className="animated-button">Ok</button>
      </div>


      <div>
        <h2>Animated Card</h2>
        <div className="animated-card">
          <p>Card</p>
        </div>

        <div className="animated-card">
          <p>Card</p>
        </div>
      </div>
    </div>
  )
}

export default SimpleAnimation