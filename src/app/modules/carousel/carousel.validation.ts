import { z } from "zod";

const carouselValidationSchema = z.object({
  body: z.object({
    imageUrl: z.string().trim(),
  }),
});

export const carouselValidation = {
  carouselValidationSchema,
};
