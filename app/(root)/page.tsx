export default function Home() {
    return (
        <div className="flex overflow-hidden flex-col items-center bg-white">
            {/* Header section */}
            <div className="flex flex-col items-center pt-3.5 pr-1.5 pb-11 pl-5 w-full max-w-[1166px] rounded-[55px] max-md:max-w-full">

                {/* Meals Section */}
                <div className="self-start mt-14 ml-28 text-5xl font-bold text-slate-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                    Today&#39;s Record
                </div>

                {/* Date and Type Display */}
                <div className="max-w-full w-[866px]">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow mt-4 text-3xl tracking-tight leading-10 text-slate-950 max-md:mt-10 max-md:max-w-full">
                                <div className="max-md:max-w-full">
                                    January 6, 2025
                                    <br />
                                    Monday
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/1e9b40f415c94e8a9826dd2a51a220c3/459a60948dc1816661544d6986c4cd3c34125896068dfe55c50e44eb41cdca5e?apiKey=1e9b40f415c94e8a9826dd2a51a220c3&"
                                    alt=""
                                    className="object-contain mt-3.5 rounded-full aspect-square w-[50px]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-base font-bold tracking-tight text-right text-slate-950 max-md:mt-10">
                                <div className="z-10 px-5 pt-3 pb-8 max-w-full bg-white rounded-[50px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] w-[170px]">
                                    Animal Products
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/1e9b40f415c94e8a9826dd2a51a220c3/c1b51cbcc5fc076a154f4a48eecc6d24f3db67e7e232a1585b002bd2f270aee2?apiKey=1e9b40f415c94e8a9826dd2a51a220c3&"
                                    alt=""
                                    className="object-contain self-end -mt-10 max-w-full aspect-[0.97] w-[143px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Entry Button */}
                <button className="flex flex-col justify-center items-center px-20 py-2.5 mt-4 max-w-full text-lg tracking-tight text-center bg-white rounded-[50px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] text-slate-950 w-[942px] max-md:px-5">
                    <div className="flex flex-col ml-3.5 max-w-full w-[124px]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/1e9b40f415c94e8a9826dd2a51a220c3/88233e8071f32d593149e8b176e0b0d4ddad71fb977456aafcc6bf0a6c1b2511?apiKey=1e9b40f415c94e8a9826dd2a51a220c3&"
                            alt=""
                            className="object-contain self-center w-8 aspect-square"
                        />
                        <div className="mt-1.5">Add Entry</div>
                    </div>
                </button>

                {/* Meal Entries */}
                {/*{mealEntries.map((entry, index) => (*/}
                {/*    <MealEntry key={index} entry={entry} />*/}
                {/*))}*/}

                {/* Rest of the components... */}
                {/* Health Goals Section */}
                <div className="flex flex-col items-center pb-24 mt-14 w-full max-w-[1165px] rounded-[55px] max-md:mt-10 max-md:max-w-full">
                    {/* Health Goals content... */}
                </div>

                {/* Dietitian Section */}
                <div className="mt-12 w-full max-w-[1165px] max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        {/* Main Dietitian Profile */}
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            {/* Main dietitian content... */}
                        </div>

                        {/* Recommended Dietitians */}
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow pb-10 mt-3 rounded-[55px] max-md:mt-10 max-md:max-w-full">
                                <div className="px-16 py-16 text-3xl font-semibold tracking-tight leading-10 text-center text-white bg-fuchsia-500 bg-opacity-80 rounded-[50px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
                                    More Recommended Dietitians
                                </div>
                                <div className="flex flex-col px-8 mt-5 w-full max-md:px-5 max-md:max-w-full">
                                    {/*{recommendedDietitians.map((dietitian, index) => (*/}
                                    {/*    <DietitianCard key={index} dietitian={dietitian} />*/}
                                    {/*))}*/}
                                    Blah blah
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}