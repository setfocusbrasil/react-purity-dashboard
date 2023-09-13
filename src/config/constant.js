let BACKEND_SERVER = null;
if (process.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = "https://dd85-2804-431-f731-f5d-c5b7-4368-d375-7984.ngrok.io/";
}

export const API_SERVER = BACKEND_SERVER;
