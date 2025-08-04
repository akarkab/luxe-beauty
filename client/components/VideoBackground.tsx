import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoBackgroundProps {
  videoUrl: string;
  posterUrl?: string;
  className?: string;
  overlay?: boolean;
}

export default function VideoBackground({ 
  videoUrl, 
  posterUrl, 
  className = "",
  overlay = true 
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Auto-play when component mounts
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, user needs to interact first
          setIsPlaying(false);
        });
      }

      const handleLoadedData = () => {
        setIsLoaded(true);
      };

      const handleEnded = () => {
        // Loop the video
        video.currentTime = 0;
        video.play();
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        poster={posterUrl}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback background if video doesn't load */}
      {!isLoaded && posterUrl && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${posterUrl})` }}
        />
      )}

      {/* Overlay gradients for better text readability */}
      {overlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
        </>
      )}

      {/* Video Controls */}
      <div className="absolute bottom-6 right-6 flex gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={togglePlay}
          className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-colors duration-200"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        
        <button
          onClick={toggleMute}
          className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-colors duration-200"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-beige-50">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
