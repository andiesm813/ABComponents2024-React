import { redirect } from 'react-router-dom';
import AllComponents from './all-components/all-components';
import AvatarsImages from './avatars-images/avatars-images';
import Calendar from './calendar/calendar';
import Forms from './forms/forms';
import Radiogroup from './radiogroup/radiogroup';
import Stepper from './stepper/stepper';
export const routes = [
  { index: true, loader: () => redirect('all-components') },
  { path: 'all-components', element: <AllComponents />, text: 'AllComponents' },
  { path: 'avatars-images', element: <AvatarsImages />, text: 'Avatars-Images' },
  { path: 'calendar', element: <Calendar />, text: 'Calendar' },
  { path: 'forms', element: <Forms />, text: 'Forms' },
  { path: 'radiogroup', element: <Radiogroup />, text: 'Radiogroup' },
  { path: 'stepper', element: <Stepper />, text: 'Stepper' }
];
