
import { useState } from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useThemeContext } from '@/contexts/ThemeContext';
import { themeOptions, themes } from '@/config/themes';

export function ThemeSelector() {
  const { currentTheme, setTheme } = useThemeContext();
  const [open, setOpen] = useState(false);

  const currentThemeLabel = themes[currentTheme]?.label || 'Super User';

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          <span className="text-sm">{currentThemeLabel}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Select Theme</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {themeOptions.map((option) => {
            const theme = themes[option.value];
            return (
              <button
                key={option.value}
                onClick={() => {
                  setTheme(option.value);
                  setOpen(false);
                }}
                className={`
                  p-3 rounded-lg border-2 transition-all text-left
                  ${currentTheme === option.value 
                    ? 'border-yellow-400 bg-yellow-400/10' 
                    : 'border-gray-600 hover:border-gray-400'
                  }
                `}
                style={{
                  backgroundColor: `${theme.background}20`,
                  borderColor: currentTheme === option.value ? theme.title : undefined
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: theme.background }}
                  />
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: theme.title }}
                  />
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: theme.typeBoxText }}
                  />
                </div>
                <div className="text-sm font-medium">{option.label}</div>
              </button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
