import React from 'react';
import { ScreenName } from '../constants/screen.constants';

export interface INavScreen {
  name: ScreenName;
  params?: object;
  component: (props: any) => React.JSX.Element;
  auth: boolean | null;
  options?: object;
}
