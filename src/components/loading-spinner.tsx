
export default function LoadingSpinner() {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="relative w-12 h-12">
          
          <div className="absolute w-full h-full rounded-full border-4 border-gray-200"></div>
          
          
          <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-1 h-1 rounded-full bg-blue-400"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }