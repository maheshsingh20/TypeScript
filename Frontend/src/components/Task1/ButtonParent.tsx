import Button from "./Button";


const ButtonParent = () => {
  const onClickHandler = () => {
    alert("I love You, Baby");
  }

  return (
    <div>
      <Button labell="Button" onClickk={onClickHandler} disabledd={false} />
    </div>
  );
}

export default ButtonParent;
