export interface Note {
    id: string;
    title: string;
    content: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
}

export interface NoteCreate {
    title: string;
    content: string;
    tag: "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";
}
  export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
  currentPage: number;
}

