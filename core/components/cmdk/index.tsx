import { forwardRef } from "react";

export const CMDK = forwardRef(({ ...props }, ref) => {
  return <button> CMD </button>;
});

CMDK.displayName = "CMDK";

export default CMDK;
