declare type ResponseType<T = any> = {
  code: number;
  message: string;
  data: T;
}

declare type WordsForm = {
  sourceId: string
  word: string;
  sentence: string;
};