import urlBuilder from '@sanity/image-url';

import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import {CustomPortableText} from '../components/PortableText';

import {client} from '../sanityClient';

interface MusicalGroupPage {
  _type: 'document';
  _id: string;
  image: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
  title: string;
  content: {
    _type: 'block';
    children: {_type: 'span'; text: string}[];
    markDefs: any[];
    style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
  }[];
}

type MusicalGroupPageProps = {
  musicalGroupPageData: MusicalGroupPage;
};

export default function GrupoMusical({
  musicalGroupPageData,
}: MusicalGroupPageProps) {
  return (
    <Layout>
      <div
        className="block h-[400px] bg-cover"
        style={{
          backgroundImage: `url(${urlBuilder(client)
            .image(musicalGroupPageData?.image)
            .url()})`,
        }}
      />
      <div className="container px-4 md:px-0 flex flex-col gap-4 container mx-auto px-8 lg:px-0">
        {/* Page Title */}
        <SectionTitle size="large">{musicalGroupPageData?.title}</SectionTitle>
        <CustomPortableText value={musicalGroupPageData?.content} />
        <div className="flex gap-4">
          {/* Instagram */}
          <div className="flex items-center justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/cefafortaleza/"
            >
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2711 7.53709C10.388 7.53709 7.25584 10.6431 7.25584 14.4939C7.25584 18.3447 10.388 21.4508 14.2711 21.4508C18.1543 21.4508 21.2864 18.3447 21.2864 14.4939C21.2864 10.6431 18.1543 7.53709 14.2711 7.53709ZM14.2711 19.0168C11.7617 19.0168 9.71027 16.9885 9.71027 14.4939C9.71027 11.9994 11.7556 9.97107 14.2711 9.97107C16.7866 9.97107 18.832 11.9994 18.832 14.4939C18.832 16.9885 16.7805 19.0168 14.2711 19.0168ZM23.2097 7.25251C23.2097 8.15466 22.477 8.87517 21.5734 8.87517C20.6637 8.87517 19.9371 8.14861 19.9371 7.25251C19.9371 6.35642 20.6698 5.62986 21.5734 5.62986C22.477 5.62986 23.2097 6.35642 23.2097 7.25251ZM27.856 8.89939C27.7522 6.72576 27.2516 4.80037 25.6458 3.21404C24.0461 1.62771 22.1046 1.13123 19.9127 1.02224C17.6536 0.895093 10.8825 0.895093 8.62348 1.02224C6.43769 1.12517 4.49612 1.62166 2.89036 3.20798C1.2846 4.79431 0.790047 6.7197 0.680147 8.89334C0.55193 11.1336 0.55193 17.8482 0.680147 20.0885C0.783942 22.2621 1.2846 24.1875 2.89036 25.7738C4.49612 27.3601 6.43159 27.8566 8.62348 27.9656C10.8825 28.0927 17.6536 28.0927 19.9127 27.9656C22.1046 27.8627 24.0461 27.3662 25.6458 25.7738C27.2454 24.1875 27.7461 22.2621 27.856 20.0885C27.9842 17.8482 27.9842 11.1396 27.856 8.89939ZM24.9375 22.4922C24.4613 23.6789 23.5394 24.5931 22.3366 25.0715C20.5354 25.7799 16.2615 25.6164 14.2711 25.6164C12.2807 25.6164 8.00072 25.7738 6.20568 25.0715C5.00899 24.5992 4.08705 23.6849 3.60471 22.4922C2.89036 20.706 3.05521 16.4677 3.05521 14.4939C3.05521 12.5201 2.89647 8.27576 3.60471 6.49568C4.08095 5.30896 5.00288 4.3947 6.20568 3.91638C8.00682 3.20798 12.2807 3.37146 14.2711 3.37146C16.2615 3.37146 20.5415 3.21404 22.3366 3.91638C23.5333 4.38865 24.4552 5.30291 24.9375 6.49568C25.6519 8.28181 25.487 12.5201 25.487 14.4939C25.487 16.4677 25.6519 20.7121 24.9375 22.4922Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
          {/* Facebook */}
          <div className="flex items-center justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/CefaFortaleza"
            >
              <svg
                width="28"
                height="31"
                viewBox="0 0 28 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M24.4223 1.9375H2.93067C2.15341 1.9375 1.40798 2.24369 0.858374 2.78872C0.308766 3.33375 0 4.07296 0 4.84375L0 26.1562C0 26.927 0.308766 27.6663 0.858374 28.2113C1.40798 28.7563 2.15341 29.0625 2.93067 29.0625H11.3106V19.8406H7.46406V15.5H11.3106V12.1917C11.3106 8.42873 13.5696 6.35016 17.0296 6.35016C18.6867 6.35016 20.4195 6.6432 20.4195 6.6432V10.3366H18.5102C16.6291 10.3366 16.0424 11.4942 16.0424 12.6815V15.5H20.2418L19.5702 19.8406H16.0424V29.0625H24.4223C25.1995 29.0625 25.945 28.7563 26.4946 28.2113C27.0442 27.6663 27.3529 26.927 27.3529 26.1562V4.84375C27.3529 4.07296 27.0442 3.33375 26.4946 2.78872C25.945 2.24369 25.1995 1.9375 24.4223 1.9375Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="27.3529" height="31" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          {/* Youtube */}
          <div className="flex items-center justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/user/CEFA1941"
            >
              <svg
                width="33"
                height="25"
                viewBox="0 0 33 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.2389 4.51284C31.8611 3.0809 30.7479 1.95316 29.3345 1.57044C26.7727 0.875 16.5 0.875 16.5 0.875C16.5 0.875 6.22739 0.875 3.66549 1.57044C2.25212 1.95322 1.13896 3.0809 0.761153 4.51284C0.074707 7.1083 0.074707 12.5235 0.074707 12.5235C0.074707 12.5235 0.074707 17.9387 0.761153 20.5341C1.13896 21.9661 2.25212 23.0468 3.66549 23.4296C6.22739 24.125 16.5 24.125 16.5 24.125C16.5 24.125 26.7726 24.125 29.3345 23.4296C30.7479 23.0468 31.8611 21.9661 32.2389 20.5341C32.9253 17.9387 32.9253 12.5235 32.9253 12.5235C32.9253 12.5235 32.9253 7.1083 32.2389 4.51284ZM13.1403 17.4401V7.6069L21.7262 12.5236L13.1403 17.4401Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent(`*[_type == "musicalGroup"]`);
  const url = `${process.env.SANITY_URL}query=${query}`;

  const data = await fetch(url).then((res) => res.json());

  const musicalGroupPageData = data.result[0];

  if (!musicalGroupPageData || musicalGroupPageData.length === 0) {
    return {
      props: {
        musicalGroupPageData: {},
      },
    };
  }

  return {
    props: {
      musicalGroupPageData,
    },
  };
};
