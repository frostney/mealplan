import { selectorFamily } from "recoil";
import PouchDB from "pouchdb";

import { DB_PREFIX } from "../constants";

const getDay = selectorFamily({
  key: "getDay",
  get: (day: string) => async () => {
    return new PouchDB(`${DB_PREFIX}-${day}`);
  },
});

export default getDay;
