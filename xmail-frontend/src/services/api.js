import axios from "axios";
import { BACKEND_URL } from "../config";

export const getEmails = async (pageToken = null) => {
  try {
    const params = pageToken ? { page_token: pageToken } : {};

    const response = await axios.get(`${BACKEND_URL}/emails`, {
      params,
    });

    return {
      emails: response.data.emails,
      nextPageToken: response.data.nextPageToken,
    };
  } catch (error) {
    console.error("Error fetching emails:", error);
    return { emails: [], nextPageToken: null };
  }
};