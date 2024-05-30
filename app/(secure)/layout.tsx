import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '_helpers/server';
import { Alert, Nav } from '_components';
export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    // if not logged in redirect to login page
    if (!auth.isAuthenticated()) {
        const returnUrl = encodeURIComponent(headers().get('x-invoke-path') || '/');
        redirect(`/account/login?returnUrl=${returnUrl}`);
    }
    return (
        <div className="app-container bg-white border-purple-500">
            <Nav />
            <Alert />
            <div className="pb-20">
                {children}
            </div>
        </div>
    );
}
