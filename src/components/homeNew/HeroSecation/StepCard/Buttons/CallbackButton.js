import { useState } from "react";
import { Loader2, Phone } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import styles from "./buttons.module.css";

/**
 * @param {{ toast: function }} props
 */
export default function CallbackButton({ toast }) {
  const [loading, setLoading] = useState(false);


  return (
    <button
      disabled={loading}
      className={`${styles.button} ${styles.callbackButton}`}
    >
      {loading ? (
        <Loader2 className={`${styles.icon} ${styles.spin}`} />
      ) : (
        <Phone className={styles.icon} />
      )}
      Get Expert Callback
    </button>
  );
}