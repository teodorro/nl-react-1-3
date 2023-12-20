import "../css/main.css";
import PropTypes from "prop-types";

const monthsDecl = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

const days = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];

export function Calendar(props) {
  const year = props.date.getFullYear();
  const month = months[props.date.getMonth()];
  const monthDecl = monthsDecl[props.date.getMonth()];
  const date = props.date.getDate();
  const day = props.date.getDay();
  const dates = getDates(props.date);

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{days[day]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date}</div>
          <div className="ui-datepicker-material-month">{monthDecl}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month}</span>&nbsp;
          <span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col className="ui-datepicker-week-end"></col>
          <col className="ui-datepicker-week-end"></col>
        </colgroup>
        <thead>
          <tr>
            <th
              scope="col"
              title="Понедельник"
            >
              Пн
            </th>
            <th
              scope="col"
              title="Вторник"
            >
              Вт
            </th>
            <th
              scope="col"
              title="Среда"
            >
              Ср
            </th>
            <th
              scope="col"
              title="Четверг"
            >
              Чт
            </th>
            <th
              scope="col"
              title="Пятница"
            >
              Пт
            </th>
            <th
              scope="col"
              title="Суббота"
            >
              Сб
            </th>
            <th
              scope="col"
              title="Воскресенье"
            >
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={getClass(0, dates, date)}>{dates[0]}</td>
            <td className={getClass(1, dates, date)}>{dates[1]}</td>
            <td className={getClass(2, dates, date)}>{dates[2]}</td>
            <td className={getClass(3, dates, date)}>{dates[3]}</td>
            <td className={getClass(4, dates, date)}>{dates[4]}</td>
            <td className={getClass(5, dates, date)}>{dates[5]}</td>
            <td className={getClass(6, dates, date)}>{dates[6]}</td>
          </tr>
          <tr>
            <td className={getClass(7, dates, date)}>{dates[7]}</td>
            <td className={getClass(8, dates, date)}>{dates[8]}</td>
            <td className={getClass(9, dates, date)}>{dates[9]}</td>
            <td className={getClass(10, dates, date)}>{dates[10]}</td>
            <td className={getClass(11, dates, date)}>{dates[11]}</td>
            <td className={getClass(12, dates, date)}>{dates[12]}</td>
            <td className={getClass(13, dates, date)}>{dates[13]}</td>
          </tr>
          <tr>
            <td className={getClass(14, dates, date)}>{dates[14]}</td>
            <td className={getClass(15, dates, date)}>{dates[15]}</td>
            <td className={getClass(16, dates, date)}>{dates[16]}</td>
            <td className={getClass(17, dates, date)}>{dates[17]}</td>
            <td className={getClass(18, dates, date)}>{dates[18]}</td>
            <td className={getClass(19, dates, date)}>{dates[19]}</td>
            <td className={getClass(20, dates, date)}>{dates[20]}</td>
          </tr>
          <tr>
            <td className={getClass(21, dates, date)}>{dates[21]}</td>
            <td className={getClass(22, dates, date)}>{dates[22]}</td>
            <td className={getClass(23, dates, date)}>{dates[23]}</td>
            <td className={getClass(24, dates, date)}>{dates[24]}</td>
            <td className={getClass(25, dates, date)}>{dates[25]}</td>
            <td className={getClass(26, dates, date)}>{dates[26]}</td>
            <td className={getClass(27, dates, date)}>{dates[27]}</td>
          </tr>
          <tr>
            <td className={getClass(28, dates, date)}>{dates[28]}</td>
            <td className={getClass(29, dates, date)}>{dates[29]}</td>
            <td className={getClass(30, dates, date)}>{dates[30]}</td>
            <td className={getClass(31, dates, date)}>{dates[31]}</td>
            <td className={getClass(32, dates, date)}>{dates[32]}</td>
            <td className={getClass(33, dates, date)}>{dates[33]}</td>
            <td className={getClass(34, dates, date)}>{dates[34]}</td>
          </tr>
          <tr>
            <td className={getClass(35, dates, date)}>{dates[35]}</td>
            <td className={getClass(36, dates, date)}>{dates[36]}</td>
            <td className={getClass(37, dates, date)}>{dates[37]}</td>
            <td className={getClass(38, dates, date)}>{dates[38]}</td>
            <td className={getClass(39, dates, date)}>{dates[39]}</td>
            <td className={getClass(40, dates, date)}>{dates[40]}</td>
            <td className={getClass(41, dates, date)}>{dates[41]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function getDates(selectedDate) {
  const dates = [];
  const date = selectedDate.getDate();
  const month = selectedDate.getMonth();
  const year = selectedDate.getFullYear();
  const daysInMonths = getDaysInMonths(year);
  const day = selectedDate.getDay();
  const resid = (date % 7) - 7;
  const dayMonthStart = (day - resid) % 7;
  const prevMonth = month > 0 ? month - 1 : 11;
  for (let i = 0; i < dayMonthStart; i += 1) {
    dates.push(daysInMonths[prevMonth] - dayMonthStart + i + 1);
  }
  for (let i = 0; i < daysInMonths[month]; i += 1) {
    dates.push(i + 1);
  }
  const remainingDays = 42 - dates.length + 1;
  for (let i = 0; i < remainingDays; i += 1) {
    dates.push(i + 1);
  }

  return dates;
}

function isYearLeap(year) {
  return (year % 4 === 0 || year % 100 === 0) && year % 400 !== 0;
}

function getDaysInMonths(year) {
  return [
    31,
    isYearLeap(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
}

function getClass(index, dates, date) {
  if (index < 7 && dates[index] > 7) {
    return "ui-datepicker-other-month";
  }
  if (index > 28 && dates[index] < 14) {
    return "ui-datepicker-other-month";
  }
  if (dates[index] === date ) {
    return "ui-datepicker-today";
  }
  return "";
}

Calendar.propTypes = {
  date: PropTypes.object,
};
