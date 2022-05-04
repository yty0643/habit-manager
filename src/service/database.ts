import { ref, update } from 'firebase/database';
import { db } from './firebase';

class Database{
    write(uid: string, data: object){
        const postData = data;
        const updates: { [key: string]: object } = {};
        updates[`user/${uid}/`] = postData;      
        return update(ref(db), updates);
    };
};

export default Database;