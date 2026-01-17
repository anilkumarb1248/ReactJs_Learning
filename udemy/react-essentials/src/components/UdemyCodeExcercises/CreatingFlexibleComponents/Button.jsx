// import "./FlexibleComponent.css";
// Note: If you import this css the main page is impacting.
// So commenting the import, if you want you can uncomment and see the actual button css styling.

export default function Button({
  mode = "filled",
  children,
  className,
  Icon,
  ...props
}) {
  let cssClasses = `button ${mode}-button`;

  if (Icon) {
    cssClasses += " icon-button";
  }

  if (className) {
    cssClasses += " " + className;
  }

  return (
    <button className={cssClasses} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
