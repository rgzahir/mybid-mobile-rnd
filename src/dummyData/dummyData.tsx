type TCredentialType = "nric" | "passport" | "certificate" | "transcript";

interface IPassport {
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

// type TData = [{}];

export const CredentialFilter: string[] = [
  "All",
  "Basic",
  "Education",
  "Finance",
];

export const CredentialDataOne: IPassport = {
  credentialId: 1,
  credentialType: "passport",
  credentialName: "International Passport",
  credentialProvider: "Malaysia",
  fullName: "Joey Chan Chan Chan Chan Chan Chan ",
  isShown: false,
  UpdateIsShown() {
    this.isShown = !this.isShown;
    console.log("UpdateIsShown invoked !");
  },
  lastUpdated: "date string?",
  nationality: "Malaysia",
  profilePicture: require("../media/Avatar.png"),
  passportNumber: "B234 4152 551",
  qrCode: require("../media/Group.png"),
  category: "Basic",
};

export const CredentialDataTwo: IPassport = {
  credentialId: 2,
  credentialType: "certificate",
  credentialName: "Graduation Certificate",
  credentialProvider: "USCI University",
  dateOfIssue: "date string",
  fullName: "Bachelor of Arts (Hons) in Business Administration",
  isShown: false,
  UpdateIsShown() {
    this.isShown = !this.isShown;
    console.log("UpdateIsShown invoked !");
  },
  lastUpdated: "date string?",
  profilePicture: require("../media/usci_logo.png"),
  qrCode: require("../media/Group.png"),
  category: "Education",
};

export const CredentialDataThree: IPassport = {
  credentialId: 3,
  credentialType: "passport",
  credentialName: "International Passport",
  credentialProvider: "Japan",
  fullName: "Nobita Chan Chan Chan",
  isShown: false,
  UpdateIsShown() {
    this.isShown = !this.isShown;
    console.log("UpdateIsShown invoked !");
  },
  lastUpdated: "date string?",
  nationality: "Japan",
  profilePicture: "",
  passportNumber: "B234 4152 551",
  qrCode: require("../media/Group.png"),
  category: "Basic",
};

export const CredentialDataFour: IPassport = {
  credentialId: 3,
  credentialType: "passport",
  credentialName: "International Passport",
  credentialProvider: "Japan",
  fullName: "Nobita Chan Chan Chan",
  isShown: false,
  UpdateIsShown() {
    this.isShown = !this.isShown;
    console.log("UpdateIsShown invoked !");
  },
  lastUpdated: "date string?",
  nationality: "Japan",
  profilePicture: "",
  passportNumber: "B234 4152 551",
  qrCode: require("../media/Group.png"),
  category: "Basic",
};

export const CredentialDataFive: IPassport = {
  credentialId: 3,
  credentialType: "passport",
  credentialName: "International Passport",
  credentialProvider: "Japan",
  fullName: "Nobita Chan Chan Chan",
  isShown: false,
  UpdateIsShown() {
    this.isShown = !this.isShown;
    console.log("UpdateIsShown invoked !");
  },
  lastUpdated: "date string?",
  nationality: "Japan",
  profilePicture: "",
  passportNumber: "B234 4152 551",
  qrCode: require("../media/Group.png"),
  category: "Basic",
};

export const CredentialDataSix: IPassport = {
  credentialId: 3,
  credentialType: "passport",
  credentialName: "International Passport",
  credentialProvider: "Japan",
  fullName: "Nobita Chan Chan Chan",
  isShown: false,
  UpdateIsShown() {
    this.isShown = !this.isShown;
    console.log("UpdateIsShown invoked !");
  },
  lastUpdated: "date string?",
  nationality: "Japan",
  profilePicture: "",
  passportNumber: "B234 4152 551",
  qrCode: require("../media/Group.png"),
  category: "Basic",
};

export const DummyDataArray = [
  { ...CredentialDataOne },
  { ...CredentialDataTwo },
  { ...CredentialDataThree },
  { ...CredentialDataFour },
  { ...CredentialDataFive },
  { ...CredentialDataSix },
];
