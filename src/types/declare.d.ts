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

declare type TInputAreaProps = {
  label?: string;
  onChangeText?: Function;
  onBlur?: Function;
  placeholder?: string;
  secureTextEntry?: boolean;
  value?: string;
};

declare type TLoginFormComponent = {
  // navigation?: NavigatorScreenParams<any, any> | undefined;
  passToggle?: boolean;
  setPassToggle?: Function;
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
