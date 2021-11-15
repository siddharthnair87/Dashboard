export default function convertJsonToCsv(data) {
  let csvrecord =
    "graduateName,graduteEmail,cohort,graduateuuid,timestamp,techrole,currentsalary,currentemployer,lengthofservice,currentposition,jobsatisfaction" +
    "\n";

  data.forEach((graduate) => {
    let { graduate_name, graduate_email, cohort } = graduate;
    graduate.responses.forEach((response) => {
      const {
        graduate_uuid,
        timestamp,
        tech_role,
        current_salary,
        current_employer,
        length_of_service,
        current_position,
        job_satisfaction,
      } = response;
      csvrecord += `${graduate_name},${graduate_email},${cohort},${graduate_uuid},${timestamp},${tech_role},${current_salary},${current_employer},${length_of_service},${current_position},${job_satisfaction}\n`;
    });
  });

  return csvrecord;
}
