import React, { useState, useContext, createContext } from "react";
import { useResponsesData } from "./useSWR";
import { getMostRecentResponse } from "../helperFunctions/getrecentresponse";

const DataContext = createContext();

export function DataProvider({ children }) {
  const { response } = useResponsesData();
  const [data, setData] = useState(response.payload);

  function filterDataByCohort(cohortNumber) {
    setData(
      response.payload.filter((graduate) => graduate.cohort === cohortNumber)
    );
    return;
  }

  function resetFilter() {
    setData(response.payload);
    return;
  }

  function filterDataByName(name) {
    setData(
      response.payload.filter((graduate) =>
        graduate.graduate_name.toLowerCase().includes(name)
      )
    );
    return;
  }

  function filterDataByEmployer(name) {
    setData(
      response.payload.filter(
        (employer) =>
          getMostRecentResponse(employer.responses).current_employer &&
          getMostRecentResponse(employer.responses)
            .current_employer.toLowerCase()
            .includes(name)
      )
    );
    return;
  }
  function filterDataByLengthOfService(value) {
    setData(
      response.payload.filter(
        (graduate) =>
          getMostRecentResponse(graduate.responses).length_of_service &&
          getMostRecentResponse(graduate.responses).length_of_service.includes(
            value
          )
      )
    );
    return;
  }
  return (
    <DataContext.Provider
      value={{
        data,
        filterDataByCohort,
        resetFilter,
        filterDataByName,
        filterDataByEmployer,
        filterDataByLengthOfService,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
