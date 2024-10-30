import CardFeatures from "./CardFeatures"


import CertificateSvg from '../assets/svg/certificate-icon.svg'
import OnlineStudent from '../assets/svg/online-work-icon.svg'
import TeacherOnline from '../assets/svg/webinar-icon.svg'


const Nosotros = () => {
  return (
    <section className="features">
        <div className="container-features flex text-center flex-col">
            <div className=" nosotrosH1 flex text-center mx-0">
                <h1 className="flex text-center justify-center mx-0">¿Quienes somos?</h1>
            </div>
            <div className="text-feature text-center">
                <p>En Educatina, somos una academia online dedicada a formar a la próxima generación de profesionales en el mundo de la tecnología. Nuestra misión es ofrecer una educación de alta calidad y accesible para todos, brindando cursos que cubren desde los fundamentos hasta las habilidades más avanzadas en el ámbito IT.
                <br/>
                Con un equipo de expertos apasionados por la enseñanza y la tecnología, hemos creado un entorno de aprendizaje dinámico y flexible que se adapta a las necesidades de cada estudiante. Ya sea que estés dando tus primeros pasos en el mundo de la programación o busques especializarte en un área específica, en Educatina encontrarás el apoyo y los recursos necesarios para alcanzar tus objetivos.
                <br/>
                Nos enorgullece ser una comunidad inclusiva y diversa, donde cada alumno es valorado y guiado en su camino hacia el éxito. Creemos en el poder del conocimiento para transformar vidas, y estamos comprometidos con ayudarte a construir el futuro que deseas.</p>
            </div>
            <div className="features-cont">
            <CardFeatures tittle={data[0].title} description={data[0].description} svg={data[0].svg}/>
            <CardFeatures tittle={data[1].title} description={data[1].description} svg={data[1].svg}/>
            <CardFeatures tittle={data[2].title} description={data[2].description} svg={data[2].svg}/>
            </div>

        </div>
    </section>
  )
}

export default Nosotros

const data = [
    {
        svg: CertificateSvg,
        title: 'Facilidad de estudio',
        description: 'Estudia a tu ritmo',
    },
    {
        svg: OnlineStudent,
        title: 'Facilidad de estudio',
        description: 'Estudia a tu ritmo',
    },
    {
        svg: TeacherOnline,
        title: 'Facilidad de estudio',
        description: 'Estudia a tu ritmo',
    }
]