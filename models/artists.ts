import { Artist, ArtistWithoutId } from "../types/artist";
import * as db from "../db";
import { DeleteResult, ObjectId } from "mongodb";

export const all = (): Promise<Artist[]> => {
  return db.get().collection("artists").find<Artist>({}).toArray();
};

export const create = async (artist: ArtistWithoutId): Promise<Artist> => {
  await db.get().collection("artists").insertOne(artist);
  return artist as Artist;
};

export const findById = (artistId: string): Promise<Artist | null> => {
  return db
    .get()
    .collection("artists")
    .findOne<Artist>({ _id: new ObjectId(artistId) });
};

export const update = async (artistId: string, newData: ArtistWithoutId): Promise<Artist | null> => {
  await db
    .get()
    .collection("artists")
    .updateOne({ _id: new ObjectId(artistId) }, { $set: newData });

  return {
    ...newData,
    _id: artistId,
  };
};

export const deleteOne = (artistId: string): Promise<DeleteResult> => {
  return db
    .get()
    .collection("artists")
    .deleteOne({ _id: new ObjectId(artistId) });
};
