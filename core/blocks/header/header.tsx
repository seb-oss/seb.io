"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { forwardRef } from "react";
import "./header.css";
import { ThemeToggle } from "@/utils/theme/toggle";
import { ThemeProviderContext } from "@/utils/theme/provider";

export const Header = forwardRef(({ ...props }, ref) => {
  const { toggleCmd } = useContext(ThemeProviderContext);
  return (
    <header>
      <div className="hamburger"></div>
      <Link href="/" className="logo">
        <svg viewBox="0 0 55 24">
          <path d="M14.8699 6.12289L11.9205 8.32048C10.5325 7.12048 8.73253 6.88916 7.74217 6.88916C6.74458 6.88916 5.69639 7.17831 5.53735 7.89398C5.37831 8.58795 6.02892 9.13012 7.14217 9.43374C8.41446 9.77349 9.56386 10.0771 11.3494 10.5831C13.9952 11.3422 15.8096 12.4843 15.8096 15.1374C15.8096 18.8024 12.5566 20.6964 8.20482 20.6964C3.85301 20.6964 0.889157 18.4337 0 17.3783L3.11566 15.0506C5.30602 16.959 6.8241 17.2265 8.09639 17.2265C9.55663 17.2265 10.9229 16.9157 11.0964 16.0916C11.241 15.4265 10.6916 14.8988 9.44819 14.6096C8.04578 14.2843 6.85301 14.0241 5.53012 13.6771C1.93735 12.7374 0.925301 10.6482 0.925301 8.76868C0.925301 6.18795 3.3253 3.53494 7.72771 3.53494C12.2313 3.53494 14.8699 6.11566 14.8699 6.12289ZM33.6578 3.79518H20.5157V20.212H33.8964V16.4241H25.1277V13.7783H31.1639V10.1566H25.1277V7.53976H33.6506V3.79518H33.6578ZM17.1181 24H18.1373V0H17.1181V24ZM35.6241 24H36.6434V0H35.6241V24ZM39.0217 20.212H49.5759C52.3952 20.212 54.6867 18.5133 54.6867 15.788C54.6867 13.6627 53.2988 12.253 51.347 11.6313C51.2819 11.6169 51.2241 11.6096 51.159 11.6096C51.2241 11.6024 51.2892 11.5952 51.347 11.5735C52.4675 11.1325 53.6964 9.95422 53.6964 7.95181C53.6964 5.40723 51.4482 3.78795 48.6723 3.78795H39.0145L39.0217 20.212ZM43.6554 7.20723H47.3422C48.188 7.20723 48.8747 7.87952 48.8747 8.64578C48.8747 9.41205 48.188 10.0916 47.3422 10.0916H43.6554V7.20723ZM48.159 16.5687H43.6482V13.5759H48.159C48.9542 13.5759 49.6048 14.2193 49.6048 15.0723C49.6048 15.9181 48.9614 16.5687 48.159 16.5687Z" />
        </svg>
      </Link>
      <nav>
        <Link href="#" onClick={toggleCmd}>
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Search
        </Link>
        <Link href="https://github.com/sebgroup/green" target="_blank">
          <svg viewBox="0 0 24 24">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
});

Header.displayName = "Header";

export default Header;