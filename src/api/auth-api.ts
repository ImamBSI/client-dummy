import api from "./axios";

export const authApi = {
  login: (email: string, password: string) =>
    api.post("/auth/login", { email, password }).then(res => res.data),

  register: (payload: any) =>
    api.post("/auth/register", payload).then(res => res.data),

  resetPassword: (email: string, newPassword: string) =>
    api.post("/auth/reset-password", { email, newPassword }),
};
