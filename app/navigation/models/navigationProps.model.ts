import { ParamListBase } from "@react-navigation/native";
import { NativeStackHeaderProps, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenName } from "../constants/screen.constants";

export type HomeScreenNavigationProp = NativeStackNavigationProp<ParamListBase,  ScreenName.HOME>;
export type ProductScreenNavigationProp = NativeStackNavigationProp<ParamListBase,  ScreenName.PRODUCTS>;
export type ProductDetailScreenNavigationProp = NativeStackNavigationProp<ParamListBase,  ScreenName.PRODUCT_DETAIL>;
