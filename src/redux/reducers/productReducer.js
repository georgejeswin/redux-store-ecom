import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "Iphone X",
      category: "Mobile",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000",

      description:
        "lorem ipsum sajsafklshgn bakdfjghj aknvkdsakjigri oqptuajksnkdfm  sdakvnjagojaoijf",
    },
    {
      id: 2,
      title: "canon 900D",
      category: "Camera",
      image:
        "https://www.usa.canon.com/internet/wcm/connect/us/a54c2a77-4652-45cc-9c37-106b358f5fa8/eos-90d-ef-s-18-135mm-f3-5-5-6is-usm-kit_675x450.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-a54c2a77-4652-45cc-9c37-106b358f5fa8-mPmokFb",
      description:
        "losdfajiawhfnvknhcvtioutwynhfsckbriquwn qeiwacriunwq oqwuetn wnvtrqiouepinotrqc ",
    },
    {
      id: 3,
      title: "Iphone XX",
      category: "Mobile",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000",

      description:
        "lorem ipsum sajsafklshgn bakdfjghj aknvkdsakjigri oqptuajksnkdfm  sdakvnjagojaoijf",
    },
    {
      id: 4,
      title: "nikon 900D",
      category: "Camera",
      image:
        "https://www.usa.canon.com/internet/wcm/connect/us/a54c2a77-4652-45cc-9c37-106b358f5fa8/eos-90d-ef-s-18-135mm-f3-5-5-6is-usm-kit_675x450.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-a54c2a77-4652-45cc-9c37-106b358f5fa8-mPmokFb",
      description:
        "losdfajiawhfnvknhcvtioutwynhfsckbriquwn qeiwacriunwq oqwuetn wnvtrqiouepinotrqc ",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
