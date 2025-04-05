import { useEffect, useRef } from 'react';

const AudioPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const playAudio = () => {
            audio.play().catch(error => {
                console.error('Autoodtwarzanie zostało zablokowane:', error);
            });
        };

        // Dodaj nasłuchiwanie na pierwsze kliknięcie użytkownika
        document.addEventListener('click', playAudio, { once: true });

        return () => {
            document.removeEventListener('click', playAudio);
        };
    }, []);

    return (
        <audio ref={audioRef} src="/sound.mp3" />
    );
};

export default AudioPlayer;