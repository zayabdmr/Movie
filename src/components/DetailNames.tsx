type CrewType = {
  name: string;
  job: string;
  department: string;
};

export const DetailNames = ({
  title,
  people,
}: {
  title: string;
  people?: CrewType[];
}) => (
  <div>
    <div className="flex gap-[53px] pb-1">
      <p className="w-[64px] text-4 font-bold">{title}:</p>
      {people?.length ? (
        <p className="text-4 font-normal">
          {people.map((el) => el.name).join(" · ")}
        </p>
      ) : (
        <p>N/A</p>
      )}
    </div>
    <div className="border-t border-[#E4E4E7] w-full pb-5"></div>
  </div>
);
