export const Footer = () => {
  return (
    <>
      <div className="flex justify-between m-3">
        <span className="text-gray-400">Task name</span>
        <div className="">
          <select name="" id="">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button className="bg-green-300 h-7 w-20 rounded-md text-white">
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};
