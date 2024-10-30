import Button from "./Button";

// eslint-disable-next-line react/prop-types
const CardCourses = ({fondoCourse, nameCourse, teacher, teacherName, desc}) => {
return (
<>
    <div className="flex w-[450px] max-w-[450px] gap-6 card-courses ">
        <div
        className="group flex max-w-[450px] border hover:bg-white border-gray-200 focus:outline-none transition duration-300 hover:scale-[1.1] rounded-xl  dark:border-neutral-700 overflow-hidden"
        >
        <div className="py-5 pl-5 w-[700px] max-w-[800px] z-[1]">
            <img
            className="w-full h-full object-cover rounded-xl rounded-e-none z-[-22]"
            src={fondoCourse}
            alt="Course Image"
            />
        </div>
        <div className="bg-neutral-900 p-4 w-[800px] max-w-[800px] flex flex-col justify-between space-y-5 space-x-4 ">
            <div className="my-6 mb-6 mt-2 ">
            <h3 className="text-xl font-semibold p-4 flex flex-col justify-between w-[190px] text-background-color">
                {nameCourse}
            </h3>
            <p className="mt-3 mb-1 text-gray-600 dark:text-neutral-400 line-clamp-4">
                {desc}
            </p>
            </div>
            <div className="flex justify-center mb-2">
                <Button text={"Ver mas"}/>
            </div>
            <div className="mt-1 mb-1 flex items-center gap-x-3 inset-x-2 bottom-2">
            <img
                className="size-8 rounded-full"
                src={teacher}
                alt="Avatar"
            />
            <div className="">
                <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                By <span className=" text-background-color ">{teacherName}</span>
                </h5>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
);
};

export default CardCourses;
