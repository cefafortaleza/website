import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { IncomingMessage, IncomingHttpHeaders } from 'http';
import { Socket } from 'net';

interface WithSessionProps extends IncomingMessage {
  session: { [key: string]: any } | null;
}

declare module 'http' {
  interface IncomingMessage {
    session: { [key: string]: any } | null;
  }
}

export const withSession = <P extends WithSessionProps>(
  getServerSidePropsFunc: GetServerSideProps<P, ParsedUrlQuery>
) => {
  return async (
    context: GetServerSidePropsContext<ParsedUrlQuery>
  ): Promise<GetServerSidePropsResult<P>> => {
    const { req, res } = context;
    const session = req.session ?? null;

    if (!session) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    const newContext = {
      ...context,
      req: {
        ...(req as any),
        session,
      },
      query: context.query,
      resolvedUrl: context.resolvedUrl,
    };

    const result = await getServerSidePropsFunc(newContext);
    return result;
  };
};
