import { NativeError } from "mongoose";
import { Request, Response } from "express";
import { User, UserDocument, AuthToken } from "../models/User";
export const getUserList = (req: Request, res: Response) => {
  User.findOne(
    {
      age: 30,
    },
    (err: NativeError, doc: UserDocument) => {
      res.send(doc);
    }
  );
};

export const saveUser = (req: Request, res: Response): void => {
  //   return "hello world";
  const user = new User({
    email: "504151911@qq.com",
    age: 30,
  });
  user.save();
  res.send(user);
};
