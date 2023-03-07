import React, { useEffect, useState } from "react";
import "./SectionExercises.scss";

export default function SectionExercises({ category, search }) {
  const [exerciseArray, setExerciseArray] = useState([]);

  useEffect(() => {
    $.ajax({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/exercises?" + category + "=" + search,
      headers: { "X-Api-Key": "4nmeW2NeFxKcC9W+1O2XrQ==QtmbDMGWsjTTaKTb" },
      contentType: "application/json",
      success: function (result) {
        console.log(result);
        setExerciseArray(result);
      },
      error: function ajaxError(jqXHR) {
        console.error("Error: ", jqXHR.responseText);
      },
    });
  }, [category, search]);
  return (
    <div>
      {exerciseArray && exerciseArray.length > 0
        ? exerciseArray.map((item, i) => (
            <details key={i} className="exercise">
              <summary className="exercise__summary">{item.name}</summary>
              <p className="exercise__instructions">{item.instructions}</p>
            </details>
          ))
        : "Sorry, the exercise you were looking for is not here. Try something else..."}
    </div>
  );
}
