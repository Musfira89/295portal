
const Buttons = ({ text, width }) => {
    return (
        <button
            className={`bg-[#ff914d] rounded-md px-4 py-2 text-white text-sm font-light tracking-wider 
        hover:bg-[#f28a4a] shadow-lg transition duration-200 ease-in-out ${width}`}
        >{text}</button>
    )
}

export default Buttons