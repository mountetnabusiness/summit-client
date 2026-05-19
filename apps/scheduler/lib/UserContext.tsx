import React, { createContext, useContext } from "react";
import type { AppUser } from "./useUser";

export const UserContext = createContext<AppUser | null>(null);
export const useAppUser = () => useContext(UserContext);
