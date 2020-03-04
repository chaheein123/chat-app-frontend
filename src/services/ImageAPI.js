import axios from "../utils/httpClient";

class ImageAPI {

  static async sendImg(imgUrl, ownId) {

    return await axios
      .post(
        "http://localhost:5000/portrait/saveImg",
        {
          imgUrl,
          ownId
        }
      )
  };

  static async getImg(ownId) {
    return await axios
      .get("http://localhost:5000/portrait/getImg", {
        params: {
          ownId
        }
      })
  }
};

export default ImageAPI;
