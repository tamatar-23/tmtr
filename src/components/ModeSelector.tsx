
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { TestSettings } from '@/types/typing';

interface ModeSelectorProps {
  settings: TestSettings;
  onSettingsChange: (settings: TestSettings) => void;
  disabled?: boolean;
}

export function ModeSelector({ settings, onSettingsChange, disabled }: ModeSelectorProps) {
  const timeOptions = [15, 30, 60];
  const wordOptions = [10, 50, 100];

  return (
    <div className="flex items-center gap-4 bg-muted/30 rounded-lg p-2">
      {/* Mode Toggle */}
      <div className="flex items-center gap-1">
        <Button
          variant={settings.mode === 'time' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onSettingsChange({ ...settings, mode: 'time', duration: 30 })}
          disabled={disabled}
          className="px-4 h-8"
        >
          Time
        </Button>
        <Button
          variant={settings.mode === 'words' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onSettingsChange({ ...settings, mode: 'words', duration: 50 })}
          disabled={disabled}
          className="px-4 h-8"
        >
          Words
        </Button>
      </div>

      {/* Separator */}
      <Separator orientation="vertical" className="h-8" />

      {/* Duration Options */}
      <div className="flex items-center gap-1">
        {settings.mode === 'time' ? (
          timeOptions.map((time) => (
            <Button
              key={time}
              variant={settings.duration === time ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onSettingsChange({ ...settings, duration: time })}
              disabled={disabled}
              className="px-4 h-8"
            >
              {time}
            </Button>
          ))
        ) : (
          wordOptions.map((words) => (
            <Button
              key={words}
              variant={settings.duration === words ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onSettingsChange({ ...settings, duration: words })}
              disabled={disabled}
              className="px-4 h-8"
            >
              {words}
            </Button>
          ))
        )}
      </div>
    </div>
  );
}
