export function LinktreeButton({ imgProp, textProp, linkProp, altText }) {
  const trackButtonClick = (buttonName) => {
    if (window.fbq) {
      window.fbq("track", "Lead", {
        button_name: buttonName,
      });
    }
  };

  return (
    <div className="button-container">
      <button role="button" className="linktree-button">
        {" "}
        <a
          className="linktree-link"
          target="_blank"
          href={linkProp}
          onClick={() => trackButtonClick(altText)}
        >
          {" "}
          {imgProp ? (
            <img
              height={30}
              className="linktree-img"
              src={imgProp}
              alt={null || imgProp}
            />
          ) : null}
          {textProp}{" "}
        </a>
      </button>
    </div>
  );
}
