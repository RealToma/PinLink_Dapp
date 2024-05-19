import { createContext } from "react";
import gsap from "gsap";
const ToasterContext = createContext();

export const ToasterProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((title, desc, type = "success") => {
    const id = Math.floor(Math.random() * Date.now());
    setToasts((prevToasts) => [...prevToasts, { title, desc, type, id }]);
    setTimeout(() => {
      removeToast(id);
    }, 3500);
  }, []);

  const removeToast = useCallback((id) => {
    const toaster = document.querySelector("#snackbar-" + id);
    const duration = 0.5;
    gsap.to(toaster, {
      x: 100,
      opacity: 0,
      duration: duration,
      ease: "power2.out",
      onComplete: () =>
        setToasts((prevToasts) =>
          prevToasts.filter((toast) => toast.id !== id),
        ),
    });
  }, []);
  const Toast = {
    success: (title, desc) => addToast(title, desc, "success"),
    error: (title, desc) => addToast(title, desc, "error"),
    loading: (title, desc) => addToast(title, desc, "processing"),
  };

  return (
    <ToasterContext.Provider value={{ toasts, addToast, removeToast, Toast }}>
      {children}
    </ToasterContext.Provider>
  );
};

export const useToaster = () => useContext(ToasterContext);
