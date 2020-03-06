import axios from '../utils/httpClient';

class ImageAPI {
  static async sendImg(imgUrl, ownId) {
    return await axios
      .post(
        `${process.env.REACT_APP_API_URL}/portrait/saveImg`,
        {
          imgUrl,
          ownId,
        },
      );
  }

  static async getImg(ownId) {
    return await axios
      .get(`${process.env.REACT_APP_API_URL}/portrait/getImg`, {
        params: {
          ownId,
        },
      });
  }
}

export default ImageAPI;
