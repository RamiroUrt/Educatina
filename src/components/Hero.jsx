import Slider from '../../public/cover.png'

import '../assets/css/Comic-button.css'
import Button from './Button'

const Hero = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="img-fondo">
          <div className="left-header">
            <h1 className="text-title1">Construye tu futuro con</h1>
            <h2 className="text-title2">EDUCATINA</h2>
            <div className="button-contain">
              <Button text={'DESCUBRE NUESTROS CURSOS'} />
            </div>
          <div className="section-text">
            <div className="text1">
              <h2>Prueba gratuita de 7 días</h2>
            </div>
            <div className="text2">
              <h2>Desde $49 por mes</h2>
            </div>
            <div className="text3">
              <h2>En menos de 6 meses a tu propio ritmo</h2>
            </div>
          </div>
        </div>
          </div>
          </div>
      </header>
        <div className="slider-header">
          <img src={Slider} alt="" />
        </div>
    </>
  )
}

export default Hero
