import { HeaderOnly } from '~/components/Layout';
import routes from '~/config/routes';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Admin from '~/pages/Admin';

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: routes.profile, component: Profile },
    { path: routes.upload, component: Upload, layout: HeaderOnly },
    { path: routes.search, component: Search, layout: null },
    { path: routes.admin, component: Admin, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
