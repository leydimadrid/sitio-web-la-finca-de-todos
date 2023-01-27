export const ButtonDonar = (props) => {
    return (
        <button className='bg-indigo-600 text-white text-sm font-[Metropolis] font-medium py-2 px-6 rounded md:ml-5 hover:bg-indigo-400
        duration-500'>
          {props.children}
        </button>
      )
}
