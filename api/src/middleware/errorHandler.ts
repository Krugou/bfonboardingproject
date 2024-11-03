import {NextFunction, Request, Response} from 'express';

const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(err.stack);
  res.status(500).json({error: 'Something went wrong!'});
};

export default errorHandler;
