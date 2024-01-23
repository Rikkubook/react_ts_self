const years = Array.from(
  { length: 2024 - 1924 + 1 },
  (_, index) => 2024 - index,
);

const months = Array.from({ length: 12 }, (_, index) => 1 + index);
const month = 1;
const year = 12;

const buildDay = (month: number, year: number): number => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
      break;
    case 2:
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return 29;
      } else {
        return 28;
      }
      break;
    default:
      return 30;
      break;
  }
};
const dateLength = buildDay(month, year);
const dates = Array.from({ length: dateLength }, (_, index) => 1 + index);

export { years, months, dates };
