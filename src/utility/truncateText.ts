export const truncateText = (str: string) => {
    if (str.length < 80){
        return str
    }else{
        return str.substring(0, 80) + '...';
    }
};