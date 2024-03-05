import { api } from "@/common";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { EmailContext } from "./Emailprovider";
import { SelectChangeEvent } from "@mui/material";

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

type signupParams = {
  userName: string;
  email: string;
  address: string;
  password: string;
};

type loginParams = {
  email: string;
  password: string;
};

type sendEmail = {
  email: string;
};

type verifyOtpParams = {
  otp: string;
};

type newPassParams = {
  newPass: string;
};

type AuthContextType = {
  isLogged: boolean;
  user: Object;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  signup: (params: signupParams) => void;
  login: (params: loginParams) => void;
  verifyOtp: (params: verifyOtpParams) => Promise<void>;
  otp: string;
  setOtp: Dispatch<SetStateAction<string>>;
  changePass: (newPass: string) => void;
  handleShow: () => void;
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
  logout: () => void;
  isUploaded: boolean;
  setIsUploaded: Dispatch<SetStateAction<boolean>>;
  refresh: number;
  refreshF: () => void;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  isCatShown: boolean;
  setIsCatShown: Dispatch<SetStateAction<boolean>>;
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
  userCatActive: string;
  setUserCatActive: Dispatch<SetStateAction<string>>;
  allFoods: AllFoods[];
  setAllFoods: Dispatch<SetStateAction<AllFoods[]>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  isSelectedFood: boolean;
  setIsSelectedFood: Dispatch<SetStateAction<boolean>>;
  selectedFood: {};
  setSelectedFood: Dispatch<SetStateAction<{}>>;
  isFoodInCart: boolean;
  setIsFoodInCar: Dispatch<SetStateAction<boolean>>;
  foodInCart: { food: AllFoods; quantity: number }[];
  setFoodInCart: Dispatch<SetStateAction<SelectedFood[]>>;
  addFoodToCart: (food: AllFoods, quantity: number) => void;
  addQuantInCart: (label: string) => void;
  lessQuantInCart: (label: string) => void;
  removeFoodInCart: (label: string) => void;
};

export type Category = {
  _id: string;
  category: string;
};

export type AllFoods = {
  _id: string;
  foodName: string;
  foodCat: string;
  foodRecipe: string;
  foodPrice: number;
  foodDisPer: number;
  foodImg: string;
};

type SelectedFoodType = { food: AllFoods; quantity: number };

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [otp, setOtp] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [active, setActive] = useState("Breakfast");
  const [isCatShown, setIsCatShown] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [userCatActive, setUserCatActive] = useState("Breakfast");
  const [allFoods, setAllFoods] = useState<AllFoods[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isSelectedFood, setIsSelectedFood] = useState(false);
  const [selectedFood, setSelectedFood] = useState({});
  const [isFoodInCart, setIsFoodInCar] = useState(false);
  const [foodInCart, setFoodInCart] = useState<SelectedFoodType[]>([]);

  const addFoodToCart = (food: AllFoods, quantity: number) => {
    const current = foodInCart.find((item) => item.food._id === food._id);

    if (!current) {
      setFoodInCart((prev) => [...prev, { food, quantity }]);
    } else {
      const newCart = foodInCart.map((item) => {
        if (item.food._id === food._id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return { ...item };
      });

      setFoodInCart(newCart);
    }
  };

  const addQuantInCart = (label: string) => {
    const clicked = foodInCart.find((item) => item.food.foodName === label);
    const newQty = clicked?.quantity + 1;
    const newCart = foodInCart.map((item) => {
      if (item.food.foodName === label) {
        if (clicked?.quantity < 10) return { ...item, quantity: newQty };
      }
      return { ...item };
    });

    setFoodInCart(newCart);
  };

  const lessQuantInCart = (label: string) => {
    const clicked = foodInCart.find((item) => item.food.foodName === label);
    const newQty = clicked?.quantity - 1;
    const newCart = foodInCart.map((item) => {
      if (item.food.foodName === label) {
        if (clicked?.quantity > 1) return { ...item, quantity: newQty };
      }
      return { ...item };
    });

    setFoodInCart(newCart);
  };

  const removeFoodInCart = (label: string) => {
    const clicked = foodInCart.find((item) => item.food.foodName === label);

    const newCart = foodInCart.filter((item) => {
      return item.food.foodName !== clicked?.food.foodName;
    });

    setFoodInCart(newCart);
  };

  const { email } = useContext(EmailContext);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogged(true);
    }

    if (!token) {
      setIsLogged(false);
    }
  }, []);

  const refreshF = () => {
    setRefresh(refresh + 1);
  };

  const signup = async (params: signupParams) => {
    try {
      const { data } = await api.post("/signUp", params);
      router.push("./LoginPage");
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message);
      }
    }
  };

  const login = async (params: loginParams) => {
    try {
      const { data } = await api.post("/login", params);

      localStorage.setItem("token", data);

      router.push("/");

      setIsLogged(true);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message);
      }
    }
  };

  const getUser = async () => {
    try {
      const { data } = await api.get("/user", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setUser(data);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message);
      }
    }
  };
  const getAllCats = async () => {
    try {
      const { data } = await api.get("/foods/createCat");
      setCategories(data);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message);
      }
    }
  };

  useEffect(() => {
    if (isLogged) {
      getUser();
      getAllCats();
    }
  }, [isLogged, refresh]);

  const verifyOtp = async (params: verifyOtpParams) => {
    const { data } = await api.post("verifyOtp", params);
  };

  const changePass = async (newPass: string) => {
    try {
      const { data } = await api.post("resetPass", { newPass, otp, email });
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
    setUser({});
    setIsShown(false);
    router.push("/");
  };

  const getAllFoods = async () => {
    try {
      const { data } = await api.get("/foods/getAllFoods");

      setAllFoods(data);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message);
      }
    }
  };

  useEffect(() => {
    getAllFoods();
  }, [refresh]);

  const orderedFood = async (params: SelectedFoodType) => {
    try {
      const { data } = await api.post("/foods/orderedFood", params, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        user,
        setIsLogged,
        signup,
        login,
        verifyOtp,
        otp,
        setOtp,
        changePass,
        isShown,
        setIsShown,
        logout,
        isUploaded,
        setIsUploaded,
        refreshF,
        refresh,
        active,
        setActive,
        isCatShown,
        setIsCatShown,
        categories,
        setCategories,
        userCatActive,
        setUserCatActive,
        allFoods,
        setAllFoods,
        searchValue,
        setSearchValue,
        isSelectedFood,
        setIsSelectedFood,
        selectedFood,
        setSelectedFood,
        isFoodInCart,
        setIsFoodInCar,
        foodInCart,
        setFoodInCart,
        addFoodToCart,
        addQuantInCart,
        lessQuantInCart,
        removeFoodInCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
