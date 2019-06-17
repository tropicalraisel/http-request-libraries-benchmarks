export interface IBenchmarkModel {
  target: string;
  fn: (defer: any) => void;
}
