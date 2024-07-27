import { createContext, useState } from 'react';


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    
    const [html, sethtml] = useState('');
    const [js, setjs] = useState('');
    const [css, setcss] = useState('');

    return (
        <DataContext.Provider value={{
            html,
            sethtml,
            css,
            setcss,
            js,
            setjs
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;