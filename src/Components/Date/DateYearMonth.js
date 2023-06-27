import React from 'react';

const CurrentYearMonth = () => {
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDay() + 1).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  return getCurrentDateTime();
};

export default CurrentYearMonth;