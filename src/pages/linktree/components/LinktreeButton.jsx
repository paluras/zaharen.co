export function LinktreeButton({ imgProp, textProp, linkProp, altText }) {
  return (
    <div className="button-container">
      <button role="button" className="linktree-button">
        {" "}
        <a className="linktree-link" target="_blank" href={linkProp}>
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
