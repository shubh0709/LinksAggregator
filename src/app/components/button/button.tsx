import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  textStyles?: any;
  contStyles?: any;
  singleLine?: boolean;
  onPress: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onPress}
      className={`${styles.button} ${props?.contStyles}`}
    >
      <span
        className={`${styles.buttonText} ${props?.textStyles} ${
          props?.singleLine && styles.inlinePara
        }`}
      >
        {props.text}
      </span>
    </button>
  );
}
