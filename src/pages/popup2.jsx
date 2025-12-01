

// ContactPopup - single-file React component (TailwindCSS + framer-motion + lucide-react)
// Usage: <ContactPopup open={isOpen} onClose={() => setIsOpen(false)} />


import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Instagram, MessageCircle, Mail } from "lucide-react";

function ContactPopupi({open,setOpen}) {


  console.log(open,"hey")

  function closeContactPop() {
    setOpen(false);
  }

  

  console.log(open, "hey");

  const styles = {
    overlay: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    backdrop: {
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.4)",
      border: "none",
    },
    modal: {
      position: "relative",
      width: "100%",
      maxWidth: "420px",
      margin: "16px",
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
      border: "1px solid rgba(0,0,0,0.08)",
    },
    closeBtn: {
      position: "absolute",
      right: "16px",
      top: "16px",
      padding: "6px",
      borderRadius: "8px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
    },
    heading: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "8px",
      color: "#111",
    },
    text: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "16px",
    },
    linkBox: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px",
      borderRadius: "10px",
      border: "1px solid #e5e7eb",
      textDecoration: "none",
      color: "inherit",
      cursor: "pointer",
      transition: "all .15s ease",
    },
    iconWrap: {
      padding: "8px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    rightTextTitle: {
      fontSize: "15px",
      fontWeight: "500",
      color: "#111",
    },
    rightTextSub: {
      fontSize: "11px",
      color: "#777",
    },
    smallRight: {
      fontSize: "11px",
      color: "#777",
    },
    footer: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "flex-end",
    },
    footerBtn: {
      padding: "8px 16px",
      borderRadius: "8px",
      background: "#f1f5f9",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          style={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP CLICK CLOSE */}
          <motion.button
            aria-label="Close contact popup"
            onClick={closeContactPop}
            style={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* MODAL */}
          <motion.div
            role="dialog"
            aria-modal="true"
            style={styles.modal}
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            {/* CLOSE BUTTON */}
            <button onClick={closeContactPop} style={styles.closeBtn}>
              <X size={20} />
            </button>

            <h3 style={styles.heading}>Contact us</h3>
            <p style={styles.text}>
              Choose a method to reach out — we usually reply within a business
              day.
            </p>

            <div style={{ display: "grid", gap: "12px" }}>
              <a
                href="https://instagram.com/varkala_mahadevatravels"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.linkBox}
              >
                <div
                  style={{
                    ...styles.iconWrap,
                    background:
                      "linear-gradient(45deg, #ec4899, #facc15, #8b5cf6)",
                  }}
                >
                  <Instagram size={20} color="white" />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={styles.rightTextTitle}>Instagram</div>
                  <div style={styles.rightTextSub}>varkala_mahadevatravels</div>
                </div>

                <div style={styles.smallRight}>Open</div>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=919544952520"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.linkBox}
              >
                <div style={{ ...styles.iconWrap, background: "#22c55e" }}>
                  <MessageCircle size={20} color="white" />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={styles.rightTextTitle}>WhatsApp</div>
                  <div style={styles.rightTextSub}>+91 9544952520</div>
                </div>

                <div style={styles.smallRight}>Chat</div>
              </a>

              <a href="mailto:mahadevatraavels@gmail.com" style={styles.linkBox}>
                <div style={{ ...styles.iconWrap, background: "#334155" }}>
                  <Mail size={20} color="white" />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={styles.rightTextTitle}>Email</div>
                  <div style={styles.rightTextSub}>mahadevatraavels@gmail.com</div>
                </div>

                <div style={styles.smallRight}>Send</div>
              </a>
            </div>

            {/* FOOTER CLOSE BUTTON */}
            <div style={styles.footer}>
              <button style={styles.footerBtn} onClick={closeContactPop}>
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactPopupi;

