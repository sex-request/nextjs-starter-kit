import type { NextPageContext } from 'next';

export default function Error({ statusCode }: { statusCode: number }): JSX.Element {
  return (
    <p>
      {
        statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'
      }
    </p>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  if (res) {
    const { statusCode } = res;
    return { statusCode };
  }

  const statusCode: number = err?.statusCode || 404;
  return { statusCode };
};
