import jwt_decode from "jwt-decode";

const decodeJWT = () => {
  const accessToken = sessionStorage.getItem("accessToken");
  const decodedToken = jwt_decode(accessToken);
  return decodedToken;
};

export{decodeJWT}
