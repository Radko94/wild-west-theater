export interface IStagePlay {
  id: string;
  name: string;
  imageUrl: string;
}

export interface IStagePlayDetails extends IStagePlay {
  actors: string[];
  description: string;
}
