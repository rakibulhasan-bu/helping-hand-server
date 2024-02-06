export interface TEvent {
  title: string;
  details: string;
  imageUrl: string;
  category: "চিকিৎসা" | "শিক্ষা" | "প্রজেক্ট";
  status: "running" | "end";
}
