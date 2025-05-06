import { useSelector, useDispatch } from "react-redux";

import { showNotify, hideNotify } from "../features/notification/notifySlice";

/* 
HOW TO USE: 

To show alert to user, just call this hook in your component and extract showNotification function from it,
and use it in any condition to trigger the alert/Notification this showNotification function
accepts the two arguments: message (required) and severity (optional, default Value = "success", other value = "error") 
*/

// useNotify hook will be used to use trigger alert in your application, it will be used with Notify component which will display alert
export function useNotify() {
  const dispatch = useDispatch();

  // This variable returns the boolean value of visibility status of alert/notification which can be used to show and hide alert/notificaiton.
  const show = useSelector((state) => state.notification.show);

  // This variable returns the current message value in string which can be used to show in notification
  const message = useSelector((state) => state.notification.message);

  // This variable returns the current value of severity to show alert/notification in different severity level, common type will be "success" or "error".
  const notifySeverity = useSelector((state) => state.notification.severity);

  // This function helps to trigger notificaiton with given message and severity
  const showNotification = (message = "", severity = "success") => {
    const data = {
      message: message,
      severity: severity,
    };
    dispatch(showNotify(data));
  };

  // This function helps to hide notification, and will be used by Notify component by itself
  const hideNotification = () => {
    dispatch(hideNotify());
  };

  return {
    show,
    message,
    notifySeverity,
    showNotification,
    hideNotification,
  };
}
