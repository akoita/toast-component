import React from "react";


export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const id = crypto.randomUUID();
    const newToast = {message: message, variant: variant, id: id};
    setToasts([newToast, ...toasts]);
  }

  function dismissToast(id) {
    const newToasts = toasts.filter(toast => toast.id !== id);
    setToasts(newToasts);
  }

  function closeAllToasts() {
    setToasts([]);
  }

  return (<ToastContext.Provider value={{toasts,createToast,dismissToast,closeAllToasts}}>{children}</ToastContext.Provider>);
}

export default ToastProvider;
