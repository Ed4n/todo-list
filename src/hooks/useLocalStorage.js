import { useState } from "react";
/**
 * @param {*} itemName 
 * @param {*} initialValue 
 * @returns the item and a function to update it
 * @description This hook will save the item to localStorage and return the item and a function to update it
 * @example const [name, setName] = useLocalStorage('Item Name', 'Bob');
 */
export default function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = useState(parsedItem);

    /**
     * @param {*} newItem
     * @description This function will save the new item to localStorage
     * and update the state of our hook with the new item 
     */
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return [item, saveItem];
}