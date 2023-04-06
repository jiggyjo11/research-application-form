import Input from "../Input";
import { Dropdown } from "../Dropdown";
import nihFundingCategories from "../../data/nih-funding-categories";
import IndicatorBar from "../indicator-bar";

function StepOne({
  onSubmit,
  register,
  setValue,
  errors,
  control,
  createDataroom,
  dataroom,
  dataroomURL,
  nextPage,
}) {
  const projct_phase_options = [
    "Conceptual",
    "In vitro",
    "In vivo",
    "IND",
    "Phase I",
    "Phase I/II",
    "Phase II",
    "Phase II/III",
    "Phase III",
  ];

  return (
    <>
      <IndicatorBar progress={10} />

      <h4 className="text-2xl mb-4">1. Project Title and Descriptions</h4>
      <p className="text-md mb-12">
        Write a clear, brief title and subtitle to help people quickly
        understand your project. Both will appear on your project and pre-launch
        pages. Potential backers will also see them if your project appears on
        category pages, search results, or in emails we send to our community.
        Stuff in keywords to improve the indexability of your project.
      </p>
      <Input
        id="project_title"
        label="Project Title"
        type="text"
        placeholder="Discovery of novel mitophagy activators for Alzheimer's disease"
        register={register}
        errorMessage={errors.project_title?.message}
      />
      <label className="label">
        <span className="label-text">Project Description</span>
      </label>
      <textarea
        className="input input-bordered w-full mb-4 h-40"
        id="project_description"
        label="Short Project Description"
        type="textarea"
        placeholder="Accumulation of damaged mitochondria is a hallmark of aging and age-related neurodegeneration. Failure to clear cellular damaged mitochondria is majorly caused by compromised mitop..."
        {...register("project_description")}
        errorMessage={errors.project_description?.message}
      />
      <div className="divider my-8" />
      <h4 className="text-2xl mb-4">Project Category</h4>
      <p className="text-md mb-12">
        Choose a primary category and subcategory to help funders find your
        project. Your second subcategory will help us provide more relevant
        guidance for your project. It won't display on your project page or
        affect how in it appears in search results. You can change these anytime
        before and during your campaign.
      </p>
      <Dropdown
        id="project_research_topic"
        label="Research Industry based on NIH Category"
        placeholder="Select an option"
        options={nihFundingCategories}
        register={register}
        errorMessage={errors.myDropdown?.message}
        control={control}
      />
      <Dropdown
        id="project_research_industry"
        label="Pick Industry From Dropdown"
        placeholder="Select an option"
        options={nihFundingCategories}
        register={register}
        errorMessage={errors.myDropdown?.message}
        control={control}
      />
      <Input
        id="project_icd_codes"
        label="Submit one or more comma separated ICD Codes"
        type="text"
        placeholder="1F03.0 Measles without complication, 1F86.4 Cercarial dermatitis"
        register={register}
        errorMessage={errors.project_title?.message}
      />
      <Dropdown
        id="project_datapackage"
        label="Project Datapackage"
        placeholder="Select an option"
        options={["Package1", "Package2", "Package3"]}
        register={register}
        errorMessage={errors.myDropdown?.message}
        control={control}
      />
      <Dropdown
        id="project_patent_status"
        label="Patent Status"
        placeholder="Select an option"
        options={["Status 1", "Status 2", "Status 3"]}
        register={register}
        errorMessage={errors.myDropdown?.message}
        control={control}
      />
      <label className="label">
        <span className="label-text">Clinical Stage</span>
      </label>
      <div className="grid grid-cols-3 gap-4">
        {projct_phase_options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              id={`phase-${index}`}
              type="radio"
              name="project_clinical_stage"
              value={option}
              {...register("project_clinical_stage")}
              className="w-4 h-4 text-blue-500 flex-shrink-0 appearance-none border border-gray-300 rounded-none checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            />
            <label
              htmlFor={`phase-${index}`}
              className="text-base font-semibold ml-2 flex-grow"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
      <div className="divider my-4" />
      <div className="w-100 mt-20 flex">
        {" "}
        {!dataroomURL && (
          <button
            className="btn flex mb-8"
            type="button"
            onClick={createDataroom}
          >
            Create Dataroom
          </button>
        )}
        {dataroomURL && (
          <>
            <a
              href={dataroomURL}
              className="btn flex mb-8"
              target={"blank"}
              type="button"
            >
              Visit Dataroom
            </a>
            <button className="btn bgflex ml-auto mb-8 flex" onClick={nextPage}>
              Next Page
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default StepOne;
