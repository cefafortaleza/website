import {GetServerSideProps, GetServerSidePropsContext} from 'next';
import {ParsedUrlQuery} from 'querystring';

interface WithSessionProps {
  session: {[key: string]: any} | null;
}

export const withSession = <P extends WithSessionProps>(
  getServerSidePropsFunc: GetServerSideProps<P, ParsedUrlQuery>
) => {
  return async (
    context: GetServerSidePropsContext<ParsedUrlQuery>
  ): Promise<P> => {
    const {req} = context;
    const session = req.session.get('session') || null;

    if (!session) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      } as unknown as P;
    }

    return getServerSidePropsFunc({...context, props: {session}});
  };
};
