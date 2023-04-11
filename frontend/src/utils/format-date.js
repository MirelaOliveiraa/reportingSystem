

export function formatDate (date) {
    if (!date) return;  
    return new Intl.DateTimeFormat('pt-BR').format(new Date(date));        
}