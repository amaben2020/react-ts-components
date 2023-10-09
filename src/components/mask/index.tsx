import { CSSProperties } from 'react'
import './style.css'
import IMAGE from '/images/texture.jpg'
const MaskImage = () => {
  return (
    <div>
      <div className="mask">
        <img src={IMAGE} alt="Balloons" />
        <div className='heading'>
        <h2>IGBOS ARE THE GREATEST</h2>
      </div>
      </div> 

      <div className='container-item'>
      <svg width="0" height="0" viewBox="0 0 400 300">
  <defs>
    <mask id="mask">
      <rect fill="#000000" x="0" y="0" width="400" height="300"></rect>
      <circle fill="#FFFFFF" cx="150" cy="150" r="100" />
      <circle fill="#FFFFFF" cx="50" cy="50" r="150" />
    </mask>
  </defs>
        </svg>
        <div className="masked-element">
            <img src={IMAGE} alt="Balloons"    style={{
            "--mask": 'url(#mask)',
             mask: 'url(#mask)',
            WebkitMask: 'url(#mask)', // For compatibility with some browsers
          } as CSSProperties} />
          </div>
      </div>
    </div>
  )
}

export default MaskImage