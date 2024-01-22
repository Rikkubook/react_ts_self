type Props = {
  label: string;
  onButtonClick?: () => void;
};

function Button({ label, onButtonClick }: Props) {
  return (
    <button className="btn mb-4" type="button" onClick={onButtonClick}>
      {label}
    </button>
  );
}

export default Button;
