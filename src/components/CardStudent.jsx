
import '../assets/css/CardStudent.css'

import Avatar from '@mui/material/Avatar';

// eslint-disable-next-line react/prop-types
const CardStudent = ({Nombre, exp, img}) => {
  return (
    <div className="card-student">
            <Avatar className='avatar' src={img} />
        <div className="name">
            <h1>{Nombre}</h1>
        </div>
        <div className="text-card">
            <p>{exp}</p>
        </div>
    </div>
  )
}

export default CardStudent