export function LinktreeButton({ imgProp, textProp, linkProp, altText }) {
  return (
    <div className="button-container">
      <button className="linktree-button">
        {" "}
        <img
          className="linktree-img"
          src={imgProp}
          alt={undefined || altText}
        />
        <a className="linktree-link" target="_blank" href={linkProp}>
          {" "}
          {textProp}{" "}
        </a>
      </button>
    </div>
  );
}
