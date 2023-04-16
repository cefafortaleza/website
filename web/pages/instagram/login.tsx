import {GetServerSideProps, GetServerSidePropsContext} from 'next';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {ParsedUrlQuery} from 'querystring';
import Button from '../../components/Button';

type Props = {
  instagramClientId: string;
  instagramRedirectUri: string;
};

const LoginPage = ({instagramClientId, instagramRedirectUri}: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);

    try {
      // Redirect the user to the Instagram login page
      const redirectUri = encodeURIComponent(instagramRedirectUri);
      const url = `https://api.instagram.com/oauth/authorize?client_id=${instagramClientId}&redirect_uri=${redirectUri}&response_type=code`;
      window.location.href = url;
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (router.query.error) {
    return <p>Unable to log in with Instagram. Please try again.</p>;
  }

  return (
    <div className="container mx-auto px-4 lg:px-0 h-screen w-screen flex items-center align-center justify-center">
      <Button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Log in with Instagram'}
      </Button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  Props,
  ParsedUrlQuery
> = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
  return {
    props: {
      instagramClientId: process.env.INSTAGRAM_CLIENT_ID || '',
      instagramRedirectUri: process.env.INSTAGRAM_REDIRECT_URI || '',
    },
  };
};

export default LoginPage;
