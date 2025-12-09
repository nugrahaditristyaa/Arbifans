import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { StoriesBar } from './components/StoriesBar';
import { Feed } from './components/Feed';
import { SuggestionsPanel } from './components/SuggestionsPanel';
import { Discover } from './components/Discover';
import { Chat } from './components/Chat';
import { useState } from 'react';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar />
      <div className="flex">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="flex-1 flex">
          <div className="flex-1 max-w-3xl mx-auto">
            {activePage === 'home' && (
              <>
                <StoriesBar />
                <Feed />
              </>
            )}
            {activePage === 'discover' && <Discover />}
            {activePage === 'messages' && <Chat />}
          </div>
          {activePage !== 'messages' && <SuggestionsPanel />}
        </main>
      </div>
    </div>
  );
}