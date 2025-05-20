// src/types/User.ts
export interface EventUser {
  id: number;
  fullName: string;
  email: string;
  role: "admin" | "user" | "guest";
  createdAt: string; // ISO date string
}
