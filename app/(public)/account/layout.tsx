import { redirect } from 'next/navigation';

import { auth } from '_helpers/server';
import { Alert } from '_components';

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    // if logged in redirect to home page
    if (auth.isAuthenticated()) {
        redirect('/');
    }

    return (
        <>
            <Alert />
            <div className="container-app col-md-6 offset-md-3 mt-20 bg-purple-100 p-1 rounded-md ">
                {children}
            </div>
        </>
    );
}