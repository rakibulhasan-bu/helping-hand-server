import { Schema, model } from "mongoose";
import { TGallery } from "./gallery.interface";

const GallerySchema = new Schema<TGallery>(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["চিকিৎসা", "শিক্ষা", "প্রজেক্ট"],
    },
  },
  { timestamps: true },
);

const Gallery = model("Gallery", GallerySchema);

export default Gallery;
