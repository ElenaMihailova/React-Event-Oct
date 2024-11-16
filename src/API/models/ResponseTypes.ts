export interface UserCredentials {
  login: string;
  password: string;
}

export interface AuthResponse {
  auth: boolean;
  token: string;
}

export type FavoritesList = string[];

export interface AddToFavouritesResponse {
  requestId: string;
}

interface Location {
  latitude: number;
  longitude: number;
  district: string;
  city: string;
}

interface Education {
  organizationName: string;
  level: string;
  specialization: string;
  graduationYear: number;
}

interface SocialContacts {
  telegram?: string;
  whatsapp?: string;
  vk?: string;
}

interface Contacts {
  email: string;
  phone: string;
  social: SocialContacts;
}

export interface UserInfo {
  id: string;
  name: string;
  lastName: string;
  birthdate: string;
  status: string;
  baseLocations: Location[];
  educations: Education[];
  additionalInfo?: string;
  contacts: Contacts;
  favouriteRequests: string[];
}

interface Location {
  latitude: number;
  longitude: number;
  district: string;
  city: string;
}

interface Contacts {
  email: string;
  phone: string;
  website: string;
}

export interface RequestDetails {
  id: string;
  title: string;
  organization: {
    title: string;
    isVerified: boolean;
  };
  description: string;
  goalDescription: string;
  actionsSchedule: Array<{
    stepLabel: string;
    isDone?: boolean;
  }>;
  endingDate: Date;
  location: {
    latitude: number;
    longitude: number;
    district: string;
    city: string;
  };
  contacts: {
    email: string;
    phone: string;
    website: string;
  };
  requesterType: "person" | "organization";
  helpType: "finance" | "material";
  helperRequirements: {
    helperType: "group" | "single";
    isOnline: boolean;
    qualification: "professional" | "common";
  };
  contributorsCount: number;
  requestGoal: number;
  requestGoalCurrentValue: number;
  collectedAmount: number;
  targetAmount: number;
}
