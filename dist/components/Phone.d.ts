interface Props {
    height?: number;
    width?: number;
    caseColor?: string;
    detailsColor?: string;
    cameraColor?: string;
    shadowColor?: string;
    volumeButtonsColor?: string;
    text?: string;
    content?: () => JSX.Element;
}
export default function Phone(props: Props): JSX.Element;
export {};
