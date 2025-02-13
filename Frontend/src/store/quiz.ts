import { create } from 'zustand';

export interface QuizState {
  currentStep: number;
  userName: string;
  answers: Record<string, string>;
  setUserName: (name: string) => void;
  setAnswer: (questionId: string, answer: string) => void;
  nextStep: () => void;
  previousStep: () => void;
  reset: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  currentStep: 0,
  userName: '',
  answers: {},
  setUserName: (name) => set({ userName: name }),
  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: answer },
    })),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  previousStep: () => set((state) => ({ currentStep: Math.max(0, state.currentStep - 1) })),
  reset: () => set({ currentStep: 0, userName: '', answers: {} }),
}));