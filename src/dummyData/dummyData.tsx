type TCredentialType = 'nric' | 'passport' | 'certificate' | 'transcript';

interface IPassport {
  credentialId: number;
  credentialType: TCredentialType;
  credentialName: string;
  credentialProvider: string;
  profilePicture: string;
  fullName: string;
  nationality?: string;
  passportNumber?: string;
  dateOfIssue?: string;
  qrCode: string;
  lastUpdated?: string;
  isShown: boolean;
  UpdateIsShown: Function;
}

// type TData = [{}];

export const CredentialFilter: string[] = [
  'All',
  'Basic',
  'Education',
  'Finance',
];

export const CredentialDataOne: IPassport = {
  credentialId: 1,
  credentialType: 'passport',
  credentialName: 'International Passport',
  credentialProvider: 'Malaysia',
  fullName: 'Joey Chan Chan Chan',
  isShown: false,
  UpdateIsShown() {
    this.isShown = !this.isShown;
    console.log('UpdateIsShown invoked !');
  },
  lastUpdated: 'date string?',
  nationality: 'Malaysia',
  profilePicture: 'url',
  passportNumber: 'B234 4152 551',
  qrCode: 'url',
};

export const CredentialDataTwo: IPassport = {
  credentialId: 2,
  credentialType: 'certificate',
  credentialName: 'Graduation Certificate',
  credentialProvider: 'USCI University',
  dateOfIssue: 'date string',
  fullName: 'Bachelor of Arts (Hons) in Business Administration',
  isShown: false,
  UpdateIsShown() {
    this.isShown = !this.isShown;
    console.log('UpdateIsShown invoked !');
  },
  lastUpdated: 'date string?',
  profilePicture: 'url',
  qrCode: 'url',
};

// export const DataArray: TData = [
//   {...CredentialDataOne},
//   {...CredentialDataTwo},
// ];
