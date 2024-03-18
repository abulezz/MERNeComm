import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log("hashedPassword :>>", hashedPassword);

  return hashedPassword;
};

export const verifyPassword = (password, hasshedpassword) => {
  const verified = bcrypt.compare(password, hasshedpassword);
  return verified;
};
