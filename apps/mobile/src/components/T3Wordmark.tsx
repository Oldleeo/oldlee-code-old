import type { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";
import { withUniwind } from "uniwind";

const ThemedPath = withUniwind(Path);

/** Placeholder monogram. The upstream wordmark is a T3 trademark and is not used here. */
export function T3Wordmark(props: {
  readonly height: number;
  readonly color?: ColorValue;
  readonly colorClassName?: string;
}) {
  return (
    <Svg
      accessibilityLabel="Oldlee Code"
      height={props.height}
      width={props.height}
      viewBox="0 0 64 64"
    >
      <ThemedPath
        d="M32 8a24 24 0 1 0 0 48 24 24 0 0 0 0-48zm0 14a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"
        color={props.color}
        colorClassName={props.colorClassName}
        fill="currentColor"
        fillRule="evenodd"
      />
    </Svg>
  );
}
