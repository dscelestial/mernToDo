const Home = () => {

    const handleClick = (data) => {
        console.log(data)
    }

  return (
    <div className='bg-gray-100 w-screen h-screen'>
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <div className="font-bold text-2xl">
                <h2>ToDo List</h2>
            </div>
            <div>
                <input className="bg-white p-2 w-72 outline-none border border-blue-300 rounded-md" type="text" placeholder="Enter to do"></input>
                <button className="bg-blue-600 text-white p-2 m-4 rounded-sm">ADD</button>
            </div> 

            <div className="flex justify-evenly w-72 mb-4">
                    <p onClick={() => handleClick(1)}>All</p>
                    <p onClick={() => handleClick(2)}>Active</p>
                    <p onClick={() => handleClick(3)}>Completed</p>
            </div>

            <div className="flex justify-between bg-white p-2 w-80">
                <div>
                    <p className="text-xl font-semi-bold">Do something</p>
                    <p className="text-sm">Date today</p>
                    <p className="text-sm">Status: Active</p>
                </div>

                <div className="flex flex-col items-start">
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home