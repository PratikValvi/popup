export const getWirisAltText = ({target}) =>{
    const WIRIS_ALT_TEXT = target.getAttribute('alt');
    return WIRIS_ALT_TEXT || 'ALT TEXT NOT FOUND';
}