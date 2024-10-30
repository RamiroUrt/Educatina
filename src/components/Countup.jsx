import CountUp from 'react-countup';

const Countup = () => {
  return (
    <>
    <section className="countup-contain">
        <div className="count-contain flex-wrap">
            <div className="number">
              <CountUp
              className='number'
              start={0}
              end={360000} 
              duration={1.75}
              separator="."
              prefix="+"
              enableScrollSpy= {true}
              />
              <h2>Estudiantes</h2>
            </div>
            <div className="number">
              <CountUp
              className='number'
              start={0}
              end={20} 
              duration={1.75}
              separator="."
              prefix="+"
              enableScrollSpy= {true}
              />
              <h2>paises</h2>
            </div>
        </div>
    </section>
    </>
  )
}

export default Countup