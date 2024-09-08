import { useState, useEffect } from 'preact/hooks';

export const useReplaceString = (value: string, newValue: string, interval: number = 300): string => {
    const [currentString, setCurrentString] = useState(value);

    useEffect(() => {
        let currentIndex = 0;
        const maxLength = Math.max(value.length, newValue.length);
        let resultArray = value.split(''); 

        const intervalId = setInterval(() => {
            if (currentIndex < maxLength) {
                if (currentIndex < newValue.length) {
                    resultArray[currentIndex] = newValue[currentIndex];
                } else {
                    resultArray.splice(newValue.length, 1)
                }
                
                setCurrentString(resultArray.join(''));
                currentIndex++;
            } else {
                clearInterval(intervalId); 
            }
        }, interval);

        return () => clearInterval(intervalId); 
    }, [value, newValue, interval]);

    return currentString;
};

