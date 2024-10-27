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

interface Organization {
  title: string;
  isVerified: boolean;
}

interface ActionSchedule {
  stepLabel: string;
  isDone: boolean;
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

interface HelperRequirements {
  helperType: string;
  isOnline: boolean;
  qualification: string;
}

export interface RequestDetails {
  id: string;
  title: string;
  organization: Organization;
  description: string;
  goalDescription: string;
  actionsSchedule: ActionSchedule[];
  endingDate: string;
  location: Location;
  contacts: Contacts;
  requesterType: string;
  helpType: string;
  helperRequirements: HelperRequirements;
  contributorsCount: number;
  requestGoal: number;
  requestGoalCurrentValue: number;
}
