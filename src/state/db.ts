import { createStore } from "$lib/adorable";

interface Database {
  todo: string;
}

export const db = createStore<Database>("database");
