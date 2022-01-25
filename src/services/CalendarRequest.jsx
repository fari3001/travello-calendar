import React from "react";
import axios from "axios";
import { useQuery } from "react-query";



const endpoint = "https://api-stage.travelloapp.com/graphql";
const CALENDAR_QUERY = `
  {
    availableDates {
        isOperating
        date
    }
  }
`;

export default function CalendarRequest() {
    // Initial attempt at utilising axios to consume the API 
    const calenderData = () => {
        axios.get("https://api-stage.travelloapp.com/graphql").then((response)=>{
            console.log(response)
        })
    }
    // ======================================================
  const { data, isLoading, error } = useQuery("data", () => {
    return axios({
      url: endpoint,
      method: "POST",
      data: {
        query: CALENDAR_QUERY
      }
    }).then(response => response.data.data);
  });

  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      <h1>Calendar Data</h1>
      <ul>
        {data.availableDates.map((el) => (
          <li key={el.isOperating}>{el.date}</li>
        ))}
      </ul>
    </div>
  );
}