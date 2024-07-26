import { useCallback, useEffect, useState } from 'react';
import { getTeamGrowthList } from '../services/dashboard-data';
import { TeamGrowthType } from '../models/DashboardData/team-growth-type';

export const useGetTeamGrowthList = () => {
  const [teamGrowth, setTeamGrowth] = useState<TeamGrowthType[]>([]);

  const requestTeamGrowth = useCallback(() => {
    let ignore = false;
    getTeamGrowthList()
      .then((data) => {
        if (!ignore) {
          setTeamGrowth(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestTeamGrowth();
  }, [requestTeamGrowth]);

  return { requestDashboardDataTeamGrowth: requestTeamGrowth, dashboardDataTeamGrowth: teamGrowth, setDashboardDataTeamGrowth: setTeamGrowth };
}
