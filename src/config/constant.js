let BACKEND_SERVER = null;
if (process.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = "https://odd-cyan-toad-wig.cyclic.cloud/";
}

export const API_SERVER = BACKEND_SERVER;
