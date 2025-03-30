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
    <div className="flex gap-[53px]">
      <p className="w-[64px] text-[16px] font-bold">{title}:</p>
      {people?.length ? (
        <p className="text-[16px] font-normal">
          {people.map((el) => el.name).join(", ")}
        </p>
      ) : (
        <p className="text-[16px] font-normal">N/A</p>
      )}
    </div>
    <div className="border-b border-gray-300 w-full pt-[6px] pb-[20px]"></div>
  </div>
);
