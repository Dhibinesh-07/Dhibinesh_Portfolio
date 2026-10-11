import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useMedia } from '../hooks/useMedia';
import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';

/** Full-screen career screenplay and PDF viewer. */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const small = useMedia('(max-width: 767px)');
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume and Career Screenplay"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 pt-[env(safe-area-inset-top)]">
        <p className="truncate font-display text-2xl tracking-wide text-bone">The Full Story</p>
        <div className="flex items-center gap-2">
          {profile.hasResumePdf ? (
            <a
              href={profile.resumePdf}
              download="Dhibinesh_PD_Resume.pdf"
              className="rounded-md bg-bone px-4 py-2 text-xs font-bold text-ink transition hover:bg-white"
            >
              ⤓ Download PDF
            </a>
          ) : (
            <span className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-mist">
              PDF Coming Soon
            </span>
          )}
          <button
            ref={closeBtn}
            type="button"
            onClick={onClose}
            aria-label="Close resume"
            data-cursor="close"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>
      <motion.div
        className="gutter flex-1 pb-6"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {!profile.hasResumePdf || small ? (
          <div data-lenis-prevent className="h-full overflow-y-auto pr-1">
            <div className="mb-4 rounded-xl border border-white/10 bg-ink-2/80 p-3.5 text-center text-xs text-mist backdrop-blur">
              <span className="font-semibold text-bone">Official Resume PDF in final preparation.</span> Full verified credentials and background are available below.
            </div>
            <ResumeSheet />
          </div>
        ) : (
          <iframe title={`${profile.fullName} resume (PDF)`} src={`${profile.resumePdf}#view=FitH`} className="h-full w-full rounded-xl bg-white" />
        )}
      </motion.div>
    </motion.div>
  );
}
