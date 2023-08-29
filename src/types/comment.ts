export type Comment = {
  author: {
    first_name: string;
    last_name: string;
    photoUrl?: string;
  };
  comment_text: string;
  created_at: string;
};
