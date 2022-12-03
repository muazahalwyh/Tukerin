/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../config';

const { TUKERIN_IDB, DATABASE_VERSION, USER_STORE } = CONFIG;

const dbPromise = openDB(TUKERIN_IDB, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(USER_STORE, { keyPath: 'id' });
  },
});

const USER_DATABASE = {
  async getUser(id) {
    return (await dbPromise).get(USER_STORE, id);
  },
  async putUser(authedUser) {
    return (await dbPromise).add(USER_STORE, authedUser);
  },
  async deleteUser() {
    return (await dbPromise).delete(USER_STORE);
  },
};

export default USER_DATABASE;
