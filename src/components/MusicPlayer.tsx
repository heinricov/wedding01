import { useState, useEffect, useRef } from 'react';
import { Music2, PauseCircle, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MusicPlayerProps {
  isVisible: boolean;
}

export function MusicPlayer({ isVisible }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isVisible && !isPlaying) {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  }, [isVisible]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3"
        loop
      />
      <Button
        variant="outline"
        size="icon"
        className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <PauseCircle className="h-6 w-6" />
        ) : (
          <PlayCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}