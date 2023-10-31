declare type TCredentialType =
  | "nric"
  | "passport"
  | "certificate"
  | "transcript";

declare type TPoppinsFont =
  | "Poppins-Bold"
  | "Poppins-SemiBold"
  | "Poppins-Medium"
  | "Poppins-Regular";

declare interface ICheckActiveFilterProps {
  (currentFilter: string, item: string): object;
}
declare interface IAvailableCredentialFilterProps {
  currentFilter: string;
  setCurrentFilter: Function;
  // (currentFilter: string, setCurrentFilter: Function): JSX.Element;
}
declare interface IPassport {
  category?: "All" | "Basic" | "Education" | "Finance";
  credentialId: number;
  credentialName: string;
  credentialProvider: string;
  credentialType: TCredentialType;
  dateOfIssue?: string;
  fullName: string;
  isShown: boolean;
  lastUpdated?: string;
  nationality?: string;
  passportNumber?: string;
  profilePicture: string;
  qrCode: string;
  UpdateIsShown: Function;
}

declare interface IProfile {
  userEmail: string | undefined;
  userFirstName: string | undefined;
  userFullName?: string | undefined;
  userId: number | undefined;
  userIdentification: number | undefined;
  userLastName: string | undefined;
  userNationality: string | undefined;
  userNotifications?: number | undefined;
  userProfilePicture: string | undefined;
}

declare interface IUserBasics {
  basicsProgress: number;
  educationProgress: number;
  financeProgress: number;
  identifyProgress: number;
  isComplete: boolean;
}

declare interface IBackButtonProps {
  fontColor?: string;
  icon?: "" | any;
  iconColor?: string;
  label: string;
  marginTop?: string | number;
  message?: string;
  onPressHandler?: any;
}

declare type TAvailableCredentialFilterProps = {
  currentFilter: string;
  setCurrentFilter: Function;
};

declare type TBaseModalProps = {
  Detail: any;
  indicator: boolean;
  pushNextModalFunction_1?: any;
  pushNextModalFunction?: any;
  setIndicator: any;
};

// TBackButtonProps && TGeneralButtonProps is the same
// and maybe TSquareButtonProps, TSTextButtonCenterProps too
declare type TBackButtonProps = {
  fontColor?: string;
  icon?: "" | any;
  iconColor?: string;
  label: string;
  marginTop?: string | number;
  message?: string;
  onPressHandler?: any;
};

declare type IButtonSliderProps = {
  onCompletedHandler: any;
};

declare type TCredentialDetailModalProps = {
  indicator: boolean;
  pushNextModalFunction_1?: any;
  pushNextModalFunction?: any;
  setIndicator: any;
};

declare type TCredentialCardProps = {
  checkCredentialType?: any;
  data?: any;
  isShownLocal: boolean;
  setIsShownLocal: Function;
  setShowDetailModal: any;
  setShowQR?: Function;
  setShowQRModal: any;
  setShowVerifyModal: any;
  showDetailModal: boolean;
  showQR?: boolean;
  showQRModal: boolean;
  showVerifyModal: boolean;
};

declare type TCredentialCardFooterProps = {
  data?: any;
  setShowDetailModal: any;
  setShowQR?: any;
  setShowQRModal: any;
  showDetailModal: boolean;
  showQR?: boolean;
  showQRModal: boolean;
};

declare type TCredentialListProps = {
  currentFilter: string;
  setShowDetailModal: any;
  setShowQRModal: any;
  setShowVerifyModal: any;
  showDetailModal: boolean;
  showQRModal: boolean;
  showVerifyModal: boolean;
};

declare type TCredentialCardHeaderProps = {
  data?: any;
  isShownLocal?: boolean;
  setIsShownLocal?: any; //fx
};

declare type TCheckActiveFilterProps = {
  currentFilter: any;
  item: any;
};

declare type TDataCredentialCertificateProps = {
  data?: any;
  setShowQR?: any;
  showQR?: boolean;
};

declare type TDataCredentialPassportProps = {
  data?: any;
  setShowQR?: any;
  showQR?: boolean;
};

declare type TGeneralButtonProps = {
  backgroundColor?: string;
  fontColor?: string;
  icon?: "" | any;
  label: string;
  marginTop?: string | number;
  message?: string;
  onPressHandler?: any;
};

declare interface THighlightItem {
  icon: string;
  log: string;
  timestamp: Date; //date
}

declare type TIconButtonProps = {
  color?: string;
  disabledPress?: boolean;
  message?: string;
  name?: string;
  onPressHandler?: any;
  size?: number;
};

declare type TIconSwitchButtonProps = {
  color_2?: string;
  color?: string;
  disabledPress?: boolean;
  message?: string;
  name_2?: string;
  name?: string;
  onPressHandler?: any;
  size?: number;
  state?: boolean;
};

declare type TMoreDetailsButtonProps = {
  color?: string;
  disabledPress?: boolean;
  label?: string;
  message?: string;
  name_icon?: string;
  onPressHandler?: any;
  size?: number;
};

declare type TInputAreaProps = {
  icon?: any;
  keyboardType?: string;
  label?: string;
  onBlur?: any;
  onChangeText?: any;
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
  pushNextModalFunction_1?: any;
  pushNextModalFunction?: any;
  setIndicator: any;
};

declare type TQRCredentialProps = {
  data?: any;
  setShowQR?: any;
  setShowVerifyModal: any;
  showQR?: boolean;
  showVerifyModal: boolean;
};

declare type TSquareButtonProps = {
  backgroundColor?: string;
  fontColor?: string;
  icon?: "" | any;
  label: string;
  message?: string;
  onPressHandler?: any;
};

declare type TTextButtonCenterProps = {
  color?: string;
  disabledHandler?: boolean;
  icon?: "" | any;
  label: string;
  message?: string;
  onPressHandler?: any;
};

declare type TTextItem_1Props = {
  subText: string;
  subTitle: string;
};

declare type TTextItem_2Props = {
  color_1?: string;
  color_2?: string;
  subText: string;
  subTitle: string;
  width?: string | number;
};

declare interface TUserProgress {
  currentProgress: number;
  isComplete: boolean;
  user: string;
}
