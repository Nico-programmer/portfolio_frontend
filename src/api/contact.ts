import api from "./axios";

import type {
  ContactFormData,
  ContactResponse,
} from "../types/contact";

export const sendContact = async (
  data: ContactFormData
): Promise<ContactResponse> => {
  const response = await api.post<ContactResponse>(
    "/contact/",
    data
  );

  return response.data;
};