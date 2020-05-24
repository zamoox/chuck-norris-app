export const getHoursAgo = (stringDate) => {
  
    const date = new Date(stringDate);

    const currentHoursFrom1970 = Math.floor(new Date().getTime()/1000/3600);
    const customHoursFrom1970 = Math.floor(date.getTime()/1000/3600);
   
    return currentHoursFrom1970 - customHoursFrom1970;
   
 }