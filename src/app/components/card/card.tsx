import Button from "../button/button";
import styles from "./card.module.css";
import Image from "next/image";

interface CardProps {
  imgOnLeft: boolean;
  imageLogo: any;
  imageText?: any;
  imgBgColor: string;
  workText: string;
  textStyle?: any;
  onPress: () => void;
}

export default function Card(props: CardProps) {
  return (
    <div onClick={props.onPress} className={styles.cardCont}>
      {props.imgOnLeft && (
        <div
          className={`${styles.cardImgCont}`}
          style={{ ["backgroundColor" as any]: `${props.imgBgColor}` }}
        >
          <Image
            src={props.imageLogo}
            className={styles.cardImgLogo}
            alt="project image"
          />

          <Image
            src={props.imageText}
            className={`${styles.cardImgText} ${props.textStyle}`}
            alt="project image"
          />
        </div>
      )}
      <div className={styles.cardContent}>
        <div>
          <p className={styles.projectName}>{"Description"}</p>
          <p className={styles.projectContent}>{props.workText}</p>
        </div>
        <Button
          singleLine={true}
          text={"View"}
          contStyles={styles.viewProjectButton}
          textStyles={styles.viewProjectButtonText}
          onPress={props.onPress}
        />
      </div>
      {!props.imgOnLeft && (
        <div
          className={`${styles.cardImgCont}`}
          style={{ ["backgroundColor" as any]: `${props.imgBgColor}` }}
        >
          <Image
            src={props.imageLogo}
            className={styles.cardImgLogo}
            alt="project image"
          />
          <Image
            src={props.imageText}
            className={`${styles.cardImgText} ${props.textStyle}`}
            alt="project image"
          />
        </div>
      )}
    </div>
  );
}
