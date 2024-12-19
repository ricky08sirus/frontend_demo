const tabNames = ["Invite", "Tasks"];

export default function EarnHeader({
    currentTab,
    setCurrentTab,
}: {
    currentTab: number;
    setCurrentTab: (index: number) => void;
}) {
    return (
        <div className="h-12 rounded-xl w-full flex flex-row text-center bg-[#1D1D1D] p-1.5 transition-all duration-1000 ease-linear">
            {tabNames.map((tab: string, index: number) => (
                <div
                    key={index}
                    className={`h-full flex justify-center items-center flex-1 cursor-pointer text-base font-bold py-2 rounded-lg tracking-tight 
          ${currentTab === index
                            ? "bg-[#37f5ec15] text-[#37F5EB] scale-100"
                            : "text-secondaryText scale-100"
                        } 
          transition-all duration-1000 ease-linear`}
                    onClick={() => setCurrentTab(index)}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
}
