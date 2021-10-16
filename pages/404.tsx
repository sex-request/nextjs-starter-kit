import type { NextPage } from 'next';

import Error from 'next/error';

const NotFoundPage: NextPage = () => <Error statusCode={404} />;

export default NotFoundPage;
