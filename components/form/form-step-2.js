import Input from "../Input";
import IndicatorBar from "../indicator-bar";

function StepTwo({
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

export default StepTwo;
