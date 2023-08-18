/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        120: "120px",
        70: "70px",
      },
      width: {
        10: "10px",
        20: "20px",
        30: "30px",

        "50%": "50%",
        "100%": "100%",
      },

      height: {
        80: "80px",
        100: "100px",
      },
      margin: {
        5: "5px",
        10: "10px",
        20: "20px",
        40: "40px",
        50: "50px",
        60: "60px",
      },
      // padding: {
      //   5: "5px",
      //   10: "10px",
      //   20: "20px",
      //   40: "40px",
      //   50: "50px",
      //   60: "60px",
      // },

      fontSize: {
        xs: "12px",
        s: "14px",
        m: "16px",
        l: "18px",
        xl: "24px",
        "2xl": "28px",
      },

      colors: {
        // button 색상
        "positive-color": "#64c964",
        "negative-color": "#fd565f",
        "default-color": " #ececec;",

        // emotion bg색상
        emotion1: "#64c964",
        emotion2: "#9dd772",
        emotion3: "#fdce17",
        emotion4: "#fd8446",
        emotion5: "#fd565f",
      },

      borderRadius: {
        5: "5px",
        4: "4px",
      },
    },
  },
  plugins: [],
};
