import Airtable, { apiKey } from "airtable";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_KEY,
  typecast: "true",
});

var base = Airtable.base("appd2Yx1HrD7gggLE");

export async function airtablePostEvent(data) {
  const {
    project_title,
    project_description,
    project_research_industry,
    project_research_topic,
    project_icd_codes,
    project_datapackage,
    project_patent_status,
    project_institution_link,
    project_clinical_stage,
    research_country_code,
    researcher_first_name,
    researcher_last_name,
    project_dataroom_id
    
  } = data;

  try {
    let record = await base("applications").create(
      {
        fldMEpZ2v2Ubfj0rZ: project_title,
        fldzXVbzyazAaiji4: project_description,
        fld3OfdrVVhgoEKVG: project_research_industry,
        fldUxDwOM2F6SGE3H: project_research_topic,
        flduEijWGP7rQSp5C: project_icd_codes,
        fldtAZnNkaCimPCax: project_datapackage,
        fld7kisU7X5fl8XOs: project_patent_status,
        fldNMc5ZLW1CXvsf9: project_institution_link,
        fldwLJGzvomj8VqJ3: project_clinical_stage,
        fldXaXNPEcQ0v4Xn6: research_country_code,
        fldoeyAzaIUvTLcLZ: researcher_first_name,
        fldzZr7yVI9F6GHl7: researcher_last_name,
        fldV4FM7oREavmY2o: project_dataroom_id
      },
      { typecast: true }
    );

    return record.getId();
  } catch (err) {
    throw new Error(`Error posting event to Airtable: ${err.message}`);
  }
}
