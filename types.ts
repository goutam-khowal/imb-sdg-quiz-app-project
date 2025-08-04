import { LucideIcon } from "lucide-react";

export interface FactCardData {
  icon: LucideIcon;
  title: string;
  stat: string;
  description: string;
  color: string;
}

export interface Question {
  question: string;
  options: string[];
  correct: number;
}
