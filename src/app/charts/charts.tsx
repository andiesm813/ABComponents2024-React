import { IgrCategoryChart, IgrCategoryChartModule } from '@infragistics/igniteui-react-charts';
import { useGetTeamGrowthList } from '../hooks/dashboard-data-hooks';
import styles from './charts.module.css';
import createClassTransformer from '../style-utils';

IgrCategoryChartModule.register();

export default function Charts() {
  const classes = createClassTransformer(styles);
  const { dashboardDataTeamGrowth } = useGetTeamGrowthList();

  return (
    <>
      <div className={classes("column-layout charts-container")}>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__subtitle-2 text")}>
            <span>Chart With Default Palette</span>
          </p>
          <div className={classes("group_1")}>
            <IgrCategoryChart dataSource={dashboardDataTeamGrowth} chartType="Area" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
          </div>
          <p className={classes("typography__subtitle-2 text")}>
            <span>Chart With Custom Palette</span>
          </p>
          <div className={classes("group_1")}>
            <IgrCategoryChart dataSource={dashboardDataTeamGrowth} chartType="Area" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
          </div>
        </div>
      </div>
    </>
  );
}
