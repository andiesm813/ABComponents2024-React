import { redirect } from 'react-router-dom';
import AllComponents from './all-components/all-components';
import AvatarsImages from './avatars-images/avatars-images';
import Calendar from './calendar/calendar';
import Cards from './cards/cards';
import Charts from './charts/charts';
import Forms from './forms/forms';
import Lists from './lists/lists';
import MouseEvents from './mouse-events/mouse-events';
import Radiogroup from './radiogroup/radiogroup';
import Stepper from './stepper/stepper';
export const routes = [
  { index: true, loader: () => redirect('all-components') },
  { path: 'all-components', element: <AllComponents />, text: 'AllComponents' },
  { path: 'avatars-images', element: <AvatarsImages />, text: 'Avatars-Images' },
  { path: 'calendar', element: <Calendar />, text: 'Calendar' },
  { path: 'cards', element: <Cards />, text: 'Cards' },
  { path: 'charts', element: <Charts />, text: 'Charts' },
  { path: 'forms', element: <Forms />, text: 'Forms' },
  { path: 'lists', element: <Lists />, text: 'Lists' },
  { path: 'mouse-events', element: <MouseEvents />, text: 'Mouse Events' },
  { path: 'radiogroup', element: <Radiogroup />, text: 'Radiogroup' },
  { path: 'stepper', element: <Stepper />, text: 'Stepper' }
];
