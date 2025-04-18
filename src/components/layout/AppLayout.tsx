import { MultiProtocolWalletModal } from '@hyperlane-xyz/widgets';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { APP_NAME, BACKGROUND_COLOR, BACKGROUND_IMAGE } from '../../consts/app';
import { config } from '../../consts/config';
import { useStore } from '../../features/store';
import { SideBarMenu } from '../../features/wallet/SideBarMenu';
import { Footer } from '../nav/Footer';
import { Header } from '../nav/Header';

export function AppLayout({ children }: PropsWithChildren) {
  const { showEnvSelectModal, setShowEnvSelectModal, isSideBarOpen, setIsSideBarOpen } = useStore(
    (s) => ({
      showEnvSelectModal: s.showEnvSelectModal,
      setShowEnvSelectModal: s.setShowEnvSelectModal,
      isSideBarOpen: s.isSideBarOpen,
      setIsSideBarOpen: s.setIsSideBarOpen,
    }),
  );

  return (
    <>
      <Head>
        {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="loadforge-site-verification"
          content="f2e49ff42fe5f4a542cfa7b3f1f6fd7cc33069cd4349a3c936427c1506f1074ae1adb48ccb376ee39e3e78add6433fc236b3fa271016294ef520acc9f665c54e"
        />
        <title>{APP_NAME}</title>
      </Head>
      <div
        style={styles.container}
        id="app-content"
        className="min-w-screen relative flex h-full min-h-screen w-full flex-col justify-between"
      >
        <Header />
        <div className="mx-auto flex max-w-screen-xl grow items-center sm:px-4">
          <main className="my-4 flex w-full flex-1 items-center justify-center">{children}</main>
        </div>
        <Footer />
      </div>

      <MultiProtocolWalletModal
        isOpen={showEnvSelectModal}
        close={() => setShowEnvSelectModal(false)}
        protocols={config.walletProtocols}
      />
      <SideBarMenu
        onClose={() => setIsSideBarOpen(false)}
        isOpen={isSideBarOpen}
        onClickConnectWallet={() => setShowEnvSelectModal(true)}
      />
    </>
  );
}

const styles = {
  container: {
    backgroundColor: BACKGROUND_COLOR,
    backgroundImage: BACKGROUND_IMAGE,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
};
