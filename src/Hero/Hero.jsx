import React, { useRef, useEffect } from "react";
import "./Hero.scss";

export default function Hero({
  title = "Experience Unmatched Luxury",
  subtitle = "Discover The Epitome Of Automotive Excellence",
  button1Text = "Explore Vehicle",
  button2Text = "Contact Us",
  button3Text = null,
  onButton1Click = () => {},
  onButton2Click = () => {},
  onButton3Click = () => {},
  backgroundImage = null,
}) {
  const heroStyles = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
      }
    : {};

  const audioCtxRef = useRef(null);
  const ytPlayerRef = useRef(null);
  const ytReadyRef = useRef(false);

  const isMobileOrTouch = () => {
    if (typeof window === "undefined") return false;
    return (
      ('ontouchstart' in window) ||
      window.matchMedia && window.matchMedia('(max-width: 768px)').matches
    );
  };

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      try {
        ytPlayerRef.current = new window.YT.Player("yt-player", {
          height: "0",
          width: "0",
          videoId: "NWR4pS_bu90",
          playerVars: {
            controls: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            disablekb: 1,
          },
          events: {
            onReady: () => {
              ytReadyRef.current = true;
            },
          },
        });
      } catch (e) {
      }
    };

    return () => {
      try {
        if (ytPlayerRef.current && ytPlayerRef.current.destroy) ytPlayerRef.current.destroy();
      } catch (e) {}
    };
  }, []);

  const playCarStart = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, now);
      masterGain.gain.exponentialRampToValueAtTime(0.07, now + 0.8);
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + 4.2);

      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.setValueAtTime(800, now);
      lp.frequency.exponentialRampToValueAtTime(1600, now + 1.6);

      const oscDeep = ctx.createOscillator();
      oscDeep.type = "sawtooth";
      oscDeep.frequency.setValueAtTime(42, now);
      oscDeep.frequency.exponentialRampToValueAtTime(200, now + 1.6);

      const oscMid = ctx.createOscillator();
      oscMid.type = "triangle";
      oscMid.frequency.setValueAtTime(110, now);
      oscMid.frequency.exponentialRampToValueAtTime(360, now + 1.6);
      oscMid.detune.setValueAtTime(-12);

      const lfo = ctx.createOscillator();
      lfo.type = "sine";
      lfo.frequency.setValueAtTime(3.2, now);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(0.035, now);

      oscDeep.connect(lp);
      oscMid.connect(lp);
      lp.connect(masterGain).connect(ctx.destination);

      lfo.connect(lfoGain);
      lfoGain.connect(masterGain.gain);

      oscDeep.start(now);
      oscMid.start(now);
      lfo.start(now);
      const stopAt = now + 3.8;
      oscDeep.stop(stopAt);
      oscMid.stop(stopAt);
      lfo.stop(stopAt);
    } catch (e) {
      console.warn("Audio playback failed", e);
    }
  };

  const playYTClip = (durationMs = 3800, volume = 40, startSec = 0) => {
    try {
      const p = ytPlayerRef.current;
      if (!p || !ytReadyRef.current) return false;
      p.seekTo(startSec);
      p.setVolume(volume);
      p.playVideo();
      setTimeout(() => {
        try { p.pauseVideo(); } catch (e) {}
      }, durationMs);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleClickWithSound = (origHandler) => (e) => {
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume().catch(() => {});
    }
    if (isMobileOrTouch()) {
      playCarStart();
    } else {
      const played = playYTClip(3800, 36, 0);
      if (!played) playCarStart();
    }

    setTimeout(() => {
      origHandler && origHandler(e);
    }, 900);
  };

  return (
    <section className="banner-hero" style={heroStyles}>
      <article className="article-hero">
        <h1>{title}</h1>
        <p className="discoverHero">{subtitle}</p>
      </article>
      <div className="hero-cta">
        {button1Text && (
          <button
            className="btn-1"
            onClick={handleClickWithSound(onButton1Click)}
            aria-label={button1Text}
          >
            {button1Text}
          </button>
        )}
        {button2Text && (
          <button
            className="btn-2"
            onClick={handleClickWithSound(onButton2Click)}
            aria-label={button2Text}
          >
            {button2Text}
          </button>
        )}
      </div>
        <div id="yt-player" style={{ width: 0, height: 0, overflow: "hidden", position: "absolute", left: -9999 }} />
    </section>
  );
}
