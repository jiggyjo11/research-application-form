function Start({ nextPage }) {
  return (
    <>
      <h1 className="text-3xl pt-10 pb-8">Submit an Project 🔬</h1>
      <p className="text-md mb-12">
        Submit your project and contribute to the descentralized science
        ecosystem.
      </p>
      <div className="w-full h-auto">
        <img
          src={"/images/submission-overview.png"}
          alt="image"
          className="w-full"
        />
      </div>{" "}
      <div className="w-100 mt-20">
        {" "}
        <button className="btn w-[100%] mb-8 flex" onClick={nextPage}>
          Enter Submission
        </button>
      </div>
    </>
  );
}

export default Start;
