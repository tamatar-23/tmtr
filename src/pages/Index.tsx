
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypingArea } from '@/components/TypingArea';
import { ModeSelector } from '@/components/ModeSelector';
import { StatsDisplay } from '@/components/StatsDisplay';
import { Keyboard } from '@/components/Keyboard';
import { useTypingTest } from '@/hooks/useTypingTest';
import { TestSettings } from '@/types/typing';
import { ThemeSelector } from '@/components/ThemeSelector';

// Get saved settings or default
const getSavedSettings = (): TestSettings => {
  const saved = localStorage.getItem('typeflow-settings');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // Fall back to default if parsing fails
    }
  }
  return {
    mode: 'time',
    duration: 30,
    difficulty: 'easy'
  };
};

const Index = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState<TestSettings>(getSavedSettings());

  const {
    text,
    userInput,
    characters,
    currentIndex,
    isActive,
    isFinished,
    timeLeft,
    stats,
    handleInput,
    handleSpaceSkip,
    resetTest,
    getResult
  } = useTypingTest(settings);

  const handleViewResults = () => {
    const result = getResult();
    console.log('Storing result:', result);
    sessionStorage.setItem('lastResult', JSON.stringify(result));
    navigate('/results');
  };

  // Handle test completion
  useEffect(() => {
    if (isFinished) {
      console.log('Test finished, navigating to results');
      setTimeout(() => {
        handleViewResults();
      }, 1000);
    }
  }, [isFinished]);

  const handleRestart = () => {
    resetTest();
  };

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: 'var(--theme-background)' }}>
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <Link to="/" className="text-2xl font-bold" style={{ color: 'var(--theme-title)' }}>
          TypeFlow
        </Link>
        <Link to="/user">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Top Stats and Controls */}
          <div className="flex justify-center items-center gap-8">
            {/* Mode Selector - only show when not active and not finished */}
            {!isActive && !isFinished && (
              <ModeSelector
                settings={settings}
                onSettingsChange={setSettings}
                disabled={isActive}
              />
            )}

            {/* Stats Display - show when active or finished */}
            {(isActive || isFinished) && (
              <StatsDisplay
                stats={stats}
                timeLeft={timeLeft}
                mode={settings.mode}
              />
            )}
          </div>

          {/* Typing Area - better centered */}
          <div className="flex justify-center px-4">
            <div className="w-full max-w-4xl">
              <TypingArea
                text={text}
                characters={characters}
                currentIndex={currentIndex}
                userInput={userInput}
                onInput={handleInput}
                onSpaceSkip={handleSpaceSkip}
                isFinished={isFinished}
              />
            </div>
          </div>

          {/* Keyboard */}
          <div className="flex justify-center">
            <Keyboard />
          </div>

          {/* Action Buttons - only show restart during active typing */}
          {isActive && !isFinished && (
            <div className="flex justify-center">
              <Button onClick={handleRestart} variant="outline" className="bg-transparent border-gray-600 text-gray-400 hover:text-white hover:border-white">
                Restart (Tab)
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-5 w-5" />
        </a>
        <div className="flex items-center gap-4">
          <ThemeSelector />
        </div>
      </footer>
    </div>
  );
};

export default Index;
