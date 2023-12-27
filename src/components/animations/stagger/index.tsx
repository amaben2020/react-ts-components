import './styles.css';
const Stagger = () => {
  const animations = [1, 2, 3]

  return (
    <div className='mx-auto'>
      {animations.map(a => (
        <>
          <div className='ball' key={a} style={{ "--i": a } as React.CSSProperties} >{a}</div>
        </>
      ))}
  
   
    </div>
  )
}

export default Stagger