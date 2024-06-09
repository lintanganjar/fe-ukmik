import { login } from "@/services/auth/login";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      doLogin: async ({username, password}) => {
        const res = await login({username, password});

        const data = res.data;

        set(() => ({ accessToken: data.token }));

        return data;
      },

      doLogout: () => set(() => ({ accessToken: null })),
    }),
    {
      name: "auth-store",
    }
  )
);
