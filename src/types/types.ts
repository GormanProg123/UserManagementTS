export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export interface FiltersState {
  searchTerm: string;
  sortBy: 'name' | 'username' | 'email' | 'phone';
}