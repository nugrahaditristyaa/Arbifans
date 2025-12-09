import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { StoriesBar } from './components/StoriesBar';
import { Feed } from './components/Feed';
import { SuggestionsPanel } from './components/SuggestionsPanel';
import { Discover } from './components/Discover';
import { Chat } from './components/Chat';
import { Bookmarks } from './components/Bookmarks';
import { Earnings } from './components/Earnings';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from './wagmi';
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    duration: 0.4
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="min-h-screen bg-black text-white">
            <TopBar />
            <div className="flex">
              <Sidebar activePage={activePage} setActivePage={setActivePage} />
              <main className="flex-1 flex">
                <div className="flex-1 max-w-3xl mx-auto overflow-hidden">
                  <AnimatePresence mode="wait">
                    {activePage === 'home' && (
                      <motion.div
                        key="home"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        transition={pageTransition}
                      >
                        <StoriesBar />
                        <Feed />
                      </motion.div>
                    )}
                    {activePage === 'discover' && (
                      <motion.div
                        key="discover"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        transition={pageTransition}
                      >
                        <Discover />
                      </motion.div>
                    )}
                    {activePage === 'messages' && (
                      <motion.div
                        key="messages"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        transition={pageTransition}
                      >
                        <Chat />
                      </motion.div>
                    )}
                    {activePage === 'bookmarks' && (
                      <motion.div
                        key="bookmarks"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        transition={pageTransition}
                      >
                        <Bookmarks />
                      </motion.div>
                    )}
                    {activePage === 'earnings' && (
                      <motion.div
                        key="earnings"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        transition={pageTransition}
                      >
                        <Earnings />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {activePage !== 'messages' && activePage !== 'bookmarks' && activePage !== 'earnings' && <SuggestionsPanel />}
              </main>
            </div>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}