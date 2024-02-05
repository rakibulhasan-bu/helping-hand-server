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
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Event = model("Case", EventSchema);

export default Event;
