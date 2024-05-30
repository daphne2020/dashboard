import 'bootstrap/dist/css/bootstrap.min.css';
import 'globals.css';

export const metadata = {
    title: 'Next.js 13 - Tailwind'
}

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className='bg-violet-50'>
                {children}
            </body>
        </html>
    );
}
