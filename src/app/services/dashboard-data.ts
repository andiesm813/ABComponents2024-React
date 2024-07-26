import { FetchApi } from './fetch-api';
import { TeamGrowthType } from '../models/DashboardData/team-growth-type';

export async function getTeamGrowthList(): Promise<TeamGrowthType[]> {
  return await FetchApi.fetchApiResponse<TeamGrowthType[]>('https://excel2json.io/api/share/9d362c81-e18a-4fff-4355-08da496bf5f2', []);
}
