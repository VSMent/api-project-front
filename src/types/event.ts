export interface Event {
  id: number
  title: string
  slug: string
  description?: string
  date: string
  location: string
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    limit: number;
    offset?: number;
    next_cursor?: string;
  };
}