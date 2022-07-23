export interface RepoProps {
  id: number;
  name: string;
  svn_url: string;
  language: string;
  created_at: Date;
  updated_at: Date;
  clone_url: string;
  hasDownloads: boolean;
  visibility?: string;
  description?: string;
  owner: { avatar_url: string };
}