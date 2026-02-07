const Task = ({ item }) => {
  return (
    <div className="flex flex-col gap-2 p-3 rounded-lg shadow-lg shadow-stone-400/80 border-2 border-stone-200">
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <h3 className="text-stone-400">{item.description}</h3>
    </div>
  );
};

export default Task;
