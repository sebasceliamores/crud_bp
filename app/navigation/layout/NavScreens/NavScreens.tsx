import { StackNavigator } from "../../../../App";
import { screenConfig } from "../../constants/navigationScreen.constants";
import { INavScreen } from "../../models/navScreen.model";

export const getScreens = (isAuthenticated: boolean): Array<React.JSX.Element | null> => {
    return screenConfig.map((screen: INavScreen, index: number): React.JSX.Element | null => {
      if (!screen.auth || screen.auth === isAuthenticated)
        return (
          <StackNavigator.Screen
            name={screen.name}
            component={screen.component}
            initialParams={screen.params}
            options={screen.options}
            key={`${index}-${screen.name}`}
          />
        );
  
      return null;
    });
  };