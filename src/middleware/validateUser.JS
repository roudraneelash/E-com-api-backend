import { body, validationResult } from "express-validator";

// Express validator middleware for signup function
export const validateSignUp = async (req, res, next) => {
  const rules = [
    // Validate name
    body("name").trim().notEmpty().withMessage("Name is required"),

    // Validate email
    body("email").trim().isEmail().withMessage("Invalid email"),

    // Validate password
    body("password")
      .trim()
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    body("password")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter"),
    body("password")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter"),
    body("password")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("Password must contain at least one special symbol"),

    // Validate type (You may adjust this validation according to your requirements)
    body("type").trim().notEmpty().withMessage("Type is required"),
  ];

  // Run rules
  await Promise.all(rules.map((rule) => rule.run(req)));

  // Show errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
