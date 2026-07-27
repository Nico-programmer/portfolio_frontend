export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}