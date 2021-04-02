import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
    const { isDarkTheme, darkTheme, lightTheme} = useContext(ThemeContext);
    const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
            <h2 className='ui centered header'>
                Oak Academy
            </h2>
            <p
                onClick={changeAuthStatus}
                style={{ textAlign: 'center'}}
            >
                {isLoggedIn ? 'logged in' : 'logged out'}
            </p>
            <div className='ui three buttons'>
                <button className='ui button'>Overview</button>
                <button className='ui button'>Contact</button>
                <button className='ui button'>Support</button>
            </div>
        </nav>
    )
}

export default Navbar;

// class Navbar extends React.Component {
//     //static contextType = ThemeContext; //alternate way to get context
//     render() {
//         return (
//             //console.log(this.context)
//             <AuthContext.Consumer>{(authContext) => {
//                 return (
//                     <ThemeContext.Consumer>{(context) => {
//                         const { isDarkTheme, darkTheme, lightTheme} = context;
//                         const { isLoggedIn, changeAuthStatus } = authContext;
//                         const theme = isDarkTheme ? darkTheme : lightTheme;
//
//                         return (
//                             <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
//                                 <h2 className='ui centered header'>
//                                     Oak Academy
//                                 </h2>
//                                 <p
//                                     onClick={changeAuthStatus}
//                                     style={{ textAlign: 'center'}}
//                                 >
//                                     {isLoggedIn ? 'logged in' : 'logged out'}
//                                 </p>
//                                 <div className='ui three buttons'>
//                                     <button className='ui button'>Overview</button>
//                                     <button className='ui button'>Contact</button>
//                                     <button className='ui button'>Support</button>
//                                 </div>
//                             </nav>
//                         )
//                     }}
//                     </ThemeContext.Consumer>
//                 )
//             }}
//             </AuthContext.Consumer>
//         );
//     }
// }




