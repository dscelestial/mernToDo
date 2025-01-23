const Home = () => {
  return (
    <div className='bg-gray-100 w-screen h-screen'>
        <div className="flex justify-center items-center w-screen h-screen">
            <div>
                <h2>ToDo List</h2>
            </div>
            <div>
                <input className="bg-white" type="text" placeholder="Enter to do"></input>
                <button>ADD</button>
            </div>
        </div>
    </div>
  )
}

export default Home