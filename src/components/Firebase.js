import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
    appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


export async function getAllProducts() {
    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);
  
    const products = snapshot.docs.map(element => {
      let product = element.data();
      product.id = element.id;
      product.imgUrls = product.imgUrls || [];
      return product;
    });
  
    return products;
  }

export async function getProductsByCategory(categoryid){
    const productsRef = collection(db, "products");
    const qry = query(productsRef, where("category", "==", categoryid));
    const snapshot = await getDocs(qry);

    const products = snapshot.docs.map(element => {
        let product = element.data();
        product.id = element.id;
        return product;
    });

    return products;
}

export async function getOfertas() {
    const productsRef = collection(db, "products");
    const qry = query(productsRef, where("category", "==", "Ofertas")); // Filtrar por categoria "usados"
    const snapshot = await getDocs(qry);
  
    const products = snapshot.docs.map((element) => {
      const product = element.data();
      product.id = element.id;
      return product;
    });
  
    return products;
  }

  export async function getManuales() {
    const productsRef = collection(db, "products");
    const qry = query(productsRef, where("category", "==", "Manuales")); // Filtrar por categoria "usados"
    const snapshot = await getDocs(qry);
  
    const products = snapshot.docs.map((element) => {
      const product = element.data();
      product.id = element.id;
      return product;
    });
  
    return products;
  }
  
export async function getProductsByName(searchid){
    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);

    let products = snapshot.docs.map(element => {
        let product = element.data();
        product.id = element.id;
        return product;
    });

    products = products.filter((el)=>el.name.toLowerCase().includes(searchid.trim().toLowerCase()) || el.detail.toLowerCase().includes(searchid.trim().toLowerCase())|| el.codigo.toLowerCase().includes(searchid.trim().toLowerCase()));
    return products;
}

export async function getProduct(id){
    const productsRef = collection(db, "products");
    const docRef = doc(productsRef, id)
    const snapshot = await getDoc(docRef);

    return { ...snapshot.data(), id: snapshot.id };
}

export async function createOrder(order){
    const orderRef = collection(db, "orders");

    let response = await addDoc(orderRef, order);
    return response.id;
}

export async function getOrder(id){
    const orderRef = collection(db, "orders");
    const docRef = doc(orderRef, id)
    const snapshot = await getDoc(docRef);

    return { ...snapshot.data(), id: snapshot.id };
}

export default db;