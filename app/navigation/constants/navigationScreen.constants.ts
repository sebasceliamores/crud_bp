import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ProductScreen from '../../screens/ProductSreen/ProductScreen';
import ProductDetail from '../../screens/ProductSreen/components/ProductDetail/ProductDetail';
import {INavScreen} from '../models/navScreen.model';
import {ScreenName} from './screen.constants';

export const screenConfig: Array<INavScreen> = [
  {
    name: ScreenName.HOME,
    component: HomeScreen,
    auth: true,
    params: undefined,
  },
  {
    name: ScreenName.PRODUCTS,
    component: ProductScreen,
    auth: true,
  },
  {
    name: ScreenName.PRODUCT_DETAIL,
    component: ProductDetail,
    auth: true,
  }
];
