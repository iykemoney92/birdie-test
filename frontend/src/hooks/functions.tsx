export const capitalizeWords = (text:string) => {
    const words = text.split(" ");

    for (let i = 0; i < words.length; i++ ){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
}

export const decorateMenuItemText = (text: string) => {
    return capitalizeWords(text.replaceAll("_", " "));
}

export const randomColor = () => { 
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0').toUpperCase(); 
}