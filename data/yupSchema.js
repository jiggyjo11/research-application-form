import * as yup from "yup";

const yupSchema = yup
  .object({
    project_title: yup.string().required("Please enter a project title"),
    project_description: yup
      .string()
      .required("Please enter a project description"),
    project_research_topic: yup
      .string()
      .required("Please select a research industry based on NIH category"),
    project_research_industry: yup
      .string()
      .required("Please pick an industry from the dropdown"),
    project_icd_codes: yup
      .string()
      .required("Please submit one or more comma separated ICD codes"),
    project_datapackage: yup
      .string()
      .required("Please select a project datapackage"),
    project_patent_status: yup
      .string()
      .required("Please select a patent status"),
    project_clinical_stage: yup
      .string()
      .required("Please select a clinical stage"),
    research_country_code: yup
      .string()
      .required("Please enter a research location country code"),
    research_institution_name: yup
      .string()
      .required("Please enter a research organization/institution"),
    project_institution_link: yup
      .string()
      .url(
        "Please enter a valid URL for the research organization/institution"
      ),
    researcher_first_name: yup
      .string()
      .required("Please enter your first name"),
    researcher_last_name: yup.string().required("Please enter your last name"),
  })
  .required();


export default yupSchema;