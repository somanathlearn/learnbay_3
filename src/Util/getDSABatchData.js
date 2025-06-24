export const getDSABookingSoonDate = (today = new Date()) => {
  const targetDay = 23;
  let bookingMonth = today.getMonth();

  if (today.getDate() > targetDay) {
    bookingMonth = today.getMonth() + 1;
  }

  const bookingDate = new Date(today.getFullYear(), bookingMonth, targetDay);
  const options = { day: "numeric", month: "short" };
  return bookingDate.toLocaleDateString("en-GB", options);
};

export const getDSABookingLaterDate = (today = new Date()) => {
    const targetDay = 23;
    let bookingMonth = today.getMonth();
  
    if (today.getDate() > targetDay) {
      bookingMonth = today.getMonth() + 1;
    }
  
    const bookingSoonDate = new Date(today.getFullYear(), bookingMonth, targetDay);
    
    const bookingLaterDate = new Date(bookingSoonDate);
    bookingLaterDate.setMonth(bookingSoonDate.getMonth() + 1);
    
    const options = { day: "numeric", month: "short" };
    return bookingLaterDate.toLocaleDateString("en-GB", options);
  };
  