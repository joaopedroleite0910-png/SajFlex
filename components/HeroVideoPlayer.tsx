"use client";

import { useEffect, useRef, useState } from "react";

const VIDEOS = [
  "/videos/reconflex.mp4",
  "/videos/tcil.mp4",
  "/videos/edn-moveis.mp4",
  "/videos/design1.mp4",
  "/videos/design2.mp4",
];

export default function HeroVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Quando o vídeo atual terminar, passa para o próximo
  function handleEnded() {
    setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
  }

  // Troca o src e dá play quando muda o índice
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.src = VIDEOS[currentIndex];
    video.load();
    video.play().catch(() => {});
  }, [currentIndex]);

  return (
    <>
      {/* Overlay escuro suave para garantir legibilidade do texto */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Vídeo de fundo */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        src={VIDEOS[0]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        onCanPlay={() => setLoaded(true)}
      />

      {/* Fallback: gradiente bege enquanto vídeo carrega */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-cream to-sand" />
      )}
    </>
  );
}
