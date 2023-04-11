import React, { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { airtablePostEvent } from "../services/airtable";
import Image from "next/image";
import Head from "next/head";
import Start from "../components/form/start";
import StepTwo from "../components/form/form-step-2";
import StepThree from "../components/form/form-step-3";
import StepFour from "../components/form/form-step-4";
import yupSchema from "../data/yupSchema";

function SubmitProject() {
  const schema = yupSchema;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, control },
  } = useForm({ resolver: yupResolver(schema) });

  const [accessToken, setAccessToken] = useState(null);
  const [dataroom, setDataroom] = useState("Create secure Dataroom");
  const [dataroomURL, setDataroomUrl] = useState(null);
  const [errorToastMessage, setErrorToastMessage] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [page, setPage] = useState(1);
  const project_title = watch("project_title");

  // useEffect(() => {
  //   if (project_title) {
  //     console.log("Field 1 is filled out:", project_title);
  //   }
  // }, [project_title]);

  // useEffect(() => {
  //   const fetchAccessToken = async () => {
  //     try {
  //       const response = await fetch("/api/boxupload");
  //       const data = await response.json();
  //       setAccessToken(data.accessToken);
  //     } catch (error) {
  //       console.error("Error fetching access token:", error);
  //     }
  //   };

  //   fetchAccessToken();
  // }, []);

  const onHideToast = () =>
    setTimeout(() => {
      setErrorToastMessage(undefined);
    }, 2000);

  async function createDataroom() {
    const data = {
      project_researcher_name: "Nikola Tesla",
      project_title: project_title,
    };

    try {
      const response = await fetch("/api/boxupload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setDataroom("Dataroom Created");
        setDataroomUrl(
          `https://moleculecloud.app.box.com/folder/${responseData.message}`
        );
        setValue("project_dataroom_id", `${responseData.message}`);
      } else {
        setErrorToastMessage(`${responseData.message}`);
        console.error("Error making POST request:", responseData.message);
      }
    } catch (error) {
      setErrorToastMessage(`${error.message}`);
      console.error("Error making POST request:", error);
    }
  }

  // posting data to Airtable and catching errors
  const onSubmit = async (data) => {
    try {
      await airtablePostEvent(data);
      setErrorToastMessage(undefined);
      setIsSubmitted(true);
    } catch (err) {
      setErrorToastMessage(
        `Error submitting event to Airtable: ${err.message}`
      );
    }
  };

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (
    <>
      <Head>
        <title>Submit an Project | BioXYZ Project Submission</title>
      </Head>

      <div
        class="h-60 flex"
        style={{ backgroundImage: "url('/images/bioxyz-background.jpeg')" }}
      >
        <Image
          src="/images/bioxyz-logo.svg"
          alt="Desci Global Logo"
          width={200}
          height={200}
          className="mx-auto py-4"
        />
      </div>
      <div className="max-w-xl relative mt-10 mb-2 mx-2 sm:mx-auto">
        {isSubmitted ? (
          <>
            <h1 className="text-4xl pt-10 pb-8">
              Research Project submitted! 🎉
            </h1>
            <p>It will be posted after ~ 24 hours.</p>
          </>
        ) : (
          <>

            <form onSubmit={handleSubmit(onSubmit)}>
              {page === 1 && (
                <>
                  <Start nextPage={nextPage} />
                </>
              )}
              {page === 2 && (
                <>
                  <StepTwo
                    register={register}
                    errors={errors}
                    createDataroom={createDataroom}
                    dataroom={dataroom}
                    dataroomURL={dataroomURL}
                    nextPage={nextPage}
                  />
                </>
              )}

              {page === 3 && (
                <>
                  <StepThree
                    prevPage={prevPage}
                    register={register}
                    errors={errors}
                    createDataroom={createDataroom}
                    dataroom={dataroom}
                    dataroomURL={dataroomURL}
                    nextPage={nextPage}
                  />
                </>
              )}

              {page === 4 && (
                <>
                  <StepFour
                    prevPage={prevPage}
                    register={register}
                    errors={errors}
                    createDataroom={createDataroom}
                    dataroom={dataroom}
                    dataroomURL={dataroomURL}
                    nextPage={nextPage}
                  />
                </>
              )}
            </form>
          </>
        )}

        {errorToastMessage ? (
          <div class="toast toast-end">
            <div
              class="alert alert-error indicator max-w-[80vw]"
              onMouseLeave={onHideToast}
              onTouchEnd={onHideToast}
            >
              <div>
                <span>{errorToastMessage.slice(0, 1000)}...</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default SubmitProject;
