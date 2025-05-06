import { useState } from "react";

import { useNotify } from "../../hooks/useNotify";
import { Header, Notify } from "./index";

export default function Layout(Props) {
  const { children } = Props;
  const { show, message, notifySeverity, hideNotification } = useNotify();

  return (
    <>
      <Header />
      <main className="bg-gray-100 h-full">{children}</main>
      {show && (
        <Notify
          notication={message}
          severity={notifySeverity}
          hideNotification={hideNotification}
        />
      )}
    </>
  );
}
