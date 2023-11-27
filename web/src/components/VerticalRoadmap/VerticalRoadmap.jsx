import './main.css'

const VerticalRoadmap = ({ dates }) => {
  return (
    <div className="flex flex-col">
      {dates.map((date, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4">
          <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
            {date}
          </div>
          <div className="text-gray-800">
            test
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalRoadmap;
