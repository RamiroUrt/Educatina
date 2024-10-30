import '../assets/css/button.css'

// eslint-disable-next-line react/prop-types
const Button = ({text }) => {
return (
    <>
    <button className="fancy" href="#">
        <span className="top-key"></span>
        <span className="text">{text}</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
    </button>
    </>
)
}

export default Button