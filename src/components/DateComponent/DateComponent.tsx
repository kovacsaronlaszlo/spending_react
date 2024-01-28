export default function DateComponent({ date }: { date: string }) {
  const tmp_date = new Date(date);
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const hours = tmp_date.getHours();
  const minutes = tmp_date.getMinutes();

  const amPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const time = `${formattedHours}:${formattedMinutes} ${amPm}`;
  const day = `${
    months[tmp_date.getMonth()]
  } ${tmp_date.getDay()}, ${tmp_date.getFullYear()}`;
  return <span>{`${time} - ${day}`}</span>;
}
