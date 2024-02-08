import { z } from "zod";

const createEventValidationSchema = z.object({
  body: z.object({
    title: z.string().trim().min(3),
    details: z.string().trim().min(3),
    imageUrl: z.string().url(),
    category: z.enum(["চিকিৎসা", "শিক্ষা", "প্রজেক্ট"]),
    status: z.enum(["running", "end"]),
  }),
});

const updateEventValidationSchema = z.object({
  body: z.object({
    title: z.string().trim().min(3),
    details: z.string().trim().min(3),
    imageUrl: z.string().url(),
    category: z.enum(["চিকিৎসা", "শিক্ষা", "প্রজেক্ট"]),
    status: z.enum(["running", "end"]),
  }),
});

export const eventValidation = {
  createEventValidationSchema,
  updateEventValidationSchema,
};
