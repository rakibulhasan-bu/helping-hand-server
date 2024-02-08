import { Router } from "express";
import eventRouter from "../modules/event/event.router";
import categoryRoute from "../modules/category/category.route";
import userRoute from "../modules/user/user.route";
import authRoute from "../modules/auth/auth.route";
import carouselRoute from "../modules/carousel/carousel.route";
import galleryRouter from "../modules/gallery/gallery.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: eventRouter,
  },
  {
    path: "/",
    route: galleryRouter,
  },
  {
    path: "/",
    route: categoryRoute,
  },
  {
    path: "/",
    route: carouselRoute,
  },
  {
    path: "/auth",
    route: userRoute,
  },
  {
    path: "/auth",
    route: authRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
