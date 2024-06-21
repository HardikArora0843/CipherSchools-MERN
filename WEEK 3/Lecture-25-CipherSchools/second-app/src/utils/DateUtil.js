
// THIS FILE IS CREATED SO THAT WE CAN SEE DATE AS STRING TO READ EASILY

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
    // dateStyle: "medium",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "short",
    day: "2-digit",

})

// dateFormatter is function that we have created to defined our format of time 

export const formatDate = (date) => dateFormatter.format(date);