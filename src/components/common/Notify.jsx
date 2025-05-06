import { useEffect } from "react";
import Alert from "@mui/material/Alert";

export default function Notify(Props) {
  const {
    notication,
    severity = "success",
    hideNotification,
    className = "",
  } = Props;

  // After 10 seconds of rendering Alert it will disappear automatically
  useEffect(() => {
    setTimeout(() => {
      hideNotification();
    }, 10000);
  }, []);

  return (
    <div className="sticky w-full bottom-4 flex justify-center">
      <Alert severity={severity} className={className}>
        {notication}
      </Alert>
    </div>
  );
}
