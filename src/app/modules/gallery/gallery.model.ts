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
      enum: [
        "চিকিৎসা",
        "শিক্ষা সহায়তা",
        "উষ্ণতার ছোয়া",
        "রামাদ্বান ফুড বাকেট",
        "স্বাবলম্বিতা",
        "অন্যান্য",
      ],
    },
  },
  { timestamps: true },
);

const Gallery = model("Gallery", GallerySchema);

export default Gallery;
