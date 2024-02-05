export interface TEvent {
  title: string;
  details: string;
  imageUrl: string;
  category: "চিকিৎসা" | "শিক্ষা";
  status: "running" | "end";
}
