export const apiCall = (link) =>
  fetch(link, {
      method: "GET",
      headers: {
          "x-rapidapi-host": "zappos-realtime-data.p.rapidapi.com",
          "x-rapidapi-key":
            "ebb8587995mshad6038ccf55c36dp16781bjsncafe61b7c13d",
      }
  }).then(response => response.json())

