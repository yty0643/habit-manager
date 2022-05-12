import { ref, update, child, get, getDatabase } from 'firebase/database';
import { db } from './firebase';

class Database{
    write(email: string, path: string ,data: object){
        const postData = data;
        const updates: { [key: string]: object } = {};
        updates[path] = postData;      
        return update(ref(db), updates);
    };

    read(email: string, path: string) {
        const dbRef = ref(getDatabase());
        return get(child(dbRef, path))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    return(snapshot.val());
                } else {
                    throw new Error("No data available");
                }
            })
    };
    
};

export default Database;