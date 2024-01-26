type Props = {
  label: string | JSX.Element;
  onButtonClick?: () => void;
  addClass?: string;
};

function Button({ label, addClass, onButtonClick }: Props) {
  return (
    <button
      className={addClass ? ` btn group mb-4 ${addClass}` : " btn group mb-4"}
      type="button"
      onClick={onButtonClick}
    >
      {label}
    </button>
  );
}

export default Button;
