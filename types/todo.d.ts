export interface Todo {
  id: number;
  title: string;
  body: string;
  isCompleted: boolean;
}

export interface CreateFormPayload {
  title: string;
  body: string;
}
