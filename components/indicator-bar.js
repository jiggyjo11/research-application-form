function IndicatorBar({ progress }) {
    return (
      <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden my-10">
        <div
          className="h-full bg-[#ABFA62]"
          style={{ width: `${progress}%` }}
        ><p className="text-xs px-1">{progress} %</p></div>
      </div>
    );
  }

  export default IndicatorBar;