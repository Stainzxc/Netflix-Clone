export const rules = {
    email: [
        { type: "email", message: "Please enter a valid email address" },
        {
          max: 255,
          message: "Your email should be maximun of 255 characters only",
        },
      ],
      password: [
        { required: true, message: "Your password must contain between 4 and 60 characters." },
        {
          min: 2,
          message: "Your first name must have at least contain 2 characters",
        },
        { pattern: /^[a-z ,.'-]+$/i, message: "Please enter a valid email or phone number." },
      ],
}