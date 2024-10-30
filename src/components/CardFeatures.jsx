import '../assets/css/CardFeatures.css'

// eslint-disable-next-line react/prop-types
const CardFeatures = ({tittle, description, svg}) => {
  return (
    <div className="container-card">
        <div className="card-svg">
          <img src={svg} alt="" />
        </div>
        <div className="tittle-card-div text-center">
            <h1 className='tittle-card-feature'>{tittle}</h1>
        </div>
        <div className="description-feature">
            <p>{description}</p>
        </div>
    </div>
  )
}

export default CardFeatures