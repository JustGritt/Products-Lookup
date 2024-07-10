import renderHome from './src/pages/Home.ts';
import renderUpload from './src/pages/Upload.ts';
import renderNotFound from './src/pages/Not-found.ts';
import renderLogin from './src/pages/Login.ts';
import renderRegister from './src/pages/Register.ts';
import renderResetPassword from './src/pages/Reset-Password.ts';
// Components
import renderHeader from './src/components/Header.ts';
import renderFooter from './src/components/Footer.ts';

const routes = {
    '/': renderHome,
    '/upload': renderUpload,
    '/login': renderLogin,
    '/register': renderRegister,
    '/reset-password': renderResetPassword,
};

function router() {
    const path = window.location.pathname;
    const app = document.getElementById('app');

    const render = routes[path] || renderNotFound;

    if (app) {
        app.innerHTML = `
            ${renderHeader()}
                <main>
                    ${render()}
                </main>
            ${renderFooter()}
        `;
    }
}


window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        if (event?.target instanceof HTMLAnchorElement) {
            event.preventDefault();
            const href = event.target.getAttribute('href');
            history.pushState(null, '', href);
            router();
        }
    });

    router();
});