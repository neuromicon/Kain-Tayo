export interface Partner {
  id: string;
  timestamp?: string;
  email?: string;
  businessName: string;
  locationLink?: string;
  facebookPage?: string;
  googleMapsLink?: string;
  contactPerson: string;
  contactNumber: string;
  typeOfEstablishment?: string;
  isApproved: boolean; // Column L in Google Sheet: must be TRUE
  notes?: string;
}
