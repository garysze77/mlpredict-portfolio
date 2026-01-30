export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  metrics?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
};
