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
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

export function Calendar(props) {
  console.log(props);
  const year = props.date.getFullYear();

  const month = months[props.date.getMonth() + 1];
  const monthDecl = monthsDecl[props.date.getMonth() + 1];
  const date = props.date.getDate();
  const day = props.date.getDay();
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{days[day - 1]}</div>
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
            <td className="ui-datepicker-other-month">27</td>
            <td className="ui-datepicker-other-month">28</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td className="ui-datepicker-today">8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td className="ui-datepicker-today">8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td className="ui-datepicker-today">8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Calendar.propTypes = {
  date: PropTypes.object,
};
