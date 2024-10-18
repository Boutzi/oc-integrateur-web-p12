"use client";
import { useLocale } from "next-intl";
import { fetchDataFromBucket } from "@/utils/getBucket";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface UserContextType {
  user: UserType | undefined; // Permet d'accepter undefined au début
  setUser: (user: UserType) => void;
}

interface UserType {
  firstName: string;
  lastName: string;
  nickName: string;
  userName: string;
  company: string;
  mainRole: string;
  birth: string;
  profilePictureUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  cvUrl: string;
  allowCvDownload: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | undefined>(undefined);
  const locale = useLocale();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket(locale, "config", "profile");
        if (data) {
          setUser(data);
        } else {
          console.error("No data found for profile.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [locale]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {" "}
      {/* Fournit setUser ici */}
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
