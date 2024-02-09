import { Schema, model } from "mongoose";
import { TEvent } from "./event.interface";

const EventSchema = new Schema<TEvent>(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "চিকিৎসা",
        "শিক্ষা",
        "উষ্ণতার ছোয়া",
        "রামাদ্বান ফুড বাকেট",
        "স্বাবলম্বিতা",
        "অন্যান্য",
      ],
    },
    status: {
      type: String,
      required: true,
      enum: ["running", "end"],
    },
  },
  { timestamps: true },
);

const Event = model("Event", EventSchema);

export default Event;
