import { useEffect, useState } from "react";
import { allTodos } from "../db.js";
/**
 * @param {*} itemName 
 * @param {*} initialValue 
 * @returns the item and a function to update it
 * @description This hook will save the item to localStorage and return the item and a function to update it
 * @example const [name, setName] = useLocalStorage('Item Name', 'Bob');
 */
export default function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                setLoading(false);
                setItem(parsedItem);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }, 2000);


    }, []);

    /**
     * @param {*} newItem
     * @description This function will save the new item to localStorage
     * and update the state of our hook with the new item 
     */
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return { item, saveItem, loading, error };
}

//Refresh local storage //
const localStorageTodosInstance = allTodos;
// localStorage.setItem("todos", JSON.stringify(localStorageTodosInstance));