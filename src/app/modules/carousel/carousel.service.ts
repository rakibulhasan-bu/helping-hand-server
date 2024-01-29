import { TCarousel } from "./carousel.interface";
import Carousel from "./carousel.model";

const createCarouselIntoDB = async (carousel: TCarousel) => {
  return await Carousel.create(carousel);
};

const getAllCarouselFromDB = async () => {
  const result = await Carousel.find();
  return {
    carousels: result,
  };
};

export const carouselServices = {
  createCarouselIntoDB,
  getAllCarouselFromDB,
};
