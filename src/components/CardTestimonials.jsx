

// eslint-disable-next-line react/prop-types
const CardTestimonials = ({coment, people, role, img}) => {
  return (
    <>
               <div className="flex flex-col bg-white rounded-xl card-testimonials">
          <div className="flex-auto p-4 md:p-6 z-[333] ">
            <p className=" md:text-lg text-black font-semibold z-[23]">
            {coment}
            </p>
          </div>

          <div className="p-4 rounded-b-xl md:px-7 bg-neutral-800">
            <div className="flex items-center gap-x-3">
              <div className="shrink-0">
                <img className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src={img} alt="Avatar"/>
              </div>

              <div className="grow">
                <p className="text-sm  font-semibold  text-background-color">
                  {people}
                </p>
                <p className="text-xs text-gray-500 dark:text-neutral-400">
                  {role}
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default CardTestimonials