import { Typography } from "../../../components/ui/typography";

type Props = {
  sectionName: string;
  quote: string;
};

export const Header: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex flex-col text-center">
      <Typography type={"h2"} text={props.sectionName} />
      <Typography type={"lg"} text={`“${props.quote}”`} />
    </div>
  );
};
