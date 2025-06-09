const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center gap-2 flex-col">
      <div className="w-full flex justify-center py-2">
        <div className="flex py-4 space-x-2">
          <div className="w-4 h-4 border-white bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 border-white bg-gradient-to-r from-red-300 to-orange-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-4 border-white bg-gradient-to-r from-red-200 to-orange-200 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 border-white bg-gradient-to-r from-red-100 to-orange-100 rounded-full animate-bounce [animation-delay:0.15s]"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
