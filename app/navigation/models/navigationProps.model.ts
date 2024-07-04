import { ParamListBase } from "@react-navigation/native";
import { NativeStackHeaderProps, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenName } from "../constants/screen.constants";

export type ProductScreenNavigationProp = NativeStackNavigationProp<ParamListBase,  ScreenName.PRODUCTS>;
export type ProductDetailScreenNavigationProp = NativeStackNavigationProp<ParamListBase,  ScreenName.PRODUCT_DETAIL>;
export type RegisterScreenNavigationProp = NativeStackNavigationProp<ParamListBase,  ScreenName.REGISTER_PRODUCT>;
