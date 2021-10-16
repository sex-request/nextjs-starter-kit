import type { NextPage } from 'next';

import Error from 'next/error';

const InternalServerErrorPage: NextPage = () => <Error statusCode={500} />;

export default InternalServerErrorPage;
