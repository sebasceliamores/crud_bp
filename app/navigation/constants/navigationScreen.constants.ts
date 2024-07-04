import ProductScreen from '../../screens/ProductSreen/ProductScreen';
import ProductDetail from '../../screens/ProductSreen/components/ProductDetail/ProductDetail';
import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen';
import {INavScreen} from '../models/navScreen.model';
import {ScreenName} from './screen.constants';

export const screenConfig: Array<INavScreen> = [
  {
    name: ScreenName.PRODUCTS,
    component: ProductScreen,
    auth: true,
  },
  {
    name: ScreenName.PRODUCT_DETAIL,
    component: ProductDetail,
    auth: true,
  },
  {
    name: ScreenName.REGISTER_PRODUCT,
    component: RegisterScreen,
    auth: true,
  }
];
