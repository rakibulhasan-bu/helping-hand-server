import { Schema, model } from "mongoose";
import { TCarousel } from "./carousel.interface";

const CarouselSchema = new Schema<TCarousel>(
  {
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Carousel = model("Carousel", CarouselSchema);

export default Carousel;
