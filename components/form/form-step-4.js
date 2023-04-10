import Input from "../Input";
import IndicatorBar from "../indicator-bar";

function StepFour({
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
    <IndicatorBar progress={50} />
      <h4 className="text-2xl mb-4">Project Background</h4>
      <p className="text-md mb-12">
        Which country is the research conducted in ? Which research
        organisations carry it forward with you / are involved? Your second
        subcategory will help us provide more relevant guidance for your
        project. It won't display on your project page or affect how in it
        appears in search results. You can change these anytime before and
        during your campaign.
      </p>
      <Input
        id="research_country_code"
        label="Research Location Country Code"
        type="input"
        placeholder="US, DE"
        register={register}
        errorMessage={errors.project_institution_link?.message}
      />
      <Input
        id="research_institution_name"
        label="Research Organization / Institution"
        type="input"
        placeholder="University of Copenhagen"
        register={register}
        errorMessage={errors.project_institution_link?.message}
      />
      <Input
        id="project_institution_link"
        label="Research Organization / Institution URL"
        type="url"
        placeholder="Copy / Paste URL ... "
        register={register}
        errorMessage={errors.project_institution_link?.message}
      />
      <div className="divider my-8" />
      <h4 className="text-2xl mb-4">Project Team</h4>
      <p className="text-md mb-12">
        Please provide your name and brief background. If you are listed on
        platforms like Google Sholar, submit links to your profile (s). We
        appreciate your willingness to share your expertise and achievements
        with us.
      </p>
      <div className="btn-group flex mb-4"></div>
      <Input
        id="researcher_first_name"
        label="Your First Name"
        type="input"
        placeholder="Albert"
        register={register}
        errorMessage={errors.project_institution_link?.message}
      />
      <Input
        id="researcher_last_name"
        label="Your Last Name"
        type="input"
        placeholder="Einstein"
        register={register}
        errorMessage={errors.project_institution_link?.message}
      />

      <div className="w-100 flex  justify-between mt-20">
        {" "}
        <button className="btn bg-zinc-400  mb-8 flex" onClick={prevPage}>
          Prev Step
        </button>

        <button type="Submit" className="btn  mb-8 flex">
          Submit
        </button>
      </div>
    </>
  );
}

export default StepFour;
