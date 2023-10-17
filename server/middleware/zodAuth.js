const z = require("zod");

const validate = z.object({
  email: z.string(),
  password: z
    .string()
    .min(6, { message: "Password must be a min of 6 characters" }),
});

const zodAuth = async (req, res, next) => {
  try {
    validate.parse(req.body);
    next();
  } catch (e) {
    const errorMessages = e.issues.map((issue) => issue.message);
    res.status(400).json({ error: errorMessages });
  }
};

module.exports = zodAuth;
