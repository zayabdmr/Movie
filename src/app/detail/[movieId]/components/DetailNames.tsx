type CrewType = {
  name: string;
  job: string;
  department: string;
};

type DetailNamesProps = {
  title: string;
  people?: CrewType[];
};

export const DetailNames = ({ title, people }: DetailNamesProps) => {
  const names = people?.map((person) => person.name).join(" · ") || "N/A";

  return (
    <div className="pb-5">
      <div className="flex gap-8 pb-1">
        <p className="w-20 font-semibold">{title}:</p>
        <p className="text-sm">{names}</p>
      </div>
      <div className="border-t border-border" />
    </div>
  );
};
