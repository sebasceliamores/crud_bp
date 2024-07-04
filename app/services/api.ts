// import { IDeviceAuthentication } from "@common-login/models/device-authentication.model";
// import { IJWTToken } from "@common-login/models/jwt-token.model";
// import { ITrackError } from "@core/TrackError/model/track-error.model";
// import { MOBILE_APP_NAME } from "@shared/constants/global.constants";
// import { MMKVStorage } from "@store/mmkv-storage";
// import apisauce, { ApiResponse, ApisauceInstance } from "apisauce";
// import { IPinCodeSearch } from "@common-admin/model/pincode-search.model";
// import { ICustomFile } from "@app/commonFeatures/DownloadFiles/model/references";
// import { callGetImages } from "./download-files.api";
// import { IKpQueueSettings, IKpQueueStation } from "@models/kp-queue-settings.model";

// export interface API {
// }

// const create = (baseURL = ""): API => {
//   const api: ApisauceInstance = apisauce.create({
//     baseURL,
//     headers: {
//       "Cache-Control": "no-cache",
//     },
//     timeout: 10000,
//   });

//   const setBaseURL = (serverUrl: string): void => {
//     api.setBaseURL(serverUrl);
//   };

//   const setAuthToken = (authToken: string): Promise<void> => {
//     return new Promise(resolve => {
//       const tokens: { authToken: string } = {
//         authToken,
//       };
//       MMKVStorage.setItem("@PerfectKpQueue:tokens", JSON.stringify(tokens));
//       (global as any).authToken = authToken;
//       api.setHeader("CustomerTypeCode", "DEFAULT");
//       api.setHeader("Authorization", "Bearer " + authToken);
//       resolve();
//     });
//   };

//   const removeAuthToken = (): Promise<void> => {
//     return new Promise(resolve => {
//       MMKVStorage.removeItem("@PerfectKpQueue:tokens");
//       (global as any).authToken = null;
//       api.deleteHeader("CustomerTypeCode");
//       api.deleteHeader("Authorization");
//       resolve();
//     });
//   };

//   const autoLogin = (deviceAuth: IDeviceAuthentication) =>
//     api.post<IJWTToken>("api/authenticate-mobile/auto-login/kp-queue", deviceAuth);

//   const getStation = () => api.get<IKpQueueStation>("api/station/kpqueue");

//   const getSettingsByUserLogged = () => api.get<IKpQueueSettings>("api/perfect-kp-queue-settings/all/by-device");

//   const sendLoggingSupport = (loggingSupportFiles: FormData) =>
//     api.put("api/logging-support", loggingSupportFiles, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });

//   const getAllEsperApiKeys = () => api.get<string[]>("api/external/all-esper-api-keys");

//   const validatePinCode = (pinCodeSearch: IPinCodeSearch) =>
//     api.post<IPinCodeSearch>("api/external/organizations/validate-pin-code", pinCodeSearch);

//   const getPinCode = () => api.post<IPinCodeSearch>("api/organizations/get-pin-code");

//   const sendTrackError = (errors: Array<ITrackError>) =>
//     api.post<Array<string>>("api/external/send-exception-mobile-email/by-mobile-app", {
//       exceptionList: errors,
//       mobileAppName: MOBILE_APP_NAME,
//     });

//   const getImages = async (customFile: ICustomFile, filePath: string) => callGetImages(customFile, filePath, api);

//   const updateIpAddress = (stationMobileInfoDTO: IStationMobileInfo) =>
//     api.post<void>("api/station/update-ip-address", stationMobileInfoDTO);

//   return {
//   };
// };

// export default {
//   create,
// };
