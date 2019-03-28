import React from 'react';
import AppHeader from '../../UI/AppHeader';

const DefaultLayout = (props) => {
    const {children} = props;
    return (
        <main id="default-layout">
            <AppHeader/>
            <section style={{marginTop: '35px'}}>
                {children}
            </section>
        </main>
    );
};

export default DefaultLayout;
