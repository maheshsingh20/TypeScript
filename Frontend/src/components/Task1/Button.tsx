
type buttonProp = {
  labell: string;
  onClickk: () => void;
  disabledd?: boolean;
}

const Button= ({labell, onClickk, disabledd}:buttonProp) => {
  return (
    <div>
      <button onClick={onClickk} disabled={disabledd}>{labell}</button>
    </div>
  );
}
export default Button;
