// CRUDService.js
import firestore from '@react-native-firebase/firestore';
import {auth} from '@react-native-firebase/auth';

class CRUDService {
  // Create a new document

  static async getCurrentUserUid() {
    const user = await auth().currentUser;
    console.log(user);
    if (user) {
      return user.uid; // Return the UID of the currently logged-in user
    } else {
      console.error('No user is currently logged in');
      return null;
    }
  }

  static async create(collection, data) {
    return firestore()
      .collection(collection)
      .add(data)
      .then(documentReference => {
        console.log('Document added with ID:', documentReference.id);
        return documentReference.id;
      })
      .catch(error => {
        console.error('Error adding document: ', error);
        throw error;
      });
  }

  // Read a document
  static read(collection, docId) {
    return firestore()
      .collection(collection)
      .doc(docId)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          return documentSnapshot.data();
        } else {
          console.log('No such document!');
          return null;
        }
      })
      .catch(error => {
        console.error('Error getting document: ', error);
        throw error;
      });
  }

  // Update a document
  static update(collection, docId, data) {
    return firestore()
      .collection(collection)
      .doc(docId)
      .update(data)
      .then(() => {
        console.log('Document updated');
      })
      .catch(error => {
        console.error('Error updating document: ', error);
        throw error;
      });
  }

  // Delete a document
  static delete(collection, docId) {
    return firestore()
      .collection(collection)
      .doc(docId)
      .delete()
      .then(() => {
        console.log('Document deleted');
      })
      .catch(error => {
        console.error('Error deleting document: ', error);
        throw error;
      });
  }
}

export default CRUDService;
