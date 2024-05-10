export const MainBar = (task, color) => {
  return (
    <>
      <div className=" px-3 pb-3">
        <div className="flex justify-between items-center border-b-2">
          <div className="flex items-center py-3">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 outline-none"
            />
            <span className="mx-2 font-medium">Task 1</span>
            <span className="text-white bg-red-500 p-1 rounded-md text-[12px] h-6 text-center w-12">
              High
            </span>
          </div>
          <button className="bg-red-500 text-white rounded-md px-1 text-center">
            Delete
          </button>
        </div>
        <div className="flex justify-between items-center border-b-2">
          <div className="flex items-center py-3">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 outline-none"
            />
            <span className="mx-2 font-medium">Task 2</span>
            <span className="text-white bg-yellow-500 p-1 rounded-md text-[12px] h-6 text-center w-14">
              Medium
            </span>
          </div>
          <button className="bg-red-500 text-white rounded-md px-1 text-center">
            Delete
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center py-3">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 outline-none"
            />
            <span className="mx-2 font-medium">Task 3</span>
            <span className="text-white bg-green-500 p-1 rounded-md text-[12px] h-6 text-center w-12">
              Low
            </span>
          </div>
          <button className="bg-red-500 text-white rounded-md px-1 text-center">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
