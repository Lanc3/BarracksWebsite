const TwoColumnList = ({ items }) => {
  // Calculate the number of items per column
  const itemsPerColumn = Math.ceil(items.length / 2);

  // Split the array into two columns
  const column1 = items.slice(0, itemsPerColumn);
  const column2 = items.slice(itemsPerColumn);

  return (
    <div className="flex w-full justify-center align-center items-center">
      <div className="w-1/2 flex justify-center align-center items-center">
        <ul className="justify-center align-center items-center">
          {column1.map((item, index) => (
            <li className="flex w-full text-[#8ACA3F]" key={index}>{`• ${item}`}</li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 flex justify-center align-center items-center">
        <ul>
          {column2.map((item, index) => (
            <li className="flex w-full text-[#8ACA3F]" key={index}>{`• ${item}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TwoColumnList;
