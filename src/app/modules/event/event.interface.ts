export interface TEvent {
  title: string;
  details: string;
  imageUrl: string;
  category:
    | "চিকিৎসা"
    | "শিক্ষা সহায়তা"
    | "উষ্ণতার ছোয়া"
    | "রামাদ্বান ফুড বাকেট"
    | "স্বাবলম্বিতা"
    | "অন্যান্য";
  status: "running" | "end";
}
