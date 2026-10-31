export interface Partner {
  id: string;
  timestamp?: string;
  email?: string;
  businessName: string;
  name?: string;
  locationLink?: string;
  address?: string;
  area?: string;
  landmark?: string;
  facebookPage?: string;
  googleMapsLink?: string;
  contactPerson: string;
  contactNumber?: string;
  phone?: string;
  pricePerCup?: number;
  operatingHours?: string;
  typeOfEstablishment?: string;
  status?: string;
  isApproved: boolean; // Column L in Google Sheet: must be TRUE
  notes?: string;
}
