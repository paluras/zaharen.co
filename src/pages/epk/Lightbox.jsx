import { useEffect, useRef } from "react";

// Full-size photo viewer on a native modal <dialog>: Escape, focus trapping
// and the backdrop come from the browser.
export default function Lightbox({ photos, index, text, onChange, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const photo = index === null ? null : photos[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog?.showModal) return;
    if (photo && !dialog.open) {
      dialog.showModal();
      closeButtonRef.current?.focus();
    } else if (!photo && dialog.open) {
      dialog.close();
    }
  }, [photo]);

  const close = () => dialogRef.current?.close();
  const step = (delta) => onChange((index + delta + photos.length) % photos.length);

  return (
    <dialog
      ref={dialogRef}
      className="lb"
      aria-label={text.photoDialog}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget || event.target.classList.contains("lb-in")) close();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") step(-1);
        if (event.key === "ArrowRight") step(1);
      }}
    >
      <div className="lb-in">
        {photo && <img src={photo.large} alt={photo.alt} onClick={close} />}
        <button ref={closeButtonRef} type="button" className="x" aria-label={text.closePhoto} onClick={close}>
          ×
        </button>
        <button type="button" className="pv" aria-label={text.previousPhoto} onClick={() => step(-1)}>
          ‹
        </button>
        <button type="button" className="nx" aria-label={text.nextPhoto} onClick={() => step(1)}>
          ›
        </button>
      </div>
    </dialog>
  );
}
