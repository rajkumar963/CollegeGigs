export const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export const getInitials = (name: string) => {
    if(!name) return ''
    const words = name.split(' ');
    let initials = '';
    for (let i = 0; i <Math.min(words.length,2); i++) {
        initials += words[i][0].toUpperCase();
    }
    return initials;
    
}