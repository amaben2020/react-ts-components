import usePortal from "./hooks/usePortal";

const Portals = () => {
  const { render } = usePortal()
  
  const Modal = () => <div>MODAL HERE Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem aliquid voluptatum ea voluptas, minima incidunt beatae sint omnis atque voluptatem numquam sed totam facere reprehenderit. Temporibus incidunt voluptas praesentium.</div>

 
  return (
    <div>{render(<Modal/>)}</div>
  )
}

export default Portals