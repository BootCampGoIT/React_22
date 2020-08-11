import React, { Fragment } from 'react'
import List from './list/List'
import Header from './header/Header';
import Test from './test/Test';

const App = ({ title }) => {
    return (
        <>
            <Test />
            <Header />
            <div>
                {/* <SideBar /> */}
                <List >
                    <div><span>Hello</span></div>
                </List>
            </div>
        </>
    );
}

export default App;
