declare type TCredentialType =
  | "nric"
  | "passport"
  | "certificate"
  | "transcript";

declare interface IPassport {
  credentialId: number;
  credentialType: TCredentialType;
  credentialName: string;
  credentialProvider: string;
  fullName: string;
  isShown: boolean;
  profilePicture: string;
  qrCode: string;
  UpdateIsShown: Function;
  category?: "All" | "Basic" | "Education" | "Finance";
  dateOfIssue?: string;
  lastUpdated?: string;
  nationality?: string;
  passportNumber?: string;
}

declare interface IProfile {
  userId: number | undefined;
  userEmail: string | undefined;
  userIdentification: number | undefined;
  userFirstName: string | undefined;
  userLastName: string | undefined;
  userNationality: string | undefined;
  userProfilePicture: string | undefined;
  userFullName?: string | undefined;
  userNotifications?: number | undefined;
}

declare interface IUserBasics {
  basicsProgress: number;
  identifyProgress: number;
  financeProgress: number;
  educationProgress: number;
  isComplete: boolean;
}

declare type TAvailableCredentialFilterProps = {
  currentFilter: string;
  setCurrentFilter: Function;
};

declare type TBaseModalProps = {
  Detail: any;
  indicator: boolean;
  setIndicator: any;
  pushNextModalFunction?: any;
  pushNextModalFunction_1?: any;
};

// TBackButtonProps && TGeneralButtonProps is the same
// and maybe TSquareButtonProps, TSTextButtonCenterProps too
declare type TBackButtonProps = {
  label: string;
  fontColor?: string;
  icon?: "" | any;
  iconColor?: string;
  message?: string;
  marginTop?: string | number;
  onPressHandler?: any;
};

declare type TCredentialDetailModalProps = {
  indicator: boolean;
  setIndicator: any;
  pushNextModalFunction?: any;
  pushNextModalFunction_1?: any;
};

declare type TCredentialCardProps = {
  isShownLocal: boolean;
  setIsShownLocal: Function;
  checkCredentialType?: any;
  data?: any;
  showQR?: boolean;
  setShowQR?: Function;
  showVerifyModal: boolean;
  setShowVerifyModal: any;
  showDetailModal: boolean;
  setShowDetailModal: any;
  showQRModal: boolean;
  setShowQRModal: any;
};

declare type TCredentialCardFooterProps = {
  data?: any;
  showQR?: boolean;
  setShowQR?: any;
  showDetailModal: boolean;
  setShowDetailModal: any;
  showQRModal: boolean;
  setShowQRModal: any;
};

declare type TCredentialListProps = {
  currentFilter: string;
  showVerifyModal: boolean;
  setShowVerifyModal: any;
  showDetailModal: boolean;
  setShowDetailModal: any;
  showQRModal: boolean;
  setShowQRModal: any;
};

declare type TCredentialCardHeaderProps = {
  data?: any;
  isShownLocal?: boolean;
  setIsShownLocal?: any; //fx
};

declare type TCheckActiveFilterProps = {
  item: any;
  currentFilter: any;
};

declare type TDataCredentialCertificateProps = {
  data?: any;
  showQR?: boolean;
  setShowQR?: any;
};

declare type TDataCredentialPassportProps = {
  data?: any;
  showQR?: boolean;
  setShowQR?: any;
};

declare type TGeneralButtonProps = {
  label: string;
  backgroundColor?: string;
  fontColor?: string;
  icon?: "" | any;
  message?: string;
  marginTop?: string | number;
  onPressHandler?: any;
};

declare interface THighlightItem {
  icon: string;
  log: string;
  timestamp: Date; //date
}

declare type TIconButtonProps = {
  disabledPress?: boolean;
  color?: string;
  message?: string;
  name?: string;
  onPressHandler?: any;
  size?: number;
};

declare type TIconSwitchButtonProps = {
  disabledPress?: boolean;
  color?: string;
  color_2?: string;
  message?: string;
  name?: string;
  name_2?: string;
  onPressHandler?: any;
  size?: number;
  state?: boolean;
};

declare type TMoreDetailsButtonProps = {
  disabledPress?: boolean;
  color?: string;
  message?: string;
  label?: string;
  name_icon?: string;
  onPressHandler?: any;
  size?: number;
};

declare type TInputAreaProps = {
  label?: string;
  icon?: any;
  onChangeText?: any;
  onBlur?: any;
  placeholder?: string;
  secureTextEntry?: boolean;
  value?: string;
};

declare type TLoginFormComponent = {
  // navigation?: NavigatorScreenParams<any, any> | undefined;
  passToggle?: boolean;
  setPassToggle?: any;
  updateToggleFunction?: any;
};

declare type TLoginDetailPageProps = {
  // navigation?: NavigatorScreenParams<any, any> | undefined;
};

declare type TModalProps = {
  indicator: boolean;
  setIndicator: any;
  pushNextModalFunction?: any;
  pushNextModalFunction_1?: any;
};

declare type TQRCredentialProps = {
  data?: any;
  showQR?: boolean;
  setShowQR?: any;
  showVerifyModal: boolean;
  setShowVerifyModal: any;
};

declare type TSquareButtonProps = {
  label: string;
  backgroundColor?: string;
  fontColor?: string;
  icon?: "" | any;
  message?: string;
  onPressHandler?: any;
};

declare type TTextButtonCenterProps = {
  label: string;
  color?: string;
  icon?: "" | any;
  message?: string;
  onPressHandler?: any;
};

declare type TTextItem_1Props = {
  subTitle: string;
  subText: string;
};

declare type TTextItem_2Props = {
  subTitle: string;
  subText: string;
  color_1?: string;
  color_2?: string;
  width?: string | number;
};

declare interface TUserProgress {
  user: string;
  currentProgress: number;
  isComplete: boolean;
}
