import * as Artists from "../models/artists";
import { NextFunction, Request as ExpressRequest, Response as ExpressResponse } from "express";

export const all = async (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
  try {
    const docs = await Artists.all();
    res.send(docs);
  } catch (error) {
    next();
  }
};

export const create = async (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
  try {
    const doc = await Artists.create({ name: req.body.name });
    res.send(doc);
  } catch (error) {
    next();
  }
};

export const findById = async (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
  try {
    const doc = await Artists.findById(req.params.id);
    res.send(doc);
  } catch (error) {
    next();
  }
};

export const update = async (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
  try {
    const doc = await Artists.update(req.params.id, { name: req.body.name });
    res.send(doc);
  } catch (error) {
    next();
  }
};

export const deleteById = async (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
  try {
    const doc = await Artists.deleteOne(req.params.id);
    res.sendStatus(200);
  } catch (error) {
    next();
  }
};
