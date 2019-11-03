import axios from "axios";

const options = {
  BASE_URL:
    "https://pixabay.com/api/?key=14073931-175cead39f199f74b34025e26&q=",
  PER_PAGE: 12,
  IMG_PROPS: "&image_type=photo&orientation=horizontal"
};

export const fetchPhotos = (query = "ukraine", pageNumber = 1) =>
  axios.get(
    options.BASE_URL +
      query +
      `&per_page=${options.PER_PAGE}` +
      `&page=${pageNumber}` +
      options.IMG_PROPS
  );
