import Input from "../Input";
import IndicatorBar from "../indicator-bar";
import FileDropZone from "./FileDrop";

function StepThree({
  onSubmit,
  register,
  setValue,
  errors,
  control,
  createDataroom,
  dataroom,
  dataroomURL,
  nextPage,
  prevPage,
}) {
  return (
    <>
      <IndicatorBar progress={35} />
      <h4 className="text-2xl mb-4">2. Submit your pitch materials </h4>
      <p className="text-md mb-12">
        Upload a presentation or pdf deck you would use to pitch your project to
        an investment commitee. Name the file according the following scheme:
      </p>
      <FileDropZone />
      <div className="w-100 flex  justify-between mt-20">
        {" "}
        <button className="btn bg-zinc-400  mb-8 flex" onClick={prevPage}>
          Prev Step
        </button>
        <button className="btn  mb-8 flex" onClick={nextPage}>
          Next Step
        </button>
      </div>
    </>
  );
}

export default StepThree;
