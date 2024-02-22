import fs from "fs";

const fsPromise = fs.promises;

async function log(logData) {
  try {
    logData = `\n${new Date().toString()} + ".Log Data: " + ${logData}`;
    await fsPromise.appendFile("log.txt", logData);
  } catch (err) {
    console.log(err);
  }
}

const loggerMiddleware = async (req, res, next) => {
  //1.log request  body
  const body = `${req.url}-${JSON.stringify(req.body)}`;
  await log(body);
  next();
};

export default loggerMiddleware;
