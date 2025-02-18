import './App.css'
const Modal = ({ modal, locations, position }) => {
    const { active, index } = modal;
    const location = locations[index];
  
    if (!active || !location) return null; 
  
    return (
      <div className="modal" style={{left: position.x, top: position.y}}>
        <img src={`${location.img}`} alt={location.name} />
      </div>
    );
  };
  
  export default Modal;
  