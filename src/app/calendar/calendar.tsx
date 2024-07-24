import { IgrCalendar, IgrCalendarModule } from '@infragistics/igniteui-react';
import { useState } from 'react';
import styles from './calendar.module.css';
import createClassTransformer from '../style-utils';

IgrCalendarModule.register();

export default function Calendar() {
  const classes = createClassTransformer(styles);
  const [value, setValue] = useState<Date | undefined>(new Date('2024-07-23T00:00'));

  return (
    <>
      <div className={classes("row-layout calendar-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <p className={classes("typography__subtitle-2 text")}>
              <span>No selected date</span>
            </p>
            <IgrCalendar hideHeader="Horizontal" headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
          </div>
          <div className={classes("column-layout group_1")}>
            <p className={classes("typography__subtitle-2 text")}>
              <span>With selected date</span>
            </p>
            <IgrCalendar hideHeader="Horizontal" headerOrientation="horizontal" value={value} change={(_c, e) => setValue(e.detail)} className={classes("calendar")}></IgrCalendar>
          </div>
        </div>
      </div>
    </>
  );
}
