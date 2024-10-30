
import Button from "./Button";
import CardCourses from "./CardCourses";

const Courses = () => {
  return (
    <>
      <div className="bg-gray-color flex justify-center align-center">
        <div className="max-w-[80%] sm:px-6 lg:px-8 lg:py-14 flex gap-10 flex-wrap justify-center">
            <CardCourses
             fondoCourse={CoursesConst[0].fondoCourse}
              nameCourse={CoursesConst[0].nameCourse}
              desc={CoursesConst[0].desc}
              teacher={CoursesConst[0].teacher}
              teacherName={CoursesConst[0].teacherName}
             />
            <CardCourses
              fondoCourse={CoursesConst[1].fondoCourse}
              nameCourse={CoursesConst[1].nameCourse}
              desc={CoursesConst[1].desc}
              teacher={CoursesConst[1].teacher}
              teacherName={CoursesConst[1].teacherName} />
            <CardCourses
              fondoCourse={CoursesConst[2].fondoCourse}
              nameCourse={CoursesConst[2].nameCourse}
              desc={CoursesConst[2].desc}
              teacher={CoursesConst[2].teacher}
              teacherName={CoursesConst[2].teacherName} />
                          <CardCourses
             fondoCourse={CoursesConst[0].fondoCourse}
              nameCourse={CoursesConst[0].nameCourse}
              desc={CoursesConst[0].desc}
              teacher={CoursesConst[0].teacher}
              teacherName={CoursesConst[0].teacherName}
             />
            <CardCourses
              fondoCourse={CoursesConst[1].fondoCourse}
              nameCourse={CoursesConst[1].nameCourse}
              desc={CoursesConst[1].desc}
              teacher={CoursesConst[1].teacher}
              teacherName={CoursesConst[1].teacherName} />
            <CardCourses
              fondoCourse={CoursesConst[2].fondoCourse}
              nameCourse={CoursesConst[2].nameCourse}
              desc={CoursesConst[2].desc}
              teacher={CoursesConst[2].teacher}
              teacherName={CoursesConst[2].teacherName} />
        </div>
      </div>
        <div className="flex justify-center pt-2 pb-2 bg-gray-color">
          <Button text={"explora más cursos"} className='bg-black'/>
        </div>
    </>
  );
};

export default Courses;


const CoursesConst = [
  {
    fondoCourse: "https://www.freecodecamp.org/espanol/news/content/images/size/w2000/2022/09/5f9c9b14740569d1a4ca2991.jpg",
    nameCourse: "PYTHON AVANZADO",
    desc: "Aprende Python desde cero con este curso práctico. Domina los conceptos básicos, estructuras de datos y programación orientada a objetos. Ideal para principiantes que buscan iniciar su carrera en desarrollo de software.",
    teacher: "https://www.ohchr.org/sites/default/files/styles/hero_5_image_desktop/public/2022-11/women-rights-main-image.jpg?itok=RRGl2PFb",
    teacherName: "Ana Martínez", 
  },
  {
    fondoCourse: "https://cdn.prod.website-files.com/5dcc7f8c449e597be23356e0/6578e3a5dfba7eb6b0c223b3_javascript-for-software-engineers-blog-hero-image.webp",
    nameCourse: "JAVASCRIPT",
    desc: "Domina JavaScript con este curso esencial. Aprende desde las bases hasta conceptos avanzados, incluyendo manipulación del DOM y programación asincrónica. Perfecto para quienes desean crear aplicaciones web dinámicas.",
    teacher: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTB5vyyCeEWJACe9J2cvXWAaRCizq5NIcRuAN8tW0ATwk4mNtAwRrImMK5SsymEqgYQc&usqp=CAU",
    teacherName: "Luis Fernández",
  },
  {
    fondoCourse: "https://www.itmastersmag.com/wp-content/uploads/2020/10/shutterstock_1278846622.jpg",
    nameCourse: "CURSO DE DEVOPS",
    desc: "Descubre los fundamentos de DevOps en este curso completo. Aprende sobre integración continua, entrega automatizada y herramientas clave como Docker y Kubernetes. Ideal para optimizar procesos de desarrollo y operaciones.",
    teacher: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHPmPXafZyy3z2iVjXPHHLEvDikIuXdVJkA&s",
    teacherName: "Marta López",
  },
  {
    fondoCourse: "https://images.unsplash.com/photo-1517430816045-df4b7de3d6e0",
    nameCourse: "CURSO DE FRONTEND CON ANGULAR",
    teacher: "https://www.example.com/profesor-angular.jpg",
    teacherName: "Carlos García",
  }
];

