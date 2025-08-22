export const tamilNaduDistricts = [
  "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
  "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Karur", "Krishnagiri",
  "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur",
  "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi",
  "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupattur",
  "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram",
  "Virudhunagar", "Kanyakumari"
];

export const bloodGroups = [
  "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"
];

export interface Donor {
  id: string;
  name: string;
  age: number;
  bloodGroup: string;
  district: string;
  lastDonated: string;
  phone: string;
  status: 'Available' | 'Not Available';
}

export interface EmergencyRequest {
  id: string;
  patientName: string;
  hospitalName: string;
  hospitalLocation: string;
  district: string;
  bloodGroup: string;
  contactNumber: string;
  requestDate: string;
  urgency: 'High' | 'Medium' | 'Low';
}

// Sample data
export const sampleDonors: Donor[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    age: 28,
    bloodGroup: 'O+',
    district: 'Chennai',
    lastDonated: '2023-12-15',
    phone: '+91 9876543210',
    status: 'Available'
  },
  {
    id: '2',
    name: 'Priya Devi',
    age: 25,
    bloodGroup: 'A+',
    district: 'Coimbatore',
    lastDonated: '2024-01-20',
    phone: '+91 9876543211',
    status: 'Not Available'
  },
  {
    id: '3',
    name: 'Murugan S',
    age: 35,
    bloodGroup: 'B+',
    district: 'Madurai',
    lastDonated: '2023-11-10',
    phone: '+91 9876543212',
    status: 'Available'
  }
];

export const sampleEmergencyRequests: EmergencyRequest[] = [
  {
    id: '1',
    patientName: 'Anitha',
    hospitalName: 'Apollo Hospital',
    hospitalLocation: 'Greams Road, Chennai',
    district: 'Chennai',
    bloodGroup: 'O-',
    contactNumber: '+91 9876543213',
    requestDate: '2024-01-15',
    urgency: 'High'
  },
  {
    id: '2',
    patientName: 'Karthik',
    hospitalName: 'KMCH',
    hospitalLocation: 'Avanashi Road, Coimbatore',
    district: 'Coimbatore',
    bloodGroup: 'AB+',
    contactNumber: '+91 9876543214',
    requestDate: '2024-01-14',
    urgency: 'Medium'
  }
];